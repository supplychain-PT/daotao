/* ==============================================================
   UNG DUNG DAO TAO - LOGIC HOC VIEN
   Van Hanh Kho Tai Cua Hang - Phuc Tea / The Hoa
   Ban sua loi 09/2026

   File nay KHONG chua trang Admin. Trang Admin nam o admin.html.
   Sua noi dung bai hoc: mo noi-dung-khoa-hoc.js
   ============================================================== */

// ─── CẤU HÌNH ─────────────────────────────────────────────────
const CAU_HINH = {
  TEN_KHOA_HOC: 'Vận Hành Kho Tại Cửa Hàng',

  // URL Google Apps Script. Để trống ('') thì app vẫn chạy, chỉ không ghi lên Sheets.
  WEBHOOK_URL: 'https://script.google.com/macros/s/AKfycbx4elDlWWlxz8QTgaHKjPhwIpihvYM_FLk2S6Wx5rTjqyJrm-Bue9qKfP8d8qSKsBSI/exec',

  // Mã ứng dụng gửi kèm mỗi lần ghi. Phải trùng với MA_UNG_DUNG trong apps-script.gs.
  // LƯU Ý: mã này nằm trong mã nguồn công khai nên KHÔNG phải mật khẩu thật.
  // Nó chỉ để chặn bot quét ngẫu nhiên. Đọc README mục 4 trước khi đổi.
  MA_UNG_DUNG: 'PT-SC-2026',

  // Số giây phải ở lại trang bài học trước khi mở được bài kiểm tra (lần đọc đầu tiên).
  // Đặt 0 để tắt hẳn cổng chặn này.
  GIAY_DOC_TOI_THIEU: 60,

  DIEM_DAT: 70,          // % tối thiểu để qua bài
  TRON_CAU_HOI: true,    // đảo thứ tự câu hỏi mỗi lần làm
  TRON_DAP_AN: true      // đảo thứ tự A/B/C/D mỗi lần làm
};

const KHOA_LUU_TIEN_DO = 'phuctea_tiendo_v2';
const KHOA_DS_HOC_VIEN = 'phuctea_learners';

// ─── CẤU HÌNH THƯƠNG HIỆU ─────────────────────────────────────
const BRANDS = {
  phuctea: {
    name: 'Phúc Tea',
    logo: 'logo-phuc-tea.png',
    prefix: 'PHUCTEA',
    maCN: 'PT',
    headerTitle: 'Vận Hành Kho Tại Cửa Hàng - Phúc Tea 2026',
    regPlaceholder: 'PHUCTEA163 - TÂN NINH TÂY NINH',
    regHint: 'Tên cửa hàng phải bắt đầu bằng PHUCTEA, kèm số và tên. Ví dụ: PHUCTEA163 - TÂN NINH TÂY NINH',
    headerBg: 'linear-gradient(135deg,#0f5c2b,#1a8a42)',
    titleColor: '#0f5c2b',
    contact: 'Trần Thị Hạnh Nhân - Chuỗi Cung Ứng Phúc Tea<br>Điện thoại: <strong>0344 858 727</strong> | Email: <strong>hanhnhan@phuctea.com.vn</strong>'
  },
  thehoa: {
    name: 'The Hoa',
    logo: 'logo-the-hoa.png',
    prefix: 'THEHOA',
    maCN: 'TH',
    headerTitle: 'Vận Hành Kho Tại Cửa Hàng - The Hoa',
    regPlaceholder: 'THEHOA01 - TÊN CỬA HÀNG',
    regHint: 'Tên cửa hàng phải bắt đầu bằng THEHOA, kèm số và tên. Ví dụ: THEHOA01 - TÂN PHÚ',
    headerBg: 'linear-gradient(135deg,#9c3d47,#c4606a)',
    titleColor: '#9c3d47',
    contact: 'Bộ phận Chuỗi Cung Ứng - The Hoa<br>Email: <strong>hanhnhan@phuctea.com.vn</strong>'
  }
};

// ─── TRẠNG THÁI ───────────────────────────────────────────────
const S = {
  brand: '',
  view: 'register',
  lesson: 0,
  qIndex: 0,
  qAnswers: [],
  thuTuCau: [],        // thứ tự câu hỏi đang hiển thị (index gốc)
  thuTuDapAn: [],      // thứ tự đáp án từng câu (index gốc)
  done: [],
  scores: {},
  daDocXong: {},       // bài nào đã qua cổng thời gian đọc
  userName: '',
  userStore: '',
  courseStart: null,
  completedAt: null,
  fqIndex: 0,
  fqAnswers: [],
  fqThuTuCau: [],
  fqThuTuDapAn: [],
  finalDone: false,
  finalScore: null,
  daGhiDangKy: false,
  daGhiHoanThanh: false
};

let dongHoDoc = null;   // bộ đếm ngược thời gian đọc bài

// ─── TIỆN ÍCH ─────────────────────────────────────────────────

/** Chống chèn thẻ HTML từ dữ liệu người dùng nhập. */
function chongHTML(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

/** Trộn mảng (Fisher-Yates). Trả về mảng mới, không đụng mảng gốc. */
function tron(mang) {
  const a = mang.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Mảng [0,1,2,...,n-1] */
function daySo(n) { return Array.from({ length: n }, (_, i) => i); }

function getLessons()   { return S.brand === 'thehoa' ? LESSONS_TH : LESSONS; }
function getFinalQuiz() { return S.brand === 'thehoa' ? FINAL_QUIZ_TH : FINAL_QUIZ; }
function thuongHieu()   { return BRANDS[S.brand] || BRANDS.phuctea; }

/** Số câu đúng tối thiểu để qua, theo ngưỡng DIEM_DAT. */
function soCauCanDung(tongCau) {
  return Math.ceil(tongCau * CAU_HINH.DIEM_DAT / 100);
}

function applyBrandTheme(brand) {
  const b = BRANDS[brand];
  document.getElementById('headerLogo').src = b.logo;
  document.getElementById('headerTitle').textContent = b.headerTitle;
  document.title = b.headerTitle;
  document.body.classList.toggle('brand-thehoa', brand === 'thehoa');
}

// ─── LƯU / KHÔI PHỤC TIẾN ĐỘ ──────────────────────────────────
// Sửa lỗi: trước đây tiến độ chỉ nằm trong RAM, refresh là mất sạch.

function luuTienDo() {
  if (!S.userName || !S.brand) return;
  try {
    localStorage.setItem(KHOA_LUU_TIEN_DO, JSON.stringify({
      v: 2,
      brand: S.brand, lesson: S.lesson, done: S.done, scores: S.scores,
      daDocXong: S.daDocXong, userName: S.userName, userStore: S.userStore,
      courseStart: S.courseStart, completedAt: S.completedAt,
      finalDone: S.finalDone, finalScore: S.finalScore,
      daGhiDangKy: S.daGhiDangKy, daGhiHoanThanh: S.daGhiHoanThanh,
      luucLuc: new Date().toISOString()
    }));
  } catch (e) { /* trình duyệt chặn localStorage - bỏ qua, app vẫn chạy */ }
}

function xoaTienDo() {
  try { localStorage.removeItem(KHOA_LUU_TIEN_DO); } catch (e) {}
}

function docTienDoDaLuu() {
  try {
    const raw = localStorage.getItem(KHOA_LUU_TIEN_DO);
    if (!raw) return null;
    const d = JSON.parse(raw);
    if (!d || d.v !== 2 || !d.userName || !d.brand || !BRANDS[d.brand]) return null;
    return d;
  } catch (e) { return null; }
}

function apDungTienDo(d) {
  S.brand = d.brand;
  S.userName = d.userName;
  S.userStore = d.userStore;
  S.done = Array.isArray(d.done) ? d.done : [];
  S.scores = d.scores || {};
  S.daDocXong = d.daDocXong || {};
  S.finalDone = !!d.finalDone;
  S.finalScore = d.finalScore || null;
  S.daGhiDangKy = !!d.daGhiDangKy;
  S.daGhiHoanThanh = !!d.daGhiHoanThanh;
  S.courseStart = d.courseStart ? new Date(d.courseStart) : new Date();
  S.completedAt = d.completedAt ? new Date(d.completedAt) : null;
  applyBrandTheme(S.brand);
}

/** Màn hình hỏi có muốn học tiếp không. */
function manHinhHocTiep(d) {
  const b = BRANDS[d.brand];
  const soBai = (d.brand === 'thehoa' ? LESSONS_TH : LESSONS).length;
  const xong = (d.done || []).length;
  document.getElementById('sidebar').innerHTML = '';
  document.getElementById('mainContent').innerHTML = `
  <div class="welcome" style="max-width:520px">
    <img src="${b.logo}" class="welcome-logo-big" alt="" onerror="this.style.display='none'">
    <h2>Chào mừng trở lại</h2>
    <p style="margin-bottom:6px">Bạn có một khoá học đang dở:</p>
    <div class="info-box" style="text-align:center">
      <strong style="font-size:16px;color:${b.titleColor}">${chongHTML(d.userName)}</strong><br>
      <span style="font-size:13px">${chongHTML(d.userStore)}</span><br>
      <span style="font-size:13px;color:#6b7280">Đã hoàn thành <strong>${xong}/${soBai}</strong> bài
      ${d.finalDone ? ' và bài Kiểm Tra Tổng Kết' : ''}</span>
    </div>
    <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:8px">
      <button class="btn btn-primary" onclick="hocTiep()">Học tiếp</button>
      <button class="btn btn-secondary" onclick="batDauLai()">Bắt đầu lại từ đầu</button>
    </div>
  </div>`;
}

function hocTiep() {
  const d = docTienDoDaLuu();
  if (!d) { showBrandSelect(); return; }
  apDungTienDo(d);
  showWelcome();
}

function batDauLai() {
  if (!confirm('Xoá tiến độ đang có và học lại từ Bài 1?')) return;
  xoaTienDo();
  showBrandSelect();
}

// ─── GHI NHẬN HỌC VIÊN ────────────────────────────────────────
function trackEvent(event, extra = {}) {
  const brandName = thuongHieu().name;
  const payload = {
    token: CAU_HINH.MA_UNG_DUNG,
    event,
    time: new Date().toLocaleString('vi-VN'),
    name: S.userName,
    store: S.userStore,
    brand: brandName,
    ...extra
  };

  // 1. Lưu vào máy (để admin trên chính máy này xem được kể cả khi mất mạng)
  try {
    const all = JSON.parse(localStorage.getItem(KHOA_DS_HOC_VIEN) || '[]');
    if (event === 'register') {
      all.push({ ...payload, status: 'Đang học', score: '', duration: '', completedAt: '' });
    } else if (event === 'complete') {
      const idx = all.findIndex(r => r.name === S.userName && r.store === S.userStore);
      const ban = {
        status: 'Đã hoàn thành ✓', brand: brandName,
        score: extra.score, diemTongKet: extra.diemTongKet,
        maChungNhan: extra.maChungNhan,
        duration: extra.duration, completedAt: payload.time
      };
      if (idx >= 0) Object.assign(all[idx], ban);
      else all.push({ ...payload, ...ban });
    }
    localStorage.setItem(KHOA_DS_HOC_VIEN, JSON.stringify(all));
  } catch (e) {}

  // 2. Gửi lên Google Sheets
  if (CAU_HINH.WEBHOOK_URL) {
    fetch(CAU_HINH.WEBHOOK_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(payload)
    }).catch(() => {});
  }
}

// ─── THANH BÊN ────────────────────────────────────────────────
function renderSidebar() {
  const el = document.getElementById('sidebar');
  const baiHoc = getLessons();
  const tongBai = baiHoc.length;

  const mucBai = baiHoc.map((l, i) => {
    const isDone   = S.done.includes(i);
    const isActive = S.lesson === i && ['lesson', 'quiz', 'result'].includes(S.view);
    const isLocked = i > 0 && !S.done.includes(i - 1);
    let cls = 'lesson-item';
    if (isActive) cls += ' active';
    if (isDone && !isActive) cls += ' done';
    if (isLocked) cls += ' locked';
    const status = isDone ? '✓ Hoàn thành' : (isLocked ? '🔒 Chưa mở' : 'Chưa học');
    return `<button type="button" class="${cls}" ${isLocked ? 'disabled' : ''} onclick="navTo(${i})">
      <span class="li-icon">${isDone && !isActive ? '✓' : i + 1}</span>
      <span class="li-info">
        <span class="li-name">${l.icon} ${chongHTML(l.title)}</span>
        <span class="li-status">${status}</span>
      </span>
    </button>`;
  }).join('');

  const xongHetBai = S.done.length === tongBai;
  const activeFQ = S.view === 'finalquiz' || S.view === 'finalresult';
  let clsFQ = 'lesson-item';
  if (activeFQ) clsFQ += ' active';
  if (S.finalDone && !activeFQ) clsFQ += ' done';
  if (!xongHetBai) clsFQ += ' locked';
  const mucTongKet = `<button type="button" class="${clsFQ}" ${xongHetBai ? '' : 'disabled'} onclick="showFinalQuiz()">
      <span class="li-icon" style="font-size:12px">${S.finalDone ? '✓' : '🏆'}</span>
      <span class="li-info">
        <span class="li-name">🏆 Kiểm Tra Tổng Kết</span>
        <span class="li-status">${S.finalDone ? '✓ Hoàn thành' : (xongHetBai ? 'Sẵn sàng' : `🔒 Hoàn thành ${tongBai} bài`)}</span>
      </span>
    </button>`;

  const mucCert = S.finalDone ? `
    <button type="button" class="lesson-item ${S.view === 'cert' ? 'active' : 'done'}" onclick="makeCert()"
      style="border-top:1px solid #e2f0e8;margin-top:4px;padding-top:14px">
      <span class="li-icon" style="font-size:14px;background:#fff3cd;color:#856404">🎓</span>
      <span class="li-info">
        <span class="li-name">🎓 Giấy Chứng Nhận</span>
        <span class="li-status" style="color:#856404">${S.view === 'cert' ? 'Đang xem' : 'Xem / Tải về'}</span>
      </span>
    </button>` : '';

  el.innerHTML = '<div class="sidebar-title">Nội dung khóa học</div>' + mucBai + mucTongKet + mucCert;

  // Thanh tiến độ: tính cả bài Kiểm Tra Tổng Kết, không chỉ 5 bài lẻ
  const tongMoc = tongBai + 1;
  const daXong  = S.done.length + (S.finalDone ? 1 : 0);
  document.getElementById('progressText').textContent = `${daXong}/${tongMoc} phần`;
  document.getElementById('progressFill').style.width = (daXong / tongMoc * 100) + '%';
}

function navTo(i) {
  if (i > 0 && !S.done.includes(i - 1)) return;
  dongSidebar();
  showLesson(i);
}

// ─── MENU TRÊN ĐIỆN THOẠI ─────────────────────────────────────
function moDongSidebar() {
  const sb = document.getElementById('sidebar');
  const lp = document.getElementById('lopPhu');
  const dangMo = sb.classList.toggle('mo');
  lp.classList.toggle('hien', dangMo);
  document.getElementById('nutMenu').setAttribute('aria-expanded', dangMo ? 'true' : 'false');
}
function dongSidebar() {
  document.getElementById('sidebar').classList.remove('mo');
  document.getElementById('lopPhu').classList.remove('hien');
  document.getElementById('nutMenu').setAttribute('aria-expanded', 'false');
}

// ─── MÀN HÌNH CHÀO ────────────────────────────────────────────
function showWelcome() {
  S.view = 'welcome';
  huyDongHoDoc();
  renderSidebar();
  const b = thuongHieu();
  const baiHoc = getLessons();
  const tongCau = baiHoc.reduce((t, l) => t + l.questions.length, 0);
  const cauMoiBai = [...new Set(baiHoc.map(l => l.questions.length))].sort((a, b2) => a - b2);
  const moTaCau = cauMoiBai.length === 1
    ? `<strong>${cauMoiBai[0]} câu hỏi</strong>`
    : `<strong>${cauMoiBai.join(' hoặc ')} câu hỏi</strong> tuỳ bài`;

  document.getElementById('mainContent').innerHTML = `
  <div class="welcome">
    <img src="${b.logo}" class="welcome-logo-big" alt="" onerror="this.style.display='none'">
    <h2>Chào Mừng Đến Khóa Học</h2>
    <h3>${CAU_HINH.TEN_KHOA_HOC}</h3>
    <p>Dành riêng cho <strong>Đối Tác Nhượng Quyền</strong> và <strong>Quản Lý Cửa Hàng</strong>
      <strong>${b.name}</strong>.<br>Hoàn thành ${baiHoc.length} bài học và bài kiểm tra tổng kết để nhận
      <strong>Giấy Chứng Nhận</strong>.</p>
    <div class="welcome-stats">
      <div class="stat"><div class="stat-num">${baiHoc.length}</div><div class="stat-label">Bài học</div></div>
      <div class="stat"><div class="stat-num">${tongCau}</div><div class="stat-label">Câu hỏi theo bài</div></div>
      <div class="stat"><div class="stat-num">${getFinalQuiz().length}</div><div class="stat-label">Câu tổng kết</div></div>
      <div class="stat"><div class="stat-num">${CAU_HINH.DIEM_DAT}%</div><div class="stat-label">Điểm đạt</div></div>
    </div>
    <div class="info-box">
      <strong>📌 Quy tắc:</strong><br>
      • Mỗi bài có ${moTaCau} - cần đúng từ <strong>${CAU_HINH.DIEM_DAT}%</strong> trở lên để qua<br>
      • Chưa qua bài hiện tại thì <strong>không mở được bài tiếp theo</strong><br>
      • Hoàn thành ${baiHoc.length}/${baiHoc.length} bài sẽ mở <strong>Bài Kiểm Tra Tổng Kết (${getFinalQuiz().length} câu)</strong><br>
      • Đạt tổng kết từ ${CAU_HINH.DIEM_DAT}% trở lên thì nhận <strong>Giấy Chứng Nhận</strong><br>
      • Câu hỏi và đáp án được <strong>đảo thứ tự mỗi lần làm</strong>
    </div>
    <div class="info-box" style="background:#eff6ff;border-color:#93c5fd">
      💾 Tiến độ của bạn được lưu lại trên máy này. Lỡ tắt trình duyệt vẫn học tiếp được.
    </div>
    <button class="btn btn-primary" onclick="showLesson(${S.done.length < baiHoc.length ? S.done.length : 0})"
      style="font-size:15px;padding:13px 36px">🚀 ${S.done.length > 0 ? 'Học Tiếp' : 'Bắt Đầu Học'}</button>
  </div>`;
}

// ─── BÀI HỌC ──────────────────────────────────────────────────
function showLesson(idx) {
  if (!S.courseStart) S.courseStart = new Date();
  huyDongHoDoc();
  S.view = 'lesson'; S.lesson = idx;
  const l = getLessons()[idx];
  renderSidebar();

  const prevBtn = idx > 0
    ? `<button class="btn btn-secondary" onclick="showLesson(${idx - 1})">← Bài trước</button>`
    : `<button class="btn btn-secondary" onclick="showWelcome()">← Trang chủ</button>`;

  // Cổng thời gian đọc bài: chỉ áp dụng lần đọc đầu tiên của mỗi bài
  const canChoDoc = CAU_HINH.GIAY_DOC_TOI_THIEU > 0 && !S.daDocXong[idx];
  const thanhDoc = canChoDoc ? `
    <div class="doc-bai-bar" id="docBaiBar">
      <span>📖</span>
      <div class="doc-bai-wrap"><div class="doc-bai-fill" id="docBaiFill"></div></div>
      <span class="doc-bai-text" id="docBaiText">Còn ${CAU_HINH.GIAY_DOC_TOI_THIEU} giây</span>
    </div>` : '';

  document.getElementById('mainContent').innerHTML = `
  <div>
    <div class="lesson-header">
      <div class="lesson-num">Bài ${idx + 1} / ${getLessons().length}</div>
      <div class="lesson-title">${l.icon} ${chongHTML(l.title)}</div>
    </div>
    <div class="lesson-body">
      ${thanhDoc}
      ${l.content}
      <hr class="divider">
      <div class="lesson-actions">
        ${prevBtn}
        <button id="quizBtn" class="btn ${canChoDoc ? 'btn-disabled' : 'btn-primary'}"
          ${canChoDoc ? 'disabled' : ''} onclick="startQuiz(${idx})">📝 Làm Bài Kiểm Tra →</button>
      </div>
    </div>
  </div>`;
  window.scrollTo(0, 0);
  if (canChoDoc) batDauDongHoDoc(idx);
  luuTienDo();
}

function batDauDongHoDoc(idx) {
  let conLai = CAU_HINH.GIAY_DOC_TOI_THIEU;
  const tong = conLai;
  const fill = document.getElementById('docBaiFill');
  const text = document.getElementById('docBaiText');
  const bar  = document.getElementById('docBaiBar');
  const btn  = document.getElementById('quizBtn');

  const nhip = () => {
    conLai--;
    if (fill) fill.style.width = ((tong - conLai) / tong * 100) + '%';
    if (conLai > 0) {
      if (text) text.textContent = `Còn ${conLai} giây`;
      return;
    }
    huyDongHoDoc();
    S.daDocXong[idx] = true;
    luuTienDo();
    if (bar)  bar.classList.add('xong');
    if (text) text.textContent = 'Đã mở bài kiểm tra';
    if (btn)  { btn.disabled = false; btn.className = 'btn btn-primary'; }
  };
  dongHoDoc = setInterval(nhip, 1000);
}

function huyDongHoDoc() {
  if (dongHoDoc) { clearInterval(dongHoDoc); dongHoDoc = null; }
}

// ─── BÀI KIỂM TRA TỪNG BÀI ────────────────────────────────────
function startQuiz(idx) {
  huyDongHoDoc();
  S.view = 'quiz'; S.lesson = idx; S.qIndex = 0;
  const cauHoi = getLessons()[idx].questions;

  // Đảo thứ tự câu hỏi và thứ tự đáp án cho mỗi lần làm
  S.thuTuCau = CAU_HINH.TRON_CAU_HOI ? tron(daySo(cauHoi.length)) : daySo(cauHoi.length);
  S.thuTuDapAn = S.thuTuCau.map(goc =>
    CAU_HINH.TRON_DAP_AN ? tron(daySo(cauHoi[goc].opts.length)) : daySo(cauHoi[goc].opts.length));
  S.qAnswers = new Array(cauHoi.length).fill(null);

  renderSidebar();
  renderQ();
}

/** Câu hỏi gốc đang hiển thị ở vị trí d. */
function cauTaiViTri(d) { return getLessons()[S.lesson].questions[S.thuTuCau[d]]; }

/** Người học chọn ô thứ i (theo thứ tự hiển thị) thì đúng hay sai. */
function chonDung(d, i) { return S.thuTuDapAn[d][i] === cauTaiViTri(d).c; }

/** Vị trí hiển thị của đáp án đúng ở câu d. */
function viTriDapAnDung(d) { return S.thuTuDapAn[d].indexOf(cauTaiViTri(d).c); }

function renderQ() {
  const tongCau = S.thuTuCau.length;
  const qi = S.qIndex;
  const q = cauTaiViTri(qi);
  const L = ['A', 'B', 'C', 'D', 'E', 'F'];
  const l = getLessons()[S.lesson];

  const pills = S.thuTuCau.map((_, i) => {
    let c = 'qpill';
    if (i === qi) c += ' qcurrent';
    else if (S.qAnswers[i] !== null) c += ' qanswered';
    return `<button type="button" class="${c}" onclick="nhayToiCau(${i})"
      aria-label="Câu ${i + 1}">${i + 1}</button>`;
  }).join('');

  const daTraLoi = S.qAnswers[qi] !== null;
  const opts = S.thuTuDapAn[qi].map((goc, i) => {
    let cls = 'option';
    if (daTraLoi) {
      if (i === S.qAnswers[qi]) cls += chonDung(qi, i) ? ' opt-correct' : ' opt-wrong';
      else if (i === viTriDapAnDung(qi)) cls += ' opt-correct';
    }
    return `<button type="button" class="${cls}" ${daTraLoi ? 'disabled' : ''} onclick="pick(${i})">
      <span class="opt-letter">${L[i]}</span><span>${q.opts[goc]}</span></button>`;
  }).join('');

  const fbHtml = daTraLoi ? khungPhanHoi(chonDung(qi, S.qAnswers[qi]), q) : '<div class="feedback-box" id="fb"></div>';

  document.getElementById('mainContent').innerHTML = `
  <div class="quiz-header-bar">
    <div class="quiz-title-h">📝 Kiểm Tra: ${l.icon} ${chongHTML(l.title)}</div>
    <div class="quiz-subtitle-s">Cần đúng từ ${soCauCanDung(tongCau)}/${tongCau} câu (${CAU_HINH.DIEM_DAT}%) để qua bài</div>
    <div class="quiz-pills">${pills}</div>
  </div>
  <div class="question-card">
    <div class="q-num">Câu ${qi + 1} / ${tongCau}</div>
    <div class="q-text">${q.q}</div>
    <div class="options">${opts}</div>
    ${fbHtml}
    <div class="quiz-nav">
      <button class="btn btn-secondary" onclick="showLesson(${S.lesson})">← Xem lại bài</button>
      <div id="navRight">${nutDieuHuongQuiz()}</div>
    </div>
  </div>`;
  window.scrollTo(0, 0);
}

function khungPhanHoi(dung, q) {
  return `<div class="feedback-box ${dung ? 'fb-correct' : 'fb-wrong'}" style="display:block">
    ${dung
      ? `✅ <strong>Chính xác!</strong> ${q.exp}`
      : `❌ <strong>Chưa đúng.</strong> Đáp án đúng: <strong>${q.opts[q.c]}</strong>. ${q.exp}`}
  </div>`;
}

/**
 * Nút điều hướng của bài kiểm tra.
 * SỬA LỖI CŨ: trước đây chỗ này viết cứng `qi === 4` nên bài 6 câu bị kẹt,
 * không bao giờ hiện được nút Nộp Bài. Nay tính theo số câu thật.
 */
function nutDieuHuongQuiz() {
  const qi = S.qIndex;
  const tongCau = S.thuTuCau.length;
  const laCauCuoi = qi === tongCau - 1;
  const daTraLoi = S.qAnswers[qi] !== null;
  const prev = qi > 0
    ? `<button class="btn btn-secondary" style="margin-right:8px" onclick="prevQ()">← Câu trước</button>` : '';

  if (!daTraLoi) return prev + `<button class="btn btn-disabled" disabled>Chọn đáp án</button>`;

  const conThieu = S.qAnswers.indexOf(null);
  if (laCauCuoi || conThieu === -1) {
    return prev + `<button class="btn btn-primary" onclick="submitQuiz()">Nộp Bài ✓</button>`;
  }
  return prev + `<button class="btn btn-primary" onclick="nextQ()">Câu Tiếp →</button>`;
}

function pick(i) {
  const qi = S.qIndex;
  if (S.qAnswers[qi] !== null) return;
  S.qAnswers[qi] = i;
  renderQ();
}

function nhayToiCau(i) { S.qIndex = i; renderQ(); }
function nextQ() { if (S.qIndex < S.thuTuCau.length - 1) { S.qIndex++; renderQ(); } }
function prevQ() { if (S.qIndex > 0) { S.qIndex--; renderQ(); } }

function submitQuiz() {
  const conThieu = S.qAnswers.indexOf(null);
  if (conThieu !== -1) { S.qIndex = conThieu; renderQ(); return; }

  const tongCau = S.thuTuCau.length;
  const correct = S.qAnswers.filter((a, d) => chonDung(d, a)).length;
  const pct = correct / tongCau * 100;
  const passed = pct >= CAU_HINH.DIEM_DAT;

  S.scores[S.lesson] = { correct, total: tongCau, pct, passed };
  if (passed && !S.done.includes(S.lesson)) S.done.push(S.lesson);
  if (S.done.length === getLessons().length && !S.completedAt) S.completedAt = new Date();

  luuTienDo();
  renderSidebar();
  showResult(correct, tongCau, pct, passed);
}

function showResult(correct, tongCau, pct, passed) {
  S.view = 'result';
  const mi = S.lesson;
  const allDone = S.done.length === getLessons().length;

  const review = S.thuTuCau.map((goc, d) => {
    const q = getLessons()[mi].questions[goc];
    const ok = chonDung(d, S.qAnswers[d]);
    return `<div class="ans-row">
      <div class="ans-icon">${ok ? '✅' : '❌'}</div>
      <div><strong>Câu ${d + 1}:</strong> ${q.q}<br>
      <span style="font-size:12px;color:${ok ? '#059669' : '#dc2626'}">${ok ? 'Đúng: ' : 'Đáp án đúng: '}${q.opts[q.c]}</span>
      ${!ok ? `<br><span style="font-size:11px;color:#888">${q.exp}</span>` : ''}
      </div>
    </div>`;
  }).join('');

  let nextBtn = '';
  if (passed) {
    if (allDone) nextBtn = `<button class="btn btn-gold" onclick="showFinalQuiz()">🏆 Làm Bài Kiểm Tra Tổng Kết →</button>`;
    else if (mi < getLessons().length - 1) nextBtn = `<button class="btn btn-primary" onclick="showLesson(${mi + 1})">Học Bài Tiếp →</button>`;
  } else {
    nextBtn = `<button class="btn btn-primary" onclick="showLesson(${mi})">📖 Ôn Lại &amp; Làm Lại</button>`;
  }

  document.getElementById('mainContent').innerHTML = `
  <div class="result-card">
    <div class="result-icon">${passed ? '🎉' : '😅'}</div>
    <div class="result-score ${passed ? 'score-pass' : 'score-fail'}">${correct}/${tongCau}</div>
    <div class="result-msg">${passed ? 'Xuất sắc! Bạn đã qua bài này!' : 'Chưa đạt - cần ôn lại và làm lại'}</div>
    <div class="result-sub">
      Bạn trả lời đúng <strong>${correct}/${tongCau} câu (${pct.toFixed(0)}%)</strong>.<br>
      ${passed
        ? `✅ Điểm đạt yêu cầu từ ${CAU_HINH.DIEM_DAT}% trở lên.`
        : `❌ Cần ít nhất ${soCauCanDung(tongCau)}/${tongCau} câu đúng. Hãy đọc kỹ lý thuyết trước khi làm lại.`}
      ${!passed ? '<br><span style="font-size:12px">Lần làm lại sẽ đảo thứ tự câu hỏi và đáp án.</span>' : ''}
    </div>
    <div class="ans-review"><h3 style="margin-bottom:10px;color:var(--green-deeper)">Chi tiết kết quả:</h3>${review}</div>
    <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
      <button class="btn btn-secondary" onclick="showLesson(${mi})">📖 Xem Lại Bài</button>
      ${nextBtn}
    </div>
  </div>`;
  window.scrollTo(0, 0);
  renderSidebar();
}

// ─── BÀI KIỂM TRA TỔNG KẾT ────────────────────────────────────
function showFinalQuiz() {
  if (S.done.length < getLessons().length) return;
  dongSidebar();
  huyDongHoDoc();
  S.view = 'finalquiz'; S.fqIndex = 0;
  const bo = getFinalQuiz();
  S.fqThuTuCau = CAU_HINH.TRON_CAU_HOI ? tron(daySo(bo.length)) : daySo(bo.length);
  S.fqThuTuDapAn = S.fqThuTuCau.map(goc =>
    CAU_HINH.TRON_DAP_AN ? tron(daySo(bo[goc].opts.length)) : daySo(bo[goc].opts.length));
  S.fqAnswers = new Array(bo.length).fill(null);
  renderSidebar();
  renderFinalQ();
}

function fqCauTaiViTri(d) { return getFinalQuiz()[S.fqThuTuCau[d]]; }
function fqChonDung(d, i) { return S.fqThuTuDapAn[d][i] === fqCauTaiViTri(d).c; }

function renderFinalQ() {
  const qi = S.fqIndex;
  const q = fqCauTaiViTri(qi);
  const tongCau = S.fqThuTuCau.length;
  const L = ['A', 'B', 'C', 'D', 'E', 'F'];

  const pills = S.fqThuTuCau.map((_, i) => {
    let c = 'qpill';
    if (i === qi) c += ' qcurrent';
    else if (S.fqAnswers[i] !== null) c += ' qanswered';
    return `<button type="button" class="${c}" onclick="S.fqIndex=${i};renderFinalQ()"
      aria-label="Câu ${i + 1}">${i + 1}</button>`;
  }).join('');

  // Bài Tổng Kết KHÔNG hiện đáp án đúng ngay - chỉ chấm sau khi nộp,
  // để không biến bài thi thành bài luyện đáp án.
  const daChon = S.fqAnswers[qi];
  const opts = S.fqThuTuDapAn[qi].map((goc, i) => {
    const cls = 'option' + (daChon === i ? ' selected' : '');
    return `<button type="button" class="${cls}" onclick="answerFinalQ(${i})">
      <span class="opt-letter">${L[i]}</span><span>${q.opts[goc]}</span></button>`;
  }).join('');

  const daTraLoi = S.fqAnswers.filter(a => a !== null).length;
  const laCauCuoi = qi === tongCau - 1;
  const navRight = (laCauCuoi || daTraLoi === tongCau)
    ? `<button class="btn btn-gold" onclick="submitFinalQ()">Nộp Bài Tổng Kết ✓</button>`
    : (daChon !== null
        ? `<button class="btn btn-primary" onclick="S.fqIndex++;renderFinalQ()">Câu Tiếp →</button>`
        : `<button class="btn btn-disabled" disabled>Chọn đáp án</button>`);

  document.getElementById('mainContent').innerHTML = `
  <div class="quiz-header-bar">
    <div class="quiz-title-h">🏆 Kiểm Tra Tổng Kết</div>
    <div class="quiz-subtitle-s">Cần đúng từ ${soCauCanDung(tongCau)}/${tongCau} câu (${CAU_HINH.DIEM_DAT}%)
      để nhận Giấy Chứng Nhận · Đã trả lời: ${daTraLoi}/${tongCau}</div>
    <div class="quiz-pills" style="flex-wrap:wrap">${pills}</div>
  </div>
  <div class="question-card">
    <div class="q-num">Câu ${qi + 1} / ${tongCau}</div>
    <div class="q-text">${q.q}</div>
    <div class="options">${opts}</div>
    <div class="feedback-box" style="display:block;background:#eff6ff;border:1px solid #93c5fd;color:#1e40af">
      ℹ️ Bài tổng kết chấm điểm sau khi nộp. Bạn có thể quay lại đổi đáp án trước khi nộp.
    </div>
    <div class="quiz-nav">
      ${qi > 0 ? `<button class="btn btn-secondary" onclick="S.fqIndex--;renderFinalQ()">← Câu trước</button>` : '<div></div>'}
      ${navRight}
    </div>
  </div>`;
  window.scrollTo(0, 0);
}

// Cho phép đổi đáp án trước khi nộp (khác bài lẻ - bài lẻ khoá ngay để dạy)
function answerFinalQ(i) { S.fqAnswers[S.fqIndex] = i; renderFinalQ(); }

function submitFinalQ() {
  const conThieu = S.fqAnswers.indexOf(null);
  if (conThieu !== -1) {
    S.fqIndex = conThieu;
    renderFinalQ();
    alert('Bạn còn câu chưa trả lời. Đã chuyển tới câu đó.');
    return;
  }
  const tongCau = S.fqThuTuCau.length;
  const correct = S.fqAnswers.filter((a, d) => fqChonDung(d, a)).length;
  const pct = Math.round(correct / tongCau * 100);
  const passed = pct >= CAU_HINH.DIEM_DAT;

  S.view = 'finalresult';
  S.finalScore = { correct, total: tongCau, pct, passed };
  if (passed) { S.finalDone = true; if (!S.completedAt) S.completedAt = new Date(); }
  luuTienDo();
  renderSidebar();

  const review = S.fqThuTuCau.map((goc, d) => {
    const q = getFinalQuiz()[goc];
    const ok = fqChonDung(d, S.fqAnswers[d]);
    return `<div class="ans-row">
      <div class="ans-icon">${ok ? '✅' : '❌'}</div>
      <div><strong>Câu ${d + 1}:</strong> ${q.q}<br>
      <span style="font-size:12px;color:${ok ? '#059669' : '#dc2626'}">${ok ? 'Đúng: ' : 'Đáp án đúng: '}${q.opts[q.c]}</span>
      ${!ok ? `<br><span style="font-size:11px;color:#888">${q.exp}</span>` : ''}
      </div>
    </div>`;
  }).join('');

  document.getElementById('mainContent').innerHTML = `
  <div class="result-card">
    <div class="result-icon">${passed ? '🏆' : '😅'}</div>
    <div class="result-score ${passed ? 'score-pass' : 'score-fail'}">${correct}/${tongCau}</div>
    <div class="result-msg">${passed ? 'Xuất sắc! Bạn đã hoàn thành khóa học!' : 'Chưa đạt - hãy ôn lại và làm lại'}</div>
    <div class="result-sub">
      Bạn trả lời đúng <strong>${correct}/${tongCau} câu (${pct}%)</strong>.<br>
      ${passed
        ? '✅ Chúc mừng! Bạn đủ điều kiện nhận Giấy Chứng Nhận.'
        : `❌ Cần ít nhất ${soCauCanDung(tongCau)}/${tongCau} câu đúng (${CAU_HINH.DIEM_DAT}%). Hãy ôn lại kiến thức và làm lại.`}
    </div>
    <div class="ans-review"><h3 style="margin-bottom:10px;color:var(--green-deeper)">Chi tiết kết quả:</h3>${review}</div>
    <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
      <button class="btn btn-secondary" onclick="showFinalQuiz()">📖 Làm Lại Tổng Kết</button>
      ${passed ? `<button class="btn btn-gold" onclick="makeCert()">🏆 Nhận Giấy Chứng Nhận</button>` : ''}
    </div>
  </div>`;
  window.scrollTo(0, 0);
}

// ─── GIẤY CHỨNG NHẬN ──────────────────────────────────────────

/**
 * Mã số chứng nhận, ví dụ PT-SC26-4F8B2A.
 * Sinh từ tên + cửa hàng + thương hiệu nên mở lại vẫn ra đúng mã cũ,
 * dùng để đối chiếu với dòng tương ứng trong Google Sheets.
 */
function sinhMaChungNhan() {
  const goc = `${S.brand}|${S.userName}|${S.userStore}`.toUpperCase();
  let h = 5381;
  for (let i = 0; i < goc.length; i++) h = ((h * 33) ^ goc.charCodeAt(i)) >>> 0;
  const ma = h.toString(16).toUpperCase().padStart(6, '0').slice(-6);
  return `${thuongHieu().maCN}-SC26-${ma}`;
}

function makeCert() {
  dongSidebar();
  huyDongHoDoc();
  S.view = 'cert';

  const baiHoc = getLessons();
  const tongCauBai = Object.values(S.scores).reduce((a, b) => a + (b.total || 0), 0);
  const dungCauBai = Object.values(S.scores).reduce((a, b) => a + (b.correct || 0), 0);
  const diemBai = tongCauBai ? Math.round(dungCauBai / tongCauBai * 100) : 0;
  const diemTongKet = S.finalScore ? S.finalScore.pct : 0;

  // Điểm chung: gộp cả câu bài lẻ và câu tổng kết, không bỏ sót bài thi cuối
  const dungTatCa = dungCauBai + (S.finalScore ? S.finalScore.correct : 0);
  const tongTatCa = tongCauBai + (S.finalScore ? S.finalScore.total : 0);
  const diemChung = tongTatCa ? Math.round(dungTatCa / tongTatCa * 100) : 0;

  let duration = '';
  if (S.courseStart && S.completedAt) {
    const mins = Math.max(0, Math.floor((S.completedAt - S.courseStart) / 60000));
    duration = mins < 60 ? `${mins} phút` : `${Math.floor(mins / 60)} giờ ${mins % 60} phút`;
  }
  const maChungNhan = sinhMaChungNhan();
  const completedAt = (S.completedAt || new Date()).toLocaleDateString('vi-VN',
    { day: '2-digit', month: '2-digit', year: 'numeric' });

  S._certStats = {
    dungTatCa, tongTatCa, diemChung, diemBai, diemTongKet,
    soBai: `${S.done.length}/${baiHoc.length}`, duration, completedAt, maChungNhan
  };

  // Chỉ ghi nhận hoàn thành MỘT lần, dù xem lại chứng nhận bao nhiêu lần
  if (!S.daGhiHoanThanh) {
    trackEvent('complete', {
      score: diemChung, diemTongKet, maChungNhan, duration
    });
    S.daGhiHoanThanh = true;
    luuTienDo();
  }

  document.getElementById('mainContent').innerHTML = `
  <div class="cert-wrap">
    <div class="cert-title-bar">
      <h2>🏆 Giấy Chứng Nhận Của Bạn</h2>
      <p>Mã số: <span class="ma-cn">${maChungNhan}</span> · Nhấn "Tải PNG" để lưu về máy</p>
    </div>
    <canvas id="certCanvas" width="960" height="672"></canvas>
    <div class="cert-actions">
      <button class="btn btn-secondary" onclick="showWelcome()">← Về Trang Chủ</button>
      <button class="btn btn-gold" onclick="dlCert()">⬇️ Tải PNG</button>
      <button class="btn btn-primary" onclick="printCert()">🖨️ In Chứng Nhận</button>
    </div>
    <div class="info-box" style="margin-top:16px;font-size:13px">
      <strong>Xác thực:</strong> mã <span class="ma-cn">${maChungNhan}</span> được ghi kèm vào bảng theo dõi
      của bộ phận Chuỗi Cung Ứng. Khi cần kiểm tra, đối chiếu mã này với bảng đó.<br>
      <strong>Phạm vi:</strong> chứng nhận áp dụng cho bộ SOP Chuỗi Cung Ứng phiên bản 2026.
    </div>
  </div>`;
  drawCert();
  renderSidebar();
}

function drawCert() {
  const cv = document.getElementById('certCanvas');
  const W = 960, H = 672;
  cv.width = W; cv.height = H;
  const ctx = cv.getContext('2d');
  const img = new Image();
  img.onload  = () => _finishCert(ctx, W, H, img);
  img.onerror = () => _finishCert(ctx, W, H, null);
  img.src = thuongHieu().logo;
}

function _finishCert(ctx, W, H, logoImg) {
  const st = S._certStats;
  const isTH = S.brand === 'thehoa';
  const navy = isTH ? '#9c3d47' : '#1a3161';
  const gold = '#c8951c', goldL = '#e8b84b', goldB = '#f5d060', white = '#fff';
  const mint    = isTH ? '#fff0f2' : '#e8f5ee';
  const mintB   = isTH ? '#f5c0c8' : '#a8dbb9';
  const mintTxt = isTH ? '#9c3d47' : '#1a6b42';
  const sealLbl = isTH ? 'THE HOA' : 'PHÚC TEA';
  const brandDesc = isTH
    ? 'Hệ Thống Đào Tạo The Hoa - Chuỗi Cung Ứng 2026'
    : 'Hệ Thống Đào Tạo Phúc Tea - Chuỗi Cung Ứng 2026';
  ctx.textAlign = 'center';

  ctx.fillStyle = white; ctx.fillRect(0, 0, W, H);

  function corner(fx, fy) {
    ctx.save();
    ctx.translate(fx ? W : 0, fy ? H : 0);
    ctx.scale(fx ? -1 : 1, fy ? -1 : 1);
    ctx.fillStyle = navy;
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(200, 0); ctx.lineTo(0, 175); ctx.closePath(); ctx.fill();
    ctx.fillStyle = goldB; ctx.globalAlpha = 0.9;
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(95, 0); ctx.lineTo(0, 85); ctx.closePath(); ctx.fill();
    ctx.globalAlpha = 1;
    ctx.fillStyle = goldL; ctx.globalAlpha = 0.7;
    ctx.beginPath(); ctx.moveTo(185, 0); ctx.lineTo(230, 0); ctx.lineTo(0, 195); ctx.lineTo(0, 155); ctx.closePath(); ctx.fill();
    ctx.globalAlpha = 1;
    ctx.strokeStyle = goldB; ctx.lineWidth = 3; ctx.globalAlpha = 0.6;
    ctx.beginPath(); ctx.moveTo(245, 0); ctx.lineTo(0, 210); ctx.stroke();
    ctx.globalAlpha = 1;
    ctx.restore();
  }
  corner(false, false); corner(true, false); corner(false, true); corner(true, true);

  const lsz = 100;
  if (logoImg) ctx.drawImage(logoImg, W / 2 - lsz / 2, 48, lsz, lsz);

  ctx.save();
  ctx.translate(0, 70);

  ctx.fillStyle = navy; ctx.font = 'bold 52px Arial';
  ctx.fillText('GIẤY CHỨNG NHẬN', W / 2, 125);

  const htY = 148;
  ctx.fillStyle = '#555'; ctx.font = '700 14px Arial';
  const htW = ctx.measureText('HOÀN THÀNH').width;
  function dmd(x, y, s) {
    ctx.fillStyle = gold; ctx.beginPath();
    ctx.moveTo(x, y - s); ctx.lineTo(x + s, y); ctx.lineTo(x, y + s); ctx.lineTo(x - s, y);
    ctx.closePath(); ctx.fill();
  }
  dmd(W / 2 - htW / 2 - 22, htY, 5); dmd(W / 2 + htW / 2 + 22, htY, 5);
  ctx.strokeStyle = gold; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(W / 2 - htW / 2 - 14, htY); ctx.lineTo(W / 2 - htW / 2 - 2, htY); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(W / 2 + htW / 2 + 2, htY); ctx.lineTo(W / 2 + htW / 2 + 14, htY); ctx.stroke();
  ctx.fillStyle = '#555'; ctx.fillText('HOÀN THÀNH', W / 2, htY + 5);

  const pW = 460, pH = 34, pY = 162;
  ctx.fillStyle = navy; ctx.beginPath(); ctx.roundRect(W / 2 - pW / 2, pY, pW, pH, 17); ctx.fill();
  ctx.fillStyle = white; ctx.font = 'bold 12px Arial';
  ctx.fillText('KHÓA HỌC: ' + CAU_HINH.TEN_KHOA_HOC.toUpperCase(), W / 2, pY + 22);

  // Tên học viên: tự thu nhỏ nếu tên dài, không tràn ra ngoài khung
  const ten = S.userName.toUpperCase();
  let cyTen = 44;
  ctx.font = `bold ${cyTen}px Arial`;
  while (ctx.measureText(ten).width > W - 200 && cyTen > 20) {
    cyTen -= 2;
    ctx.font = `bold ${cyTen}px Arial`;
  }
  ctx.fillStyle = gold;
  ctx.fillText(ten, W / 2, 258);
  const nw = Math.min(ctx.measureText(ten).width, W - 200);
  ctx.strokeStyle = gold; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(W / 2 - nw / 2, 268); ctx.lineTo(W / 2 + nw / 2, 268); ctx.stroke();

  function star(cx, cy, r, pts, c) {
    ctx.fillStyle = c; ctx.beginPath();
    for (let i = 0; i < pts * 2; i++) {
      const a = i * Math.PI / pts - Math.PI / 2, ri = i % 2 === 0 ? r : r * 0.45;
      ctx.lineTo(cx + ri * Math.cos(a), cy + ri * Math.sin(a));
    }
    ctx.closePath(); ctx.fill();
  }
  [-36, 0, 36].forEach(dx => star(W / 2 + dx, 286, 5, 5, gold));

  ctx.fillStyle = '#333'; ctx.font = '13px Arial';
  ctx.fillText(`Đã hoàn thành xuất sắc khóa học "${CAU_HINH.TEN_KHOA_HOC}"`, W / 2, 310);
  ctx.fillStyle = '#333'; ctx.font = '12px Arial';
  ctx.fillText(`Cửa hàng: ${S.userStore}`, W / 2, 327);
  ctx.fillStyle = '#666'; ctx.font = '12px Arial';
  ctx.fillText(brandDesc, W / 2, 344);

  // 4 ô số liệu - nay tách rõ điểm bài lẻ và điểm tổng kết
  const sY = 356, sW = 162, sH = 48, sG = 14;
  const sStart = W / 2 - (4 * sW + 3 * sG) / 2;
  [
    [st.dungTatCa + '/' + st.tongTatCa, 'Câu trả lời đúng'],
    [st.diemBai + '%',                  'Điểm ' + st.soBai + ' bài học'],
    [st.diemTongKet + '%',              'Điểm Kiểm Tra Tổng Kết'],
    [st.duration || '-',                'Thời gian hoàn thành']
  ].forEach(([v, l], i) => {
    const bx = sStart + i * (sW + sG);
    ctx.fillStyle = mint; ctx.beginPath(); ctx.roundRect(bx, sY, sW, sH, 8); ctx.fill();
    ctx.strokeStyle = mintB; ctx.lineWidth = 1; ctx.stroke();
    ctx.fillStyle = mintTxt; ctx.font = 'bold 20px Arial'; ctx.fillText(v, bx + sW / 2, sY + 26);
    ctx.fillStyle = '#555'; ctx.font = '10px Arial'; ctx.fillText(l, bx + sW / 2, sY + 41);
  });

  ctx.fillStyle = '#888'; ctx.font = 'italic 12px Georgia,serif';
  ctx.fillText('Ngày hoàn thành: ' + st.completedAt, W / 2, 424);

  ctx.strokeStyle = gold; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(160, 436); ctx.lineTo(W - 160, 436); ctx.stroke();
  dmd(W / 2, 436, 4);

  const sigY = 458, lx = 215, rx = W - 215;
  [lx, rx].forEach((x, i) => {
    ctx.fillStyle = navy; ctx.font = 'italic 18px Georgia,serif'; ctx.fillText('Đã ký', x, sigY);
    ctx.strokeStyle = '#ccc'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(x - 65, sigY + 16); ctx.lineTo(x + 65, sigY + 16); ctx.stroke();
    ctx.fillStyle = navy; ctx.font = 'bold 13px Arial';
    ctx.fillText(i === 0 ? 'Lý Tấn Tài' : 'Trần Thị Hạnh Nhân', x, sigY + 32);
    ctx.fillStyle = '#666'; ctx.font = '11px Arial';
    ctx.fillText(i === 0 ? 'Giám đốc Điều Hành' : 'Quản lý Chuỗi Cung Ứng', x, sigY + 46);
  });

  const scx = W / 2, scy = sigY + 20;
  const sg = ctx.createRadialGradient(scx, scy, 0, scx, scy, 36);
  sg.addColorStop(0, goldB); sg.addColorStop(0.5, gold); sg.addColorStop(1, '#9a6b0a');
  ctx.beginPath(); ctx.arc(scx, scy, 36, 0, Math.PI * 2); ctx.fillStyle = sg; ctx.fill();
  ctx.strokeStyle = goldB; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.arc(scx, scy, 36, 0, Math.PI * 2); ctx.stroke();
  ctx.strokeStyle = goldB; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.arc(scx, scy, 30, 0, Math.PI * 2); ctx.stroke();
  ctx.fillStyle = white; ctx.font = 'bold 8px Arial';
  ctx.fillText(sealLbl, scx, scy - 6);
  ctx.fillText('CHỨNG NHẬN', scx, scy + 5);
  ctx.fillText('HOÀN THÀNH', scx, scy + 15);

  function trophy(cx, cy) {
    ctx.fillStyle = gold; ctx.beginPath();
    ctx.moveTo(cx - 22, cy - 44); ctx.lineTo(cx + 22, cy - 44);
    ctx.bezierCurveTo(cx + 30, cy - 20, cx + 20, cy + 8, cx, cy + 8);
    ctx.bezierCurveTo(cx - 20, cy + 8, cx - 30, cy - 20, cx - 22, cy - 44); ctx.fill();
    ctx.strokeStyle = goldL; ctx.lineWidth = 4; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.arc(cx - 26, cy - 18, 9, 0.6 * Math.PI, 1.4 * Math.PI); ctx.stroke();
    ctx.beginPath(); ctx.arc(cx + 26, cy - 18, 9, -0.4 * Math.PI, 0.4 * Math.PI); ctx.stroke();
    ctx.fillStyle = goldL; ctx.fillRect(cx - 5, cy + 8, 10, 18);
    ctx.fillStyle = gold; ctx.beginPath(); ctx.roundRect(cx - 18, cy + 26, 36, 10, 4); ctx.fill();
    star(cx, cy - 52, 8, 5, goldB);
  }
  trophy(72, 420);

  [[44, 28, 0, 0], [34, 20, 10, -10], [24, 13, 20, -22]].forEach(([w, h, ox, oy], i) => {
    ctx.save(); ctx.translate(W - 60 + ox, 420 + oy); ctx.rotate(0.18 - i * 0.06);
    ctx.fillStyle = i % 2 === 0 ? gold : goldL; ctx.globalAlpha = 0.85;
    ctx.beginPath(); ctx.roundRect(-w / 2, -h / 2, w, h, 3); ctx.fill(); ctx.restore();
  });
  ctx.globalAlpha = 1;

  ctx.restore();

  // Dải chân trang + mã số chứng nhận
  ctx.fillStyle = gold; ctx.fillRect(0, H - 52, W, 3);
  ctx.fillStyle = navy; ctx.fillRect(0, H - 49, W, 49);
  ctx.fillStyle = gold;
  ctx.beginPath(); ctx.moveTo(0, H); ctx.lineTo(120, H); ctx.lineTo(0, H - 75); ctx.fill();
  ctx.beginPath(); ctx.moveTo(W, H); ctx.lineTo(W - 120, H); ctx.lineTo(W, H - 75); ctx.fill();

  ctx.fillStyle = '#fff'; ctx.font = 'bold 12px "Courier New",monospace';
  ctx.fillText('MÃ SỐ: ' + st.maChungNhan, W / 2, H - 29);
  ctx.fillStyle = 'rgba(255,255,255,.72)'; ctx.font = '10px Arial';
  ctx.fillText('Áp dụng cho bộ SOP Chuỗi Cung Ứng phiên bản 2026', W / 2, H - 13);
}

function dlCert() {
  const a = document.createElement('a');
  const tenFile = thuongHieu().name.replace(/\s/g, '');
  a.download = `GiayChungNhan-${tenFile}-${S.userName.replace(/\s/g, '_')}-${S._certStats.maChungNhan}.png`;
  a.href = document.getElementById('certCanvas').toDataURL('image/png');
  a.click();
}

function printCert() {
  const d = window.open('', '_blank');
  if (!d) { alert('Trình duyệt đang chặn cửa sổ in. Hãy cho phép pop-up rồi thử lại.'); return; }
  d.document.write(`<html><head><title>Giấy Chứng Nhận - ${chongHTML(S.userName)}</title>
  <style>body{margin:0}img{width:100%;height:auto}</style></head>
  <body><img src="${document.getElementById('certCanvas').toDataURL()}" onload="window.print()"></body></html>`);
  d.document.close();
}

// ─── CHỌN THƯƠNG HIỆU ─────────────────────────────────────────
function showBrandSelect() {
  S.brand = '';
  S.view = 'brand';
  huyDongHoDoc();
  document.getElementById('sidebar').innerHTML = '';
  document.getElementById('progressText').textContent = '';
  document.getElementById('progressFill').style.width = '0%';
  document.body.classList.remove('brand-thehoa');
  document.getElementById('headerLogo').src = 'logo-phuc-tea.png';
  document.getElementById('headerTitle').textContent = 'Hệ Thống Đào Tạo Nhượng Quyền';
  document.title = 'Hệ Thống Đào Tạo Nhượng Quyền';

  const the = (key) => {
    const b = BRANDS[key];
    const vien = key === 'thehoa' ? '#c4606a' : '#1a8a42';
    return `<button type="button" onclick="selectBrand('${key}')"
      style="cursor:pointer;background:#fff;border-radius:20px;padding:32px 24px;text-align:center;
             box-shadow:0 4px 20px rgba(0,0,0,.08);border:3px solid transparent;transition:all .2s;font-family:inherit"
      onmouseover="this.style.borderColor='${vien}'" onmouseout="this.style.borderColor='transparent'">
      <img src="${b.logo}" alt="" style="height:90px;width:auto;margin-bottom:16px;display:block;margin-left:auto;margin-right:auto"
        onerror="this.style.display='none'">
      <span style="display:block;font-size:18px;font-weight:700;color:${b.titleColor};margin-bottom:6px">${b.name}</span>
      <span style="display:block;font-size:12px;color:#6b7280">Mã cửa hàng: ${b.prefix}...</span>
      <span style="display:block;margin-top:16px;background:${b.titleColor};color:#fff;border-radius:10px;
                   padding:10px;font-size:13px;font-weight:600">Chọn ${b.name} →</span>
    </button>`;
  };

  document.getElementById('mainContent').innerHTML = `
  <div style="max-width:600px;margin:40px auto;padding:0 16px">
    <div style="text-align:center;margin-bottom:32px">
      <h2 style="font-size:24px;color:#1a2e1a;margin-bottom:8px">Chọn Thương Hiệu</h2>
      <p style="color:#6b7280;font-size:14px">Vui lòng chọn thương hiệu nhượng quyền của bạn để bắt đầu</p>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px">
      ${the('phuctea')}${the('thehoa')}
    </div>
  </div>`;
}

function selectBrand(brand) {
  S.brand = brand;
  applyBrandTheme(brand);
  showRegister();
}

// ─── ĐĂNG KÝ ──────────────────────────────────────────────────
function showRegister() {
  S.view = 'register';
  document.getElementById('sidebar').innerHTML = '';
  document.getElementById('progressText').textContent = '';
  document.getElementById('progressFill').style.width = '0%';
  const b = thuongHieu();

  document.getElementById('mainContent').innerHTML = `
  <div style="max-width:520px;margin:24px auto">
    <div style="background:#fff;border-radius:20px;box-shadow:0 4px 24px rgba(0,0,0,.09);overflow:hidden">
      <div style="background:${b.headerBg};padding:28px 40px 20px;text-align:center">
        <img src="${b.logo}" alt="" style="height:110px;display:block;margin:0 auto 4px" onerror="this.style.display='none'">
        <div style="color:rgba(255,255,255,.8);font-size:12px;letter-spacing:1px;margin-top:4px">Hệ Thống Đào Tạo Nhượng Quyền</div>
      </div>
      <form id="formDangKy" style="padding:36px 40px" onsubmit="event.preventDefault();submitRegister()">
        <h2 style="font-size:20px;color:${b.titleColor};margin-bottom:6px;text-align:center">Đăng Ký Tham Gia Khóa Học</h2>
        <p style="color:#6b7280;font-size:13px;text-align:center;margin-bottom:28px;line-height:1.7">
          Vui lòng điền đầy đủ thông tin để bắt đầu khóa học<br>
          <strong style="color:${b.titleColor}">${CAU_HINH.TEN_KHOA_HOC} - ${b.name}</strong>
        </p>
        <div class="form-group">
          <label for="regName">Họ và tên đầy đủ <span style="color:#e53e3e">*</span></label>
          <input type="text" id="regName" autocomplete="name" placeholder="Nguyễn Văn A" oninput="checkReg()">
          <div id="regNameErr" style="font-size:11px;color:#e53e3e;margin-top:3px;display:none"></div>
        </div>
        <div class="form-group">
          <label for="regStore">Tên cửa hàng đầy đủ <span style="color:#e53e3e">*</span></label>
          <input type="text" id="regStore" placeholder="${b.regPlaceholder}" oninput="checkReg()">
          <div style="font-size:11px;color:#9ca3af;margin-top:4px">${b.regHint}</div>
          <div id="regStoreErr" style="font-size:11px;color:#e53e3e;margin-top:3px;display:none"></div>
        </div>
        <button type="submit" class="btn btn-disabled" id="regBtn" disabled
          style="width:100%;justify-content:center;font-size:15px;padding:14px;margin-top:4px">
          🚀 Bắt Đầu Khóa Học
        </button>
        <button type="button" onclick="showBrandSelect()"
          style="width:100%;margin-top:10px;background:none;border:none;color:#9ca3af;font-size:12px;cursor:pointer">
          ← Đổi thương hiệu
        </button>
        <p style="text-align:center;font-size:11px;color:#9ca3af;margin-top:10px">
          Thông tin được dùng để cấp Giấy Chứng Nhận khi hoàn thành khóa học
        </p>
      </form>
    </div>
  </div>`;
}

/**
 * Kiểm tra thông tin đăng ký.
 * Siết hơn bản cũ: tên phải có ít nhất 2 chữ, mã cửa hàng phải đúng dạng
 * PHUCTEA<số> - <tên>, không chấp nhận mỗi chữ "PHUCTEA".
 */
function checkReg() {
  const b = thuongHieu();
  const name  = document.getElementById('regName').value.trim().replace(/\s+/g, ' ');
  const store = document.getElementById('regStore').value.trim().toUpperCase().replace(/\s+/g, ' ');

  const tenHopLe = name.length >= 4 && name.split(' ').length >= 2;
  const mauCuaHang = new RegExp('^' + b.prefix + '\\s*\\d{1,4}\\s*-\\s*.{2,}$');
  const chOK = mauCuaHang.test(store);

  const eName = document.getElementById('regNameErr');
  if (eName) {
    const loi = name && !tenHopLe;
    eName.textContent = '⚠️ Vui lòng nhập họ và tên đầy đủ (ít nhất 2 chữ)';
    eName.style.display = loi ? 'block' : 'none';
  }
  const eStore = document.getElementById('regStoreErr');
  if (eStore) {
    const loi = store && !chOK;
    eStore.textContent = `⚠️ Cần đúng dạng: ${b.regPlaceholder}`;
    eStore.style.display = loi ? 'block' : 'none';
  }

  const btn = document.getElementById('regBtn');
  const ok = tenHopLe && chOK;
  btn.disabled = !ok;
  btn.className = ok ? 'btn btn-primary' : 'btn btn-disabled';
  return ok;
}

function submitRegister() {
  if (!checkReg()) return;
  S.userName  = document.getElementById('regName').value.trim().replace(/\s+/g, ' ');
  S.userStore = document.getElementById('regStore').value.trim().toUpperCase().replace(/\s+/g, ' ');
  S.courseStart = new Date();

  // Chỉ ghi nhận đăng ký một lần cho mỗi học viên, tránh sinh dòng trùng
  if (!S.daGhiDangKy) {
    trackEvent('register');
    S.daGhiDangKy = true;
  }
  luuTienDo();
  showWelcome();
}

// ─── CẢNH BÁO KHI RỜI TRANG GIỮA BÀI KIỂM TRA ─────────────────
window.addEventListener('beforeunload', (e) => {
  if (S.view === 'quiz' || S.view === 'finalquiz') {
    e.preventDefault();
    e.returnValue = '';
  }
});

// ─── KHỞI ĐỘNG ────────────────────────────────────────────────
function khoiDong() {
  document.getElementById('nutMenu').addEventListener('click', moDongSidebar);
  document.getElementById('lopPhu').addEventListener('click', dongSidebar);

  const daLuu = docTienDoDaLuu();
  if (daLuu) {
    applyBrandTheme(daLuu.brand);
    manHinhHocTiep(daLuu);
  } else {
    showBrandSelect();
  }
}

document.addEventListener('DOMContentLoaded', khoiDong);

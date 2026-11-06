/* ============================================================
   NOI DUNG KHOA HOC - Chuoi Cung Ung Phuc Tea
   SOP SC-SOP-01 Phien ban 2.0, hieu luc 06/11/2026
   8 bai hoc | format V2 voi visual components
   ============================================================ */

const LESSONS = [

/* ===================================================
   BÀI 1 – GIỚI THIỆU & VAI TRÒ
   =================================================== */
{
  id: 0,
  icon: '🏪',
  title: 'Giới Thiệu Hệ Thống & Vai Trò',
  subtitle: 'Mục đích SOP · Thuật ngữ · Trách nhiệm từng bên',
  content: `
  <div class="lesson-hero">
    <div class="lesson-hero-icon">🏪</div>
    <div class="lesson-hero-text">
      <h4>Chào Mừng Bạn Đến Với Khóa Học Vận Hành Kho!</h4>
      <p>Khóa học này giúp bạn – <strong>Đối Tác Nhượng Quyền</strong> và <strong>Quản Lý Cửa Hàng</strong> – nắm vững toàn bộ quy trình đặt hàng, nhận hàng và xử lý sự cố theo chuẩn Phúc Tea.</p>
    </div>
  </div>

  <div class="section">
    <h3>📖 Từ Điển Thuật Ngữ</h3>
    <div class="info-rows">
      <div class="info-row"><div class="ir-label">ĐTNQ</div><div class="ir-value">Đối Tác Nhượng Quyền – chủ 1 hoặc nhiều cửa hàng Phúc Tea</div></div>
      <div class="info-row"><div class="ir-label">CCU</div><div class="ir-value">Bộ phận Chuỗi Cung Ứng – đầu mối hỗ trợ từ Hệ thống</div></div>
      <div class="info-row"><div class="ir-label">MOQ</div><div class="ir-value">Minimum Order Quantity – số lượng đặt tối thiểu bắt buộc mỗi lần</div></div>
      <div class="info-row"><div class="ir-label">SLA</div><div class="ir-value">Cam kết thời gian xử lý: Hệ thống cam kết xử lý trong bao lâu</div></div>
      <div class="info-row"><div class="ir-label">KiotViet</div><div class="ir-value">Phần mềm đặt hàng online – tên gian hàng: <strong>taivuphuc</strong></div></div>
      <div class="info-row"><div class="ir-label">Lưu tạm</div><div class="ir-value">Đơn đang soạn trên KiotViet – Hệ thống <strong>CHƯA nhận</strong></div></div>
      <div class="info-row"><div class="ir-label">Hóa đơn</div><div class="ir-value">Đơn đã được Kho xác nhận – xem ở tab <strong>Hóa đơn</strong> KiotViet</div></div>
      <div class="info-row"><div class="ir-label">Group Zalo Kho</div><div class="ir-value">Kênh làm việc DUY NHẤT giữa Cửa Hàng và Kho</div></div>
      <div class="info-row"><div class="ir-label">Ngày làm việc</div><div class="ir-value">Thứ 2–Thứ 6, 09:00–16:30 · Không tính T7, CN, Lễ Tết</div></div>
      <div class="info-row"><div class="ir-label">File Min/Max</div><div class="ir-value">File Excel theo dõi mức tồn tối thiểu (Min) và tối đa (Max) của từng mặt hàng</div></div>
    </div>
  </div>

  <div class="section">
    <h3>✅ Trách Nhiệm Của Bạn (Cửa Hàng / ĐTNQ)</h3>
    <div class="checklist">
      <div class="check-num">1</div><div class="check-text">Theo dõi tồn kho theo File Min/Max – đặt hàng trước khi hết</div>
      <div class="check-num">2</div><div class="check-text">Đặt hàng đúng MOQ trên KiotViet, chốt trước <strong>16:30</strong> ngày làm việc</div>
      <div class="check-num">3</div><div class="check-text">Chuyển tiền &amp; gửi bằng chứng vào <strong>Group Zalo Kho</strong></div>
      <div class="check-num">4</div><div class="check-text">Kiểm tra <strong>5 điểm</strong> ngay khi nhận hàng (xem Bài 8)</div>
      <div class="check-num">5</div><div class="check-text">Báo sự cố <strong>trong 1 ngày làm việc</strong> – quá hạn không được giải quyết</div>
    </div>
  </div>

  <div class="section">
    <h3>🤝 Hệ Thống Cam Kết Với Bạn</h3>
    <div class="card-grid">
      <div class="card-item">
        <div class="ci-icon">📦</div>
        <div class="ci-title">Giao hàng đúng hẹn</div>
        <div class="ci-desc">Miền Nam 5–7 ngày, Miền Trung/Bắc 7–10 ngày làm việc sau khi thanh toán</div>
      </div>
      <div class="card-item">
        <div class="ci-icon">💰</div>
        <div class="ci-title">Báo giá trước 15 ngày</div>
        <div class="ci-desc">Mọi thay đổi giá NL Độc Quyền sẽ được thông báo trước ít nhất 15 ngày</div>
      </div>
      <div class="card-item">
        <div class="ci-icon">🛡️</div>
        <div class="ci-title">Xử lý sự cố đúng SLA</div>
        <div class="ci-desc">Hàng sai/hỏng: phản hồi trong 1 ngày làm việc, giải quyết trong 3 ngày làm việc</div>
      </div>
      <div class="card-item">
        <div class="ci-icon">💬</div>
        <div class="ci-title">Group Zalo Kho luôn sẵn sàng</div>
        <div class="ci-desc">Kênh DUY NHẤT – gửi câu hỏi, bằng chứng thanh toán, báo lỗi vào đây</div>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="callout callout-danger">
      <div class="callout-icon">⭐</div>
      <div class="callout-body">
        <strong>3 ĐIỀU CỐT LÕI – PHẢI NHỚ</strong>
        <ul>
          <li><strong>Group Zalo Kho</strong> = kênh DUY NHẤT cho mọi giao dịch với Kho</li>
          <li>Giờ làm việc: Thứ 2–Thứ 6, <strong>09:00–16:30</strong></li>
          <li>Hạn báo lỗi hàng: <strong>1 ngày làm việc</strong> từ ngày nhận – quá hạn không giải quyết</li>
        </ul>
      </div>
    </div>
  </div>`
},

/* ===================================================
   BÀI 2 – PHÂN LOẠI HÀNG HÓA & PHÍ VẬN CHUYỂN
   =================================================== */
{
  id: 1,
  icon: '🗂️',
  title: 'Phân Loại Hàng Hóa & Phí Vận Chuyển',
  subtitle: '4 nhóm hàng · Quy tắc phí VC · Chính sách thay đổi giá',
  content: `
  <div class="lesson-hero">
    <div class="lesson-hero-icon">📦</div>
    <div class="lesson-hero-text">
      <h4>Học một lần – áp dụng mãi mãi</h4>
      <p>Hiểu đúng 4 nhóm hàng và quy tắc phí vận chuyển giúp Cửa Hàng tránh chi trả nhầm hoặc bị thu phí bất thường.</p>
    </div>
  </div>

  <div class="section">
    <h3>4 Nhóm Hàng Hóa Trong Hệ Thống</h3>
    <div class="card-grid">
      <div class="card-item" style="border-color:#fca5a5">
        <div class="ci-icon">⭐</div>
        <div class="ci-title" style="color:#991b1b">① NL Độc Quyền</div>
        <div class="ci-desc" style="text-align:left">Phúc Tea tự nghiên cứu / đặt SX riêng. <strong>Không thể thay thế</strong> bằng hàng bên ngoài dù tên giống nhau.<br/><span class="tag tag-red" style="margin-top:6px;display:inline-flex">Phí VC: Chưa bao gồm</span></div>
      </div>
      <div class="card-item" style="border-color:#fcd34d">
        <div class="ci-icon">🫙</div>
        <div class="ci-title" style="color:#854d0e">② Nguyên Liệu</div>
        <div class="ci-desc" style="text-align:left">NL thương mại phổ thông. Hệ thống cung cấp để đảm bảo nguồn gốc, chất lượng đồng nhất.<br/><span class="tag tag-red" style="margin-top:6px;display:inline-flex">Phí VC: Chưa bao gồm</span></div>
      </div>
      <div class="card-item" style="border-color:#a8dbb9">
        <div class="ci-icon">🧃</div>
        <div class="ci-title" style="color:#065f46">③ VL Độc Quyền</div>
        <div class="ci-desc" style="text-align:left">Ly, màng ép, bịch, ống hút mang logo/màu Phúc Tea. In riêng theo thiết kế thương hiệu.<br/><span class="tag tag-green" style="margin-top:6px;display:inline-flex">Phí VC: Đã bao gồm</span></div>
      </div>
      <div class="card-item" style="border-color:#a8dbb9">
        <div class="ci-icon">🥤</div>
        <div class="ci-title" style="color:#065f46">④ Vật Liệu</div>
        <div class="ci-desc" style="text-align:left">Nắp, hũ, muỗng, bịch, giấy chống tràn không có nhận diện riêng Phúc Tea.<br/><span class="tag tag-green" style="margin-top:6px;display:inline-flex">Phí VC: Đã bao gồm</span></div>
      </div>
    </div>
  </div>

  <div class="section">
    <h3>💰 Quy Tắc Phí Vận Chuyển (Học 1 Lần – Dùng Mãi)</h3>
    <div class="compare-row">
      <div class="compare-col col-red">
        <h4>⚠️ NL Độc Quyền + Nguyên Liệu</h4>
        <p style="font-size:13px">Phí VC <strong>CHƯA bao gồm</strong> trong giá.<br/>
        → Cửa Hàng <strong>trả trực tiếp</strong> cho đơn vị vận chuyển khi nhận hàng.</p>
      </div>
      <div class="compare-col col-green">
        <h4>✅ VL Độc Quyền + Vật Liệu</h4>
        <p style="font-size:13px">Phí VC <strong>ĐÃ BAO GỒM</strong> trong giá.<br/>
        → Không trả thêm bất kỳ khoản nào.</p>
      </div>
    </div>
    <div class="callout callout-info">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Đơn hỗn hợp NL + VL?</strong>
        <p>Chỉ trả phí cho <strong>phần NL</strong>. Phần VL đã bao gồm, không trả thêm.<br/>
        🚨 Nhà xe thu phí VL bất thường → <strong>gọi Kho (0344 858 727) TRƯỚC khi trả</strong></p>
      </div>
    </div>
  </div>

  <div class="section">
    <h3>📢 Chính Sách Thay Đổi Giá</h3>
    <div class="info-rows">
      <div class="info-row">
        <div class="ir-label">NL ĐQ &amp; VL ĐQ</div>
        <div class="ir-value">Hệ thống thông báo <strong>trước 15 ngày</strong> qua kênh chính thức</div>
      </div>
      <div class="info-row">
        <div class="ir-label">Nguyên liệu &amp; Vật liệu</div>
        <div class="ir-value">Giá theo thị trường – cập nhật tự động trên KiotViet. <strong>Kiểm tra giá trước khi lên đơn.</strong></div>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="callout callout-danger">
      <div class="callout-icon">🧠</div>
      <div class="callout-body">
        <strong>CÔNG THỨC NHỚ NHANH</strong>
        <p><span class="num-highlight">NL</span> (nhóm 1+2) → trả phí VC khi nhận<br/>
        <span class="num-highlight">VL</span> (nhóm 3+4) → không trả thêm gì<br/>
        Nhà xe thu VL → <strong>Hỏi Kho trước!</strong></p>
      </div>
    </div>
  </div>`
},

/* ===================================================
   BÀI 3 – NL ĐỘC QUYỀN PHÚC TEA
   =================================================== */
{
  id: 2,
  icon: '⭐',
  title: 'NL Độc Quyền Phúc Tea',
  subtitle: '10 sản phẩm · MOQ · Xuất từ kho nào',
  content: `
  <div class="lesson-hero">
    <div class="lesson-hero-icon">🌟</div>
    <div class="lesson-hero-text">
      <h4>10 NL Độc Quyền – "Linh Hồn" Của Phúc Tea</h4>
      <p>Phúc Tea tự nghiên cứu và đặt sản xuất riêng. <strong>Không thể thay thế</strong> bằng bất kỳ sản phẩm nào bên ngoài dù tên giống nhau – công thức đặc trưng riêng.</p>
    </div>
  </div>

  <div class="section">
    <div class="callout callout-danger">
      <div class="callout-icon">🚫</div>
      <div class="callout-body">
        <strong>QUY TẮC – TUYỆT ĐỐI KHÔNG VI PHẠM</strong>
        <p>Không được tự mua NL Độc Quyền từ bất kỳ nguồn nào bên ngoài – dù giá rẻ hơn, dù tên giống hệt. Chỉ được nhập <strong>100% từ Hệ thống</strong>.</p>
      </div>
    </div>
  </div>

  <div class="section">
    <h3>📋 Danh Mục 10 NL Độc Quyền</h3>
    <div class="table-wrap"><table>
      <tr><th>STT</th><th>Tên sản phẩm</th><th>ĐVT</th><th>MOQ</th><th>Kho xuất</th></tr>
      <tr><td>1</td><td>Cà Phê Mộc 9:1</td><td>Kg</td><td>2 kg</td><td>🏭 Cần Thơ</td></tr>
      <tr style="background:#fefce8"><td>2</td><td><strong>Bột Pha Chế Phúc Tea PT35</strong> ⭐</td><td>Thùng</td><td>1 thùng</td><td>📦 HCM</td></tr>
      <tr style="background:#fefce8"><td>3</td><td><strong>Trà Đen Phúc Tea</strong> ⭐</td><td>Gói</td><td>5 gói</td><td>📦 HCM</td></tr>
      <tr style="background:#fefce8"><td>4</td><td><strong>Trà Xanh Lài Phúc Tea</strong> ⭐</td><td>Gói</td><td>1 gói</td><td>📦 HCM</td></tr>
      <tr><td>5</td><td>Trà Oolong Phúc Tea 02</td><td>Gói</td><td>1 gói</td><td>📦 HCM</td></tr>
      <tr><td>6</td><td>Bột Socola Phúc Tea 02</td><td>Gói</td><td>1 gói</td><td>📦 HCM</td></tr>
      <tr><td>7</td><td>Trà Hòa Tan Vị Đào Phúc Tea</td><td>Gói</td><td>5 gói</td><td>📦 HCM</td></tr>
      <tr><td>8</td><td>Trà Hòa Tan Vị Vải Phúc Tea</td><td>Gói</td><td>5 gói</td><td>📦 HCM</td></tr>
      <tr style="background:#fefce8"><td>9</td><td><strong>Trân Châu Giòn Phúc Tea</strong> ⭐</td><td>Thùng</td><td>1 thùng (6 gói)</td><td>📦 HCM</td></tr>
      <tr><td>10</td><td>Vải Tươi Ngâm Đường Phúc Tea</td><td>Thùng</td><td>1 thùng (12 lon)</td><td>📦 HCM</td></tr>
    </table></div>
    <div class="tag-row">
      <span class="tag tag-yellow">⭐ SP Chính = ưu tiên dự trữ đủ</span>
      <span class="tag tag-blue">📦 HCM = Kho Nguyên Liệu HCM</span>
      <span class="tag tag-green">🏭 Cần Thơ = Kho Cần Thơ</span>
    </div>
  </div>

  <div class="section">
    <h3>⚡ MOQ Đặc Biệt Cần Nhớ</h3>
    <div class="sla-grid">
      <div class="sla-card">
        <span class="sla-num">5 gói</span>
        <span class="sla-label">Trà Đen · Trà HT Vị Đào · Trà HT Vị Vải</span>
        <span class="sla-party">mỗi lần đặt</span>
      </div>
      <div class="sla-card">
        <span class="sla-num">2 kg</span>
        <span class="sla-label">Cà Phê Mộc 9:1 · <em>xuất từ Kho Cần Thơ</em></span>
        <span class="sla-party">mỗi lần đặt</span>
      </div>
      <div class="sla-card">
        <span class="sla-num">1 thùng</span>
        <span class="sla-label">Trân Châu Giòn (6 gói/thùng)</span>
        <span class="sla-party">mỗi lần đặt</span>
      </div>
      <div class="sla-card">
        <span class="sla-num">1 thùng</span>
        <span class="sla-label">Vải Tươi Ngâm Đường (12 lon/thùng)</span>
        <span class="sla-party">mỗi lần đặt</span>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="callout callout-danger">
      <div class="callout-icon">⭐</div>
      <div class="callout-body">
        <strong>ĐIỂM CỐT LÕI BÀI 3</strong>
        <ul>
          <li><strong>10 NL</strong> Độc Quyền – không thay thế bằng bất kỳ hàng nào bên ngoài</li>
          <li>4 SP Chính: Bột Pha Chế, Trà Đen, Trà Xanh Lài, Trân Châu Giòn</li>
          <li>Phí VC: <strong>CHƯA bao gồm</strong> → Cửa Hàng trả khi nhận</li>
        </ul>
      </div>
    </div>
  </div>`
},

/* ===================================================
   BÀI 4 – NGUYÊN LIỆU THƯƠNG MẠI
   =================================================== */
{
  id: 3,
  icon: '🫙',
  title: 'Nguyên Liệu Thương Mại',
  subtitle: '16 sản phẩm · Mua được tại địa phương · Phải đúng nhãn hiệu',
  content: `
  <div class="lesson-hero">
    <div class="lesson-hero-icon">🏪</div>
    <div class="lesson-hero-text">
      <h4>16 Nguyên Liệu Thương Mại – Linh Hoạt Nguồn Cung</h4>
      <p>Đây là những NL <strong>không độc quyền</strong> – bạn có thể tự mua tại địa phương. Tuy nhiên, phải đảm bảo <strong>đúng nhãn hiệu/thương hiệu</strong> quy định để giữ chất lượng chuỗi đồng nhất. Hệ thống cũng cung cấp để bạn đặt tiện lợi hơn.</p>
    </div>
  </div>

  <div class="section">
    <div class="callout callout-info">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Có thể tự mua tại địa phương – nhưng phải đúng nhãn hiệu!</strong>
        <ul>
          <li>✅ Mua tại địa phương hoặc đặt qua Hệ thống đều được</li>
          <li>✅ Giá biến động theo thị trường → Hệ thống cập nhật tự động trên KiotViet</li>
          <li>⚠️ Dù mua ở đâu, <strong>phải đúng nhãn hiệu/thương hiệu</strong> ghi trong danh mục</li>
          <li>⚠️ Không được tự ý thay thế bằng sản phẩm khác nhãn dù "cùng loại"</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="callout callout-success">
      <div class="callout-icon">🌺</div>
      <div class="callout-body">
        <strong>Mứt Hibiscus – Trường Hợp Đặc Biệt</strong>
        <p>Mứt Hibiscus <strong>không phải NL Độc Quyền</strong> nhưng hiện tại <strong>chỉ có Hệ thống mới cung cấp</strong> (không có trên thị trường phổ thông). Vui lòng đặt qua KiotViet như các NL khác.</p>
      </div>
    </div>
  </div>

  <div class="section">
    <h3>📋 Danh Mục 16 Nguyên Liệu Thương Mại</h3>
    <div class="table-wrap"><table>
      <tr><th>STT</th><th>Tên sản phẩm</th><th>ĐVT</th><th>MOQ</th><th>Quy cách đóng gói</th></tr>
      <tr style="background:#fff7ed;border-left:3px solid #f97316"><td>11</td><td><strong>🌺 Mứt Hibiscus</strong><br/><small style="color:#ea580c">Chỉ có Hệ thống cung cấp</small></td><td>Hủ</td><td>1 hủ</td><td>–</td></tr>
      <tr><td>12</td><td>Bột Milk Foam Phúc Tea</td><td>Gói</td><td>1 gói</td><td>–</td></tr>
      <tr><td>13</td><td>Gelatine Đức hoặc Pháp</td><td>Gói</td><td>1 gói</td><td>–</td></tr>
      <tr><td>14</td><td>Syrup Đường Đen Luave</td><td>Can</td><td>1 can</td><td>6 can/thùng</td></tr>
      <tr><td>15</td><td>Bột Matcha Đài Loan</td><td>Gói</td><td>1 gói</td><td>–</td></tr>
      <tr><td>16</td><td>Bột Khoai Môn Mole</td><td>Gói</td><td>1 gói</td><td>–</td></tr>
      <tr><td>17</td><td>Pudding Trứng Mole</td><td>Gói</td><td>1 gói</td><td>–</td></tr>
      <tr><td>18</td><td>Hạt Chia Úc hoặc Peru</td><td>Gói</td><td>1 gói (1kg)</td><td>–</td></tr>
      <tr><td>19</td><td>Đào Ngâm Fresko 820gr</td><td>Thùng</td><td>1 thùng</td><td>12 lon/thùng</td></tr>
      <tr><td>20</td><td>Sinh Tố Xoài Berrino</td><td>Chai</td><td>1 chai</td><td>12 chai/thùng</td></tr>
      <tr><td>21</td><td>Mứt Thơm Berrino</td><td>Hủ</td><td>1 hủ</td><td>15 hủ/thùng</td></tr>
      <tr><td>22</td><td>Mứt Dâu Tằm Berrino</td><td>Hủ</td><td>1 hủ</td><td>15 hủ/thùng</td></tr>
      <tr><td>23</td><td>Thạch Dừa Vải Casa 3,5kg</td><td>Thùng</td><td>1 thùng</td><td>4 hủ/thùng</td></tr>
      <tr style="background:#fefce8"><td>24</td><td><strong>Thạch Nha Đam</strong></td><td>Gói</td><td>5 gói</td><td>10 gói/thùng</td></tr>
      <tr><td>25</td><td>Xí Muội Thái</td><td>Gói</td><td>1 gói</td><td>–</td></tr>
      <tr><td>26</td><td>Syrup Đào Mama Rosa</td><td>Chai</td><td>1 chai</td><td>12 chai/thùng</td></tr>
    </table></div>
    <div class="tag-row">
      <span class="tag tag-yellow">⚠️ Thạch Nha Đam: MOQ 5 gói, không cần đặt cả thùng (10 gói)</span>
      <span class="tag tag-blue">📦 Tất cả xuất từ Kho Nguyên Liệu HCM</span>
    </div>
  </div>

  <div class="section">
    <h3>💡 Phân Biệt MOQ và Quy Cách Đóng Gói</h3>
    <div class="compare-row">
      <div class="compare-col col-green">
        <h4>✅ MOQ = Số lượng tối thiểu mỗi lần đặt</h4>
        <p style="font-size:13px">Ví dụ: Sinh Tố Xoài Berrino MOQ = <strong>1 chai</strong> → bạn chỉ cần đặt 1 chai là được</p>
      </div>
      <div class="compare-col col-green" style="border-color:#93c5fd;background:#eff6ff">
        <h4 style="color:#1e40af">ℹ️ Quy cách = Cách đóng gói của nhà cung cấp</h4>
        <p style="font-size:13px">Sinh Tố Xoài đóng gói theo thùng 12 chai – đây là thông tin tham khảo, không phải MOQ</p>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="callout callout-danger">
      <div class="callout-icon">⭐</div>
      <div class="callout-body">
        <strong>ĐIỂM CỐT LÕI BÀI 4</strong>
        <ul>
          <li>Có thể mua tại địa phương nhưng <strong>phải đúng nhãn hiệu</strong> quy định</li>
          <li>🌺 <strong>Mứt Hibiscus</strong>: hiện chỉ có Hệ thống, đặt qua KiotViet</li>
          <li>Giá biến động → <strong>kiểm tra trên KiotViet trước khi đặt</strong></li>
          <li>MOQ ≠ Quy cách đóng gói – chỉ cần đặt đúng số lượng MOQ</li>
        </ul>
      </div>
    </div>
  </div>`
},

/* ===================================================
   BÀI 5 – VẬT LIỆU BAO BÌ
   =================================================== */
{
  id: 4,
  icon: '📦',
  title: 'Vật Liệu Bao Bì',
  subtitle: 'VL Độc Quyền (9 loại) · Vật liệu (8 loại)',
  content: `
  <div class="lesson-hero">
    <div class="lesson-hero-icon">🧃</div>
    <div class="lesson-hero-text">
      <h4>Bao Bì = Bộ Mặt Thương Hiệu</h4>
      <p>Vật liệu bao bì gồm 2 nhóm: <strong>VL Độc Quyền</strong> (có in logo Phúc Tea) và <strong>Vật liệu</strong> (không có nhận diện thương hiệu). Cả 2 nhóm đều có phí VC ĐÃ BAO GỒM.</p>
    </div>
  </div>

  <div class="section">
    <div class="compare-row">
      <div class="compare-col col-green">
        <h4>✅ VL Độc Quyền</h4>
        <p style="font-size:13px">Có in logo/màu Phúc Tea · Bắt buộc dùng để đảm bảo nhận diện thương hiệu · <strong>Phí VC: Đã bao gồm</strong></p>
      </div>
      <div class="compare-col col-green" style="border-color:#93c5fd;background:#eff6ff">
        <h4 style="color:#1e40af">ℹ️ Vật Liệu</h4>
        <p style="font-size:13px">Không có nhận diện riêng Phúc Tea · Dùng cho mục đích vận hành chung · <strong>Phí VC: Đã bao gồm</strong></p>
      </div>
    </div>
  </div>

  <div class="section">
    <h3>Nhóm VL Độc Quyền (9 mặt hàng)</h3>
    <div class="table-wrap"><table>
      <tr><th>STT</th><th>Tên sản phẩm</th><th>ĐVT</th><th>MOQ</th></tr>
      <tr><td>29</td><td>Ly Giấy 600ml</td><td>Thùng</td><td>1 thùng (1.000 cái)</td></tr>
      <tr><td>30</td><td>Ly Nhựa 400ml In 5 Màu</td><td>Thùng</td><td>1 thùng (1.000 cái)</td></tr>
      <tr><td>31</td><td>Ly Nhựa 500ml In 2 Màu</td><td>Thùng</td><td>1 thùng (1.000 cái)</td></tr>
      <tr style="background:#fefce8"><td>32</td><td><strong>Ly Nhựa 600ml In 1 Màu</strong> ⭐ SP Chính</td><td>Thùng</td><td>1 thùng (1.000 cái)</td></tr>
      <tr><td>33</td><td>Combo Xô 1 Lít (xô + nắp + bịch 1 xô)</td><td>Thùng</td><td>1 thùng (300 cái)</td></tr>
      <tr><td>34</td><td>Bịch 1 Ly Phúc Tea 25.01</td><td>Kg</td><td>5 kg (kiện 5 kg)</td></tr>
      <tr><td>35</td><td>Bịch 2 Ly Phúc Tea 25.01</td><td>Kg</td><td>5 kg (kiện 5 kg)</td></tr>
      <tr><td>36</td><td>Ống Hút Bọc Kiếng Phúc Tea</td><td>Kg</td><td>5 kg (kiện 5 kg)</td></tr>
      <tr><td>37</td><td>Cuộn Ép Màng Ly Phúc Tea 25.01</td><td>Cuộn</td><td>1 cuộn</td></tr>
    </table></div>
  </div>

  <div class="section">
    <h3>Nhóm Vật Liệu (8 mặt hàng)</h3>
    <div class="table-wrap"><table>
      <tr><th>STT</th><th>Tên sản phẩm</th><th>ĐVT</th><th>MOQ</th></tr>
      <tr><td>38</td><td>Nắp Cầu Ly 400ml Phi 93</td><td>Thùng</td><td>1 thùng (1.000 cái)</td></tr>
      <tr><td>39</td><td>Nắp Bằng Cao Phi 95</td><td>Thùng</td><td>1 thùng (1.000 cái)</td></tr>
      <tr><td>40</td><td>Hũ Nhựa Topping Nắp Liền 4oz (PET)</td><td>Thùng</td><td>1 thùng (2.000 cái)</td></tr>
      <tr><td>41</td><td>Muỗng Vàng 20cm</td><td>Thùng</td><td>1 thùng (2.500 cái)</td></tr>
      <tr><td>42</td><td>Bịch Chữ T Phúc Tea</td><td>Kg</td><td>5 kg (kiện 5 kg)</td></tr>
      <tr><td>43</td><td>Ống Hút Cà Phê</td><td>Kg</td><td>5 kg</td></tr>
      <tr><td>44</td><td>Giấy Chống Tràn 13cm (500 tờ)</td><td>Xấp</td><td>1 xấp</td></tr>
      <tr><td>45</td><td>Giấy Chống Tràn 16cm – Xô (500 tờ)</td><td>Xấp</td><td>1 xấp</td></tr>
    </table></div>
  </div>

  <div class="section">
    <div class="callout callout-danger">
      <div class="callout-icon">⭐</div>
      <div class="callout-body">
        <strong>ĐIỂM CỐT LÕI BÀI 5</strong>
        <ul>
          <li>Tất cả các loại ly: MOQ <strong>1 thùng = 1.000 cái</strong></li>
          <li>Ly Nhựa 600ml là <strong>SP Chính</strong> – luôn dự trữ đủ</li>
          <li>Phí VC VL: <strong>ĐÃ BAO GỒM</strong> – không trả thêm</li>
          <li>Nhà xe thu phí VL bất thường → <strong>gọi Kho trước khi trả</strong></li>
        </ul>
      </div>
    </div>
  </div>`
},

/* ===================================================
   BÀI 6 – QUY TRÌNH ĐẶT HÀNG TRÊN KIOTVIET
   =================================================== */
{
  id: 5,
  icon: '🛒',
  title: 'Quy Trình Đặt Hàng Trên KiotViet',
  subtitle: 'Đăng nhập · 8 bước đặt hàng · Lưu tạm vs Đặt hàng',
  content: `
  <div class="lesson-hero">
    <div class="lesson-hero-icon">📱</div>
    <div class="lesson-hero-text">
      <h4>KiotViet – Cổng Đặt Hàng Chính Thức</h4>
      <p>Mọi đơn hàng phải đặt qua KiotViet. Bài này hướng dẫn từ bước đăng nhập đến khi đơn được Kho xác nhận.</p>
    </div>
  </div>

  <div class="section">
    <h3>🔑 Thông Tin Đăng Nhập KiotViet</h3>
    <div class="info-rows">
      <div class="info-row">
        <div class="ir-label">Ứng dụng</div>
        <div class="ir-value">KiotViet – Phần mềm quản lý bán hàng (App Store / CH Play)<br/><span style="color:#dc2626;font-size:12px">⚠️ Không tải nhầm "KiotViet Nhân viên Nhà hàng"</span></div>
      </div>
      <div class="info-row">
        <div class="ir-label">Tên gian hàng</div>
        <div class="ir-value"><strong style="font-size:16px">taivuphuc</strong></div>
      </div>
      <div class="info-row">
        <div class="ir-label">Tên đăng nhập</div>
        <div class="ir-value">Họ tên chủ cửa hàng viết liền không dấu<br/>Ví dụ: <code>tranthihanhnhan.ccn</code></div>
      </div>
      <div class="info-row">
        <div class="ir-label">Mật khẩu</div>
        <div class="ir-value">Xem tin nhắn ghim trong <strong>Group Zalo Kho</strong> – không chia sẻ ra ngoài</div>
      </div>
    </div>
  </div>

  <div class="section">
    <h3>✅ Chuẩn Bị Trước Khi Đặt Hàng</h3>
    <div class="callout callout-info">
      <div class="callout-icon">📊</div>
      <div class="callout-body">
        <strong>2 việc bắt buộc trước khi vào KiotViet:</strong>
        <ul>
          <li>Kiểm đếm tồn kho thực tế, so với mức <strong>Min</strong> trong File Min/Max</li>
          <li>Lập danh sách hàng cần đặt theo 5 nhóm: Trà · Bột &amp; Cà phê · Topping &amp; Syrup · Ly &amp; phụ kiện · Bao bì mềm</li>
        </ul>
        <p style="margin-top:8px">💡 Đặt khi tồn còn đủ dùng: Miền Nam ≈ <strong>2 tuần</strong> | Miền Trung/Bắc ≈ <strong>3 tuần</strong></p>
      </div>
    </div>
  </div>

  <div class="section">
    <h3>8 Bước Đặt Hàng</h3>
    <ul class="timeline">
      <li class="tl-item">
        <div class="tl-dot">1</div>
        <div class="tl-content"><strong>Kiểm tồn kho, so với File Min/Max</strong><p>Liệt kê những mặt hàng sắp về mức Min</p></div>
      </li>
      <li class="tl-item">
        <div class="tl-dot">2</div>
        <div class="tl-content"><strong>Lập danh sách hàng cần nhập, kiểm MOQ</strong><p>Đảm bảo số lượng mỗi mặt hàng ≥ MOQ</p></div>
      </li>
      <li class="tl-item">
        <div class="tl-dot">3</div>
        <div class="tl-content"><strong>Vào KiotViet: Tab Bán Hàng → Đặt hàng → tìm đúng tên Cửa Hàng (PHUCTEAxxx)</strong><p style="color:#dc2626">⚠️ Không để "Khách lẻ" – Kho sẽ không xác định được đơn</p></div>
      </li>
      <li class="tl-item">
        <div class="tl-dot">4</div>
        <div class="tl-content"><strong>Thêm sản phẩm → chỉnh số lượng → kiểm Tổng tiền → bấm "Đặt hàng"</strong><p>Bật chọn nhiều để nhanh hơn khi thêm nhiều SP cùng lúc</p></div>
      </li>
      <li class="tl-item">
        <div class="tl-dot">5</div>
        <div class="tl-content"><strong>Màn hình Thanh toán: chọn "Tiền mặt" → bấm "Thanh toán"</strong><p>Luôn chọn Tiền mặt dù thực tế chuyển khoản ngân hàng</p></div>
      </li>
      <li class="tl-item">
        <div class="tl-dot tl-warn">6</div>
        <div class="tl-content"><strong>⚠️ Chụp màn hình đơn → Gửi Group Zalo Kho NGAY</strong><div class="tl-deadline">BẮT BUỘC</div></div>
      </li>
      <li class="tl-item">
        <div class="tl-dot">7</div>
        <div class="tl-content"><strong>Chuyển khoản thanh toán (xem Bài 7)</strong><p>Trước 16:30 để chốt ngày – sau 16:30 xử lý ngày hôm sau</p></div>
      </li>
      <li class="tl-item">
        <div class="tl-dot tl-warn">8</div>
        <div class="tl-content"><strong>⚠️ Chụp bill chuyển khoản → Gửi Group Zalo Kho + kèm mã đơn</strong><div class="tl-deadline">BẮT BUỘC</div></div>
      </li>
    </ul>
  </div>

  <div class="section">
    <h3>🤔 Lưu Tạm vs Đặt Hàng – Khác Nhau Chỗ Nào?</h3>
    <div class="compare-row">
      <div class="compare-col col-red">
        <h4>💾 Lưu Tạm</h4>
        <div class="info-rows" style="margin:8px 0">
          <div class="info-row"><div class="ir-label" style="min-width:100px">Hệ thống nhận?</div><div class="ir-value">❌ Chưa nhận</div></div>
          <div class="info-row"><div class="ir-label" style="min-width:100px">Dùng khi</div><div class="ir-value">Chưa xong, cần sửa thêm</div></div>
          <div class="info-row"><div class="ir-label" style="min-width:100px">Muốn sửa?</div><div class="ir-value">Tự sửa được ngay trên app</div></div>
        </div>
      </div>
      <div class="compare-col col-green">
        <h4>✅ Đặt Hàng</h4>
        <div class="info-rows" style="margin:8px 0">
          <div class="info-row"><div class="ir-label" style="min-width:100px">Hệ thống nhận?</div><div class="ir-value">✅ Nhận ngay</div></div>
          <div class="info-row"><div class="ir-label" style="min-width:100px">Dùng khi</div><div class="ir-value">Đơn chắc chắn, sẵn sàng giao</div></div>
          <div class="info-row"><div class="ir-label" style="min-width:100px">Muốn sửa?</div><div class="ir-value" style="color:#dc2626"><strong>Nhắn Zalo Kho – Kho sửa, không tự sửa</strong></div></div>
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="callout callout-danger">
      <div class="callout-icon">⭐</div>
      <div class="callout-body">
        <strong>ĐIỂM CỐT LÕI BÀI 6</strong>
        <ul>
          <li>Chọn đúng tên CH (PHUCTEAxxx) – <strong>không để "Khách lẻ"</strong></li>
          <li>Phương thức trên KiotViet: luôn chọn <strong>"Tiền mặt"</strong></li>
          <li>Sau bấm "Đặt hàng": <strong>chụp đơn gửi Zalo Kho ngay</strong></li>
          <li>Muốn sửa đơn → nhắn Zalo Kho, <strong>không tự sửa trên KiotViet</strong></li>
        </ul>
      </div>
    </div>
  </div>`
},

/* ===================================================
   BÀI 7 – THANH TOÁN & XÁC NHẬN ĐƠN
   =================================================== */
{
  id: 6,
  icon: '💰',
  title: 'Thanh Toán & Xác Nhận Đơn',
  subtitle: 'Tài khoản ngân hàng · Giờ chốt · Mẫu Zalo Kho',
  content: `
  <div class="lesson-hero">
    <div class="lesson-hero-icon">🏦</div>
    <div class="lesson-hero-text">
      <h4>Thanh Toán Đúng – Đơn Chạy Nhanh</h4>
      <p>Kho chỉ xử lý đơn khi nhận đủ 2 bằng chứng: ảnh đơn KiotViet + bill chuyển khoản. Thiếu 1 trong 2 → đơn chờ.</p>
    </div>
  </div>

  <div class="section">
    <h3>🏦 Thông Tin Tài Khoản</h3>
    <div class="callout callout-success">
      <div class="callout-icon">💳</div>
      <div class="callout-body">
        <strong>Tài khoản nhận tiền hàng Phúc Tea</strong>
        <div style="margin-top:8px;line-height:2.2">
          <span class="num-highlight" style="font-size:1.8em">689767678888</span><br/>
          <strong>Ngân hàng:</strong> PVcombank<br/>
          <strong>Chủ TK:</strong> CÔNG TY CỔ PHẦN SX TM DV TÀI VŨ PHÚC<br/>
          <strong>Nội dung chuyển khoản:</strong> <code style="background:#e5e7eb;padding:2px 8px;border-radius:4px">chuyen tien</code>
        </div>
      </div>
    </div>
    <div class="callout callout-danger">
      <div class="callout-icon">🔒</div>
      <div class="callout-body">
        <strong>Cảnh báo bảo mật!</strong>
        <p>Mọi thông báo thay đổi số TK phải xác nhận qua Hotline <strong>0344 858 727</strong> trước khi chuyển tiền. Không chuyển theo thông báo bất kỳ từ mạng xã hội.</p>
      </div>
    </div>
  </div>

  <div class="section">
    <h3>⏰ Giờ Chốt Đơn</h3>
    <div class="compare-row">
      <div class="compare-col col-green">
        <h4>✅ Trước 16:30 (Thứ 2–Thứ 6)</h4>
        <p style="font-size:13px">Kho xác nhận <strong>trong ngày</strong> làm việc đó</p>
      </div>
      <div class="compare-col col-red">
        <h4>⏱️ Sau 16:30 hoặc T7/CN</h4>
        <p style="font-size:13px">Kho xác nhận <strong>sáng ngày làm việc tiếp theo</strong></p>
      </div>
    </div>
    <div class="callout callout-info">
      <div class="callout-icon">📌</div>
      <div class="callout-body">
        <strong>Thứ tự gửi vào Group Zalo Kho:</strong>
        <ul>
          <li>Bước 1: Ảnh chụp màn hình đơn KiotViet (sau bấm Đặt hàng)</li>
          <li>Bước 2: Bill chuyển khoản + kèm mã đơn (DH...)</li>
          <li>Thiếu 1 trong 2 → Kho chưa xử lý</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="section">
    <h3>💬 Mẫu Tin Nhắn Group Zalo Kho</h3>
    <div class="table-wrap"><table>
      <tr><th>Thời điểm</th><th>Mẫu tin nhắn chuẩn</th></tr>
      <tr><td><strong>Sau Đặt hàng</strong></td><td>[Mã CH – Tên CH]<br/>Đã lên đơn KiotViet mã <strong>DH…</strong>, tổng tiền <strong>…đ</strong>, gồm <strong>…</strong> mặt hàng.<br/><em>(Kèm ảnh màn hình đơn)</em></td></tr>
      <tr><td><strong>Sau chuyển khoản</strong></td><td>[Mã CH – Tên CH]<br/>Đã chuyển khoản đơn <strong>DH…</strong>, số tiền <strong>…đ</strong>, lúc <strong>…h ngày …</strong><br/><em>(Kèm ảnh bill chuyển khoản)</em></td></tr>
      <tr><td><strong>Muốn sửa đơn</strong></td><td>[Mã CH – Tên CH]<br/>Nhờ Kho sửa đơn <strong>DH…</strong>: [nêu rõ cần sửa gì]</td></tr>
    </table></div>
  </div>

  <div class="section">
    <div class="callout callout-danger">
      <div class="callout-icon">⭐</div>
      <div class="callout-body">
        <strong>ĐIỂM CỐT LÕI BÀI 7</strong>
        <ul>
          <li>STK: <strong>689767678888</strong> PVcombank – nội dung: <strong>chuyen tien</strong></li>
          <li>Giờ chốt: <strong>16:30</strong> Thứ 2–Thứ 6</li>
          <li>Phải gửi <strong>cả ảnh đơn lẫn bill</strong> vào Zalo Kho – thiếu 1 → Kho chưa xử lý</li>
          <li>Thay đổi số TK → xác nhận qua <strong>0344 858 727</strong> trước khi chuyển</li>
        </ul>
      </div>
    </div>
  </div>`
},

/* ===================================================
   BÀI 8 – NHẬN HÀNG & XỬ LÝ SỰ CỐ
   =================================================== */
{
  id: 7,
  icon: '🛡️',
  title: 'Nhận Hàng & Xử Lý Sự Cố',
  subtitle: 'Thời gian giao · Checklist 5 điểm · SLA cam kết',
  content: `
  <div class="lesson-hero">
    <div class="lesson-hero-icon">🚚</div>
    <div class="lesson-hero-text">
      <h4>Nhận Hàng Đúng Cách – Tránh Mọi Rủi Ro</h4>
      <p>Bài cuối cùng và quan trọng nhất cho vận hành hằng ngày: nhận hàng đúng cách và xử lý sự cố kịp thời. Hạn báo lỗi chỉ <strong>1 ngày làm việc</strong> – không được bỏ qua.</p>
    </div>
  </div>

  <div class="section">
    <h3>📅 Thời Gian Giao Hàng</h3>
    <div class="compare-row">
      <div class="compare-col col-green">
        <h4>🟢 Vùng Xanh – Miền Nam</h4>
        <div style="text-align:center;margin-top:8px"><span class="num-highlight" style="font-size:2.5em">5–7</span><br/><span style="font-size:12px;color:var(--gray)">ngày làm việc</span></div>
      </div>
      <div class="compare-col col-red" style="border-color:#fcd34d;background:#fffbeb">
        <h4 style="color:#854d0e">🟡 Vùng Vàng – Miền Trung &amp; Bắc</h4>
        <div style="text-align:center;margin-top:8px"><span class="num-highlight red" style="font-size:2.5em">7–10</span><br/><span style="font-size:12px;color:var(--gray)">ngày làm việc</span></div>
      </div>
    </div>
    <div class="callout callout-info">
      <div class="callout-icon">⏱️</div>
      <div class="callout-body">
        <strong>Tính từ ngày nào?</strong>
        <p>Từ ngày <strong>Hệ thống xác nhận đơn</strong> (đơn chuyển sang tab Hóa đơn), không phải ngày bấm Đặt hàng. Không tính Thứ 7, Chủ Nhật, Lễ Tết.</p>
      </div>
    </div>
  </div>

  <div class="section">
    <h3>✅ Checklist 5 Điểm Nhận Hàng</h3>
    <ul class="checklist">
      <li>
        <div class="check-num">1</div>
        <div class="check-text">
          <strong>Số lượng</strong> – đếm kiện với nhà vận chuyển, sau đó đếm từng mặt hàng
          <span class="check-sub">Đạt: đủ kiện, đủ số lượng theo Biên nhận</span>
        </div>
      </li>
      <li>
        <div class="check-num">2</div>
        <div class="check-text">
          <strong>Đối chiếu</strong> – so tên hàng, ĐVT, số lượng với Biên nhận và đơn đặt
          <span class="check-sub">Đạt: khớp 100% giữa hàng thực nhận và chứng từ</span>
        </div>
      </li>
      <li>
        <div class="check-num">3</div>
        <div class="check-text">
          <strong>Bao bì</strong> – kiểm thùng, gói, lon, hủ: méo, rách, thủng, ướt, phồng, rò rỉ
          <span class="check-sub">Đạt: nguyên vẹn hoàn toàn</span>
        </div>
      </li>
      <li>
        <div class="check-num">4</div>
        <div class="check-text">
          <strong>Hạn sử dụng</strong> – đọc NSX/HSD từng lô hàng
          <span class="check-sub">Đạt: còn ít nhất <strong>1/3 hạn dùng</strong> trở lên</span>
        </div>
      </li>
      <li>
        <div class="check-num">5</div>
        <div class="check-text">
          <strong>Chất lượng SP</strong> – màu, mùi, vón cục, ẩm mốc, dị vật; ly in đúng mẫu, không nứt
          <span class="check-sub">Đạt: đúng chuẩn, không có biểu hiện bất thường</span>
        </div>
      </li>
    </ul>
    <div class="callout callout-danger">
      <div class="callout-icon">🎥</div>
      <div class="callout-body">
        <strong>Mẹo quan trọng: Quay video khi mở thùng!</strong>
        <p>Khi mở thùng có lon, hũ, chai → <strong>quay video liên tục</strong>. Video là bằng chứng quan trọng nhất nếu xảy ra sự cố lỗi hàng. Phát hiện bất thường → <strong>Giữ nguyên hiện trạng, KHÔNG sử dụng</strong>.</p>
      </div>
    </div>
  </div>

  <div class="section">
    <h3>🔧 Quy Trình Xử Lý Sự Cố (5 Bước)</h3>
    <ul class="timeline">
      <li class="tl-item">
        <div class="tl-dot">1</div>
        <div class="tl-content"><strong>Quay video / chụp hình rõ nét</strong><p>Phải thấy: tên hàng, lô, HSD, vị trí lỗi</p></div>
      </li>
      <li class="tl-item">
        <div class="tl-dot tl-warn">2</div>
        <div class="tl-content">
          <strong>⚠️ Gửi Group Zalo Kho đủ 4 yếu tố</strong>
          <p>① Hình/Video · ② Tên SP · ③ Số lượng lỗi · ④ Mô tả lỗi</p>
          <div class="tl-deadline">Trong 1 ngày làm việc từ ngày nhận hàng</div>
        </div>
      </li>
      <li class="tl-item">
        <div class="tl-dot">3</div>
        <div class="tl-content"><strong>Hệ thống tiếp nhận, thẩm định nguyên nhân</strong><p>Phản hồi ban đầu: 30–60 phút · Đánh giá toàn diện: trong 24 giờ</p></div>
      </li>
      <li class="tl-item">
        <div class="tl-dot">4</div>
        <div class="tl-content"><strong>Kho đề xuất phương án</strong><p>Đổi hàng · Trả hàng · Bù trừ công nợ · Giao bổ sung</p></div>
      </li>
      <li class="tl-item">
        <div class="tl-dot">5</div>
        <div class="tl-content"><strong>Cửa Hàng xác nhận → Kho hoàn tất đổi/trả</strong><div class="tl-deadline">Tối đa 3 ngày làm việc sau khi CH xác nhận</div></div>
      </li>
    </ul>
  </div>

  <div class="section">
    <h3>⏱️ Bảng SLA Cam Kết</h3>
    <div class="sla-grid">
      <div class="sla-card sla-warn">
        <span class="sla-num">1 ngày</span>
        <span class="sla-label">Hạn chót báo lỗi</span>
        <span class="sla-party">Cửa Hàng thực hiện</span>
      </div>
      <div class="sla-card">
        <span class="sla-num">30–60 phút</span>
        <span class="sla-label">Phản hồi ban đầu</span>
        <span class="sla-party">Hệ thống thực hiện</span>
      </div>
      <div class="sla-card">
        <span class="sla-num">24 giờ</span>
        <span class="sla-label">Đánh giá toàn diện</span>
        <span class="sla-party">Hệ thống thực hiện</span>
      </div>
      <div class="sla-card">
        <span class="sla-num">3 ngày</span>
        <span class="sla-label">Hoàn tất đổi/trả</span>
        <span class="sla-party">Kho thực hiện</span>
      </div>
    </div>
    <div class="callout callout-success">
      <div class="callout-icon">👤</div>
      <div class="callout-body">
        <strong>Liên Hệ CCU Phúc Tea</strong>
        <p><strong>Trần Thị Hạnh Nhân</strong><br/>
        📞 <strong>0344 858 727</strong> &nbsp;|&nbsp; 📧 hanhnhan@phuctea.com.vn<br/>
        📱 Kênh chính: <strong>Group Zalo Kho</strong><br/>
        🕐 Thứ 2–Thứ 6: 09:00–16:30 · T7/CN: tiếp nhận, xử lý sáng Thứ Hai</p>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="callout callout-danger">
      <div class="callout-icon">👑</div>
      <div class="callout-body">
        <strong>7 QUY TẮC VÀNG (SOP V2.0)</strong>
        <ol style="padding-left:18px;margin-top:8px;line-height:2.6">
          <li><strong>NL ĐQ + VL:</strong> bắt buộc đặt qua KiotViet · <strong>NL thương mại:</strong> có thể tự mua nhưng đúng nhãn hiệu</li>
          <li>Sau đặt hàng: <strong>chụp đơn → gửi Group Zalo Kho</strong></li>
          <li>Sau chuyển khoản: <strong>chụp bill → gửi Group Zalo Kho + kèm mã đơn</strong></li>
          <li>Khi nhận hàng: kiểm tra <strong>5 điểm</strong>, HSD phải còn ≥ 1/3 hạn</li>
          <li>Phát hiện lỗi: <strong>báo trong 1 ngày làm việc</strong> – quá hạn không giải quyết</li>
          <li>Phí VC: <strong>NL tự trả</strong> | <strong>VL đã bao gồm</strong></li>
          <li>Mọi thắc mắc: <strong>Group Zalo Kho</strong> hoặc <strong>0344 858 727</strong></li>
        </ol>
      </div>
    </div>
  </div>`
}

,

/* ===================================================
   BÀI 9 – CẨM NANG VẬN HÀNH (QUICK REFERENCE)
   =================================================== */
{
  id: 8,
  icon: '📒',
  title: 'Cẩm Nang Vận Hành',
  subtitle: 'Tóm tắt quy trình · Liên hệ · Câu hỏi thường gặp',
  content: `
  <div class="lesson-hero">
    <div class="lesson-hero-icon">📒</div>
    <div class="lesson-hero-text">
      <h4>Cẩm Nang Tra Cứu Nhanh</h4>
      <p>Tóm tắt toàn bộ quy trình vận hành kho trong 1 bài – dùng để tra cứu nhanh khi cần, không phải học lại từ đầu.</p>
    </div>
  </div>

  <div class="section">
    <h3>📞 Thông Tin Liên Hệ Quan Trọng</h3>
    <div class="info-rows">
      <div class="info-row"><div class="ir-label">Group Zalo Kho</div><div class="ir-value">Kênh DUY NHẤT cho mọi giao dịch với Kho – đặt hàng, thanh toán, báo lỗi</div></div>
      <div class="info-row"><div class="ir-label">CCU Phúc Tea</div><div class="ir-value"><strong>Trần Thị Hạnh Nhân</strong> · 📞 0344 858 727 · hanhnhan@phuctea.com.vn</div></div>
      <div class="info-row"><div class="ir-label">Giờ làm việc</div><div class="ir-value">Thứ 2–Thứ 6: 09:00–16:30 · T7/CN: tiếp nhận, xử lý sáng Thứ Hai</div></div>
      <div class="info-row"><div class="ir-label">Tên gian hàng KV</div><div class="ir-value"><strong>taivuphuc</strong> (trên ứng dụng KiotViet)</div></div>
      <div class="info-row"><div class="ir-label">Tài khoản ngân hàng</div><div class="ir-value">STK: <strong>689767678888</strong> · PVcombank · Chủ tài khoản: Phúc Tea</div></div>
    </div>
  </div>

  <div class="section">
    <h3>⚡ Quy Trình Đặt Hàng Tóm Tắt (5 Bước)</h3>
    <div class="checklist">
      <div class="check-num">1</div><div class="check-text">Kiểm tra tồn kho theo File Min/Max → xác định SP cần đặt &amp; số lượng</div>
      <div class="check-num">2</div><div class="check-text">Đăng nhập KiotViet → tìm "taivuphuc" → thêm SP vào giỏ → nhấn <strong>Đặt Hàng</strong> (không phải Lưu Tạm)</div>
      <div class="check-num">3</div><div class="check-text">Chụp màn hình đơn hàng → gửi vào <strong>Group Zalo Kho</strong></div>
      <div class="check-num">4</div><div class="check-text">Chuyển khoản theo số tiền hóa đơn → chụp bill → gửi vào Group Zalo Kho kèm <strong>mã đơn hàng</strong></div>
      <div class="check-num">5</div><div class="check-text">Nhận hàng: kiểm tra 5 điểm → ký xác nhận → báo lỗi (nếu có) trong <strong>1 ngày làm việc</strong></div>
    </div>
  </div>

  <div class="section">
    <h3>🏭 Hàng Xuất Từ Kho Nào?</h3>
    <div class="card-grid">
      <div class="card-item">
        <div class="ci-icon">📦</div>
        <div class="ci-title">Kho Nguyên Liệu HCM</div>
        <div class="ci-desc" style="text-align:left">9 NL Độc Quyền + toàn bộ NL Thương Mại (trừ Cà Phê Mộc)</div>
      </div>
      <div class="card-item">
        <div class="ci-icon">🏭</div>
        <div class="ci-title">Kho Cần Thơ</div>
        <div class="ci-desc" style="text-align:left">Cà Phê Mộc 9:1 (MOQ 2 kg)</div>
      </div>
      <div class="card-item">
        <div class="ci-icon">🧃</div>
        <div class="ci-title">Kho Vật Liệu HCM</div>
        <div class="ci-desc" style="text-align:left">Toàn bộ VL Độc Quyền &amp; VL thông thường (ly, bịch, ống hút, nắp…)</div>
      </div>
    </div>
  </div>

  <div class="section">
    <h3>❓ Câu Hỏi Thường Gặp</h3>
    <div class="info-rows">
      <div class="info-row">
        <div class="ir-label" style="min-width:160px">Lưu Tạm vs Đặt Hàng?</div>
        <div class="ir-value"><strong>Lưu Tạm</strong> = Kho chưa nhận, không xử lý. Phải nhấn <strong>Đặt Hàng</strong> để đơn được tiếp nhận.</div>
      </div>
      <div class="info-row">
        <div class="ir-label" style="min-width:160px">Quá giờ 16:30 thì sao?</div>
        <div class="ir-value">Đơn sẽ được xử lý vào sáng ngày làm việc tiếp theo.</div>
      </div>
      <div class="info-row">
        <div class="ir-label" style="min-width:160px">Phí VC thế nào?</div>
        <div class="ir-value"><strong>NL:</strong> CHƯA bao gồm – Cửa Hàng trả khi nhận. <strong>VL:</strong> ĐÃ bao gồm trong giá.</div>
      </div>
      <div class="info-row">
        <div class="ir-label" style="min-width:160px">Hàng bao lâu tới?</div>
        <div class="ir-value">Miền Nam: 5–7 ngày · Miền Trung/Bắc: 7–10 ngày làm việc sau khi thanh toán.</div>
      </div>
      <div class="info-row">
        <div class="ir-label" style="min-width:160px">Nhận hàng lỗi thì làm gì?</div>
        <div class="ir-value">Quay video mở thùng → gửi Group Zalo Kho đủ: Hình/Video + Tên SP + SL lỗi + Mô tả. Báo trong <strong>1 ngày làm việc</strong>.</div>
      </div>
      <div class="info-row">
        <div class="ir-label" style="min-width:160px">NL thương mại tự mua được không?</div>
        <div class="ir-value">Được, nhưng phải <strong>đúng nhãn hiệu</strong> quy định. Mứt Hibiscus ngoại lệ: chỉ có Hệ thống cung cấp.</div>
      </div>
      <div class="info-row">
        <div class="ir-label" style="min-width:160px">Hóa đơn ở đâu?</div>
        <div class="ir-value">Tab <strong>Hóa đơn</strong> trên KiotViet. Đơn đã được xác nhận sẽ hiện ở đây.</div>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="callout callout-success">
      <div class="callout-icon">🏆</div>
      <div class="callout-body">
        <strong>Chúc Mừng! Bạn Đã Hoàn Thành 9 Bài Học</strong>
        <p>Bây giờ hãy làm <strong>Bài Kiểm Tra Tổng Kết</strong> để nhận <strong>Giấy Chứng Nhận</strong> hoàn thành khóa học nhé! 🎓</p>
      </div>
    </div>
  </div>`
}

]; /* end LESSONS */


/* ===== KIỂM TRA TỔNG KẾT – PHÚC TEA (30 câu) ===== */

const FINAL_QUIZ = [

  /* Nhóm 1 – Giới Thiệu & Vai Trò */
  {
    q: 'Kênh làm việc DUY NHẤT giữa Cửa Hàng và Kho trong SOP V2.0 là gì?',
    opts: ['Hotline 0344 858 727', 'Email CCU', 'Group Zalo Kho', 'Tab Hóa đơn KiotViet'],
    c: 2,
    exp: 'Group Zalo Kho là kênh DUY NHẤT cho mọi giao dịch: đặt hàng, thanh toán, nhận hàng, báo sự cố.'
  },
  {
    q: '"Ngày làm việc" theo SOP V2.0 là những ngày nào?',
    opts: ['Thứ 2–Thứ 7, không tính Chủ Nhật', 'Thứ 2–Thứ 6, 09:00–16:30, không tính T7/CN/Lễ Tết', 'Thứ 2–Thứ 6, 08:00–17:00', 'Tất cả các ngày trừ Chủ Nhật'],
    c: 1,
    exp: 'Ngày làm việc = Thứ 2 đến Thứ 6, 09:00–16:30; không tính Thứ 7, Chủ Nhật và Lễ Tết.'
  },
  {
    q: 'Hạn chót Cửa Hàng phải báo lỗi hàng là bao lâu từ ngày nhận?',
    opts: ['Trong ngày nhận hàng', '1 ngày làm việc', '3 ngày', '5 ngày làm việc'],
    c: 1,
    exp: 'SOP V2.0: hạn chót báo lỗi là 1 ngày làm việc từ ngày nhận hàng. Quá hạn → Hệ thống không giải quyết.'
  },

  /* Nhóm 2 – Phân Loại & Phí VC */
  {
    q: 'SOP V2.0 chia hàng hóa thành mấy nhóm chính?',
    opts: ['2 nhóm', '3 nhóm', '4 nhóm', '5 nhóm'],
    c: 2,
    exp: '4 nhóm: NL Độc Quyền · Nguyên liệu · VL Độc Quyền · Vật liệu.'
  },
  {
    q: 'Nhóm hàng nào có phí vận chuyển ĐÃ BAO GỒM trong giá?',
    opts: ['NL Độc Quyền và Nguyên liệu', 'VL Độc Quyền và Vật liệu', 'Chỉ VL Độc Quyền', 'Tất cả 4 nhóm'],
    c: 1,
    exp: 'VL Độc Quyền + Vật liệu: phí VC ĐÃ BAO GỒM. NL Độc Quyền + Nguyên liệu: CHƯA bao gồm.'
  },
  {
    q: 'Đơn hàng có cả NL và VL, Cửa Hàng trả phí vận chuyển thế nào?',
    opts: ['Trả phí cho cả 2 nhóm', 'Không trả vì đã bao gồm', 'Chỉ trả phí phần NL', 'Trả nửa phí tổng đơn'],
    c: 2,
    exp: 'Đơn hỗn hợp: chỉ trả phí phần NL. Phần VL đã bao gồm, không trả thêm.'
  },
  {
    q: 'Nhà xe thu phí khi giao VL, Cửa Hàng cần làm gì?',
    opts: ['Trả ngay vì đó là bình thường', 'Từ chối nhận hàng', 'Gọi Kho (0344 858 727) xác nhận TRƯỚC khi trả', 'Gửi thắc mắc lên email'],
    c: 2,
    exp: 'VL đã bao gồm phí VC. Nếu nhà xe thu thêm → gọi Kho xác nhận TRƯỚC khi trả.'
  },

  /* Nhóm 3 – NL Độc Quyền */
  {
    q: 'SOP V2.0 có bao nhiêu loại NL Độc Quyền?',
    opts: ['10 loại', '11 loại', '13 loại', '15 loại'],
    c: 2,
    exp: '13 NL Độc Quyền: thêm Trà Oolong Quế Hoa, Trà Hoa Cỏ Mùa Xuân và Bột Milk Foam so với V1.'
  },
  {
    q: 'Bột Milk Foam Phúc Tea thuộc nhóm nào trong SOP V2.0?',
    opts: ['Nguyên liệu thương mại', 'VL Độc Quyền', 'NL Độc Quyền', 'Vật liệu'],
    c: 2,
    exp: 'SOP V2.0 chuyển Bột Milk Foam từ Nguyên liệu (SOP V1) vào nhóm NL Độc Quyền.'
  },
  {
    q: 'MOQ của Trà Đen Phúc Tea là bao nhiêu?',
    opts: ['1 gói', '3 gói', '5 gói', '10 gói'],
    c: 2,
    exp: 'Trà Đen, Trà HT Vị Đào, Trà HT Vị Vải đều có MOQ 5 gói/lần đặt.'
  },
  {
    q: 'MOQ của Trân Châu Giòn Phúc Tea là bao nhiêu?',
    opts: ['1 gói', '1 thùng (3 gói)', '1 thùng (6 gói)', '1 thùng (12 gói)'],
    c: 2,
    exp: 'Trân Châu Giòn Phúc Tea: MOQ 1 thùng (6 gói).'
  },

  /* Nhóm 4 – Nguyên Liệu Thương Mại */
  {
    q: 'SOP V2.0 có bao nhiêu Nguyên liệu thương mại?',
    opts: ['12 loại', '14 loại', '15 loại', '16 loại'],
    c: 2,
    exp: 'SOP V2.0 có 15 Nguyên liệu thương mại (giảm từ 16 ở SOP V1 do Bột Milk Foam chuyển sang NL ĐQ).'
  },
  {
    q: 'MOQ của Thạch Nha Đam là bao nhiêu?',
    opts: ['1 gói', '3 gói', '5 gói (10 gói/thùng)', '1 thùng'],
    c: 2,
    exp: 'Thạch Nha Đam: MOQ 5 gói (thùng có 10 gói, đặt tối thiểu 5 gói/lần).'
  },
  {
    q: 'Giá Nguyên liệu thương mại thay đổi thế nào và cần làm gì?',
    opts: ['Giá cố định, không cần kiểm tra', 'Giá theo thị trường – kiểm tra trên KiotViet trước khi đặt', 'Hệ thống thông báo trước 15 ngày', 'Giá chỉ thay đổi 1 lần/năm'],
    c: 1,
    exp: 'Nguyên liệu thương mại: giá biến động theo thị trường, cập nhật tự động trên KiotViet. Kiểm tra trước khi đặt.'
  },

  /* Nhóm 5 – Vật Liệu Bao Bì */
  {
    q: 'SOP V2.0 có bao nhiêu loại VL Độc Quyền?',
    opts: ['8 loại', '9 loại', '10 loại', '12 loại'],
    c: 1,
    exp: '9 VL Độc Quyền (giảm từ 10 ở SOP V1): Ống Hút Cà Phê chuyển sang Vật liệu.'
  },
  {
    q: 'Ống Hút Cà Phê trong SOP V2.0 thuộc nhóm nào?',
    opts: ['NL Độc Quyền', 'VL Độc Quyền', 'Vật liệu', 'Nguyên liệu'],
    c: 2,
    exp: 'SOP V2.0: Ống Hút Cà Phê chuyển từ VL Độc Quyền (SOP V1) sang nhóm Vật liệu.'
  },
  {
    q: 'MOQ của các loại Ly Nhựa là bao nhiêu?',
    opts: ['100 cái/thùng', '500 cái/thùng', '1.000 cái/thùng', '2.000 cái/thùng'],
    c: 2,
    exp: 'MOQ tất cả các loại ly (ly giấy, ly nhựa 400/500/600ml): 1 thùng = 1.000 cái.'
  },

  /* Nhóm 6 – Đặt Hàng KiotViet */
  {
    q: 'Khi tìm khách hàng trên KiotViet để đặt hàng, cần chọn gì?',
    opts: ['Chọn "Khách lẻ" vì nhanh hơn', 'Chọn đúng tên Cửa Hàng với mã PHUCTEAxxx', 'Nhập số điện thoại cửa hàng', 'Chọn bất kỳ, Kho sẽ chỉnh sau'],
    c: 1,
    exp: 'Phải tìm và chọn đúng tên Cửa Hàng (mã PHUCTEAxxx). Không để "Khách lẻ" vì Kho không xác định được đơn của ai.'
  },
  {
    q: 'Trên KiotViet, phương thức thanh toán cần chọn là gì?',
    opts: ['Chuyển khoản', 'Thẻ tín dụng', 'Tiền mặt', 'Ví điện tử'],
    c: 2,
    exp: 'Luôn chọn "Tiền mặt" trên màn hình Thanh toán của KiotViet, dù thực tế chuyển khoản ngân hàng.'
  },
  {
    q: 'Cửa Hàng có được tự sửa đơn trên KiotViet sau khi đã bấm "Đặt hàng" không?',
    opts: ['Được, miễn là chưa thanh toán', 'Được nếu báo Kho trước', 'Không, mọi thay đổi phải nhắn Group Zalo Kho', 'Được trong 30 phút đầu sau khi đặt'],
    c: 2,
    exp: 'Không. Đơn đã Đặt hàng → nhắn Group Zalo Kho, Kho sẽ sửa. Cửa Hàng không tự sửa trực tiếp.'
  },

  /* Nhóm 7 – Thanh Toán & Xác Nhận */
  {
    q: 'Thông tin tài khoản thanh toán của Phúc Tea là gì?',
    opts: ['STK: 123456789 – Vietcombank – nội dung: phuctea', 'STK: 689767678888 – PVcombank – nội dung: chuyen tien', 'STK: 689767678888 – ACB – nội dung: dat hang', 'STK: 689767678888 – Techcombank – nội dung: thanh toan'],
    c: 1,
    exp: 'Đúng thông tin: STK 689767678888, PVcombank, TÀI VŨ PHÚC, nội dung: chuyen tien.'
  },
  {
    q: 'Giờ chốt đơn trong ngày là mấy giờ?',
    opts: ['15:00', '16:00', '16:30', '17:00'],
    c: 2,
    exp: 'Giờ chốt đơn: 16:30 Thứ 2–Thứ 6. Đơn đủ ảnh đơn + bill trước 16:30 → Kho xác nhận trong ngày.'
  },
  {
    q: 'Kho xác nhận xử lý đơn khi nhận được gì?',
    opts: ['Chỉ cần ảnh đơn KiotViet', 'Chỉ cần bill chuyển khoản', 'Đủ cả ảnh đơn KiotViet VÀ bill chuyển khoản trong Group Zalo Kho', 'Cần thêm ảnh tồn kho cửa hàng'],
    c: 2,
    exp: 'Kho chỉ xử lý khi nhận đủ 2 bằng chứng: (1) ảnh đơn KiotViet, (2) bill chuyển khoản – cả 2 trong Group Zalo Kho.'
  },
  {
    q: 'Nhận được thông báo thay đổi số TK ngân hàng qua Zalo/Facebook, Cửa Hàng cần làm gì?',
    opts: ['Chuyển tiền ngay theo số TK mới', 'Bỏ qua thông báo đó', 'Xác nhận qua Hotline 0344 858 727 TRƯỚC khi chuyển', 'Hỏi thêm các cửa hàng khác'],
    c: 2,
    exp: 'Bảo mật: mọi thay đổi số TK phải xác nhận qua Hotline 0344 858 727 trước khi thực hiện chuyển khoản.'
  },

  /* Nhóm 8 – Nhận Hàng & Xử Lý Sự Cố */
  {
    q: 'Thời gian giao hàng Miền Nam tính từ ngày nào?',
    opts: ['Từ ngày bấm "Đặt hàng"', 'Từ ngày chuyển khoản', 'Từ ngày Hệ thống xác nhận đơn (đơn chuyển sang tab Hóa đơn)', 'Từ ngày Kho gửi biên nhận'],
    c: 2,
    exp: 'Thời gian giao tính từ ngày Hệ thống XÁC NHẬN đơn (đơn ở tab Hóa đơn), không phải ngày bấm Đặt hàng.'
  },
  {
    q: 'Tiêu chí hạn sử dụng đạt chuẩn khi nhận hàng là gì?',
    opts: ['Còn hạn là được', 'Còn ít nhất 1/2 hạn dùng', 'Còn ít nhất 1/3 hạn dùng', 'Còn ít nhất 6 tháng'],
    c: 2,
    exp: 'SOP V2.0: hạn sử dụng đạt chuẩn khi còn lại ≥ 1/3 hạn dùng. Dưới mức này = "cận date" = sự cố cần báo.'
  },
  {
    q: '4 yếu tố bắt buộc khi báo sự cố qua Group Zalo Kho là gì?',
    opts: ['Mã đơn, tên sản phẩm, số lượng, ngày nhận', 'Hình ảnh/Video, tên sản phẩm, số lượng lỗi, mô tả lỗi', 'Hình ảnh, mã đơn, số tiền, đề xuất xử lý', 'Video, tên CH, mã SP, số lượng'],
    c: 1,
    exp: '4 yếu tố: (1) Hình ảnh/Video rõ nét, (2) Tên sản phẩm, (3) Số lượng lỗi/ĐVT, (4) Mô tả lỗi cụ thể.'
  },
  {
    q: 'Tin báo sự cố gửi vào Thứ 7, SLA được tính từ khi nào?',
    opts: ['Ngay từ lúc gửi Thứ 7', 'Từ 09:00 Thứ 7', 'Từ 09:00 Thứ Hai (ngày làm việc kế tiếp)', 'Từ 16:30 Thứ 6 trước đó'],
    c: 2,
    exp: 'Tin báo T7, CN hoặc sau 16:30 được tính SLA từ 09:00 ngày làm việc kế tiếp (sáng Thứ Hai).'
  },
  {
    q: 'Đối chiếu công nợ ĐTNQ diễn ra vào thời gian nào hằng tháng?',
    opts: ['Ngày 01–03', 'Ngày 05–08', 'Ngày 10–15', 'Cuối tháng (28–31)'],
    c: 1,
    exp: 'SOP V2.0: đối chiếu công nợ từ ngày 05 đến 08 hằng tháng.'
  }

]; /* end FINAL_QUIZ */


/* ===== THE HOA ===== */
const LESSONS_TH = [];
const FINAL_QUIZ_TH = [];

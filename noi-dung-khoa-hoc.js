/* ============================================================
   NOI DUNG KHOA HOC - Chuoi Cung Ung Phuc Tea
   Dua tren SOP SC-SOP-01 Phien ban 2.0, hieu luc 06/11/2026
   ============================================================ */


/* ===== PHÚC TEA ===== */

const LESSONS = [

/* ---- BÀI 1 ---- */
{
  id: 0,
  icon: '🏪',
  title: 'Tổng Quan Hệ Thống Chuỗi Cung Ứng',
  subtitle: 'Mục đích · Phạm vi · Vai trò · Thuật ngữ',
  content: `
  <div class="section">
    <h3>1. Mục Đích Của SOP</h3>
    <p>SOP Chuỗi Cung Ứng (Phiên bản 2.0, hiệu lực 06/11/2026) được xây dựng theo tinh thần: <strong>Chuẩn hóa cách làm việc – Rõ ràng trách nhiệm – Tối ưu hiệu quả.</strong></p>
    <div class="highlight-box info">
      <strong>5 mục tiêu cốt lõi:</strong>
      <ul style="margin-top:8px">
        <li>Đảm bảo Cửa Hàng luôn được cung cấp <strong>đầy đủ 100% NL và VL</strong>, không đứt hàng</li>
        <li><strong>Kiểm soát chất lượng</strong> sản phẩm đồng nhất trên toàn hệ thống</li>
        <li><strong>Giảm sai sót</strong> trong quá trình đặt hàng và nhận hàng</li>
        <li><strong>Tăng tốc xử lý</strong> sự cố đúng cam kết SLA</li>
        <li>Chuẩn hóa <strong>cách phối hợp</strong> giữa Cửa Hàng, ĐTNQ và Hệ thống</li>
      </ul>
    </div>
  </div>

  <div class="section">
    <h3>2. Thuật Ngữ Quan Trọng</h3>
    <div class="table-wrap"><table>
      <tr><th>Thuật ngữ</th><th>Giải thích</th></tr>
      <tr><td><strong>NL Độc Quyền</strong></td><td>Nguyên liệu Phúc Tea nghiên cứu / đặt SX riêng – bắt buộc nhập từ Hệ thống</td></tr>
      <tr><td><strong>VL Độc Quyền</strong></td><td>Vật liệu nhận diện thương hiệu thiết kế riêng (ly, màng ép, bịch, ống hút, xô)</td></tr>
      <tr><td><strong>Nguyên liệu</strong></td><td>NL thương mại Hệ thống cung cấp; giá biến động theo thị trường</td></tr>
      <tr><td><strong>Vật liệu</strong></td><td>Vật tư thông dụng Hệ thống cung cấp, không in nhận diện riêng</td></tr>
      <tr><td><strong>ĐTNQ</strong></td><td>Đối Tác Nhượng Quyền – chủ 1 hoặc nhiều cửa hàng</td></tr>
      <tr><td><strong>MOQ</strong></td><td>Số lượng đặt tối thiểu bắt buộc mỗi lần</td></tr>
      <tr><td><strong>SLA</strong></td><td>Cam kết thời gian phản hồi và xử lý</td></tr>
      <tr><td><strong>KiotViet</strong></td><td>Phần mềm lên đơn; tên gian hàng: <strong>taivuphuc</strong></td></tr>
      <tr><td><strong>Đơn Lưu tạm</strong></td><td>Đơn đang soạn – Hệ thống CHƯA nhận</td></tr>
      <tr><td><strong>Hóa đơn</strong></td><td>Đơn đã được Hệ thống nhận và xác nhận hoàn thành (tab Hóa đơn)</td></tr>
      <tr><td><strong>Group Zalo Kho</strong></td><td>Kênh làm việc DUY NHẤT giữa Cửa Hàng và Kho</td></tr>
      <tr><td><strong>Ngày làm việc</strong></td><td>Thứ 2 – Thứ 6, 09:00–16:30; không tính T7, CN, Lễ Tết</td></tr>
    </table></div>
  </div>

  <div class="section">
    <h3>3. Vai Trò &amp; Trách Nhiệm</h3>
    <div class="table-wrap"><table>
      <tr><th>Bộ Phận</th><th>Trách Nhiệm Chính</th></tr>
      <tr><td><strong>Hệ Thống<br/>(CCU & Kho)</strong></td><td>
        <ul style="margin:4px 0;padding-left:18px;line-height:2">
          <li>Tiếp nhận, kiểm soát &amp; xác nhận đơn hàng</li>
          <li>Chuẩn bị, đóng gói, xuất hàng &amp; gửi Biên nhận</li>
          <li>Thông báo giá NL Độc Quyền trước <strong>15 ngày</strong></li>
          <li>Hỗ trợ sự cố đúng SLA</li>
          <li>Quản lý công nợ &amp; đối chiếu cho ĐTNQ</li>
        </ul>
      </td></tr>
      <tr><td><strong>Cửa Hàng / ĐTNQ</strong></td><td>
        <ul style="margin:4px 0;padding-left:18px;line-height:2">
          <li>Chủ động lập kế hoạch tồn kho (theo File Min/Max)</li>
          <li>Lên đơn đúng MOQ trên KiotViet</li>
          <li>Thanh toán &amp; gửi bill vào Group Zalo Kho</li>
          <li>Kiểm tra 5 điểm khi nhận hàng</li>
          <li>Báo sự cố đủ thông tin <strong>trong 1 ngày làm việc</strong> từ ngày nhận hàng</li>
        </ul>
      </td></tr>
    </table></div>
  </div>

  <div class="section">
    <div class="highlight-box warn">
      <strong>⭐ ĐIỂM QUAN TRỌNG CẦN NHỚ – BÀI 1</strong>
      <ul style="margin-top:10px;line-height:2.2">
        <li>SOP V2.0 chia hàng thành <strong>4 nhóm</strong>: NL Độc Quyền · Nguyên liệu · VL Độc Quyền · Vật liệu</li>
        <li><strong>Group Zalo Kho</strong> = kênh làm việc DUY NHẤT cho mọi giao dịch với Kho</li>
        <li>Ngày làm việc: Thứ 2–Thứ 6, <strong>09:00–16:30</strong> (giờ chốt đơn: 16:30)</li>
        <li>Hạn báo lỗi hàng: <strong>1 ngày làm việc</strong> kể từ ngày nhận hàng (rất quan trọng!)</li>
      </ul>
    </div>
  </div>`
},

/* ---- BÀI 2 ---- */
{
  id: 1,
  icon: '🧋',
  title: 'Danh Mục Nguyên Liệu Phúc Tea',
  subtitle: 'NL Độc Quyền (13 loại) · Nguyên Liệu (15 loại)',
  content: `
  <div class="section">
    <h3>Phân Biệt 2 Nhóm Nguyên Liệu</h3>
    <div class="table-wrap"><table>
      <tr><th>Nhóm</th><th>Đặc điểm</th><th>Phí vận chuyển</th></tr>
      <tr><td><strong>NL Độc Quyền</strong></td><td>Phúc Tea nghiên cứu / đặt SX riêng. Chỉ hệ thống mới có.</td><td>CHƯA bao gồm – Cửa Hàng trả trực tiếp cho đơn vị vận chuyển khi nhận</td></tr>
      <tr><td><strong>Nguyên liệu</strong></td><td>NL thương mại phổ thông; giá theo thị trường.</td><td>CHƯA bao gồm – Cửa Hàng trả trực tiếp</td></tr>
    </table></div>
    <div class="highlight-box warn" style="margin-top:12px">
      ⚠️ Cả 2 nhóm NL đều <strong>CHƯA bao gồm phí vận chuyển</strong>. Cửa Hàng trả trực tiếp cho đơn vị giao hàng khi nhận.<br/>
      Nếu chưa rõ khoản thu → <strong>hỏi Kho trước khi trả</strong>.
    </div>
  </div>

  <div class="section">
    <h3>Nhóm 1 – NL Độc Quyền (13 mặt hàng)</h3>
    <div class="table-wrap"><table>
      <tr><th>STT</th><th>Tên sản phẩm</th><th>ĐVT</th><th>MOQ</th></tr>
      <tr><td>1</td><td>Cà Phê Mộc 9:1</td><td>Kg</td><td>2 kg</td></tr>
      <tr><td>2</td><td>Bột Pha Chế Phúc Tea PT35</td><td>Thùng</td><td>1 thùng</td></tr>
      <tr><td>3</td><td>Trà Đen Phúc Tea</td><td>Gói</td><td>5 gói</td></tr>
      <tr><td>4</td><td>Trà Xanh Lài Phúc Tea</td><td>Gói</td><td>1 gói</td></tr>
      <tr><td>5</td><td>Trà Oolong Phúc Tea 02</td><td>Gói</td><td>1 gói</td></tr>
      <tr style="background:#fefce8"><td>6</td><td><strong>Trà Oolong Quế Hoa Phúc Tea 500gr</strong> ⭐ Mới</td><td>Gói</td><td>1 gói</td></tr>
      <tr style="background:#fefce8"><td>7</td><td><strong>Trà Hoa Cỏ Mùa Xuân Phúc Tea 500gr</strong> ⭐ Mới</td><td>Gói</td><td>1 gói</td></tr>
      <tr><td>8</td><td>Bột Socola Phúc Tea 02</td><td>Gói</td><td>1 gói</td></tr>
      <tr><td>9</td><td>Trà Hòa Tan Vị Đào Phúc Tea</td><td>Gói</td><td>5 gói</td></tr>
      <tr><td>10</td><td>Trà Hòa Tan Vị Vải Phúc Tea</td><td>Gói</td><td>5 gói</td></tr>
      <tr><td>11</td><td>Trân Châu Giòn Phúc Tea</td><td>Thùng</td><td>1 thùng (6 gói)</td></tr>
      <tr><td>12</td><td>Vải Tươi Ngâm Đường Phúc Tea 565gr</td><td>Thùng</td><td>1 thùng (12 lon)</td></tr>
      <tr style="background:#fefce8"><td>13</td><td><strong>Bột Milk Foam Phúc Tea</strong> ⭐ Chuyển từ Nguyên liệu</td><td>Gói</td><td>1 gói</td></tr>
    </table></div>
    <div class="highlight-box info" style="margin-top:8px">
      📌 Trên KiotViet, một số mặt hàng hiển thị là <strong>"Bịch"</strong> thay vì "Gói" (Trà Đen, Bột Milk Foam, Trà hòa tan) — hai cách gọi là một, không nhầm lẫn.
    </div>
  </div>

  <div class="section">
    <h3>Nhóm 2 – Nguyên Liệu (15 mặt hàng)</h3>
    <div class="table-wrap"><table>
      <tr><th>STT</th><th>Tên sản phẩm</th><th>ĐVT</th><th>MOQ</th></tr>
      <tr><td>14</td><td>Mứt Hibiscus</td><td>Hủ</td><td>1 hủ</td></tr>
      <tr><td>15</td><td>Gelatine Đức hoặc Pháp</td><td>Gói</td><td>1 gói</td></tr>
      <tr><td>16</td><td>Syrup Đường Đen Luave</td><td>Can</td><td>1 can (6 can/thùng)</td></tr>
      <tr><td>17</td><td>Bột Matcha Đài Loan</td><td>Gói</td><td>1 gói</td></tr>
      <tr><td>18</td><td>Bột Khoai Môn Mole</td><td>Gói</td><td>1 gói</td></tr>
      <tr><td>19</td><td>Pudding Trứng Mole</td><td>Gói</td><td>1 gói</td></tr>
      <tr><td>20</td><td>Hạt Chia Úc hoặc Peru</td><td>Gói</td><td>1 gói (1 kg)</td></tr>
      <tr><td>21</td><td>Đào Ngâm Fresko 820gr</td><td>Thùng</td><td>1 thùng (12 lon)</td></tr>
      <tr><td>22</td><td>Sinh Tố Xoài Berrino</td><td>Chai</td><td>1 chai (12 chai/thùng)</td></tr>
      <tr><td>23</td><td>Mứt Thơm Berrino</td><td>Hủ</td><td>1 hủ (15 hủ/thùng)</td></tr>
      <tr><td>24</td><td>Mứt Dâu Tằm Berrino</td><td>Hủ</td><td>1 hủ (15 hủ/thùng)</td></tr>
      <tr><td>25</td><td>Thạch Dừa Vải Casa 3,5kg</td><td>Thùng</td><td>1 thùng (4 hủ)</td></tr>
      <tr><td>26</td><td>Thạch Nha Đam</td><td>Gói</td><td>5 gói (10 gói/thùng)</td></tr>
      <tr><td>27</td><td>Xí Muội</td><td>Gói</td><td>1 gói</td></tr>
      <tr><td>28</td><td>Syrup Đào Mama Rosa</td><td>Chai</td><td>1 chai (12 chai/thùng)</td></tr>
    </table></div>
  </div>

  <div class="section">
    <div class="highlight-box warn">
      <strong>⭐ ĐIỂM QUAN TRỌNG CẦN NHỚ – BÀI 2</strong>
      <ul style="margin-top:10px;line-height:2.2">
        <li>V2.0 có <strong>13 NL Độc Quyền</strong> (tăng từ 10): thêm Trà Oolong Quế Hoa, Trà Hoa Cỏ Mùa Xuân, Bột Milk Foam</li>
        <li>Phí vận chuyển NL: <strong>CHƯA bao gồm</strong> → Cửa Hàng trả trực tiếp khi nhận hàng</li>
        <li>Trà Đen, Trà HT Đào, Trà HT Vải, Thạch Nha Đam: MOQ <strong>5 gói/đơn</strong></li>
        <li>"Bịch" và "Gói" trên KiotViet là <strong>một ĐVT</strong> cho cùng sản phẩm</li>
      </ul>
    </div>
  </div>`
},

/* ---- BÀI 3 ---- */
{
  id: 2,
  icon: '📦',
  title: 'Danh Mục Vật Liệu Bao Bì & MOQ',
  subtitle: 'VL Độc Quyền (9 loại) · Vật Liệu (8 loại) · Phí vận chuyển',
  content: `
  <div class="section">
    <h3>Phân Biệt 2 Nhóm Vật Liệu</h3>
    <div class="table-wrap"><table>
      <tr><th>Nhóm</th><th>Đặc điểm</th><th>Phí vận chuyển</th></tr>
      <tr><td><strong>VL Độc Quyền</strong></td><td>Ly, màng ép, bịch, ống hút, xô mang nhận diện thương hiệu Phúc Tea</td><td>ĐÃ bao gồm – không trả thêm</td></tr>
      <tr><td><strong>Vật liệu</strong></td><td>Nắp, hũ, muỗng, bịch chữ T, giấy chống tràn không in nhận diện riêng</td><td>ĐÃ bao gồm – không trả thêm</td></tr>
    </table></div>
    <div class="highlight-box info" style="margin-top:12px">
      ✅ Nhóm VL (cả Độc Quyền lẫn Vật liệu) <strong>ĐÃ BAO GỒM phí vận chuyển</strong>.<br/>
      Nếu đơn vị vận chuyển thu phát sinh → liên hệ Kho (Hạnh Nhân 0344 858 727) <strong>trước khi trả</strong>.
    </div>
  </div>

  <div class="section">
    <h3>Nhóm 3 – VL Độc Quyền (9 mặt hàng)</h3>
    <div class="table-wrap"><table>
      <tr><th>STT</th><th>Tên sản phẩm</th><th>ĐVT</th><th>MOQ</th></tr>
      <tr style="background:#fefce8"><td>29</td><td><strong>Ly Giấy 600ml</strong> (V2: đổi từ 650ml)</td><td>Thùng</td><td>1 thùng (1.000 cái)</td></tr>
      <tr><td>30</td><td>Ly Nhựa 400ml In 5 Màu</td><td>Thùng</td><td>1 thùng (1.000 cái)</td></tr>
      <tr><td>31</td><td>Ly Nhựa 500ml In 2 Màu</td><td>Thùng</td><td>1 thùng (1.000 cái)</td></tr>
      <tr><td>32</td><td>Ly Nhựa 600ml In 1 Màu</td><td>Thùng</td><td>1 thùng (1.000 cái)</td></tr>
      <tr><td>33</td><td>Combo Xô 1 Lít (xô, nắp, bịch 1 xô)</td><td>Thùng</td><td>1 thùng (300 cái)</td></tr>
      <tr><td>34</td><td>Bịch 1 Ly Phúc Tea 25.01</td><td>Kg</td><td>5 kg (kiện 5 kg)</td></tr>
      <tr><td>35</td><td>Bịch 2 Ly Phúc Tea 25.01</td><td>Kg</td><td>5 kg (kiện 5 kg)</td></tr>
      <tr><td>36</td><td>Ống Hút Bọc Kiếng Phúc Tea</td><td>Kg</td><td>5 kg (kiện 5 kg)</td></tr>
      <tr><td>37</td><td>Cuộn Ép Màng Ly Phúc Tea 25.01</td><td>Cuộn</td><td>1 cuộn</td></tr>
    </table></div>
  </div>

  <div class="section">
    <h3>Nhóm 4 – Vật Liệu (8 mặt hàng)</h3>
    <div class="table-wrap"><table>
      <tr><th>STT</th><th>Tên sản phẩm</th><th>ĐVT</th><th>MOQ</th></tr>
      <tr><td>38</td><td>Nắp Cầu Ly 400ml Phi 93</td><td>Thùng</td><td>1 thùng (1.000 cái)</td></tr>
      <tr style="background:#fefce8"><td>39</td><td><strong>Nắp Bằng Cao Phi 95</strong> ⭐ Mới V2</td><td>Thùng</td><td>1 thùng (1.000 cái)</td></tr>
      <tr><td>40</td><td>Hũ Nhựa Topping Nắp Liền 4oz (PET)</td><td>Thùng</td><td>1 thùng (2.000 cái)</td></tr>
      <tr><td>41</td><td>Muỗng Vàng 20cm</td><td>Thùng</td><td>1 thùng (2.500 cái)</td></tr>
      <tr style="background:#fefce8"><td>42</td><td><strong>Bịch Chữ T Phúc Tea</strong></td><td>Kg</td><td>5 kg (kiện 5 kg)</td></tr>
      <tr style="background:#fefce8"><td>43</td><td><strong>Ống Hút Cà Phê</strong> ⭐ Chuyển từ VL ĐQ</td><td>Kg</td><td>5 kg</td></tr>
      <tr><td>44</td><td>Giấy Chống Tràn 13cm (500 tờ)</td><td>Xấp</td><td>1 xấp</td></tr>
      <tr><td>45</td><td>Giấy Chống Tràn 16cm – Xô (500 tờ)</td><td>Xấp</td><td>1 xấp</td></tr>
    </table></div>
  </div>

  <div class="section">
    <h3>Chính Sách Giá</h3>
    <div class="table-wrap"><table>
      <tr><th>Nhóm hàng</th><th>Chính sách thay đổi giá</th></tr>
      <tr><td><strong>NL Độc Quyền &amp; VL Độc Quyền</strong></td><td>Điều chỉnh giá sẽ được <strong>thông báo trước 15 ngày</strong> qua các kênh chính thức</td></tr>
      <tr><td><strong>Nguyên liệu &amp; Vật liệu</strong></td><td>Giá <strong>cập nhật linh hoạt theo thị trường</strong> – kiểm tra trực tiếp trên KiotViet khi lên đơn; giá trên đơn đã đặt là giá áp dụng</td></tr>
    </table></div>
  </div>

  <div class="section">
    <div class="highlight-box warn">
      <strong>⭐ ĐIỂM QUAN TRỌNG CẦN NHỚ – BÀI 3</strong>
      <ul style="margin-top:10px;line-height:2.2">
        <li>V2.0: <strong>9 VL Độc Quyền</strong> (giảm từ 10); Ly Giấy 650ml đổi thành <strong>600ml</strong></li>
        <li>Ống Hút Cà Phê chuyển từ VL Độc Quyền → <strong>Vật liệu</strong></li>
        <li>VL (cả 2 nhóm): phí vận chuyển <strong>ĐÃ BAO GỒM</strong> – không trả thêm</li>
        <li>Nếu nhà xe thu phí phát sinh cho hàng VL → <strong>hỏi Kho trước khi trả</strong></li>
        <li>Giá NL/VL Độc Quyền thay đổi phải <strong>thông báo trước 15 ngày</strong></li>
      </ul>
    </div>
  </div>`
},

/* ---- BÀI 4 ---- */
{
  id: 3,
  icon: '📱',
  title: 'Quy Trình Đặt Hàng & Thanh Toán',
  subtitle: '8 bước đặt hàng · Thông tin TK · Giờ chốt đơn 16:30',
  content: `
  <div class="section">
    <h3>Chuẩn Bị Trước Khi Đặt Hàng</h3>
    <div class="highlight-box info">
      <strong>2 việc bắt buộc trước khi vào KiotViet:</strong><br/>
      <strong>Bước 1:</strong> Kiểm đếm tồn thực tế, so với mức Min trong File Min/Max<br/>
      <strong>Bước 2:</strong> Lập danh sách theo nhóm: Trà · Bột & Cà phê · Topping & Syrup · Ly & phụ kiện · Bao bì mềm
    </div>
    <p style="margin-top:12px">📌 Nên đặt khi tồn còn đủ dùng: Miền Nam ≈ <strong>2 tuần</strong> | Miền Trung/Bắc ≈ <strong>3 tuần</strong>.</p>
  </div>

  <div class="section">
    <h3>Thông Tin Đăng Nhập KiotViet</h3>
    <div class="table-wrap"><table>
      <tr><th>Thông tin</th><th>Chi tiết</th></tr>
      <tr><td><strong>Ứng dụng</strong></td><td>KiotViet – Phần mềm quản lý bán hàng (App Store / CH Play) <em>Không tải nhầm "KiotViet Nhân viên Nhà hàng"</em></td></tr>
      <tr><td><strong>Tên gian hàng</strong></td><td>taivuphuc</td></tr>
      <tr><td><strong>Tên đăng nhập</strong></td><td>Họ tên chủ cửa hàng viết liền không dấu (vd: tranthihanhnhan.ccn)</td></tr>
      <tr><td><strong>Mật khẩu</strong></td><td>Xem tin nhắn ghim trong Group Zalo Kho – <strong>không chia sẻ ra ngoài Cửa Hàng</strong></td></tr>
    </table></div>
  </div>

  <div class="section">
    <h3>8 Bước Đặt Hàng & Thanh Toán</h3>
    <div class="table-wrap"><table>
      <tr><th>Bước</th><th>Việc cần làm</th><th>Ghi chú</th></tr>
      <tr><td><strong>B1</strong></td><td>Kiểm tồn kho, so với mức Min</td><td>Dùng File Min/Max</td></tr>
      <tr><td><strong>B2</strong></td><td>Lập danh sách hàng cần nhập theo nhóm</td><td>Đối chiếu MOQ</td></tr>
      <tr><td><strong>B3</strong></td><td>Tab Bán Hàng → Đặt hàng → bấm "Khách lẻ" → tìm đúng tên Cửa Hàng (mã PHUCTEAxxx)</td><td>Không để "Khách lẻ"</td></tr>
      <tr><td><strong>B4</strong></td><td>Thêm sản phẩm → điều chỉnh số lượng → kiểm tra Tổng tiền → bấm <strong>"Đặt hàng"</strong></td><td>Bật chế độ chọn nhiều để nhanh hơn</td></tr>
      <tr><td><strong>B5</strong></td><td>Màn hình Thanh toán: chọn <strong>"Tiền mặt"</strong> → bấm <strong>"Thanh toán"</strong></td><td>Phương thức luôn chọn Tiền mặt</td></tr>
      <tr style="background:#fef2f2"><td><strong>B6 ⚠️</strong></td><td><strong>Chụp màn hình đơn → Gửi Group Zalo Kho</strong></td><td>BẮT BUỘC</td></tr>
      <tr><td><strong>B7</strong></td><td>Chuyển khoản theo thông tin tài khoản bên dưới</td><td>Trước 16:30 để chốt trong ngày</td></tr>
      <tr style="background:#fef2f2"><td><strong>B8 ⚠️</strong></td><td><strong>Chụp bill chuyển khoản → Gửi Group Zalo Kho + kèm mã đơn</strong></td><td>BẮT BUỘC</td></tr>
    </table></div>
    <div class="highlight-box warn" style="margin-top:12px">
      ⏰ <strong>Giờ chốt đơn: 16:30 các ngày Thứ 2 – Thứ 6.</strong><br/>
      Đơn có đủ ảnh đơn + bill trước 16:30 → Kho xác nhận trong ngày làm việc.<br/>
      Đơn sau 16:30 hoặc T7, CN → xác nhận vào ngày làm việc kế tiếp.
    </div>
  </div>

  <div class="section">
    <h3>Thông Tin Tài Khoản Thanh Toán</h3>
    <div class="highlight-box info">
      <strong>Đơn vị thụ hưởng:</strong> CÔNG TY CỔ PHẦN SẢN XUẤT THƯƠNG MẠI DỊCH VỤ TÀI VŨ PHÚC<br/>
      <strong>Số tài khoản:</strong> <span style="font-size:1.1em;font-weight:bold">689767678888</span><br/>
      <strong>Ngân hàng:</strong> PVcombank (Ngân hàng TMCP Đại chúng Việt Nam)<br/>
      <strong>Nội dung chuyển khoản:</strong> chuyen tien<br/>
      <strong>Số tiền:</strong> Tổng tiền đơn trên KiotViet, hoặc số tiền Kho báo trên Zalo nếu đơn có điều chỉnh
    </div>
    <div class="highlight-box warn" style="margin-top:8px">
      ⚠️ <strong>Chỉ chuyển vào đúng tài khoản trên.</strong> Mọi thông báo thay đổi tài khoản phải được xác nhận qua Hotline <strong>0344 858 727</strong> trước khi chuyển tiền.
    </div>
  </div>

  <div class="section">
    <h3>Mẫu Tin Nhắn Zalo Kho</h3>
    <div class="table-wrap"><table>
      <tr><th>Tình huống</th><th>Nội dung mẫu</th></tr>
      <tr><td>Gửi đơn</td><td>[Mã CH – Tên CH] Đã lên đơn KiotViet mã DH…, tổng tiền … đ, gồm … mặt hàng. (Kèm ảnh đơn)</td></tr>
      <tr><td>Gửi bill</td><td>[Mã CH – Tên CH] Đã chuyển khoản đơn DH… số tiền … đ lúc …h ngày …. (Kèm ảnh bill)</td></tr>
      <tr><td>Muốn sửa/hủy đơn</td><td>Nhắn Group Zalo Kho – Kho sửa, Cửa Hàng không tự sửa đơn</td></tr>
    </table></div>
  </div>

  <div class="section">
    <h3>Phân Biệt: Lưu Tạm vs Đặt Hàng</h3>
    <div class="table-wrap"><table>
      <tr><th></th><th>Lưu Tạm</th><th>Đặt Hàng</th></tr>
      <tr><td><strong>Hệ thống nhận?</strong></td><td>❌ Chưa nhận</td><td>✅ Nhận ngay</td></tr>
      <tr><td><strong>Dùng khi nào?</strong></td><td>Cần xem lại, chỉnh sửa thêm</td><td>Đơn chắc chắn, sẵn sàng gửi</td></tr>
      <tr><td><strong>Xem ở đâu?</strong></td><td>Biểu tượng số đỏ góc phải trên</td><td>Tab Hóa đơn sau khi xác nhận</td></tr>
      <tr><td><strong>Thanh toán?</strong></td><td>⚠️ CHƯA thanh toán khi đơn Lưu tạm</td><td>Thanh toán ngay sau khi đặt</td></tr>
    </table></div>
  </div>

  <div class="section">
    <div class="highlight-box warn">
      <strong>⭐ ĐIỂM QUAN TRỌNG CẦN NHỚ – BÀI 4</strong>
      <ul style="margin-top:10px;line-height:2.2">
        <li>Chọn đúng tên Cửa Hàng (mã PHUCTEAxxx) – <strong>không để "Khách lẻ"</strong></li>
        <li>Chụp đơn + Gửi Zalo Kho → Chuyển khoản → Chụp bill + Gửi Zalo Kho — theo thứ tự này</li>
        <li>Trên KiotViet luôn chọn phương thức <strong>"Tiền mặt"</strong></li>
        <li>Giờ chốt đơn: <strong>16:30</strong> các ngày làm việc</li>
        <li>STK: <strong>689767678888</strong> PVcombank – nội dung: <strong>chuyen tien</strong></li>
        <li>Kho xác nhận xong → đơn hiện ở tab <strong>"Hóa đơn"</strong></li>
      </ul>
    </div>
  </div>`
},

/* ---- BÀI 5 ---- */
{
  id: 4,
  icon: '🚚',
  title: 'Nhận Hàng & Xử Lý Sự Cố',
  subtitle: 'Thời gian giao · Checklist 5 điểm · SLA xử lý sự cố',
  content: `
  <div class="section">
    <h3>1. Thời Gian Giao Hàng</h3>
    <div class="highlight-box info">
      <strong>⏱ Tính từ ngày Hệ thống xác nhận đơn</strong> (không tính Thứ 7, Chủ Nhật, Lễ Tết)
      <div class="table-wrap" style="margin-top:10px"><table>
        <tr><th>Vùng</th><th>Khu vực</th><th>Thời gian giao</th></tr>
        <tr><td>🟢 Vùng Xanh</td><td><strong>Miền Nam</strong></td><td>5 – 7 ngày làm việc</td></tr>
        <tr><td>🟡 Vùng Vàng</td><td><strong>Miền Trung &amp; Miền Bắc</strong></td><td>7 – 10 ngày làm việc</td></tr>
      </table></div>
      <p style="margin-top:8px"><strong>Ví dụ:</strong> Đơn MN xác nhận Thứ 6 → ngày làm việc 1 là Thứ 2 tuần sau → hàng đến trong khoảng Thứ 6 đến Thứ 3 tuần kế.</p>
    </div>
    <div class="highlight-box warn" style="margin-top:12px">
      ⚠️ Thời gian có thể <strong>kéo dài</strong> dịp Lễ/Tết hoặc sự cố vận chuyển – theo dõi thông báo trên Group Zalo Kho.
    </div>
  </div>

  <div class="section">
    <h3>2. Phí Vận Chuyển Khi Nhận Hàng</h3>
    <div class="table-wrap"><table>
      <tr><th>Loại hàng</th><th>Phí vận chuyển</th><th>Cửa Hàng cần làm</th></tr>
      <tr><td><strong>NL Độc Quyền &amp; Nguyên liệu</strong></td><td>CHƯA bao gồm</td><td>Trả trực tiếp cho đơn vị vận chuyển khi nhận</td></tr>
      <tr><td><strong>VL Độc Quyền &amp; Vật liệu</strong></td><td>ĐÃ bao gồm</td><td>Không trả thêm. Nếu bị thu phí → gọi Kho (0344 858 727) trước khi trả</td></tr>
    </table></div>
    <p style="margin-top:8px">📌 Đơn có cả NL và VL: Cửa Hàng <strong>chỉ trả phí vận chuyển cho phần NL</strong>.</p>
  </div>

  <div class="section">
    <h3>3. Chuẩn Bị Trước Khi Nhận Hàng</h3>
    <ul>
      <li>Mở sẵn <strong>Biên nhận</strong> Kho đã gửi và đơn trên tab <strong>Hóa đơn</strong> KiotViet</li>
      <li>Bố trí người nhận có trách nhiệm, có điện thoại sẵn sàng chụp/quay</li>
      <li>💡 <strong>Quay video liên tục</strong> khi mở thùng hàng có lon, hủ, chai – đây là bằng chứng mạnh nhất nếu có lỗi</li>
    </ul>
  </div>

  <div class="section">
    <h3>4. Checklist 5 Điểm Nhận Hàng</h3>
    <div class="table-wrap"><table>
      <tr><th>#</th><th>Điểm kiểm tra</th><th>Cách kiểm</th><th>Đạt khi</th></tr>
      <tr><td>1</td><td><strong>Số lượng</strong></td><td>Đếm số kiện với nhà vận chuyển, sau đó đếm từng mặt hàng</td><td>Đủ số kiện và đủ số lượng từng mặt hàng</td></tr>
      <tr><td>2</td><td><strong>Đối chiếu</strong></td><td>So tên hàng, ĐVT, số lượng với Biên nhận và đơn đặt</td><td>Khớp 100%</td></tr>
      <tr><td>3</td><td><strong>Bao bì</strong></td><td>Kiểm thùng, gói, lon, hủ: méo, rách, thủng, ướt, phồng, rò rỉ</td><td>Nguyên vẹn</td></tr>
      <tr><td>4</td><td><strong>Hạn sử dụng</strong></td><td>Đọc NSX/HSD trên từng lô</td><td>Hạn còn lại <strong>≥ 1/3 hạn dùng</strong></td></tr>
      <tr><td>5</td><td><strong>Tình trạng SP</strong></td><td>Màu, mùi, vón cục, ẩm mốc, dị vật; ly in đúng mẫu, không nứt</td><td>Đúng chất lượng chuẩn</td></tr>
    </table></div>
    <div class="highlight-box warn" style="margin-top:12px">
      Phát hiện bất thường → <strong>Giữ nguyên hiện trạng, không sử dụng</strong> → chuyển sang quy trình xử lý sự cố (mục 5)
    </div>
  </div>

  <div class="section">
    <h3>5. Quy Trình Xử Lý Sự Cố (5 Bước)</h3>
    <div class="table-wrap"><table>
      <tr><th>Bước</th><th>Việc cần làm</th><th>Thời hạn</th></tr>
      <tr><td><strong>B1</strong></td><td>Quay video / chụp hình rõ nét sản phẩm lỗi (thấy tên hàng, lô, HSD, vị trí lỗi)</td><td>Ngay khi phát hiện</td></tr>
      <tr style="background:#fef2f2"><td><strong>B2 ⚠️</strong></td><td>Gửi Group Zalo Kho đủ 4 yếu tố: <strong>Hình/Video + Tên SP + Số lượng lỗi + Mô tả lỗi</strong></td><td><strong>Trong 1 ngày làm việc từ ngày nhận hàng</strong></td></tr>
      <tr><td><strong>B3</strong></td><td>Hệ thống tiếp nhận, thẩm định nguyên nhân</td><td>Phản hồi 30–60 phút; đánh giá trong 24 giờ</td></tr>
      <tr><td><strong>B4</strong></td><td>Kho đề xuất phương án: đổi hàng / trả hàng / bù trừ công nợ / giao bổ sung</td><td>Cùng lúc kết quả đánh giá</td></tr>
      <tr><td><strong>B5</strong></td><td>Cửa Hàng xác nhận phương án → Kho hoàn tất đổi/trả</td><td>Tối đa 3 ngày làm việc sau khi CH xác nhận</td></tr>
    </table></div>
  </div>

  <div class="section">
    <h3>6. Bảng SLA Cam Kết</h3>
    <div class="table-wrap"><table>
      <tr><th>Cam kết</th><th>Thời hạn</th><th>Bên chịu trách nhiệm</th></tr>
      <tr><td>Phản hồi ban đầu</td><td><strong>30–60 phút</strong></td><td>Hệ thống (từ lúc nhận tin trong giờ làm việc)</td></tr>
      <tr><td>Tiếp nhận &amp; đánh giá toàn diện</td><td><strong>Tối đa 24 giờ</strong></td><td>Hệ thống (từ lúc nhận đủ 4 thông tin)</td></tr>
      <tr style="background:#fef2f2"><td><strong>Hạn chót báo lỗi</strong></td><td><strong>1 ngày làm việc</strong></td><td>Cửa Hàng (từ ngày nhận hàng)</td></tr>
      <tr><td>Hoàn tất đổi trả</td><td><strong>Tối đa 3 ngày làm việc</strong></td><td>Kho (sau khi CH xác nhận phương án)</td></tr>
    </table></div>
    <div class="highlight-box warn" style="margin-top:12px">
      ⚠️ Tin báo vào T7, CN hoặc sau 16:30 → SLA tính từ 09:00 ngày làm việc kế tiếp.<br/>
      ⚠️ <strong>Báo lỗi quá 1 ngày làm việc → Hệ thống KHÔNG giải quyết</strong>
    </div>
  </div>

  <div class="section">
    <h3>7. Giờ Làm Việc &amp; Liên Hệ</h3>
    <div class="highlight-box info">
      <strong>Liên hệ CCU Phúc Tea:</strong><br/>
      👤 Trần Thị Hạnh Nhân – Bộ Phận Chuỗi Cung Ứng<br/>
      📞 Hotline: <strong>0344 858 727</strong><br/>
      📧 Email: hanhnhan@phuctea.com.vn<br/>
      📱 Kênh chính: <strong>Group Zalo Kho</strong>
    </div>
    <div class="table-wrap" style="margin-top:10px"><table>
      <tr><th>Thời gian</th><th>Trạng thái</th></tr>
      <tr><td><strong>Thứ 2–Thứ 6: 09:00 – 16:30</strong></td><td>Hỗ trợ chính; phản hồi 30–60 phút; giờ chốt đơn 16:30</td></tr>
      <tr><td><strong>Thứ 7 &amp; Chủ Nhật</strong></td><td>Tiếp nhận thông tin, xử lý vào sáng Thứ Hai</td></tr>
    </table></div>
  </div>

  <div class="section">
    <div class="highlight-box warn">
      <strong>⭐ ĐIỂM QUAN TRỌNG CẦN NHỚ – BÀI 5</strong>
      <ul style="margin-top:10px;line-height:2.2">
        <li>MN: <strong>5–7 ngày</strong> | MTC/MB: <strong>7–10 ngày</strong> (tính từ ngày xác nhận, không tính T7/CN)</li>
        <li>Phí VC: NL = Cửa Hàng trả | VL = đã bao gồm (không trả thêm)</li>
        <li>Kiểm tra <strong>5 điểm</strong> khi nhận; HSD phải còn <strong>≥ 1/3 hạn dùng</strong></li>
        <li>Hạn chót báo lỗi: <strong>1 ngày làm việc</strong> từ ngày nhận hàng (không còn 3 ngày nữa!)</li>
        <li>Hotline: <strong>0344 858 727</strong> (Thứ 2–Thứ 6, 09:00–16:30)</li>
      </ul>
    </div>
  </div>`
},

/* ---- BÀI 6 – CẨM NANG ---- */
{
  id: 5,
  icon: '📖',
  title: 'Cẩm Nang Tra Cứu Nhanh',
  subtitle: 'Câu hỏi thường gặp · Xử lý tình huống · Liên hệ',
  content: `
  <div class="section">
    <div class="highlight-box info">
      <strong>📌 Hướng dẫn sử dụng bài này</strong><br/>
      Bài này là <strong>cẩm nang tra cứu</strong>. Khi gặp bất kỳ tình huống nào trong vận hành, hãy vào đây tìm câu trả lời nhanh theo từng nhóm vấn đề bên dưới.
    </div>
  </div>

  <div class="section">
    <h3>🔑 Nhóm 1 – Đăng Nhập &amp; Tài Khoản KiotViet</h3>
    <div class="table-wrap"><table>
      <tr><th>Tình huống</th><th>Xử lý</th></tr>
      <tr><td>Quên mật khẩu KiotViet</td><td>Nhắn Group Zalo Kho hoặc gọi 0344 858 727 để được cấp lại. Mật khẩu được ghim trong Group Zalo Kho.</td></tr>
      <tr><td>Không tìm thấy tên Cửa Hàng mình</td><td>Thử gõ từng phần tên hoặc mã số (vd: "163", "Vĩnh Cửu") để tìm dòng mã PHUCTEAxxx</td></tr>
      <tr><td>App KiotViet bị lỗi / không vào được</td><td>Thử xóa cache hoặc gỡ cài lại app. Vẫn không được → nhắn Group Zalo Kho</td></tr>
      <tr><td>Chưa có tài khoản KiotViet</td><td>Liên hệ CCU để được tạo tài khoản</td></tr>
    </table></div>
  </div>

  <div class="section">
    <h3>🛒 Nhóm 2 – Đặt Hàng &amp; Đơn Hàng</h3>
    <div class="table-wrap"><table>
      <tr><th>Tình huống</th><th>Xử lý</th></tr>
      <tr><td>Không tìm thấy sản phẩm trên KiotViet</td><td>Thử gõ tên khác/từ khóa. Vẫn không có → nhắn Group Zalo Kho kiểm tra</td></tr>
      <tr><td>Muốn sửa hoặc bổ sung đơn đã đặt</td><td>Nhắn ngay Group Zalo Kho – <strong>Cửa Hàng không tự sửa đơn trên KiotViet</strong>. Chỉ sửa được khi hàng chưa được gửi đi.</td></tr>
      <tr><td>Muốn hủy đơn đã đặt</td><td>Nhắn ngay Group Zalo Kho. Chỉ hủy được khi Kho chưa chuẩn bị hàng.</td></tr>
      <tr><td>Không biết đơn mình đã được xác nhận chưa</td><td>Kiểm tra tab <strong>Hóa đơn</strong> trên KiotViet. Đơn ở đây = đã xác nhận</td></tr>
      <tr><td>Quên chụp màn hình đơn gửi Zalo Kho</td><td>Vào Tab Hóa đơn → tìm đơn vừa đặt → chụp lại và gửi vào Zalo Kho ngay</td></tr>
      <tr><td>Có thể mua NL ở chợ hoặc siêu thị không?</td><td><strong>Không.</strong> Dù NL Độc Quyền hay Nguyên liệu, tất cả phải đặt qua KiotViet</td></tr>
      <tr><td>Đặt hàng mấy giờ thì được chốt trong ngày?</td><td>Trước <strong>16:30 Thứ 2–Thứ 6</strong>, đã gửi đủ ảnh đơn + bill vào Zalo Kho</td></tr>
    </table></div>
  </div>

  <div class="section">
    <h3>💰 Nhóm 3 – Thanh Toán</h3>
    <div class="table-wrap"><table>
      <tr><th>Tình huống</th><th>Xử lý</th></tr>
      <tr><td>Chuyển khoản vào đâu?</td><td><strong>689767678888</strong> – PVcombank – TÀI VŨ PHÚC – nội dung: chuyen tien</td></tr>
      <tr><td>Trên KiotViet chọn phương thức gì?</td><td>Chọn <strong>"Tiền mặt"</strong> rồi bấm "Thanh toán"</td></tr>
      <tr><td>Chuyển bao nhiêu tiền?</td><td>Tổng tiền đơn trên KiotViet, hoặc số tiền Kho báo trên Zalo nếu đơn có điều chỉnh</td></tr>
      <tr><td>Chưa thanh toán, Kho có xuất hàng không?</td><td>Không. Kho chỉ xử lý khi đã nhận đủ: ảnh đơn + bill thanh toán trong Group Zalo Kho</td></tr>
      <tr><td>Thanh toán rồi nhưng quên gửi bill Zalo Kho</td><td>Chụp lại xác nhận chuyển khoản và gửi vào Group Zalo Kho ngay, kèm mã đơn</td></tr>
      <tr><td>Thắc mắc về công nợ</td><td>Đối chiếu từ ngày <strong>05 đến 08</strong> hằng tháng. Liên hệ CCU để đối chiếu: 0344 858 727</td></tr>
      <tr><td>Nhận được thông báo thay đổi số TK</td><td>⚠️ Phải xác nhận qua Hotline <strong>0344 858 727</strong> trước khi chuyển tiền</td></tr>
    </table></div>
  </div>

  <div class="section">
    <h3>🚚 Nhóm 4 – Giao Hàng, Phí Vận Chuyển &amp; Thời Gian</h3>
    <div class="table-wrap"><table>
      <tr><th>Tình huống</th><th>Xử lý</th></tr>
      <tr><td>Thời gian giao hàng Miền Nam?</td><td>5–7 ngày làm việc từ ngày Kho xác nhận đơn (không tính T7/CN)</td></tr>
      <tr><td>Thời gian giao Miền Trung/Bắc?</td><td>7–10 ngày làm việc từ ngày Kho xác nhận đơn</td></tr>
      <tr><td>Hàng chưa về, đã quá thời gian dự kiến</td><td>Kiểm tra ngày xác nhận đơn (tab Hóa đơn). Nếu đã qua → nhắn Group Zalo Kho</td></tr>
      <tr><td>Nhà xe thu phí khi giao hàng NL</td><td>NL (Độc Quyền + Nguyên liệu): phí VC <strong>CHƯA bao gồm</strong> → Trả bình thường</td></tr>
      <tr><td>Nhà xe thu phí khi giao hàng VL</td><td>VL (Độc Quyền + Vật liệu): đã bao gồm phí → <strong>Gọi Kho (0344 858 727) trước khi trả</strong></td></tr>
      <tr><td>Đơn có cả NL và VL, trả phí thế nào?</td><td>Chỉ trả phí cho <strong>phần NL</strong>. Phần VL đã bao gồm.</td></tr>
    </table></div>
  </div>

  <div class="section">
    <h3>📦 Nhóm 5 – Nhận Hàng &amp; Kiểm Tra</h3>
    <div class="table-wrap"><table>
      <tr><th>Tình huống</th><th>Xử lý</th></tr>
      <tr><td>Nhận hàng thiếu số lượng</td><td>Chụp hình biên nhận + hàng thực nhận → báo Group Zalo Kho trong <strong>1 ngày làm việc</strong></td></tr>
      <tr><td>Hàng bị hỏng bao bì khi nhận</td><td>Chụp hình tình trạng bao bì → báo Group Zalo Kho trong <strong>1 ngày làm việc</strong></td></tr>
      <tr><td>Sản phẩm còn dưới 1/3 hạn dùng</td><td>Thuộc diện "cận date" → chụp hình HSD → báo Group Zalo Kho trong <strong>1 ngày làm việc</strong></td></tr>
      <tr><td>Nhận nhầm sản phẩm</td><td>Chụp hình SP nhận vs biên nhận → báo Group Zalo Kho trong <strong>1 ngày làm việc</strong></td></tr>
      <tr><td>Báo lỗi sau 1 ngày làm việc được không?</td><td><strong>Không.</strong> Hệ thống chỉ giải quyết trong 1 ngày làm việc từ ngày nhận hàng. Quá hạn → không xử lý.</td></tr>
      <tr><td>Sản phẩm lỗi có thể sử dụng không?</td><td><strong>Không.</strong> Giữ nguyên hiện trạng cho đến khi có hướng dẫn thu hồi/hủy từ Hệ thống.</td></tr>
    </table></div>
  </div>

  <div class="section">
    <h3>📋 Nhóm 6 – Sản Phẩm &amp; Giá Cả</h3>
    <div class="table-wrap"><table>
      <tr><th>Tình huống</th><th>Xử lý</th></tr>
      <tr><td>Giá sản phẩm thay đổi so với lần trước</td><td>NL ĐQ/VL ĐQ thay đổi: báo trước 15 ngày. Nguyên liệu/Vật liệu: theo thị trường, kiểm trên KiotViet</td></tr>
      <tr><td>MOQ của một sản phẩm là bao nhiêu?</td><td>Xem Bài 2 (NL) và Bài 3 (VL) để tra bảng MOQ đầy đủ</td></tr>
      <tr><td>Sản phẩm mới ra mắt</td><td>Theo thông báo riêng từ Hệ thống trên Group Zalo Kho – làm theo hướng dẫn trong thông báo</td></tr>
    </table></div>
  </div>

  <div class="section">
    <h3>📞 Thông Tin Liên Hệ Hỗ Trợ</h3>
    <div class="highlight-box info">
      <strong>Bộ Phận Chuỗi Cung Ứng – Phúc Tea</strong><br/><br/>
      👤 <strong>Trần Thị Hạnh Nhân</strong><br/>
      📞 Hotline: <strong>0344 858 727</strong><br/>
      📧 Email: <strong>hanhnhan@phuctea.com.vn</strong><br/><br/>
      🕐 <strong>Giờ làm việc:</strong><br/>
      &nbsp;&nbsp;• Thứ 2 – Thứ 6: <strong>09:00 – 16:30</strong> (phản hồi 30–60 phút, chốt đơn trước 16:30)<br/>
      &nbsp;&nbsp;• Thứ 7 &amp; Chủ Nhật: tiếp nhận, xử lý vào sáng Thứ Hai
    </div>
    <div class="highlight-box warn" style="margin-top:12px">
      <strong>Kênh ưu tiên:</strong> <strong>Group Zalo Kho</strong> – kênh làm việc DUY NHẤT cho mọi giao dịch với Kho (đặt hàng, thanh toán, nhận hàng, báo sự cố).
    </div>
  </div>

  <div class="section">
    <div class="highlight-box warn">
      <strong>⭐ 7 QUY TẮC VÀNG (SOP V2.0)</strong>
      <ol style="margin-top:10px;line-height:2.5;padding-left:20px">
        <li><strong>Mọi NL/VL đều đặt qua KiotViet</strong> – không tự mua ngoài dù là Nguyên liệu thông thường</li>
        <li>Sau khi đặt hàng: <strong>chụp đơn → gửi Group Zalo Kho</strong></li>
        <li>Sau khi chuyển khoản: <strong>chụp bill → gửi Group Zalo Kho</strong></li>
        <li>Nhận hàng: kiểm tra <strong>5 điểm</strong>; HSD phải còn ≥ 1/3 hạn dùng</li>
        <li>Phát hiện lỗi: <strong>báo trong 1 ngày làm việc</strong> từ ngày nhận – quá hạn không giải quyết</li>
        <li>Phí VC: <strong>NL tự trả</strong> | <strong>VL đã bao gồm</strong> (bị thu thêm → hỏi Kho trước)</li>
        <li>Mọi thắc mắc: <strong>Group Zalo Kho</strong> hoặc <strong>0344 858 727</strong></li>
      </ol>
    </div>
  </div>`
}

]; /* end LESSONS */


/* ===== KIỂM TRA TỔNG KẾT – PHÚC TEA (30 câu) ===== */

const FINAL_QUIZ = [

  /* Nhóm 1 – Tổng Quan */
  {
    q: 'SOP Chuỗi Cung Ứng Phúc Tea V2.0 chia hàng hóa thành mấy nhóm chính?',
    opts: ['2 nhóm: Độc Quyền và Không Độc Quyền', '3 nhóm: NL ĐQ, VL ĐQ, Nguyên liệu', '4 nhóm: NL Độc Quyền, Nguyên liệu, VL Độc Quyền, Vật liệu', '5 nhóm theo từng loại sản phẩm'],
    c: 2,
    exp: 'SOP V2.0 chia thành 4 nhóm: (1) NL Độc Quyền, (2) Nguyên liệu, (3) VL Độc Quyền, (4) Vật liệu.'
  },
  {
    q: 'Giờ làm việc chính thức của Bộ Phận Chuỗi Cung Ứng Phúc Tea (SOP V2.0) là khi nào?',
    opts: ['Thứ 2–Thứ 6: 08:00–17:00', 'Thứ 2–Thứ 6: 09:00–17:00', 'Thứ 2–Thứ 6: 09:00–16:30', 'Thứ 2–Thứ 7: 09:00–16:30'],
    c: 2,
    exp: 'SOP V2.0: giờ làm việc Thứ 2–Thứ 6, 09:00–16:30. Giờ chốt đơn: 16:30 (V1 là 17:00).'
  },
  {
    q: '"Ngày làm việc" theo định nghĩa trong SOP là những ngày nào?',
    opts: ['Thứ 2–Thứ 7, không tính Chủ Nhật', 'Thứ 2–Thứ 6, không tính T7, CN, Lễ Tết', 'Thứ 2–Thứ 6 và Thứ 7 buổi sáng', 'Tất cả các ngày trừ Chủ Nhật'],
    c: 1,
    exp: 'Ngày làm việc = Thứ 2 đến Thứ 6, 09:00–16:30; không tính Thứ 7, Chủ Nhật và Lễ Tết.'
  },
  {
    q: 'Kênh làm việc DUY NHẤT giữa Cửa Hàng và Kho trong SOP V2.0 là gì?',
    opts: ['Hotline 0344 858 727', 'Email hanhnhan@phuctea.com.vn', 'Group Zalo Kho', 'Tab Hóa đơn trên KiotViet'],
    c: 2,
    exp: 'Group Zalo Kho là kênh làm việc DUY NHẤT cho mọi giao dịch: đặt hàng, thanh toán, nhận hàng, báo sự cố.'
  },
  {
    q: 'Hạn chót Cửa Hàng phải báo lỗi hàng trong SOP V2.0 là bao lâu từ ngày nhận hàng?',
    opts: ['Trong ngày nhận hàng', '1 ngày làm việc', '3 ngày', '5 ngày làm việc'],
    c: 1,
    exp: 'SOP V2.0 rút ngắn từ 3 ngày xuống còn 1 ngày làm việc từ ngày nhận hàng. Quá hạn → Hệ thống không giải quyết.'
  },

  /* Nhóm 2 – Danh Mục NL */
  {
    q: 'SOP V2.0 có bao nhiêu loại NL Độc Quyền?',
    opts: ['10 loại', '11 loại', '13 loại', '15 loại'],
    c: 2,
    exp: 'SOP V2.0 có 13 NL Độc Quyền (tăng từ 10): thêm Trà Oolong Quế Hoa, Trà Hoa Cỏ Mùa Xuân và Bột Milk Foam.'
  },
  {
    q: 'Bột Milk Foam Phúc Tea trong SOP V2.0 thuộc nhóm nào?',
    opts: ['Nguyên liệu (thương mại)', 'VL Độc Quyền', 'NL Độc Quyền', 'Vật liệu'],
    c: 2,
    exp: 'SOP V2.0 chuyển Bột Milk Foam từ nhóm Nguyên liệu (SOP V1) vào nhóm NL Độc Quyền.'
  },
  {
    q: 'Hai loại trà nào được thêm MỚI vào danh mục NL Độc Quyền trong SOP V2.0?',
    opts: ['Trà Oolong Quế Hoa và Trà Hoa Cỏ Mùa Xuân', 'Trà Xanh Lài và Trà Đen Phúc Tea', 'Trà Hòa Tan Vị Đào và Trà Hòa Tan Vị Vải', 'Trà Oolong 02 và Trà Xanh Lài'],
    c: 0,
    exp: 'SOP V2.0 thêm mới: Trà Oolong Quế Hoa Phúc Tea 500gr và Trà Hoa Cỏ Mùa Xuân Phúc Tea 500gr vào nhóm NL Độc Quyền.'
  },
  {
    q: 'Phí vận chuyển nhóm NL Độc Quyền và Nguyên liệu được xử lý thế nào?',
    opts: ['Đã bao gồm trong giá – không trả thêm', 'Chưa bao gồm – Cửa Hàng trả trực tiếp cho đơn vị vận chuyển khi nhận', 'Hệ thống thanh toán sau khi Cửa Hàng gửi hóa đơn', 'Trả trước khi đặt hàng'],
    c: 1,
    exp: 'NL (cả Độc Quyền lẫn Nguyên liệu): CHƯA bao gồm phí VC. Cửa Hàng trả trực tiếp cho đơn vị giao hàng khi nhận.'
  },
  {
    q: 'MOQ của Trà Đen Phúc Tea và Trà Hòa Tan Vị Đào là bao nhiêu?',
    opts: ['1 gói', '3 gói', '5 gói', '10 gói'],
    c: 2,
    exp: 'Trà Đen, Trà HT Vị Đào và Trà HT Vị Vải đều có MOQ 5 gói/lần đặt.'
  },

  /* Nhóm 3 – Danh Mục VL */
  {
    q: 'SOP V2.0 có bao nhiêu loại VL Độc Quyền?',
    opts: ['8 loại', '9 loại', '10 loại', '12 loại'],
    c: 1,
    exp: 'SOP V2.0 có 9 VL Độc Quyền (giảm từ 10 ở SOP V1). Ống Hút Cà Phê chuyển sang nhóm Vật liệu.'
  },
  {
    q: 'Ly Giấy trong SOP V2.0 là dung tích bao nhiêu?',
    opts: ['500ml', '600ml', '650ml', '700ml'],
    c: 1,
    exp: 'SOP V2.0: Ly Giấy 600ml (đổi từ 650ml ở SOP V1).'
  },
  {
    q: 'Phí vận chuyển nhóm VL Độc Quyền và Vật liệu được xử lý thế nào?',
    opts: ['Chưa bao gồm – Cửa Hàng trả khi nhận', 'Đã bao gồm – không trả thêm; nếu bị thu phái sinh → gọi Kho trước khi trả', 'Thanh toán qua KiotViet', 'Hệ thống thu sau khi giao hàng'],
    c: 1,
    exp: 'VL (cả Độc Quyền lẫn Vật liệu): ĐÃ BAO GỒM phí VC. Nếu nhà xe thu thêm → gọi Kho (0344 858 727) trước khi trả.'
  },
  {
    q: 'Đơn hàng có cả NL và VL, Cửa Hàng trả phí vận chuyển thế nào?',
    opts: ['Trả phí cho cả NL lẫn VL', 'Không trả phí vì đã bao gồm', 'Chỉ trả phí cho phần NL; phần VL đã bao gồm', 'Trả nửa phí của toàn bộ đơn'],
    c: 2,
    exp: 'Đơn hỗn hợp: Chỉ trả phí VC cho phần NL (chưa bao gồm). Phần VL đã bao gồm phí, không trả thêm.'
  },
  {
    q: 'Ống Hút Cà Phê trong SOP V2.0 thuộc nhóm nào?',
    opts: ['NL Độc Quyền', 'VL Độc Quyền', 'Vật liệu', 'Nguyên liệu'],
    c: 2,
    exp: 'SOP V2.0: Ống Hút Cà Phê chuyển từ VL Độc Quyền (SOP V1) sang nhóm Vật liệu.'
  },

  /* Nhóm 4 – Quy Trình Đặt Hàng */
  {
    q: 'Hai bằng chứng BẮT BUỘC gửi vào Group Zalo Kho để Kho xử lý đơn là gì?',
    opts: ['Ảnh chụp đơn KiotViet và ảnh tồn kho', 'Ảnh chụp đơn KiotViet và bill chuyển khoản', 'Bill chuyển khoản và ảnh hàng đã nhận', 'Ảnh đơn và xác nhận từ app ngân hàng'],
    c: 1,
    exp: 'Một đơn chỉ được Kho xử lý khi đã có đủ 2 bằng chứng: (1) Ảnh đơn KiotViet, (2) Bill chuyển khoản – cả hai gửi vào Group Zalo Kho.'
  },
  {
    q: 'Thông tin tài khoản thanh toán của Phúc Tea là gì?',
    opts: ['STK: 123456789 – Vietcombank – nội dung: phuctea', 'STK: 689767678888 – PVcombank – nội dung: chuyen tien', 'STK: 689767678888 – ACB – nội dung: dat hang', 'STK: 123456789 – PVcombank – nội dung: chuyen tien'],
    c: 1,
    exp: 'Đúng thông tin: STK 689767678888, PVcombank, TÀI VŨ PHÚC, nội dung: chuyen tien.'
  },
  {
    q: 'Trên KiotViet, khi thanh toán đơn hàng phải chọn phương thức gì?',
    opts: ['Chuyển khoản', 'Thẻ tín dụng', 'Tiền mặt', 'Ví điện tử'],
    c: 2,
    exp: 'Luôn chọn "Tiền mặt" trên màn hình Thanh toán của KiotViet, dù thực tế chuyển khoản.'
  },
  {
    q: 'Giờ chốt đơn trong ngày là mấy giờ?',
    opts: ['15:00', '16:00', '16:30', '17:00'],
    c: 2,
    exp: 'Giờ chốt đơn: 16:30 các ngày Thứ 2–Thứ 6. Đơn đủ ảnh đơn + bill trước 16:30 → Kho xác nhận trong ngày.'
  },
  {
    q: 'Cửa Hàng có được tự sửa đơn trên KiotViet sau khi đã bấm "Đặt hàng" không?',
    opts: ['Được, miễn là chưa thanh toán', 'Được, nếu báo Kho trước', 'Không, mọi thay đổi phải nhắn Group Zalo Kho để Kho thực hiện', 'Được trong 30 phút đầu sau khi đặt'],
    c: 2,
    exp: 'Cửa Hàng không tự sửa đơn trên KiotViet. Muốn sửa → nhắn Group Zalo Kho; Kho sẽ thực hiện thay đổi.'
  },

  /* Nhóm 5 – Nhận Hàng & Sự Cố */
  {
    q: 'Thời gian giao hàng Miền Nam tính từ ngày nào?',
    opts: ['Từ ngày Cửa Hàng bấm "Đặt hàng"', 'Từ ngày Cửa Hàng chuyển khoản', 'Từ ngày Hệ thống xác nhận đơn (Bước 6)', 'Từ ngày Kho gửi biên nhận'],
    c: 2,
    exp: 'Thời gian giao tính từ ngày Hệ thống XÁC NHẬN đơn (đơn chuyển sang tab Hóa đơn), không phải ngày bấm Đặt hàng.'
  },
  {
    q: 'Tiêu chí hạn sử dụng đạt chuẩn khi nhận hàng là gì?',
    opts: ['Còn hạn là được, không cần kiểm tra kỹ', 'Còn ít nhất 1/2 hạn dùng', 'Còn ít nhất 1/3 hạn dùng', 'Còn ít nhất 6 tháng'],
    c: 2,
    exp: 'SOP V2.0: hạn sử dụng đạt chuẩn khi còn lại ≥ 1/3 hạn dùng. Dưới mức này thuộc diện "cận date" = sự cố.'
  },
  {
    q: 'Khi phát hiện sản phẩm lỗi, Cửa Hàng được phép sử dụng không?',
    opts: ['Được, nếu chỉ lỗi nhẹ về bao bì', 'Được, nếu báo Kho trước', 'Không, giữ nguyên hiện trạng cho đến khi có hướng dẫn từ Hệ thống', 'Được nếu hàng sắp hết'],
    c: 2,
    exp: 'Không. Sản phẩm lỗi phải được giữ nguyên hiện trạng cho đến khi có hướng dẫn thu hồi/hủy từ Hệ thống.'
  },
  {
    q: '4 yếu tố bắt buộc khi báo sự cố qua Group Zalo Kho là gì?',
    opts: ['Mã đơn, tên sản phẩm, số lượng, ngày nhận', 'Hình ảnh/Video, tên sản phẩm, số lượng lỗi, mô tả lỗi', 'Hình ảnh, mã đơn, số tiền, đề xuất xử lý', 'Video, tên CH, mã SP, số lượng'],
    c: 1,
    exp: '4 yếu tố bắt buộc: (1) Hình ảnh/Video rõ nét, (2) Tên sản phẩm đúng tên KiotViet, (3) Số lượng lỗi/ĐVT, (4) Mô tả lỗi cụ thể.'
  },
  {
    q: 'Hệ thống cam kết phản hồi ban đầu cho sự cố trong bao lâu?',
    opts: ['10–20 phút', '30–60 phút', '2–4 giờ', 'Trong ngày làm việc'],
    c: 1,
    exp: 'SLA của Hệ thống: Phản hồi ban đầu trong 30–60 phút (tính từ lúc nhận tin trong giờ làm việc).'
  },
  {
    q: 'Thời hạn Kho hoàn tất đổi/trả sản phẩm lỗi sau khi Cửa Hàng xác nhận phương án là bao nhiêu ngày?',
    opts: ['1 ngày làm việc', '2 ngày làm việc', '3 ngày làm việc', '5 ngày làm việc'],
    c: 2,
    exp: 'Kho hoàn tất đổi/trả tối đa 3 ngày làm việc sau khi Cửa Hàng xác nhận phương án xử lý.'
  },
  {
    q: 'Tin báo sự cố gửi vào Thứ 7, SLA được tính từ khi nào?',
    opts: ['Ngay từ lúc gửi tin Thứ 7', 'Từ 09:00 Thứ 7', 'Từ 09:00 Thứ Hai (ngày làm việc kế tiếp)', 'Từ 16:30 Thứ 6 trước đó'],
    c: 2,
    exp: 'Tin báo T7, CN hoặc sau 16:30 được tính SLA từ 09:00 ngày làm việc kế tiếp (sáng Thứ Hai).'
  },
  {
    q: 'Đối chiếu công nợ với ĐTNQ diễn ra vào thời gian nào hằng tháng?',
    opts: ['Từ ngày 01 đến 03', 'Từ ngày 05 đến 08', 'Từ ngày 10 đến 15', 'Cuối tháng (28-31)'],
    c: 1,
    exp: 'SOP V2.0: đối chiếu công nợ từ ngày 05 đến 08 hằng tháng, kèm theo thông báo phí duy trì từ Kế toán.'
  },
  {
    q: 'Nhận được thông báo thay đổi số tài khoản ngân hàng qua mạng xã hội, Cửa Hàng cần làm gì?',
    opts: ['Chuyển tiền ngay theo số tài khoản mới', 'Bỏ qua thông báo đó', 'Xác nhận qua Hotline 0344 858 727 trước khi chuyển tiền', 'Hỏi thêm 1-2 cửa hàng khác xem họ nhận được không'],
    c: 2,
    exp: 'Bảo mật thanh toán: mọi thay đổi số tài khoản phải được xác nhận qua Hotline 0344 858 727 trước khi thực hiện chuyển khoản.'
  },
  {
    q: 'Điều nào SAI về quy tắc trong SOP V2.0?',
    opts: [
      'Cửa Hàng không được tự sửa đơn trên KiotViet sau khi đã đặt',
      'Phí vận chuyển VL đã bao gồm, Cửa Hàng không trả thêm',
      'Hạn báo lỗi hàng là 3 ngày kể từ ngày nhận',
      'Giờ chốt đơn là 16:30 các ngày làm việc'
    ],
    c: 2,
    exp: 'SOP V2.0 rút ngắn hạn báo lỗi từ 3 ngày xuống còn 1 ngày làm việc từ ngày nhận hàng (không còn 3 ngày nữa).'
  }

]; /* end FINAL_QUIZ */


/* ===== THE HOA ===== */

const LESSONS_TH = [];

const FINAL_QUIZ_TH = [];

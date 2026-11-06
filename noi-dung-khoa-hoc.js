/* ============================================================
   NOI DUNG KHOA HOC - Chuoi Cung Ung Phuc Tea
   File nay CHI chua noi dung bai hoc va cau hoi kiem tra.
   - LESSONS / LESSONS_TH   : noi dung bai hoc (khong co quiz rieng)
   - FINAL_QUIZ / FINAL_QUIZ_TH : 30 cau kiem tra tong ket
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
    <p>SOP Chuỗi Cung Ứng được xây dựng nhằm <strong>chuẩn hóa toàn bộ quy trình đặt hàng, cung ứng, tiếp nhận hàng hóa và xử lý các vấn đề phát sinh</strong> về NVL &amp; VL Độc Quyền trong hệ thống Phúc Tea.</p>
    <div class="highlight-box info">
      <strong>4 mục tiêu cốt lõi:</strong>
      <ul style="margin-top:8px">
        <li>Đảm bảo cửa hàng luôn được cung cấp <strong>đầy đủ nguyên vật liệu</strong></li>
        <li><strong>Kiểm soát chất lượng</strong> sản phẩm đồng nhất toàn hệ thống</li>
        <li><strong>Giảm sai sót</strong> trong quá trình đặt hàng và nhận hàng</li>
        <li><strong>Tăng tốc xử lý</strong> các vấn đề phát sinh</li>
      </ul>
    </div>
  </div>

  <div class="section">
    <h3>2. Phạm Vi Áp Dụng</h3>
    <p>SOP áp dụng cho <strong>toàn bộ hệ thống Phúc Tea</strong>, bao gồm:</p>
    <ul>
      <li>Các Cửa Hàng đang hoạt động</li>
      <li>Các Đối Tác Nhượng Quyền (ĐTNQ)</li>
      <li>Bộ phận Chuỗi Cung Ứng (CCU)</li>
      <li>Các phòng ban liên quan</li>
    </ul>
    <div class="highlight-box info" style="margin-top:12px">
      Dùng cho: <strong>Đào tạo nhân sự mới · Hướng dẫn vận hành · Tài liệu tham khảo ĐTNQ</strong>
    </div>
  </div>

  <div class="section">
    <h3>3. Thuật Ngữ Quan Trọng</h3>
    <div class="table-wrap"><table>
      <tr><th>Thuật ngữ</th><th>Giải thích</th></tr>
      <tr><td><strong>NVL Độc Quyền</strong></td><td>Nguyên vật liệu Phúc Tea nghiên cứu, phát triển hoặc đặt sản xuất riêng – chỉ mua qua hệ thống</td></tr>
      <tr><td><strong>VL Độc Quyền</strong></td><td>Vật liệu bao bì mang nhận diện thương hiệu Phúc Tea, thiết kế riêng – chỉ mua qua hệ thống</td></tr>
      <tr><td><strong>NVL Không ĐQ</strong></td><td>Nguyên liệu phổ thông, cần đặt qua hệ thống KiotViet để kiểm soát nguồn gốc</td></tr>
      <tr><td><strong>VL Không ĐQ</strong></td><td>Vật liệu bao bì phổ thông, cần đặt qua hệ thống KiotViet</td></tr>
      <tr><td><strong>ĐTNQ</strong></td><td>Đối Tác Nhượng Quyền</td></tr>
      <tr><td><strong>CCU</strong></td><td>Bộ phận Chuỗi Cung Ứng (Hệ thống)</td></tr>
      <tr><td><strong>MOQ</strong></td><td>Minimum Order Quantity – Số lượng đặt hàng tối thiểu mỗi lần</td></tr>
      <tr><td><strong>KiotViet</strong></td><td>Phần mềm quản lý bán hàng &amp; đặt hàng của hệ thống Phúc Tea</td></tr>
      <tr><td><strong>SLA</strong></td><td>Service Level Agreement – Cam kết thời gian xử lý của hệ thống</td></tr>
    </table></div>
  </div>

  <div class="section">
    <h3>4. Vai Trò &amp; Trách Nhiệm</h3>
    <div class="table-wrap"><table>
      <tr><th>Bộ Phận</th><th>Trách Nhiệm Chính</th></tr>
      <tr><td><strong>Bộ Phận Chuỗi Cung Ứng<br/>(Trạm Hệ Thống)</strong></td><td>
        <ul style="margin:4px 0;padding-left:18px;line-height:2">
          <li>Tiếp nhận &amp; xác nhận đơn hàng</li>
          <li>Cung cấp hồ sơ, thông tin sản phẩm</li>
          <li>Chuẩn bị, xuất hàng &amp; gửi biên nhận</li>
          <li>Quản lý công nợ &amp; đối chiếu cho ĐTNQ</li>
          <li>Hỗ trợ xử lý vấn đề phát sinh</li>
        </ul>
      </td></tr>
      <tr><td><strong>Cửa Hàng / ĐTNQ<br/>(Trạm Tiền Tuyến)</strong></td><td>
        <ul style="margin:4px 0;padding-left:18px;line-height:2">
          <li>Chủ động lập kế hoạch &amp; kiểm tra tồn kho</li>
          <li>Đặt hàng qua KiotViet đúng quy trình</li>
          <li>Thanh toán đúng quy định</li>
          <li>Kiểm tra kỹ hàng khi nhận</li>
          <li>Báo cáo sự cố đúng thời gian quy định</li>
        </ul>
      </td></tr>
    </table></div>
  </div>

  <div class="section">
    <div class="highlight-box warn">
      <strong>⭐ ĐIỂM QUAN TRỌNG CẦN NHỚ – BÀI 1</strong>
      <ul style="margin-top:10px;line-height:2.2">
        <li><strong>SOP = chuẩn hóa</strong> toàn bộ quy trình đặt hàng → nhận hàng → xử lý sự cố</li>
        <li>Mọi nguyên vật liệu và vật liệu bao bì (kể cả Không Độc Quyền) đều phải <strong>đặt qua hệ thống KiotViet</strong>, không tự mua ngoài</li>
        <li><strong>ĐTNQ</strong> = Đối Tác Nhượng Quyền &nbsp;|&nbsp; <strong>CCU</strong> = Bộ Phận Chuỗi Cung Ứng &nbsp;|&nbsp; <strong>MOQ</strong> = Số lượng tối thiểu</li>
        <li>Cửa hàng chủ động <strong>lập kế hoạch, đặt hàng, kiểm tra</strong> và <strong>báo lỗi đúng hạn</strong></li>
      </ul>
    </div>
  </div>`
},

/* ---- BÀI 2 ---- */
{
  id: 1,
  icon: '🧋',
  title: 'Danh Mục Nguyên Liệu Phúc Tea',
  subtitle: 'NVL Độc Quyền · NVL Không Độc Quyền',
  content: `
  <div class="section">
    <h3>Phân Biệt Các Nhóm Hàng</h3>
    <div class="table-wrap"><table>
      <tr><th>Nhóm</th><th>Đặc điểm</th><th>Cách đặt hàng</th></tr>
      <tr><td><strong>NVL Độc Quyền</strong></td><td>Phúc Tea nghiên cứu / đặt sản xuất riêng. Chỉ hệ thống mới có.</td><td>Đặt qua KiotViet</td></tr>
      <tr><td><strong>NVL Không ĐQ</strong></td><td>Nguyên liệu phổ thông trên thị trường nhưng phải dùng đúng nhà cung cấp hệ thống chỉ định.</td><td>Đặt qua KiotViet</td></tr>
    </table></div>
    <div class="highlight-box warn" style="margin-top:12px">
      ⚠️ Dù là Độc Quyền hay Không Độc Quyền, <strong>tất cả đều phải đặt qua KiotViet</strong> – không được tự mua ngoài thị trường.
    </div>
  </div>

  <div class="section">
    <h3>Nhóm 1 – Nguyên Liệu Độc Quyền (10 mặt hàng)</h3>
    <p>Kho xuất từ: <strong>Kho Nguyên Liệu HCM</strong> (riêng Cà Phê Mộc 9:1 từ Kho Cần Thơ)</p>
    <div class="table-wrap"><table>
      <tr><th>STT</th><th>Tên sản phẩm</th><th>Đơn vị tính</th><th>MOQ</th></tr>
      <tr><td>1</td><td>Cà Phê Mộc 9:1</td><td>Kg</td><td>2 kg</td></tr>
      <tr><td>2</td><td>Bột Pha Chế Phúc Tea PT35</td><td>Thùng</td><td>1 thùng</td></tr>
      <tr><td>3</td><td>Trà Đen Phúc Tea</td><td>500gr/gói</td><td>5 gói</td></tr>
      <tr><td>4</td><td>Trà Xanh Lài Phúc Tea</td><td>500gr/gói</td><td>1 gói</td></tr>
      <tr><td>5</td><td>Trà Oolong Phúc Tea 02</td><td>1kg/gói</td><td>1 gói</td></tr>
      <tr><td>6</td><td>Bột Socola Phúc Tea 02</td><td>500gr/gói</td><td>1 gói</td></tr>
      <tr><td>7</td><td>Trà Hòa Tan Vị Đào Phúc Tea</td><td>500gr/gói</td><td>5 gói</td></tr>
      <tr><td>8</td><td>Trà Hòa Tan Vị Vải Phúc Tea</td><td>500gr/gói</td><td>5 gói</td></tr>
      <tr><td>9</td><td>Trân Châu Giòn Phúc Tea</td><td>Thùng</td><td>1 thùng (6 gói)</td></tr>
      <tr><td>10</td><td>Vải Tươi Ngâm Đường Phúc Tea</td><td>Thùng</td><td>1 thùng (12 lon)</td></tr>
    </table></div>
  </div>

  <div class="section">
    <h3>Nhóm 2 – Nguyên Liệu Không Độc Quyền (16 mặt hàng)</h3>
    <p>Kho xuất từ: <strong>Kho Nguyên Liệu HCM</strong></p>
    <div class="table-wrap"><table>
      <tr><th>STT</th><th>Tên sản phẩm</th><th>Đơn vị tính</th><th>MOQ</th></tr>
      <tr><td>11</td><td>Mứt Hibiscus</td><td>Hủ</td><td>1 hủ</td></tr>
      <tr><td>12</td><td>Bột Milk Foam Phúc Tea</td><td>500gr/gói</td><td>1 gói</td></tr>
      <tr><td>13</td><td>Gelatine Đức Hoặc Pháp</td><td>1kg/gói</td><td>1 gói</td></tr>
      <tr><td>14</td><td>Syrup Đường Đen Luave</td><td>Can</td><td>1 can</td></tr>
      <tr><td>15</td><td>Bột Matcha Đài Loan</td><td>500gr/gói</td><td>1 gói</td></tr>
      <tr><td>16</td><td>Bột Khoai Môn Mole</td><td>1kg/gói</td><td>1 gói</td></tr>
      <tr><td>17</td><td>Pudding Trứng Mole</td><td>1kg/gói</td><td>1 gói</td></tr>
      <tr><td>18</td><td>Hạt Chia Úc Hoặc Peru</td><td>1kg/gói</td><td>1 gói</td></tr>
      <tr><td>19</td><td>Đào Ngâm Fresko 820gr</td><td>Thùng</td><td>1 thùng (12 lon)</td></tr>
      <tr><td>20</td><td>Sinh Tố Xoài Berrino</td><td>Chai</td><td>1 chai</td></tr>
      <tr><td>21</td><td>Mứt Thơm Berrino</td><td>Hủ</td><td>1 hủ</td></tr>
      <tr><td>22</td><td>Mứt Dâu Tằm Berrino</td><td>Hủ</td><td>1 hủ</td></tr>
      <tr><td>23</td><td>Thạch Dừa Vải Casa 3,5kg</td><td>Hủ</td><td>1 thùng (4 hủ)</td></tr>
      <tr><td>24</td><td>Thạch Nha Đam</td><td>Gói</td><td>5 gói</td></tr>
      <tr><td>25</td><td>Xí Muội Thái</td><td>500gr/gói</td><td>1 gói</td></tr>
      <tr><td>26</td><td>Syrup Đào Mama Rosa</td><td>Chai</td><td>1 chai</td></tr>
    </table></div>
  </div>

  <div class="section">
    <div class="highlight-box warn">
      <strong>⭐ ĐIỂM QUAN TRỌNG CẦN NHỚ – BÀI 2</strong>
      <ul style="margin-top:10px;line-height:2.2">
        <li>Có <strong>10 loại NVL Độc Quyền</strong> – do Phúc Tea sản xuất riêng, chỉ hệ thống mới có</li>
        <li>Có <strong>16 loại NVL Không Độc Quyền</strong> – phổ thông nhưng vẫn <strong>đặt qua KiotViet</strong></li>
        <li>Trà Đen, Trà Hòa Tan Vị Đào, Trà Hòa Tan Vị Vải: MOQ <strong>5 gói</strong></li>
        <li>Thạch Nha Đam: MOQ <strong>5 gói</strong> (đặc biệt trong nhóm NVL Không ĐQ)</li>
        <li>Mọi nguyên liệu đều có MOQ tối thiểu – không được đặt dưới mức quy định</li>
      </ul>
    </div>
  </div>`
},

/* ---- BÀI 3 ---- */
{
  id: 2,
  icon: '📦',
  title: 'Danh Mục Vật Liệu Bao Bì & MOQ',
  subtitle: 'VL Độc Quyền · VL Không Độc Quyền · Chính sách giá',
  content: `
  <div class="section">
    <h3>Nhóm 3 – Vật Liệu Bao Bì Độc Quyền (10 mặt hàng)</h3>
    <p>Kho xuất từ: <strong>Kho Vật Liệu HCM</strong></p>
    <div class="table-wrap"><table>
      <tr><th>STT</th><th>Tên sản phẩm</th><th>Đơn vị tính</th><th>MOQ</th></tr>
      <tr><td>1</td><td>Ly Giấy 650ml Theo Mùa</td><td>Thùng</td><td>1 thùng (1.000 cái)</td></tr>
      <tr><td>2</td><td>Ly Nhựa 600ml In 1 Màu</td><td>Thùng</td><td>1 thùng (1.000 cái)</td></tr>
      <tr><td>3</td><td>Ly Nhựa 500ml In 2 Màu</td><td>Thùng</td><td>1 thùng (1.000 cái)</td></tr>
      <tr><td>4</td><td>Ly Nhựa 400ml In 5 Màu</td><td>Thùng</td><td>1 thùng (1.000 cái)</td></tr>
      <tr><td>5</td><td>Ống Hút Cà Phê</td><td>Kg</td><td>5 kg</td></tr>
      <tr><td>6</td><td>Cuộn Ép Màng Ly Phúc Tea 25.01</td><td>Cuộn</td><td>1 cuộn</td></tr>
      <tr><td>7</td><td>Ống Hút Bọc Kiếng Phúc Tea</td><td>Kg</td><td>5 kg/kiện</td></tr>
      <tr><td>8</td><td>Bịch 1 Ly Phúc Tea 25.01</td><td>Kg</td><td>5 kg/kiện</td></tr>
      <tr><td>9</td><td>Bịch 2 Ly Phúc Tea 25.01</td><td>Kg</td><td>5 kg/kiện</td></tr>
      <tr><td>10</td><td>Combo Xô 1 Lít (Xô + nắp + bịch)</td><td>Thùng</td><td>1 thùng (300 cái)</td></tr>
    </table></div>
  </div>

  <div class="section">
    <h3>Nhóm 4 – Vật Liệu Bao Bì Không Độc Quyền (8 mặt hàng)</h3>
    <p>Kho xuất từ: <strong>Kho Vật Liệu HCM</strong></p>
    <div class="table-wrap"><table>
      <tr><th>STT</th><th>Tên sản phẩm</th><th>Đơn vị tính</th><th>MOQ</th></tr>
      <tr><td>1</td><td>Nắp Cầu Ly 400ml Phi 93</td><td>Thùng</td><td>1 thùng (1.000 cái)</td></tr>
      <tr><td>2</td><td>Bịch Chữ T</td><td>Kg</td><td>5 kg/kiện</td></tr>
      <tr><td>3</td><td>Hũ Nhựa Topping Nắp Liền 4oz (PET)</td><td>Thùng</td><td>1 thùng (2.000 cái)</td></tr>
      <tr><td>4</td><td>Muỗng Vàng 20cm</td><td>Thùng</td><td>1 thùng (2.500 cái)</td></tr>
      <tr><td>5</td><td>Nắp Bằng Cao Phi 95</td><td>Thùng</td><td>1 thùng (1.000 cái)</td></tr>
      <tr><td>6</td><td>Nắp Bằng Thấp Phi 90</td><td>Thùng</td><td>1 thùng (1.000 cái)</td></tr>
      <tr><td>7</td><td>500 Tờ Giấy Chống Tràn 13cm</td><td>Xấp</td><td>1 xấp (500 tờ)</td></tr>
      <tr><td>8</td><td>500 Tờ Giấy Chống Tràn 16cm (Xô)</td><td>Xấp</td><td>1 xấp (500 tờ)</td></tr>
    </table></div>
  </div>

  <div class="section">
    <h3>Chính Sách Giá</h3>
    <div class="table-wrap"><table>
      <tr><th>Nhóm hàng</th><th>Chính sách thay đổi giá</th></tr>
      <tr><td><strong>NVL &amp; VL Độc Quyền</strong></td><td>Điều chỉnh giá sẽ được <strong>thông báo trước 15 ngày</strong> qua các kênh chính thức của hệ thống</td></tr>
      <tr><td><strong>NVL &amp; VL Không Độc Quyền</strong></td><td>Giá <strong>cập nhật theo thị trường</strong> – kiểm tra trực tiếp trên KiotViet khi lên đơn</td></tr>
    </table></div>
  </div>

  <div class="section">
    <div class="highlight-box warn">
      <strong>⭐ ĐIỂM QUAN TRỌNG CẦN NHỚ – BÀI 3</strong>
      <ul style="margin-top:10px;line-height:2.2">
        <li>Có <strong>10 VL Độc Quyền</strong> và <strong>8 VL Không Độc Quyền</strong> – tất cả đặt qua KiotViet</li>
        <li>Ly nhựa và ly giấy: MOQ <strong>1 thùng (1.000 cái)</strong></li>
        <li>Bịch, ống hút, màng ép: MOQ <strong>5 kg</strong></li>
        <li>Giá NVL/VL Độc Quyền thay đổi phải <strong>thông báo trước 15 ngày</strong></li>
        <li>Giá NVL/VL Không Độc Quyền theo thị trường – <strong>kiểm tra trên KiotViet</strong> trước khi đặt</li>
      </ul>
    </div>
  </div>`
},

/* ---- BÀI 4 ---- */
{
  id: 3,
  icon: '📱',
  title: 'Quy Trình Đặt Hàng Trên KiotViet',
  subtitle: '10 bước đặt hàng · Lưu tạm vs Đặt hàng · Zalo Kho',
  content: `
  <div class="section">
    <h3>Chuẩn Bị Trước Khi Đặt Hàng</h3>
    <div class="highlight-box info">
      <strong>2 việc bắt buộc trước khi vào KiotViet:</strong><br/>
      <strong>Bước 1:</strong> Kiểm tra tồn kho hiện tại tại cửa hàng<br/>
      <strong>Bước 2:</strong> Lập danh sách hàng cần nhập theo từng nhóm sản phẩm
    </div>
    <p style="margin-top:12px">📌 File Min/Max tồn kho (mức tồn kho tối thiểu và tối đa) do <strong>Bộ Phận Operation</strong> hướng dẫn riêng.</p>
  </div>

  <div class="section">
    <h3>Thông Tin Đăng Nhập KiotViet</h3>
    <div class="table-wrap"><table>
      <tr><th>Thông tin</th><th>Chi tiết</th></tr>
      <tr><td><strong>Gian hàng</strong></td><td>taivuphuc</td></tr>
      <tr><td><strong>Tên đăng nhập</strong></td><td>Họ tên chủ cửa hàng (VD: tranthihanhnhan.ccn)</td></tr>
      <tr><td><strong>Mật khẩu</strong></td><td>Theo hệ thống cấp – liên hệ CCU nếu quên</td></tr>
    </table></div>
  </div>

  <div class="section">
    <h3>Các Bước Đặt Hàng Trên KiotViet</h3>
    <div class="table-wrap"><table>
      <tr><th>Bước</th><th>Việc cần làm</th><th>Ghi chú</th></tr>
      <tr><td><strong>B1</strong></td><td>Kiểm tra tồn kho tại cửa hàng</td><td></td></tr>
      <tr><td><strong>B2</strong></td><td>Lập danh sách hàng cần nhập</td><td></td></tr>
      <tr><td><strong>B3</strong></td><td>Vào KiotViet → Tab <strong>Bán Hàng</strong> → <strong>Đặt hàng</strong></td><td></td></tr>
      <tr><td><strong>B4</strong></td><td>Bấm <strong>Khách lẻ</strong> → Tìm &amp; chọn đúng tên cửa hàng mình</td><td>VD: 162 = Phúc Tea Vĩnh Cửu</td></tr>
      <tr><td><strong>B5</strong></td><td>Gõ tên sản phẩm → chọn → làm tương tự cho các SP còn lại</td><td>Bật "Chế độ chọn nhiều" để nhanh hơn</td></tr>
      <tr><td><strong>B6</strong></td><td>Điều chỉnh số lượng bằng nút +/- hoặc nhập trực tiếp</td><td>Đảm bảo đúng MOQ</td></tr>
      <tr><td><strong>B7</strong></td><td>Chọn <strong>Lưu tạm</strong> hoặc <strong>Đặt hàng</strong></td><td>Xem bảng bên dưới</td></tr>
      <tr><td style="color:#dc2626"><strong>B8 ⚠️</strong></td><td><strong>Chụp màn hình đơn hàng → Gửi vào nhóm Zalo Kho</strong></td><td>BẮT BUỘC</td></tr>
      <tr><td><strong>B9</strong></td><td>Thanh toán theo đơn hàng</td><td></td></tr>
      <tr><td style="color:#dc2626"><strong>B10 ⚠️</strong></td><td><strong>Chụp màn hình xác nhận thanh toán → Gửi vào nhóm Zalo Kho</strong></td><td>BẮT BUỘC</td></tr>
    </table></div>
  </div>

  <div class="section">
    <h3>Phân Biệt: Lưu Tạm vs Đặt Hàng</h3>
    <div class="table-wrap"><table>
      <tr><th></th><th>Lưu Tạm</th><th>Đặt Hàng</th></tr>
      <tr><td><strong>Hệ thống nhận đơn?</strong></td><td>❌ Chưa nhận</td><td>✅ Nhận ngay</td></tr>
      <tr><td><strong>Dùng khi nào?</strong></td><td>Cần xem lại, chỉnh sửa thêm</td><td>Đơn đã chắc chắn, sẵn sàng gửi</td></tr>
      <tr><td><strong>Xem lại ở đâu?</strong></td><td>Tab Đặt hàng (ô vuông đỏ góc phải)</td><td>Tab Hóa đơn</td></tr>
      <tr><td><strong>Phải làm thêm?</strong></td><td>Chỉnh sửa xong → bấm Đặt hàng</td><td>Tiến hành thanh toán ngay</td></tr>
    </table></div>
  </div>

  <div class="section">
    <h3>Kiểm Tra Trạng Thái Đơn Hàng</h3>
    <ul>
      <li><strong>Tab "Đặt hàng":</strong> đơn đã tạo nhưng hệ thống <em>chưa xác nhận</em> (còn ghi phiếu tạm)</li>
      <li><strong>Tab "Hóa đơn":</strong> đơn đã được hệ thống <em>nhận và xác nhận hoàn thành</em></li>
    </ul>
  </div>

  <div class="section">
    <div class="highlight-box warn">
      <strong>⭐ ĐIỂM QUAN TRỌNG CẦN NHỚ – BÀI 4</strong>
      <ul style="margin-top:10px;line-height:2.2">
        <li>Luôn <strong>kiểm tra tồn kho trước</strong> rồi mới vào KiotViet đặt hàng</li>
        <li>Đăng nhập: gian hàng <strong>taivuphuc</strong>, tên đăng nhập theo họ tên chủ cửa hàng</li>
        <li><strong>Chụp màn hình đơn hàng → Gửi Zalo Kho</strong> ngay sau khi đặt – BẮT BUỘC</li>
        <li><strong>Chụp màn hình thanh toán → Gửi Zalo Kho</strong> ngay sau khi thanh toán – BẮT BUỘC</li>
        <li>"Lưu tạm" = chưa gửi hệ thống | "Đặt hàng" = hệ thống nhận ngay</li>
        <li>Đơn được xác nhận sẽ hiện ở tab <strong>Hóa đơn</strong></li>
      </ul>
    </div>
  </div>`
},

/* ---- BÀI 5 ---- */
{
  id: 4,
  icon: '🚚',
  title: 'Nhận Hàng, Giao Hàng & Xử Lý Sự Cố',
  subtitle: 'Thời gian giao · 5 điểm kiểm tra · SLA xử lý sự cố',
  content: `
  <div class="section">
    <h3>1. Thời Gian Giao Hàng</h3>
    <div class="highlight-box info">
      <strong>⏱ Tính từ ngày hệ thống xác nhận đơn</strong> (không tính Thứ 7 &amp; Chủ Nhật)
      <div class="table-wrap" style="margin-top:10px"><table>
        <tr><th>Khu vực</th><th>Thời gian giao</th></tr>
        <tr><td><strong>Miền Nam</strong></td><td>5 – 7 ngày làm việc</td></tr>
        <tr><td><strong>Miền Trung &amp; Miền Bắc</strong></td><td>7 – 10 ngày làm việc</td></tr>
      </table></div>
    </div>
    <div class="highlight-box warn" style="margin-top:12px">
      ⚠️ Thời gian có thể <strong>thay đổi</strong> trong các trường hợp: dịp Lễ/Tết, sự cố vận chuyển, hoặc các sự cố khách quan khác.
    </div>
  </div>

  <div class="section">
    <h3>2. Kiểm Tra Hàng Khi Nhận – 5 Điểm Bắt Buộc</h3>
    <p>Khi hàng đến, kiểm tra đầy đủ <strong>5 điểm</strong> trước khi ký nhận:</p>
    <div class="table-wrap"><table>
      <tr><th>#</th><th>Điểm kiểm tra</th><th>Nội dung</th></tr>
      <tr><td>1</td><td><strong>Số lượng</strong></td><td>Đếm đủ số kiện/thùng/gói theo biên nhận</td></tr>
      <tr><td>2</td><td><strong>Đối chiếu đơn</strong></td><td>Hàng nhận có đúng tên, chủng loại như đã đặt không</td></tr>
      <tr><td>3</td><td><strong>Bao bì</strong></td><td>Thùng/túi có bị móp, rách, ướt, hỏng không</td></tr>
      <tr><td>4</td><td><strong>Hạn sử dụng</strong></td><td>Kiểm tra ngày hết hạn trên từng sản phẩm</td></tr>
      <tr><td>5</td><td><strong>Tình trạng SP</strong></td><td>Sản phẩm có nguyên vẹn, không bị vỡ/chảy/đổi màu không</td></tr>
    </table></div>
    <div class="highlight-box warn" style="margin-top:12px">
      Nếu có bất thường ở bất kỳ điểm nào → <strong>Dừng lại, chụp hình ngay và báo nhóm Zalo Kho</strong>
    </div>
  </div>

  <div class="section">
    <h3>3. Quy Trình Xử Lý Sự Cố (5 Bước)</h3>
    <div class="table-wrap"><table>
      <tr><th>Bước</th><th>Việc cần làm</th></tr>
      <tr><td><strong>B1</strong></td><td>Chụp hình / quay video sản phẩm bị lỗi rõ ràng</td></tr>
      <tr><td><strong>B2</strong></td><td>Gửi vào <strong>nhóm Zalo Kho</strong> kèm: hình ảnh + <strong>tên sản phẩm</strong> + <strong>số lượng lỗi</strong> + <strong>mô tả lỗi cụ thể</strong></td></tr>
      <tr><td><strong>B3</strong></td><td>Hệ thống tiếp nhận và đánh giá sự cố</td></tr>
      <tr><td><strong>B4</strong></td><td>Hệ thống đưa ra hướng xử lý (đổi hàng / trả hàng / bù trừ công nợ)</td></tr>
      <tr><td><strong>B5</strong></td><td>Cửa hàng xác nhận phương án xử lý</td></tr>
    </table></div>
  </div>

  <div class="section">
    <h3>4. SLA – Cam Kết Thời Gian Xử Lý</h3>
    <div class="table-wrap"><table>
      <tr><th>Cam kết</th><th>Thời hạn</th></tr>
      <tr><td>Phản hồi ban đầu từ hệ thống</td><td><strong>30 – 60 phút</strong></td></tr>
      <tr><td>Tiếp nhận &amp; đánh giá sự cố</td><td><strong>Trong 24 giờ</strong></td></tr>
      <tr><td>Cửa hàng phải báo lỗi sau khi nhận hàng</td><td><strong>Tối đa 3 ngày</strong> (quá hạn không giải quyết)</td></tr>
      <tr><td>Kho đổi/trả sản phẩm lỗi</td><td><strong>Tối đa 3 ngày</strong> sau khi xác nhận phương án</td></tr>
    </table></div>
    <div class="highlight-box warn" style="margin-top:12px">
      ⚠️ <strong>Báo lỗi quá 3 ngày kể từ khi nhận hàng → Hệ thống KHÔNG giải quyết</strong>
    </div>
  </div>

  <div class="section">
    <h3>5. Giờ Làm Việc &amp; Liên Hệ Hỗ Trợ</h3>
    <div class="table-wrap"><table>
      <tr><th>Thời gian</th><th>Trạng thái</th></tr>
      <tr><td><strong>Thứ 2 – Thứ 6: 09:00 – 17:00</strong></td><td>Phản hồi trong 30 – 60 phút</td></tr>
      <tr><td><strong>Thứ 7 &amp; Chủ Nhật</strong></td><td>Tiếp nhận thông tin, xử lý vào ngày làm việc tiếp theo</td></tr>
    </table></div>
    <div class="highlight-box info" style="margin-top:12px">
      <strong>Liên hệ CCU Phúc Tea:</strong><br/>
      👤 Trần Thị Hạnh Nhân – Bộ Phận Chuỗi Cung Ứng<br/>
      📞 Hotline: <strong>0344 858 727</strong><br/>
      📧 Email: hanhnhan@phuctea.com.vn
    </div>
  </div>

  <div class="section">
    <div class="highlight-box warn">
      <strong>⭐ ĐIỂM QUAN TRỌNG CẦN NHỚ – BÀI 5</strong>
      <ul style="margin-top:10px;line-height:2.2">
        <li>Miền Nam: <strong>5–7 ngày làm việc</strong> | Miền Trung &amp; Bắc: <strong>7–10 ngày làm việc</strong></li>
        <li>Kiểm tra <strong>5 điểm</strong> khi nhận hàng: Số lượng · Đối chiếu đơn · Bao bì · Hạn SD · Tình trạng SP</li>
        <li>Phát hiện lỗi → <strong>chụp hình ngay + báo Zalo Kho</strong></li>
        <li><strong>Hạn chót báo lỗi: 3 ngày kể từ khi nhận hàng</strong> – quá hạn không giải quyết</li>
        <li>Hotline hỗ trợ: <strong>0344 858 727</strong> (Thứ 2–6, 09:00–17:00)</li>
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
      Bài này là <strong>cẩm nang tra cứu</strong> – không phải lý thuyết học. Khi gặp bất kỳ tình huống nào trong vận hành, hãy vào đây tìm câu trả lời nhanh theo từng nhóm vấn đề bên dưới.
    </div>
  </div>

  <div class="section">
    <h3>🔑 Nhóm 1 – Đăng Nhập &amp; Tài Khoản KiotViet</h3>
    <div class="table-wrap"><table>
      <tr><th>Tình huống</th><th>Xử lý</th></tr>
      <tr><td>Quên mật khẩu KiotViet</td><td>Liên hệ CCU: 0344 858 727 để được cấp lại mật khẩu</td></tr>
      <tr><td>Không tìm thấy tên cửa hàng mình trong KiotViet</td><td>Thử gõ từng phần tên (VD: "163", "Vĩnh Cửu") hoặc liên hệ CCU kiểm tra</td></tr>
      <tr><td>App KiotViet bị lỗi / không vào được</td><td>Thử xóa cache hoặc gỡ cài lại app. Vẫn không được → liên hệ CCU</td></tr>
      <tr><td>Chưa có tài khoản KiotViet</td><td>Liên hệ CCU để được tạo tài khoản</td></tr>
    </table></div>
  </div>

  <div class="section">
    <h3>🛒 Nhóm 2 – Đặt Hàng &amp; Đơn Hàng</h3>
    <div class="table-wrap"><table>
      <tr><th>Tình huống</th><th>Xử lý</th></tr>
      <tr><td>Không tìm thấy sản phẩm trên KiotViet</td><td>Thử gõ tên khác/mã hàng. Nếu vẫn không có → liên hệ CCU kiểm tra</td></tr>
      <tr><td>Đặt thiếu hàng, muốn bổ sung vào đơn cũ</td><td>Nếu đơn chưa được xác nhận (còn ở Tab Đặt hàng): liên hệ CCU để hủy và đặt lại. Nếu đã xác nhận (Tab Hóa đơn): tạo đơn mới</td></tr>
      <tr><td>Muốn hủy đơn đã đặt</td><td>Liên hệ ngay CCU qua Zalo Kho – chỉ hủy được khi kho chưa chuẩn bị hàng</td></tr>
      <tr><td>Không biết đơn mình có được nhận chưa</td><td>Kiểm tra tab <strong>Hóa đơn</strong> trên KiotViet. Đơn ở đây = đã được xác nhận</td></tr>
      <tr><td>Quên chụp màn hình đơn gửi Zalo Kho</td><td>Vào Tab Hóa đơn → tìm đơn vừa đặt → chụp lại và gửi vào Zalo Kho ngay</td></tr>
      <tr><td>Có thể mua NVL ở chợ hoặc siêu thị không?</td><td><strong>Không.</strong> Dù là NVL Độc Quyền hay Không Độc Quyền, tất cả đều phải đặt qua KiotViet</td></tr>
    </table></div>
  </div>

  <div class="section">
    <h3>💰 Nhóm 3 – Thanh Toán</h3>
    <div class="table-wrap"><table>
      <tr><th>Tình huống</th><th>Xử lý</th></tr>
      <tr><td>Chưa thanh toán, kho có xuất hàng không?</td><td>Kho sẽ chỉ chuẩn bị hàng sau khi nhận được xác nhận thanh toán từ Zalo Kho</td></tr>
      <tr><td>Thanh toán rồi nhưng quên gửi Zalo Kho</td><td>Chụp lại xác nhận thanh toán (bank, ví điện tử…) và gửi vào nhóm Zalo Kho ngay</td></tr>
      <tr><td>Thắc mắc về công nợ hoặc số tiền cần thanh toán</td><td>Liên hệ CCU: 0344 858 727 hoặc email hanhnhan@phuctea.com.vn để đối chiếu</td></tr>
    </table></div>
  </div>

  <div class="section">
    <h3>🚚 Nhóm 4 – Giao Hàng &amp; Thời Gian</h3>
    <div class="table-wrap"><table>
      <tr><th>Tình huống</th><th>Xử lý</th></tr>
      <tr><td>Hàng chưa về, đã quá thời gian dự kiến</td><td>Kiểm tra lại ngày hệ thống xác nhận đơn (không tính T7/CN). Nếu đã qua → liên hệ CCU kiểm tra</td></tr>
      <tr><td>Thời gian giao hàng Miền Nam là bao nhiêu?</td><td>5–7 ngày làm việc tính từ ngày hệ thống xác nhận đơn (không tính T7/CN)</td></tr>
      <tr><td>Thời gian giao hàng Miền Trung/Bắc?</td><td>7–10 ngày làm việc tính từ ngày hệ thống xác nhận đơn (không tính T7/CN)</td></tr>
      <tr><td>Dịp Lễ/Tết có bị trễ không?</td><td>Có, thời gian giao hàng có thể thay đổi. Hệ thống sẽ thông báo trước nếu có điều chỉnh</td></tr>
      <tr><td>Đặt hàng ngày Thứ 7, kho xử lý khi nào?</td><td>Kho tiếp nhận thông tin T7/CN, xử lý vào sáng Thứ Hai</td></tr>
    </table></div>
  </div>

  <div class="section">
    <h3>📦 Nhóm 5 – Nhận Hàng &amp; Kiểm Tra</h3>
    <div class="table-wrap"><table>
      <tr><th>Tình huống</th><th>Xử lý</th></tr>
      <tr><td>Nhận hàng thiếu số lượng</td><td>Chụp hình biên nhận + hàng thực nhận → báo Zalo Kho ngay, trong vòng 3 ngày kể từ khi nhận</td></tr>
      <tr><td>Hàng bị hỏng bao bì khi nhận</td><td>Chụp hình tình trạng bao bì → báo Zalo Kho ngay trước khi ký nhận nếu có thể</td></tr>
      <tr><td>Sản phẩm sắp hết hạn hoặc hết hạn</td><td>Chụp hình hạn sử dụng → báo Zalo Kho trong vòng 3 ngày kể từ khi nhận hàng</td></tr>
      <tr><td>Nhận nhầm sản phẩm (không đúng đơn đặt)</td><td>Chụp hình sản phẩm nhận được vs biên nhận → báo Zalo Kho trong vòng 3 ngày</td></tr>
      <tr><td>Báo lỗi sau 3 ngày kể từ nhận hàng có được không?</td><td><strong>Không.</strong> Hệ thống chỉ giải quyết trong 3 ngày kể từ khi nhận hàng. Quá hạn → không được xử lý</td></tr>
    </table></div>
  </div>

  <div class="section">
    <h3>📋 Nhóm 6 – Sản Phẩm &amp; Giá Cả</h3>
    <div class="table-wrap"><table>
      <tr><th>Tình huống</th><th>Xử lý</th></tr>
      <tr><td>Giá sản phẩm thay đổi so với lần đặt trước</td><td>NVL/VL Không ĐQ: giá theo thị trường, cập nhật trên KiotViet. NVL/VL Độc Quyền: thay đổi phải báo trước 15 ngày</td></tr>
      <tr><td>Muốn biết giá hiện tại của sản phẩm</td><td>Kiểm tra trực tiếp trên KiotViet khi lên đơn hoặc liên hệ CCU</td></tr>
      <tr><td>Muốn đặt sản phẩm chưa thấy trong danh mục</td><td>Liên hệ CCU kiểm tra – có thể là sản phẩm mới chưa cập nhật hoặc không thuộc danh mục</td></tr>
      <tr><td>MOQ của một sản phẩm là bao nhiêu?</td><td>Xem Bài 2 (NVL) và Bài 3 (VL) để tra cứu bảng MOQ đầy đủ</td></tr>
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
      &nbsp;&nbsp;• Thứ 2 – Thứ 6: 09:00 – 17:00 (phản hồi 30–60 phút)<br/>
      &nbsp;&nbsp;• Thứ 7 &amp; Chủ Nhật: tiếp nhận, xử lý vào sáng Thứ Hai
    </div>
    <div class="highlight-box warn" style="margin-top:12px">
      <strong>Kênh ưu tiên:</strong> Zalo nhóm Kho – phản hồi nhanh nhất cho mọi vấn đề về đơn hàng và sự cố hàng hóa.
    </div>
  </div>

  <div class="section">
    <div class="highlight-box warn">
      <strong>⭐ TÓM TẮT CÁC QUY TẮC VÀNG</strong>
      <ol style="margin-top:10px;line-height:2.5;padding-left:20px">
        <li><strong>Mọi NVL/VL đều đặt qua KiotViet</strong> – không tự mua ngoài dù là Không Độc Quyền</li>
        <li>Sau khi đặt hàng: <strong>chụp đơn → gửi Zalo Kho</strong></li>
        <li>Sau khi thanh toán: <strong>chụp bill → gửi Zalo Kho</strong></li>
        <li>Nhận hàng: kiểm tra <strong>5 điểm</strong> trước khi ký</li>
        <li>Phát hiện lỗi hàng: <strong>báo trong 3 ngày</strong> kể từ khi nhận – quá hạn không giải quyết</li>
        <li>Mọi thắc mắc: <strong>Zalo Kho</strong> hoặc <strong>0344 858 727</strong></li>
      </ol>
    </div>
  </div>`
}

]; /* end LESSONS */


/* ===== KIỂM TRA TỔNG KẾT – PHÚC TEA (30 câu) ===== */

const FINAL_QUIZ = [

  /* Nhóm 1 – Tổng Quan Hệ Thống */
  {
    q: 'SOP Chuỗi Cung Ứng Phúc Tea được xây dựng để làm gì?',
    opts: [
      'Quảng bá thương hiệu Phúc Tea ra thị trường',
      'Chuẩn hóa quy trình đặt hàng, cung ứng, tiếp nhận và xử lý vấn đề phát sinh',
      'Đào tạo nhân viên pha chế và phục vụ',
      'Quản lý tài chính và kế toán cửa hàng'
    ],
    c: 1,
    exp: 'SOP chuẩn hóa toàn bộ quy trình vận hành chuỗi cung ứng: đặt hàng, cung ứng, tiếp nhận và xử lý vấn đề phát sinh.'
  },
  {
    q: 'Từ viết tắt ĐTNQ trong hệ thống Phúc Tea có nghĩa là gì?',
    opts: ['Điểm Thực Nghiệm Quy Trình', 'Đại Trung Nhượng Quyền', 'Đối Tác Nhượng Quyền', 'Đơn Thương Nhượng Quyền'],
    c: 2,
    exp: 'ĐTNQ = Đối Tác Nhượng Quyền – các đối tác mở cửa hàng Phúc Tea theo hình thức nhượng quyền thương mại.'
  },
  {
    q: 'MOQ là gì và quan trọng như thế nào khi đặt hàng?',
    opts: [
      'Monthly Order Quantity – hạn mức đặt hàng mỗi tháng',
      'Maximum Order Quota – số lượng đặt tối đa được phép',
      'Minimum Order Quantity – số lượng tối thiểu bắt buộc mỗi lần đặt',
      'Master Order Quality – tiêu chuẩn chất lượng sản phẩm'
    ],
    c: 2,
    exp: 'MOQ = Minimum Order Quantity = số lượng đặt hàng tối thiểu. Đặt dưới mức này sẽ không được chấp nhận.'
  },
  {
    q: 'Bộ Phận Chuỗi Cung Ứng (CCU) có trách nhiệm gì?',
    opts: [
      'Kiểm tra tồn kho và lên kế hoạch nhập hàng cho cửa hàng',
      'Tiếp nhận, xác nhận đơn hàng, chuẩn bị, xuất hàng và gửi biên nhận',
      'Kiểm tra 5 điểm chất lượng khi nhận hàng tại cửa hàng',
      'Thanh toán và quản lý ngân sách mua hàng'
    ],
    c: 1,
    exp: 'CCU tiếp nhận, xác nhận đơn hàng, chuẩn bị, xuất hàng, gửi biên nhận và quản lý công nợ cho ĐTNQ.'
  },
  {
    q: 'Cửa hàng / ĐTNQ cần chủ động làm gì trong chuỗi cung ứng?',
    opts: [
      'Liên hệ CCU để được lập kế hoạch đặt hàng hộ',
      'Chờ CCU thông báo khi nào cần đặt hàng',
      'Chủ động lập kế hoạch, đặt hàng qua KiotViet, thanh toán và báo sự cố đúng hạn',
      'Chỉ kiểm tra hàng khi nhận, còn lại do CCU lo'
    ],
    c: 2,
    exp: 'Cửa hàng / ĐTNQ phải chủ động: lập kế hoạch, kiểm tra tồn kho, đặt hàng, thanh toán và báo sự cố đúng hạn.'
  },

  /* Nhóm 2 – Danh Mục Nguyên Liệu */
  {
    q: 'Hệ thống Phúc Tea có bao nhiêu loại Nguyên Liệu Độc Quyền?',
    opts: ['6 loại', '8 loại', '10 loại', '13 loại'],
    c: 2,
    exp: 'Phúc Tea có 10 loại NVL Độc Quyền: Cà Phê Mộc 9:1, Bột PT35, Trà Đen, Trà Xanh Lài, Trà Oolong 02, Bột Socola 02, Trà HT Đào, Trà HT Vải, Trân Châu Giòn, Vải Tươi Ngâm Đường.'
  },
  {
    q: 'Trà Hòa Tan Vị Đào và Trà Hòa Tan Vị Vải thuộc nhóm nào?',
    opts: ['NVL Không Độc Quyền', 'VL Độc Quyền', 'NVL Độc Quyền', 'VL Không Độc Quyền'],
    c: 2,
    exp: 'Cả hai đều là NVL Độc Quyền của Phúc Tea – do hệ thống phát triển riêng và chỉ có trong hệ thống.'
  },
  {
    q: 'Bột Milk Foam, Gelatine, Bột Matcha, Hạt Chia thuộc nhóm nào?',
    opts: ['NVL Độc Quyền', 'VL Độc Quyền', 'NVL Không Độc Quyền', 'VL Không Độc Quyền'],
    c: 2,
    exp: 'Bột Milk Foam, Gelatine, Bột Matcha Đài Loan, Hạt Chia đều là NVL Không Độc Quyền – phổ thông nhưng vẫn đặt qua KiotViet.'
  },
  {
    q: 'Cửa hàng có thể tự mua Nguyên Liệu Không Độc Quyền ở chợ nếu khẩn cấp không?',
    opts: [
      'Được, vì đây là hàng phổ thông có bán khắp nơi',
      'Được, nếu báo cáo lý do với CCU trước',
      'Không, tất cả NVL dù Độc Quyền hay Không ĐQ đều phải đặt qua KiotViet',
      'Được, nếu chụp hóa đơn gửi CCU sau'
    ],
    c: 2,
    exp: 'Không. Dù là Độc Quyền hay Không Độc Quyền, tất cả NVL đều phải đặt qua hệ thống KiotViet.'
  },
  {
    q: 'MOQ của Trà Đen Phúc Tea và Trà Hòa Tan Vị Đào là bao nhiêu?',
    opts: ['1 gói', '3 gói', '5 gói', '10 gói'],
    c: 2,
    exp: 'Trà Đen, Trà Hòa Tan Vị Đào và Trà Hòa Tan Vị Vải đều có MOQ là 5 gói/lần đặt.'
  },

  /* Nhóm 3 – Vật Liệu Bao Bì & MOQ */
  {
    q: 'Nhóm Vật Liệu Bao Bì Độc Quyền của Phúc Tea có bao nhiêu mặt hàng?',
    opts: ['6 mặt hàng', '8 mặt hàng', '10 mặt hàng', '12 mặt hàng'],
    c: 2,
    exp: 'VL Độc Quyền có 10 mặt hàng: 4 loại ly, 2 loại ống hút, cuộn ép màng, 2 loại bịch và combo xô 1 lít.'
  },
  {
    q: 'MOQ của Ly Nhựa 500ml In 2 Màu là bao nhiêu?',
    opts: ['100 cái', '500 cái', '1 thùng (1.000 cái)', '1 thùng (2.000 cái)'],
    c: 2,
    exp: 'Tất cả các loại ly (Ly Giấy 650ml, Ly Nhựa 400/500/600ml) đều có MOQ là 1 thùng = 1.000 cái.'
  },
  {
    q: 'Bịch 1 Ly, Bịch 2 Ly, Ống Hút Bọc Kiếng có MOQ là bao nhiêu?',
    opts: ['1 thùng', '1 cuộn', '5 kg/kiện', '10 kg/kiện'],
    c: 2,
    exp: 'Bịch 1 Ly, Bịch 2 Ly và Ống Hút Bọc Kiếng đều có MOQ 5 kg/kiện.'
  },
  {
    q: 'Khi hệ thống thay đổi giá NVL Độc Quyền, cửa hàng được thông báo trước bao nhiêu ngày?',
    opts: ['5 ngày', '7 ngày', '15 ngày', '30 ngày'],
    c: 2,
    exp: 'Giá NVL & VL Độc Quyền thay đổi phải được thông báo trước 15 ngày qua kênh chính thức của hệ thống.'
  },
  {
    q: 'Cách xác định giá NVL Không Độc Quyền khi đặt hàng là gì?',
    opts: [
      'Theo bảng giá trong tài liệu đào tạo này',
      'Liên hệ CCU để hỏi giá trước khi đặt',
      'Kiểm tra trực tiếp trên ứng dụng KiotViet khi lên đơn',
      'Giá cố định theo hợp đồng nhượng quyền'
    ],
    c: 2,
    exp: 'Giá NVL Không Độc Quyền cập nhật theo thị trường – cần kiểm tra trực tiếp trên KiotViet khi lên đơn hàng.'
  },

  /* Nhóm 4 – Quy Trình Đặt Hàng */
  {
    q: 'Điều đầu tiên cần làm trước khi mở app KiotViet đặt hàng là gì?',
    opts: [
      'Liên hệ nhóm Zalo Kho để xác nhận còn hàng không',
      'Thanh toán công nợ trước kỳ hạn',
      'Kiểm tra tồn kho tại cửa hàng và lập danh sách hàng cần nhập',
      'Chụp ảnh khu vực kho cửa hàng gửi CCU'
    ],
    c: 2,
    exp: 'Trước khi đặt hàng: (1) Kiểm tra tồn kho, (2) Lập danh sách hàng cần nhập – rồi mới vào KiotViet đặt.'
  },
  {
    q: 'Gian hàng KiotViet của hệ thống Phúc Tea tên là gì?',
    opts: ['phuctea.vn', 'taivuphuc', 'phucteaorder', 'ccuphuctea'],
    c: 1,
    exp: 'Tên gian hàng KiotViet của hệ thống Phúc Tea là "taivuphuc".'
  },
  {
    q: 'Trên KiotViet, để đặt hàng cần đi theo đường nào?',
    opts: [
      'Hóa đơn → Tạo mới → Khách lẻ',
      'Bán Hàng → Đặt hàng → Khách lẻ',
      'Nhiều hơn → Quản lý đơn hàng',
      'Cài đặt → Đặt hàng tự động'
    ],
    c: 1,
    exp: 'Đường đặt hàng: Tab Bán Hàng → Đặt hàng → Bấm "Khách lẻ" để tìm và chọn tên cửa hàng mình.'
  },
  {
    q: 'Hai việc BẮT BUỘC phải chụp màn hình gửi nhóm Zalo Kho trong quá trình đặt hàng là gì?',
    opts: [
      'Chụp màn hình đăng nhập và chụp danh sách sản phẩm',
      'Chụp màn hình đơn hàng sau khi đặt và chụp xác nhận thanh toán',
      'Chụp màn hình đơn hàng và chụp màn hình tab Hóa đơn',
      'Chụp màn hình tồn kho và chụp đơn hàng'
    ],
    c: 1,
    exp: 'Bắt buộc chụp 2 màn hình gửi Zalo Kho: (1) Màn hình đơn hàng sau khi bấm Đặt hàng; (2) Màn hình xác nhận sau khi thanh toán.'
  },
  {
    q: 'Đơn hàng "Lưu tạm" và đơn "Đặt hàng" khác nhau thế nào?',
    opts: [
      'Lưu tạm chỉ lưu trên điện thoại; Đặt hàng lưu trên server',
      'Lưu tạm chưa gửi hệ thống, có thể sửa; Đặt hàng hệ thống nhận ngay',
      'Lưu tạm miễn phí; Đặt hàng tính phí xử lý',
      'Lưu tạm cần thanh toán trước; Đặt hàng thanh toán sau'
    ],
    c: 1,
    exp: '"Lưu tạm" = chưa gửi đến hệ thống, còn có thể vào chỉnh sửa. "Đặt hàng" = hệ thống nhận đơn ngay, tiến hành xử lý.'
  },
  {
    q: 'Sau khi hệ thống xác nhận đơn, cửa hàng có thể kiểm tra đơn ở đâu trên KiotViet?',
    opts: [
      'Tab "Đặt hàng" – phiếu tạm',
      'Tab "Hóa đơn" – đơn đã được xác nhận hoàn thành',
      'Tab "Cài đặt" – lịch sử đơn hàng',
      'Tab "Báo cáo" – thống kê nhập hàng'
    ],
    c: 1,
    exp: 'Sau khi hệ thống xác nhận, đơn hàng sẽ hiện ở tab "Hóa đơn". Tab "Đặt hàng" chỉ hiển thị đơn chưa được xác nhận.'
  },

  /* Nhóm 5 – Nhận Hàng & Xử Lý Sự Cố */
  {
    q: 'Thời gian giao hàng cho cửa hàng ở Miền Trung và Miền Bắc là bao nhiêu ngày?',
    opts: ['3 – 5 ngày làm việc', '5 – 7 ngày làm việc', '7 – 10 ngày làm việc', '10 – 15 ngày làm việc'],
    c: 2,
    exp: 'Miền Trung & Miền Bắc: 7 – 10 ngày làm việc. Miền Nam: 5 – 7 ngày làm việc. Tính từ ngày hệ thống xác nhận đơn.'
  },
  {
    q: 'Thứ 7 và Chủ Nhật có được tính vào thời gian giao hàng không?',
    opts: [
      'Có, tính đầy đủ 7 ngày/tuần',
      'Có, nhưng chỉ tính nửa ngày',
      'Không, chỉ tính ngày làm việc (Thứ 2 đến Thứ 6)',
      'Tùy theo đơn vị vận chuyển'
    ],
    c: 2,
    exp: 'Thời gian giao hàng chỉ tính ngày làm việc (Thứ 2 đến Thứ 6). Thứ 7 và Chủ Nhật không tính vào thời gian giao.'
  },
  {
    q: 'Khi nhận hàng, 5 điểm cần kiểm tra là gì?',
    opts: [
      'Giá cả, số lượng, màu sắc, mùi vị, nhiệt độ',
      'Số lượng, đối chiếu đơn đặt, bao bì, hạn sử dụng, tình trạng sản phẩm',
      'Tên sản phẩm, trọng lượng, giá, hạn SD, nhà cung cấp',
      'Màu sắc, mùi, vị, cấu trúc, nguồn gốc'
    ],
    c: 1,
    exp: '5 điểm kiểm tra bắt buộc: (1) Số lượng (2) Đối chiếu đơn (3) Bao bì (4) Hạn sử dụng (5) Tình trạng sản phẩm.'
  },
  {
    q: 'Phát hiện hàng bị lỗi khi nhận, cửa hàng cần làm gì NGAY LẬP TỨC?',
    opts: [
      'Trả hàng lại cho tài xế giao hàng ngay',
      'Chụp hình / quay video sản phẩm lỗi rồi gửi nhóm Zalo Kho kèm tên SP, số lượng, mô tả lỗi',
      'Viết email gửi địa chỉ hanhnhan@phuctea.com.vn',
      'Gọi điện hotline để khiếu nại'
    ],
    c: 1,
    exp: 'Bước 1: chụp hình/quay video ngay → gửi nhóm Zalo Kho kèm tên SP, số lượng lỗi và mô tả chi tiết.'
  },
  {
    q: 'Hạn chót để cửa hàng báo lỗi sản phẩm sau khi nhận hàng là bao nhiêu ngày?',
    opts: ['1 ngày', '2 ngày', '3 ngày', '5 ngày'],
    c: 2,
    exp: 'Cửa hàng có tối đa 3 ngày kể từ khi nhận hàng để báo lỗi. Quá 3 ngày, hệ thống KHÔNG giải quyết khiếu nại.'
  },
  {
    q: 'Hệ thống cam kết phản hồi ban đầu cho sự cố trong bao lâu?',
    opts: ['10 – 20 phút', '30 – 60 phút', '2 – 4 giờ', 'Trong ngày làm việc'],
    c: 1,
    exp: 'SLA của hệ thống: Phản hồi ban đầu trong 30 – 60 phút. Tiếp nhận & đánh giá trong 24 giờ.'
  },
  {
    q: 'Giờ làm việc chính thức của Bộ Phận Chuỗi Cung Ứng Phúc Tea là khi nào?',
    opts: [
      'Thứ 2 – Chủ Nhật: 08:00 – 18:00',
      'Thứ 2 – Thứ 6: 09:00 – 17:00 (phản hồi 30–60 phút)',
      'Thứ 2 – Thứ 7: 09:00 – 17:00',
      'Thứ 2 – Thứ 6: 08:00 – 20:00'
    ],
    c: 1,
    exp: 'Giờ làm việc CCU: Thứ 2 đến Thứ 6, 09:00 – 17:00. Phản hồi trong 30–60 phút. T7 & CN chỉ tiếp nhận, xử lý thứ Hai.'
  },
  {
    q: 'Hotline của Bộ Phận Chuỗi Cung Ứng Phúc Tea là số nào?',
    opts: ['0344 858 282', '0344 858 727', '0362 858 727', '0344 282 727'],
    c: 1,
    exp: 'Hotline CCU Phúc Tea: 0344 858 727 – Trần Thị Hạnh Nhân. Email: hanhnhan@phuctea.com.vn.'
  },
  {
    q: 'Nếu đặt hàng vào Thứ 7, kho sẽ xử lý đơn vào ngày nào?',
    opts: [
      'Ngay trong Thứ 7',
      'Chủ Nhật',
      'Thứ Hai tuần kế tiếp (ngày làm việc tiếp theo)',
      'T7 và CN CCU vẫn xử lý như bình thường'
    ],
    c: 2,
    exp: 'T7 & CN chỉ tiếp nhận thông tin, không xử lý. Đơn đặt T7 sẽ được xử lý vào sáng Thứ Hai tuần kế tiếp.'
  },
  {
    q: 'Toàn bộ NVL và VL bao bì trong hệ thống Phúc Tea gồm bao nhiêu nhóm chính?',
    opts: ['2 nhóm', '3 nhóm', '4 nhóm', '5 nhóm'],
    c: 2,
    exp: 'Có 4 nhóm chính: (1) NVL Độc Quyền, (2) NVL Không Độc Quyền, (3) VL Bao Bì Độc Quyền, (4) VL Bao Bì Không Độc Quyền.'
  }

]; /* end FINAL_QUIZ */


/* ===== THE HOA ===== */

const LESSONS_TH = [];

const FINAL_QUIZ_TH = [];

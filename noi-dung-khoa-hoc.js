/* ============================================================
   NOI DUNG KHOA HOC - Van Hanh Kho Tai Cua Hang
   File nay CHI chua noi dung bai hoc va cau hoi.
   Sua bai / sua cau hoi thi sua o day, KHONG dong vao code.
   Huong dan: xem README-BAN-GIAO.md muc 5.
   ============================================================ */


const LESSONS = [
{
  id:0, icon:'🏪',
  title:'Tổng Quan Chuỗi Cung Ứng',
  subtitle:'Mục đích, phạm vi & vai trò',
  content:`
  <div class="section">
    <h3>1. Mục Đích Của SOP</h3>
    <p>Tài liệu SOP Chuỗi Cung Ứng được xây dựng nhằm <strong>chuẩn hóa toàn bộ quy trình đặt hàng, cung ứng, tiếp nhận hàng hóa và xử lý các vấn đề phát sinh</strong> trong hệ thống Phúc Tea.</p>
    <div class="highlight-box">
      <strong>5 mục tiêu cốt lõi:</strong>
      <ul style="margin-top:8px">
        <li>Đảm bảo Cửa Hàng luôn được cung cấp đầy đủ nguyên vật liệu</li>
        <li>Kiểm soát chất lượng sản phẩm trong toàn hệ thống</li>
        <li>Giảm thiểu sai sót trong quá trình đặt hàng và nhận hàng</li>
        <li>Tăng tốc độ xử lý các vấn đề phát sinh</li>
        <li>Chuẩn hóa cách làm việc giữa Cửa Hàng và bộ phận hệ thống</li>
      </ul>
    </div>
  </div>
  <div class="section">
    <h3>2. Phạm Vi Áp Dụng</h3>
    <p>SOP áp dụng cho <strong>toàn bộ hệ thống Phúc Tea</strong>:</p>
    <ul>
      <li>Các Cửa Hàng đang hoạt động</li>
      <li>Các Đối Tác Nhượng Quyền (ĐTNQ)</li>
      <li>Bộ phận Chuỗi Cung Ứng</li>
      <li>Các phòng ban liên quan</li>
    </ul>
    <div class="highlight-box info" style="margin-top:12px">
      Dùng cho: <strong>Đào tạo nhân sự mới · Hướng dẫn vận hành · Tài liệu tham khảo ĐTNQ</strong>
    </div>
  </div>
  <div class="section">
    <h3>3. Định Nghĩa Thuật Ngữ</h3>
    <div class="table-wrap"><table>
      <tr><th>Thuật ngữ</th><th>Giải thích</th></tr>
      <tr><td><strong>NVL Độc Quyền</strong></td><td>Nguyên vật liệu Phúc Tea nghiên cứu/đặt sản xuất riêng</td></tr>
      <tr><td><strong>VL Độc Quyền</strong></td><td>Vật liệu nhận diện thương hiệu thiết kế riêng</td></tr>
      <tr><td><strong>ĐTNQ</strong></td><td>Đối Tác Nhượng Quyền</td></tr>
      <tr><td><strong>MOQ</strong></td><td>Minimum Order Quantity - Số lượng đặt hàng tối thiểu</td></tr>
      <tr><td><strong>KiotViet</strong></td><td>Phần mềm quản lý bán hàng & đặt hàng của hệ thống</td></tr>
    </table></div>
  </div>
  <div class="section">
    <h3>4. Vai Trò & Trách Nhiệm</h3>
    <div class="table-wrap"><table>
      <tr><th>Bộ phận</th><th>Trách nhiệm chính</th></tr>
      <tr><td><strong>Chuỗi Cung Ứng</strong></td><td>
        <ul style="margin:0;padding-left:18px;line-height:2">
          <li>Kiểm soát đơn hàng</li>
          <li>Cung cấp hồ sơ sản phẩm</li>
          <li>Xác nhận & xuất hàng</li>
          <li>Gửi biên nhận</li>
          <li>Quản lý công nợ</li>
        </ul>
      </td></tr>
      <tr><td><strong>Cửa Hàng / ĐTNQ</strong></td><td>
        <ul style="margin:0;padding-left:18px;line-height:2">
          <li>Chủ động lập kế hoạch đặt hàng</li>
          <li>Thanh toán đúng quy định</li>
          <li>Kiểm tra hàng khi nhận</li>
          <li>Báo cáo sự cố đúng hạn</li>
        </ul>
      </td></tr>
    </table></div>
  </div>`,
  questions:[
    {q:'Mục đích chính của SOP Chuỗi Cung Ứng Phúc Tea là gì?',
     opts:['Tăng doanh số và marketing','Chuẩn hóa quy trình đặt hàng, cung ứng, tiếp nhận hàng và xử lý vấn đề phát sinh','Quản lý nhân sự cửa hàng','Thiết kế sản phẩm và menu mới'],
     c:1,exp:'SOP chuẩn hóa toàn bộ quy trình đặt hàng, cung ứng, tiếp nhận và xử lý vấn đề trong hệ thống.'},
    {q:'SOP Chuỗi Cung Ứng áp dụng cho những đối tượng nào?',
     opts:['Chỉ bộ phận kho','Chỉ đối tác nhượng quyền','Cửa hàng, ĐTNQ, Chuỗi Cung Ứng và các phòng ban liên quan','Chỉ quản lý cấp cao'],
     c:2,exp:'SOP áp dụng toàn bộ hệ thống gồm cửa hàng, ĐTNQ, bộ phận Chuỗi Cung Ứng và các phòng ban liên quan.'},
    {q:'"ĐTNQ" là viết tắt của cụm từ nào?',
     opts:['Đặt Tên Nhãn Quảng cáo','Đối Tác Nhượng Quyền','Điều Tra Nhu Cầu Quản lý','Đơn Thanh toán Nợ Quyết toán'],
     c:1,exp:'ĐTNQ = Đối Tác Nhượng Quyền - cá nhân/tổ chức đã mua quyền kinh doanh thương hiệu Phúc Tea.'},
    {q:'Trách nhiệm của bộ phận Chuỗi Cung Ứng bao gồm?',
     opts:['Trực tiếp bán hàng cho khách lẻ','Tiếp nhận, xác nhận đơn, chuẩn bị & xuất hàng, gửi biên nhận','Thiết kế bao bì và menu','Tuyển dụng nhân sự cửa hàng'],
     c:1,exp:'Bộ phận Chuỗi Cung Ứng: kiểm soát đơn, xác nhận, xuất hàng, gửi biên nhận và quản lý công nợ.'},
    {q:'Trách nhiệm của Cửa Hàng/ĐTNQ là gì?',
     opts:['Chỉ nhận hàng, không cần kiểm tra','Tự sản xuất nguyên liệu','Chủ động lập kế hoạch đặt hàng, thanh toán đúng quy định, kiểm tra hàng khi nhận','Phân phối hàng cho cửa hàng khác'],
     c:2,exp:'Cửa Hàng/ĐTNQ phải chủ động lập kế hoạch đặt hàng, thanh toán đúng hạn, kiểm tra hàng và báo sự cố kịp thời.'}
  ]
},
{
  id:1, icon:'🧋',
  title:'Danh Mục Nguyên Vật Liệu',
  subtitle:'Độc quyền & không độc quyền',
  content:`
  <div class="section">
    <h3>1. Nguyên Liệu Độc Quyền (NVL Độc Quyền)</h3>
    <p>Do Phúc Tea <strong>nghiên cứu, phát triển hoặc đặt sản xuất riêng</strong>. Bắt buộc nhập từ hệ thống.</p>
    <div class="table-wrap"><table>
      <tr><th>#</th><th>Sản phẩm</th><th>Đơn vị</th></tr>
      <tr><td>1</td><td>Cà Phê Mộc 9:1</td><td>Kg</td></tr>
      <tr><td>2</td><td>Bột Pha Chế Phúc Tea PT35</td><td>Thùng</td></tr>
      <tr><td>3</td><td>Trà Đen Phúc Tea (500gr/gói)</td><td>Gói</td></tr>
      <tr><td>4</td><td>Trà Xanh Lài Phúc Tea (500gr/gói)</td><td>Gói</td></tr>
      <tr><td>5</td><td>Trà Oolong Phúc Tea 02 (1kg/gói)</td><td>Gói</td></tr>
      <tr><td>6</td><td>Bột Socola Phúc Tea 02 (500gr/gói)</td><td>Gói</td></tr>
      <tr><td>7</td><td>Trà Hòa Tan Vị Đào Phúc Tea</td><td>Gói</td></tr>
      <tr><td>8</td><td>Trà Hòa Tan Vị Vải Phúc Tea</td><td>Gói</td></tr>
      <tr><td>9</td><td>Trân Châu Giòn Phúc Tea</td><td>Thùng</td></tr>
      <tr><td>10</td><td>Vải Tươi Ngâm Đường Phúc Tea</td><td>Thùng</td></tr>
    </table></div>
    <div class="highlight-box info">💡 Đơn giá không nằm trong tài liệu đào tạo. Khi đặt hàng, xem <strong>đơn giá hiện hành trực tiếp trên KiotViet</strong> hoặc trong báo giá chính thức của bộ phận Chuỗi Cung Ứng.</div>
    <div class="highlight-box warn">⚠️ Khi có điều chỉnh giá NVL Độc Quyền, hệ thống thông báo trước <strong>15 ngày</strong>.</div>
    <div class="highlight-box" style="background:#fff8e1;border-color:#ffe082">🚚 Giá <strong>Nhóm Nguyên Liệu</strong> (NVL Độc Quyền & Không Độc Quyền) <strong>chưa bao gồm phí vận chuyển</strong>.</div>
  </div>
  <div class="section">
    <h3>2. Nguyên Liệu Không Độc Quyền</h3>
    <div class="table-wrap"><table>
      <tr><th>#</th><th>Sản phẩm</th><th>Đơn vị</th></tr>
      <tr><td>11</td><td>Mứt Hibiscus</td><td>Hủ</td></tr>
      <tr><td>12</td><td>Bột Milk Foam Phúc Tea</td><td>Gói</td></tr>
      <tr><td>13</td><td>Gelatine Đức/Pháp</td><td>Gói</td></tr>
      <tr><td>14</td><td>Syrup Đường Đen Luave</td><td>Can</td></tr>
      <tr><td>15</td><td>Bột Matcha Đài Loan</td><td>Gói</td></tr>
      <tr><td>16</td><td>Bột Khoai Môn Mole</td><td>Gói</td></tr>
      <tr><td>17</td><td>Pudding Trứng Mole</td><td>Gói</td></tr>
      <tr><td>18</td><td>Hạt Chia Úc/Peru</td><td>Gói</td></tr>
      <tr><td>19</td><td>Đào Ngâm Fresko 820gr</td><td>Hộp</td></tr>
      <tr><td>20</td><td>Sinh Tố Xoài Berrino</td><td>Chai</td></tr>
      <tr><td>21-22</td><td>Mứt Thơm / Mứt Dâu Tằm Berrino</td><td>Hủ</td></tr>
      <tr><td>23</td><td>Thạch Dừa Vải Casa 3,5kg</td><td>Hủ</td></tr>
      <tr><td>24</td><td>Thạch Nha Đam</td><td>Gói</td></tr>
      <tr><td>25</td><td>Xí Muội Thái</td><td>Gói</td></tr>
      <tr><td>26</td><td>Syrup Đào Mama Rosa</td><td>Chai</td></tr>
    </table></div>
    <div class="highlight-box info">💡 Giá NL Không Độc Quyền <strong>cập nhật linh hoạt theo thị trường</strong>. Kiểm tra trên KiotViet khi đặt hàng.</div>
  </div>
  <div class="section">
    <h3>3. Vật Liệu Bao Bì</h3>
    <div class="table-wrap"><table>
      <tr><th>Phân loại</th><th>Sản phẩm tiêu biểu</th></tr>
      <tr>
        <td><span class="badge bg-green">VL Độc Quyền</span></td>
        <td>
          <ul style="margin:0;padding-left:18px;line-height:2">
            <li>Ly Giấy 600ml</li>
            <li>Ly Nhựa 500ml / 400ml / 600ml <em>(in thương hiệu)</em></li>
            <li>Cuộn Ép Màng</li>
            <li>Cuộn Ép Màng Ly 1000ml Phúc Tea</li>
            <li>Ly Nhựa PP 1000ml Phúc Tea</li>
            <li>Ống Hút Bọc Kiếng</li>
            <li>Bịch 1/2 Ly</li>
            <li>Combo Xô 1 Lít</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td><span class="badge bg-blue">VL Không ĐQ</span></td>
        <td>
          <ul style="margin:0;padding-left:18px;line-height:2">
            <li>Nắp Cầu Ly 400ml</li>
            <li>Bịch Chữ T</li>
            <li>Hũ Nhựa Topping</li>
            <li>Muỗng Vàng</li>
            <li>Nắp Bằng Cao</li>
            <li>Giấy Chống Tràn</li>
          </ul>
        </td>
      </tr>
    </table></div>
    <div class="highlight-box" style="background:#e8f5ee;border-color:#a8dbb9">🚚 Giá <strong>Nhóm Vật Liệu Bao Bì</strong> <strong>đã bao gồm phí vận chuyển</strong>.</div>
  </div>`,
  questions:[
    {q:'"NVL Độc Quyền" trong hệ thống Phúc Tea là gì?',
     opts:['Nguyên liệu mua tự do ngoài thị trường','Các nguyên vật liệu Phúc Tea nghiên cứu, phát triển hoặc đặt sản xuất riêng','Nguyên liệu nhập khẩu không thương hiệu','Nguyên liệu rẻ nhất trong danh sách'],
     c:1,exp:'NVL Độc Quyền là nguyên liệu Phúc Tea tự nghiên cứu/đặt sản xuất riêng - bắt buộc nhập từ hệ thống.'},
    {q:'Sản phẩm nào sau đây là NVL Độc Quyền?',
     opts:['Gelatine Đức/Pháp','Bột Matcha Đài Loan','Cà Phê Mộc 9:1','Mứt Hibiscus'],
     c:2,exp:'Cà Phê Mộc 9:1 là NVL Độc Quyền. Gelatine, Matcha và Mứt Hibiscus đều là NL Không Độc Quyền.'},
    {q:'Sản phẩm nào là Vật Liệu Độc Quyền?',
     opts:['Muỗng Vàng 20cm','Thạch Nha Đam','Ly Nhựa 500ml In 2 Màu (có thương hiệu)','Hạt Chia Úc/Peru'],
     c:2,exp:'Ly Nhựa có in thương hiệu Phúc Tea là Vật Liệu Độc Quyền. Muỗng và Thạch thuộc VL Không Độc Quyền.'},
    {q:'Đặc điểm của giá NL Không Độc Quyền là?',
     opts:['Cố định cả năm','Chỉ mua từ hệ thống Phúc Tea','Cập nhật linh hoạt theo thị trường, kiểm tra trên KiotViet khi đặt','Được vận chuyển miễn phí'],
     c:2,exp:'NL Không Độc Quyền có giá linh hoạt theo thị trường. Cần kiểm tra giá trực tiếp trên KiotViet trước khi đặt.'},
    {q:'Khi NVL Độc Quyền điều chỉnh giá, hệ thống thông báo trước bao nhiêu ngày?',
     opts:['7 ngày','10 ngày','15 ngày','30 ngày'],
     c:2,exp:'Hệ thống cam kết thông báo trước 15 ngày để cửa hàng chủ động tài chính.'},
    {q:'Phí vận chuyển được tính như thế nào trong bảng giá?',
     opts:['Cả nguyên liệu lẫn vật liệu đều đã bao gồm phí ship','Nguyên liệu đã bao gồm, vật liệu chưa bao gồm','Nguyên liệu chưa bao gồm phí ship; vật liệu bao bì đã bao gồm phí ship','Tất cả đều chưa bao gồm, tính riêng sau'],
     c:2,exp:'Nhóm nguyên liệu (NVL Độc Quyền & Không Độc Quyền): giá chưa bao gồm phí vận chuyển. Nhóm vật liệu bao bì: giá đã bao gồm phí vận chuyển.'}
  ]
},
{
  id:2, icon:'📦',
  title:'Số Lượng Đặt Hàng Tối Thiểu (MOQ)',
  subtitle:'Quy cách nhập hàng từng sản phẩm',
  content:`
  <div class="section">
    <h3>MOQ - Nguyên Liệu Độc Quyền</h3>
    <div class="table-wrap"><table>
      <tr><th>#</th><th>Tên hàng hóa</th><th>ĐVT</th><th>MOQ tối thiểu</th></tr>
      <tr><td>1</td><td>Cà Phê Mộc 9:1</td><td>Kg</td><td><strong>2 kg</strong></td></tr>
      <tr><td>2</td><td>Bột Pha Chế PT35</td><td>Thùng</td><td><strong>1 thùng</strong></td></tr>
      <tr><td>3</td><td>Trà Đen Phúc Tea</td><td>Gói</td><td><strong>5 gói</strong></td></tr>
      <tr><td>4</td><td>Trà Xanh Lài Phúc Tea</td><td>Gói</td><td><strong>1 gói</strong></td></tr>
      <tr><td>5</td><td>Trà Oolong Phúc Tea 02</td><td>Gói</td><td><strong>1 gói</strong></td></tr>
      <tr><td>6</td><td>Bột Socola Phúc Tea 02</td><td>Gói</td><td><strong>1 gói</strong></td></tr>
      <tr><td>7</td><td>Trà Hòa Tan Vị Đào</td><td>Gói</td><td><strong>5 gói</strong></td></tr>
      <tr><td>8</td><td>Trà Hòa Tan Vị Vải</td><td>Gói</td><td><strong>5 gói</strong></td></tr>
      <tr><td>9</td><td>Trân Châu Giòn Phúc Tea</td><td>Thùng</td><td><strong>1 thùng (6 gói)</strong></td></tr>
      <tr><td>10</td><td>Vải Tươi Ngâm Đường Phúc Tea</td><td>Thùng</td><td><strong>1 thùng (12 lon)</strong></td></tr>
    </table></div>
  </div>
  <div class="section">
    <h3>MOQ - Nguyên Liệu Không Độc Quyền</h3>
    <div class="table-wrap"><table>
      <tr><th>#</th><th>Tên hàng hóa</th><th>MOQ tối thiểu</th></tr>
      <tr><td>12</td><td>Bột Milk Foam Phúc Tea</td><td><strong>1 gói</strong></td></tr>
      <tr><td>13</td><td>Gelatine Đức/Pháp</td><td><strong>1 gói</strong></td></tr>
      <tr><td>14</td><td>Syrup Đường Đen Luave</td><td><strong>1 can (6 can/thùng)</strong></td></tr>
      <tr><td>15</td><td>Bột Matcha Đài Loan</td><td><strong>1 gói</strong></td></tr>
      <tr><td>18</td><td>Hạt Chia Úc/Peru</td><td><strong>1 gói (1kg)</strong></td></tr>
      <tr><td>19</td><td>Đào Ngâm Fresko 820gr</td><td><strong>1 thùng (12 lon)</strong></td></tr>
      <tr><td>20</td><td>Sinh Tố Xoài Berrino</td><td><strong>1 chai (12 chai/thùng)</strong></td></tr>
      <tr><td>23</td><td>Thạch Dừa Vải Casa 3,5kg</td><td><strong>1 thùng (4 hủ)</strong></td></tr>
      <tr><td>24</td><td>Thạch Nha Đam</td><td><strong>5 gói (10 gói/thùng)</strong></td></tr>
    </table></div>
  </div>
  <div class="section">
    <h3>MOQ - Vật Liệu Bao Bì</h3>
    <div class="table-wrap"><table>
      <tr><th>#</th><th>Tên hàng hóa</th><th>MOQ tối thiểu</th></tr>
      <tr><td>27</td><td>Combo Ly Giấy 600ml</td><td><strong>1 thùng (1.000 cái)</strong></td></tr>
      <tr><td>28</td><td>Ly Nhựa 500ml In 2 Màu</td><td><strong>1 thùng (1.000 cái)</strong></td></tr>
      <tr><td>29</td><td>Ly Nhựa 400ml In 5 Màu</td><td><strong>1 thùng (1.000 cái)</strong></td></tr>
      <tr><td>33</td><td>Ly Nhựa 600ml In 1 Màu</td><td><strong>1 thùng (1.000 cái)</strong></td></tr>
      <tr><td>37</td><td>Ống Hút Bọc Kiếng Phúc Tea</td><td><strong>5 kg/kiện</strong></td></tr>
      <tr><td>38-39</td><td>Bịch 1 Ly / Bịch 2 Ly Phúc Tea</td><td><strong>5 kg/kiện</strong></td></tr>
      <tr><td>40</td><td>Combo Xô 1 Lít</td><td><strong>1 thùng (300 cái)</strong></td></tr>
      <tr><td>35</td><td>Cuộn Ép Màng Ly Phúc Tea</td><td><strong>1 cuộn</strong></td></tr>
    </table></div>
    <div class="highlight-box">💡 File theo dõi tồn kho Min/Max sẽ được bộ phận Operation tạo riêng cho từng cửa hàng.</div>
  </div>`,
  questions:[
    {q:'MOQ của Cà Phê Mộc 9:1 là bao nhiêu?',
     opts:['1 kg','2 kg','5 kg','1 thùng'],
     c:1,exp:'MOQ Cà Phê Mộc 9:1 = 2 kg mỗi lần đặt.'},
    {q:'Trân Châu Giòn Phúc Tea có MOQ là bao nhiêu?',
     opts:['1 gói','3 gói','1 thùng (6 gói)','2 thùng'],
     c:2,exp:'MOQ Trân Châu Giòn = 1 thùng = 6 gói.'},
    {q:'Khi đặt Vải Tươi Ngâm Đường Phúc Tea, số lượng tối thiểu là?',
     opts:['1 lon','6 lon','1 thùng (12 lon)','2 thùng (24 lon)'],
     c:2,exp:'MOQ Vải Tươi Ngâm Đường = 1 thùng = 12 lon.'},
    {q:'MOQ của các loại Ly Nhựa có in thương hiệu là?',
     opts:['500 cái/thùng','1 thùng (1.000 cái)','200 cái','2.000 cái'],
     c:1,exp:'Tất cả các loại Ly Nhựa in thương hiệu đều có MOQ = 1 thùng (1.000 cái).'},
    {q:'Trà Đen, Trà Hòa Tan Vị Đào và Trà Hòa Tan Vị Vải có MOQ là bao nhiêu gói?',
     opts:['1 gói','3 gói','5 gói','10 gói'],
     c:2,exp:'Trà Đen, Trà Hòa Tan Vị Đào và Vải đều có MOQ = 5 gói/lần đặt.'}
  ]
},
{
  id:3, icon:'📋',
  title:'Quy Trình Đặt Hàng & KiotViet',
  subtitle:'8 bước + hướng dẫn thao tác chi tiết',
  content:`
  <div class="section">
    <h3>Chuẩn Bị Trước Khi Đặt Hàng</h3>
    <div class="highlight-box info">
      📱 <strong>Cài đặt & đăng nhập KiotViet:</strong>
      <ul style="margin-top:10px;padding-left:20px;line-height:2.2;font-size:14px">
        <li>Tải phần mềm <strong>KiotViet</strong> trên <strong>App Store</strong> (iPhone) hoặc <strong>CH Play</strong> (Android)</li>
        <li>Đăng nhập bằng: <strong>Tên gian hàng</strong> · <strong>Tên tài khoản</strong> · <strong>Mật khẩu</strong> theo thông tin <strong>Hệ Thống cung cấp</strong></li>
      </ul>
    </div>
  </div>
  <div class="section">
    <h3>Quy Trình Đặt Hàng - 8 Bước</h3>
    <ol class="step-list">
      <li class="step-item"><div class="step-num">1</div><div class="step-content"><strong>Kiểm tra tồn kho tại Cửa Hàng</strong> - Xác định mặt hàng thiếu/sắp hết.</div></li>
      <li class="step-item"><div class="step-num">2</div><div class="step-content"><strong>Liệt kê danh sách cần nhập</strong> - Sắp xếp theo nhóm sản phẩm.</div></li>
      <li class="step-item"><div class="step-num">3</div><div class="step-content"><strong>Tạo đơn hàng trên KiotViet</strong> - Đăng nhập bằng tài khoản hệ thống cấp.</div></li>
      <li class="step-item"><div class="step-num">4</div><div class="step-content"><strong>Thực hiện thanh toán</strong> - Thanh toán theo đơn hàng đã lên.</div></li>
      <li class="step-item"><div class="step-num">5</div><div class="step-content"><strong>Chụp màn hình thanh toán → gửi Zalo kho</strong></div></li>
      <li class="step-item"><div class="step-num">6</div><div class="step-content"><strong>Kho xác nhận đơn hàng</strong></div></li>
      <li class="step-item"><div class="step-num">7</div><div class="step-content"><strong>Kho chuẩn bị hàng & gửi biên nhận</strong></div></li>
      <li class="step-item"><div class="step-num">8</div><div class="step-content"><strong>Cửa Hàng nhận hàng, kiểm tra theo biên nhận</strong></div></li>
    </ol>
  </div>
  <div class="section">
    <h3>Hướng Dẫn Thao Tác KiotViet - Giao Diện Mẫu</h3>
    <p style="margin-bottom:8px;font-size:13px;color:#6b7280">Dưới đây là <strong>mô phỏng giao diện KiotViet</strong> và các khu vực chức năng bạn sẽ dùng khi đặt hàng:</p>
    <div class="highlight-box warn" style="margin-bottom:12px">⚠️ <strong>Lưu ý quan trọng:</strong> Khi đặt hàng, bạn phải bấm vào mục <strong>"Khách lẻ"</strong> để chọn đúng <strong>tên Cửa Hàng của bạn</strong>. Nếu không chọn đúng, đơn hàng sẽ không được xử lý chính xác.</div>

    <!-- KiotViet Mobile Mockup - 3 màn hình -->
    <div class="kv-phones">

      <!-- ── PHONE 1: Danh sách sản phẩm (chưa chọn cửa hàng) ── -->
      <div class="kv-phone">
        <div class="kv-screen">
          <div class="kv-statusbar">
            <span>09:35</span>
            <div class="kv-statusbar-icons"><span>▌▌▌</span><span>📶</span><span style="background:#4caf50;color:#fff;padding:1px 5px;border-radius:3px;font-size:9px">73</span></div>
          </div>
          <div class="kv-appbar">
            <div class="kv-appbar-title">Đặt hàng</div>
            <span style="font-size:13px;position:relative">🕐<span style="position:absolute;top:-4px;right:-6px;background:#e53e3e;color:#fff;border-radius:50%;width:14px;height:14px;font-size:9px;display:flex;align-items:center;justify-content:center;font-weight:700">1</span></span>
          </div>
          <div class="kv-search"><input type="text" placeholder="🔍  Tên, mã hàng, mã vạch, lô date, ..." readonly></div>
          <div class="kv-filter-row">
            <span class="kv-filter-chip active">👤 Khách lẻ</span>
            <span class="kv-filter-chip normal">🏷️ Bảng giá chung</span>
            <span style="margin-left:auto;font-size:16px;color:#555">≡</span>
          </div>
          <div class="kv-product-list">
            <div class="kv-list-item">
              <div class="kv-list-img">🍵</div>
              <div class="kv-list-info">
                <div class="kv-list-name">Trà Đen Phúc Tea <span class="kv-list-unit">(Bịch)</span></div>
                <div class="kv-list-code">NVL010112 &nbsp;<span style="background:#e5e5ea;padding:2px 6px;border-radius:4px">KH đặt: 0</span></div>
              </div>
            </div>
            <div class="kv-list-item">
              <div class="kv-list-img">🧋</div>
              <div class="kv-list-info">
                <div class="kv-list-name">Bột Pha Chế PT35 <span class="kv-list-unit">(Thùng)</span></div>
                <div class="kv-list-code">NVL010120 &nbsp;<span style="background:#e5e5ea;padding:2px 6px;border-radius:4px">KH đặt: 0</span></div>
              </div>
            </div>
            <div class="kv-list-item">
              <div class="kv-list-img">☕</div>
              <div class="kv-list-info">
                <div class="kv-list-name">Cà Phê Mộc 9:1 <span class="kv-list-unit">(Kg)</span></div>
                <div class="kv-list-code">NVL010166 &nbsp;<span style="background:#e5e5ea;padding:2px 6px;border-radius:4px">KH đặt: 0</span></div>
              </div>
            </div>
            <div class="kv-list-item">
              <div class="kv-list-img">🫧</div>
              <div class="kv-list-info">
                <div class="kv-list-name">Trân Châu Giòn <span class="kv-list-unit">(Thùng)</span></div>
                <div class="kv-list-code">NVL010105 &nbsp;<span style="background:#e5e5ea;padding:2px 6px;border-radius:4px">KH đặt: 0</span></div>
              </div>
            </div>
          </div>
          <div class="kv-bottomnav">
            <div class="kv-nav-item active"><span class="kv-nav-icon">🛍️</span>Bán hàng</div>
            <div class="kv-nav-item"><span class="kv-nav-icon">📄</span>Hoá đơn</div>
            <div class="kv-nav-item"><span class="kv-nav-icon">🔔</span>Thông báo</div>
            <div class="kv-nav-item"><span class="kv-nav-icon">☰</span>Nhiều hơn</div>
          </div>
        </div>
        <div style="text-align:center;color:#aaa;font-size:10px;margin-top:8px">① Chọn sản phẩm cần đặt</div>
      </div>

      <!-- ── PHONE 2: Đã chọn cửa hàng TÂY NINH ── -->
      <div class="kv-phone">
        <div class="kv-screen">
          <div class="kv-statusbar">
            <span>09:38</span>
            <div class="kv-statusbar-icons"><span>▌▌▌</span><span>📶</span><span style="background:#4caf50;color:#fff;padding:1px 5px;border-radius:3px;font-size:9px">72</span></div>
          </div>
          <div class="kv-appbar">
            <div class="kv-appbar-title">Đặt hàng</div>
            <span style="font-size:13px;position:relative">🕐<span style="position:absolute;top:-4px;right:-6px;background:#e53e3e;color:#fff;border-radius:50%;width:14px;height:14px;font-size:9px;display:flex;align-items:center;justify-content:center;font-weight:700">1</span></span>
          </div>
          <div class="kv-search"><input type="text" placeholder="🔍  Tên, mã hàng, mã vạch, lô date, ..." readonly></div>
          <div class="kv-filter-row">
            <span style="font-size:12px;color:#555">👤 <strong>TÂY NINH</strong></span>
            <span style="font-size:11px;color:#888;margin-left:8px">🏷️ Bảng giá chung</span>
            <span style="margin-left:auto;font-size:16px;color:#555">≡</span>
          </div>
          <div class="kv-product-list">
            <div class="kv-list-item">
              <div class="kv-list-img">🍵</div>
              <div class="kv-list-info">
                <div class="kv-list-name">Trà Hòa Tan Vị Vải PT <span class="kv-list-unit">(Bịch)</span></div>
                <div class="kv-list-code">NVL010114 &nbsp;<span style="background:#e5e5ea;padding:2px 6px;border-radius:4px">KH đặt: 0</span></div>
              </div>
            </div>
            <div class="kv-list-item">
              <div class="kv-list-img">🍑</div>
              <div class="kv-list-info">
                <div class="kv-list-name">Trà Hòa Tan Vị Đào PT <span class="kv-list-unit">(Bịch)</span></div>
                <div class="kv-list-code">NVL010113 &nbsp;<span style="background:#e5e5ea;padding:2px 6px;border-radius:4px">KH đặt: 0</span></div>
              </div>
            </div>
            <div class="kv-list-item">
              <div class="kv-list-img">🍫</div>
              <div class="kv-list-info">
                <div class="kv-list-name">Bột Socola Phúc Tea 02 <span class="kv-list-unit">(Bịch)</span></div>
                <div class="kv-list-code">NVL010110 &nbsp;<span style="background:#e5e5ea;padding:2px 6px;border-radius:4px">KH đặt: 0</span></div>
              </div>
            </div>
            <div class="kv-list-item">
              <div class="kv-list-img">☕</div>
              <div class="kv-list-info">
                <div class="kv-list-name">Cà Phê Mộc 9:1 <span class="kv-list-unit">(Kg)</span></div>
                <div class="kv-list-code">NVL010166 &nbsp;<span style="background:#e5e5ea;padding:2px 6px;border-radius:4px">KH đặt: 0</span></div>
              </div>
            </div>
          </div>
          <div class="kv-bottomnav">
            <div class="kv-nav-item active"><span class="kv-nav-icon">🛍️</span>Bán hàng</div>
            <div class="kv-nav-item"><span class="kv-nav-icon">📄</span>Hoá đơn</div>
            <div class="kv-nav-item"><span class="kv-nav-icon">🔔</span>Thông báo</div>
            <div class="kv-nav-item"><span class="kv-nav-icon">☰</span>Nhiều hơn</div>
          </div>
        </div>
        <div style="text-align:center;font-size:10px;margin-top:8px;color:#e67e22;font-weight:600">⚠️ Bấm vào "Khách lẻ" → chọn đúng tên Cửa hàng</div>
      </div>

      <!-- ── PHONE 3: Giỏ hàng & Đặt hàng ── -->
      <div class="kv-phone">
        <div class="kv-screen">
          <div class="kv-statusbar">
            <span>09:36</span>
            <div class="kv-statusbar-icons"><span>▌▌▌</span><span>📶</span><span style="background:#4caf50;color:#fff;padding:1px 5px;border-radius:3px;font-size:9px">73</span></div>
          </div>
          <div class="kv-appbar">
            <span class="kv-appbar-back">✕</span>
            <div class="kv-appbar-title">Đặt hàng</div>
            <span class="kv-appbar-icon">📋</span>
          </div>
          <div class="kv-search"><input type="text" placeholder="🔍  Tên, mã hàng, mã vạch, lô date, ..." readonly></div>
          <div class="kv-selector-row">
            <span class="kv-selector-label">👤 TÂY NINH</span>
            <span class="kv-selector-arrow">›</span>
          </div>
          <div class="kv-selector-row">
            <span class="kv-selector-label">🏷️ Bảng giá chung</span>
            <span class="kv-selector-arrow">›</span>
          </div>
          <div class="kv-product-list">
            <div class="kv-list-item">
              <div class="kv-list-img">🍵</div>
              <div class="kv-list-info">
                <div class="kv-list-name">Trà Đen Phúc Tea <span class="kv-list-unit">(Bịch)</span></div>
              </div>
              <div class="kv-list-qty">
                <div class="kv-qty-btn">−</div>
                <span class="kv-qty-val">1</span>
                <div class="kv-qty-btn">+</div>
              </div>
            </div>
            <div class="kv-list-item">
              <div class="kv-list-img">🧋</div>
              <div class="kv-list-info">
                <div class="kv-list-name">Bột Pha Chế PT35 <span class="kv-list-unit">(Thùng)</span></div>
              </div>
              <div class="kv-list-qty">
                <div class="kv-qty-btn">−</div>
                <span class="kv-qty-val">1</span>
                <div class="kv-qty-btn">+</div>
              </div>
            </div>
          </div>
          <div style="flex:1;background:#f2f2f7;min-height:40px"></div>
          <div class="kv-footer-bar">
            <div class="kv-footer-total">
              <span class="kv-footer-label">Tổng tiền hàng <span class="kv-footer-badge">2</span></span>
              <span class="kv-footer-amount">2,220,000</span>
            </div>
            <div class="kv-footer-btns">
              <button class="kv-btn-luu">Lưu tạm</button>
              <button class="kv-btn-dat">Đặt hàng</button>
            </div>
          </div>
        </div>
        <div style="text-align:center;color:#aaa;font-size:10px;margin-top:8px">③ Kiểm tra & bấm Đặt hàng</div>
      </div>

    </div><!-- end kv-phones -->

    <!-- Annotations -->
    <div style="margin-top:16px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;">
      <div class="highlight-box" style="margin:0">
        <strong>① Đặt hàng</strong><br>
        Bấm vào mục <em>Đặt hàng</em> - danh sách toàn bộ sản phẩm hệ thống cung cấp hiển thị tại đây.
      </div>
      <div class="highlight-box" style="margin:0">
        <strong>② Chọn cửa hàng</strong><br>
        Bấm <em>"Khách lẻ"</em> → tìm tên hoặc mã cửa hàng (vd: TÂY NINH, 162). Chọn đúng để giá và thông tin khớp.
      </div>
      <div class="highlight-box warn" style="margin:0">
        <strong>③ Đặt hàng / Lưu tạm</strong><br>
        Điều chỉnh số lượng → <em>Đặt hàng</em>. Nếu chưa xong bấm <em>Lưu tạm</em> để quay lại sau.
      </div>
    </div>
  </div>
  <div class="section">
    <h3>Quy Trình Đặt Hàng KiotViet (7 Bước)</h3>
    <ol class="step-list">
      <li class="step-item"><div class="step-num">1</div><div class="step-content">Tải app <strong>KiotViet</strong> trên App Store hoặc CH Play</div></li>
      <li class="step-item"><div class="step-num">2</div><div class="step-content">Đăng nhập theo thông tin hệ thống cung cấp: <strong>Gian hàng</strong>, <strong>tên đăng nhập</strong>, <strong>mật khẩu</strong></div></li>
      <li class="step-item"><div class="step-num">3</div><div class="step-content">Chỗ <strong>"Khách lẻ"</strong> bấm chọn <strong>tên cửa hàng của anh/chị</strong></div></li>
      <li class="step-item"><div class="step-num">4</div><div class="step-content">Chọn các sản phẩm cần đặt, <strong>điều chỉnh số lượng</strong> phù hợp <em>(nên chọn theo nhóm: 1 loạt vật liệu xong đến 1 loạt nguyên liệu)</em></div></li>
      <li class="step-item"><div class="step-num">5</div><div class="step-content">Kiểm tra toàn bộ đơn hàng - nếu cần kiểm soát lại kho thêm thì bấm <strong>"Lưu vào phiếu tạm"</strong></div></li>
      <li class="step-item"><div class="step-num">6</div><div class="step-content">Bấm <strong>Đặt hàng</strong></div></li>
      <li class="step-item"><div class="step-num">7</div><div class="step-content"><strong>Chụp màn hình</strong> đơn hàng → gửi lên <strong>nhóm kho Zalo</strong></div></li>
    </ol>
    <div class="highlight-box warn" style="margin-top:14px">
      ⚠️ <strong>Bắt buộc:</strong> Chụp màn hình đơn hàng và gửi vào nhóm Zalo kho. Thiếu bước này kho sẽ không xử lý đơn.
    </div>
  </div>`,
  questions:[
    {q:'Bước ĐẦU TIÊN trong quy trình đặt hàng là gì?',
     opts:['Tạo đơn ngay trên KiotViet','Thanh toán theo đơn','Kiểm tra tồn kho tại Cửa Hàng','Gửi biên nhận cho kho'],
     c:2,exp:'Bước 1 luôn là kiểm tra tồn kho để xác định mặt hàng cần nhập trước khi tạo đơn.'},
    {q:'Trong KiotViet, mục "Đặt Hàng" (Nhiều Hơn > Đặt Hàng) hiển thị những gì?',
     opts:['Tất cả sản phẩm đang bán','Lịch sử thanh toán','Đơn đã tạo nhưng chưa được hệ thống xác nhận','Thông tin khách hàng'],
     c:2,exp:'"Đặt Hàng" chứa các đơn cửa hàng đã tạo nhưng hệ thống chưa nhận/xác nhận.'},
    {q:'Sau khi bấm "Đặt Hàng" xong, cửa hàng cần làm gì ngay?',
     opts:['Gọi điện cho nhân viên kho','Chụp màn hình đơn hàng và gửi vào nhóm Zalo kho','In đơn gửi qua bưu điện','Chờ kho liên hệ trong 24 giờ'],
     c:1,exp:'Ngay sau khi đặt hàng, phải chụp màn hình và gửi vào nhóm Zalo kho để kho xác nhận xử lý.'},
    {q:'Tính năng "Lưu Tạm" trong KiotViet có tác dụng gì?',
     opts:['Hủy vĩnh viễn đơn hàng','Xác nhận thanh toán ngay','Lưu đơn chưa hoàn tất để bổ sung sau','Gửi thông báo tự động cho kho'],
     c:2,exp:'"Lưu Tạm" giúp lưu đơn đang làm để xem xét thêm. Đơn lưu tạm nằm ở góc phải màn hình Bán Hàng.'},
    {q:'Sau khi thanh toán, cửa hàng phải làm thêm bước nào?',
     opts:['Không cần làm gì thêm, kho tự biết','Chụp màn hình thanh toán và gửi vào nhóm Zalo kho','Gọi điện xác nhận với bộ phận kế toán','Đợi kho liên hệ trong vòng 3 ngày'],
     c:1,exp:'Phải chụp màn hình thanh toán và gửi vào nhóm Zalo kho. Thiếu bước này kho không xử lý đơn.'}
  ]
},
{
  id:4, icon:'🚚🛠️',
  title:'Nhận Hàng & Xử Lý Sự Cố',
  subtitle:'Kiểm tra khi nhận, báo lỗi & liên hệ hỗ trợ',
  content:`
  <div class="section">
    <h3>1. Thời Gian Giao Hàng</h3>
    <p>Tính từ <strong>ngày hệ thống XÁC NHẬN đơn hàng</strong> (không phải ngày đặt).</p>
    <div class="table-wrap"><table>
      <tr><th>Khu vực</th><th>Thời gian giao hàng</th></tr>
      <tr><td>🟢 <strong>Miền Nam</strong></td><td><strong>5 - 7 ngày làm việc</strong></td></tr>
      <tr><td>🔵 <strong>Miền Trung & Miền Bắc</strong></td><td><strong>7 - 10 ngày làm việc</strong></td></tr>
    </table></div>
    <div class="highlight-box warn">⚠️ Thứ 7 và Chủ nhật <strong>không được tính</strong> vào ngày làm việc. Thời gian có thể thay đổi dịp Lễ/Tết hoặc sự cố vận chuyển.</div>
  </div>
  <div class="section">
    <h3>2. Quy Trình Nhận Hàng - 5 Bước Kiểm Tra</h3>
    <ol class="step-list">
      <li class="step-item"><div class="step-num">1</div><div class="step-content"><strong>Kiểm tra số lượng hàng hóa</strong> - Đếm khớp với đơn đặt hàng.</div></li>
      <li class="step-item"><div class="step-num">2</div><div class="step-content"><strong>Đối chiếu với đơn đặt hàng</strong> - Đúng sản phẩm, đúng chủng loại.</div></li>
      <li class="step-item"><div class="step-num">3</div><div class="step-content"><strong>Kiểm tra tình trạng bao bì</strong> - Không rách, móp, ẩm, hư hại.</div></li>
      <li class="step-item"><div class="step-num">4</div><div class="step-content"><strong>Kiểm tra hạn sử dụng</strong> - Còn đủ thời gian khai thác.</div></li>
      <li class="step-item"><div class="step-num">5</div><div class="step-content"><strong>Kiểm tra chất lượng sản phẩm</strong> - Xem xét bên trong nếu cần.</div></li>
    </ol>
    <div class="highlight-box">✅ Phát hiện vấn đề → <strong>báo ngay vào nhóm Zalo kho</strong>. Không tự ý xử lý.</div>
  </div>
  <div class="section">
    <h3>3. Quy Trình Xử Lý Sự Cố - 5 Bước</h3>
    <ol class="step-list">
      <li class="step-item"><div class="step-num">1</div><div class="step-content"><strong>Chụp hình / quay video sản phẩm lỗi</strong> - Ghi lại bằng chứng ngay lập tức.</div></li>
      <li class="step-item"><div class="step-num">2</div><div class="step-content"><strong>Gửi lên group nguyên liệu</strong> - Kèm: hình ảnh + tên SP + số lượng lỗi + mô tả lỗi.</div></li>
      <li class="step-item"><div class="step-num">3</div><div class="step-content"><strong>Bộ phận hệ thống tiếp nhận & đánh giá</strong> - Phản hồi trong 30-60 phút.</div></li>
      <li class="step-item"><div class="step-num">4</div><div class="step-content"><strong>Hệ thống đưa ra hướng xử lý</strong> - Đổi hàng, bồi thường hoặc phương án khác.</div></li>
      <li class="step-item"><div class="step-num">5</div><div class="step-content"><strong>Cửa Hàng xác nhận phương án</strong></div></li>
    </ol>
  </div>
  <div class="section">
    <h3>4. Thời Hạn Quan Trọng</h3>
    <div class="table-wrap"><table>
      <tr><th>Mốc thời gian</th><th>Quy định</th></tr>
      <tr><td>Phản hồi ban đầu</td><td><strong>30-60 phút</strong></td></tr>
      <tr><td>Tiếp nhận & đánh giá</td><td><strong>Trong vòng 24 giờ</strong></td></tr>
      <tr><td>Khi phát hiện lỗi</td><td>⚡ <strong>Báo ngay</strong> vào nhóm Zalo kho - không chờ</td></tr>
      <tr><td>Thời hạn tối đa báo lỗi</td><td><strong>2 ngày</strong> kể từ ngày nhận biên nhận, hoặc <strong>1 ngày</strong> kể từ ngày nhận hàng</td></tr>
      <tr><td>Phản hồi tình trạng sản phẩm</td><td><strong>Trong vòng 3 ngày</strong> làm việc</td></tr>
      <tr><td>Đổi trả sản phẩm lỗi</td><td><strong>Tối đa 3 ngày</strong> sau khi xác nhận</td></tr>
    </table></div>
    <div class="highlight-box warn">⚠️ <strong>Phát hiện lỗi → báo ngay</strong>. Thời hạn tối đa: <strong>2 ngày</strong> kể từ ngày nhận biên nhận hoặc <strong>1 ngày</strong> kể từ ngày nhận hàng. Quá hạn → hệ thống có thể không xử lý được yêu cầu đổi trả.</div>
  </div>
  <div class="section">
    <h3>5. Giờ Làm Việc & Liên Hệ</h3>
    <div class="table-wrap"><table>
      <tr><th>Thời gian</th><th>Hoạt động hỗ trợ</th></tr>
      <tr><td><strong>Thứ 2-6: 09:00-17:00</strong></td><td>Làm việc đầy đủ, phản hồi 30-60 phút</td></tr>
      <tr><td><strong>Thứ 7-Chủ nhật</strong></td><td>Tiếp nhận thông tin, xử lý vào ngày làm việc tiếp theo</td></tr>
    </table></div>
    <div class="highlight-box info" style="margin-top:14px">
      <strong>📞 Liên hệ trực tiếp:</strong><br>
      Phụ trách: <strong>Trần Thị Hạnh Nhân</strong> - Chuỗi Cung Ứng Phúc Tea<br>
      Điện thoại: <strong>0344 858 727</strong> | Email: <strong>hanhnhan@phuctea.com.vn</strong>
    </div>
  </div>`,
  questions:[
    {q:'Thời gian giao hàng khu vực miền Nam là bao lâu (tính từ ngày xác nhận đơn)?',
     opts:['3-5 ngày làm việc','5-7 ngày làm việc','7-10 ngày làm việc','2-3 ngày làm việc'],
     c:1,exp:'Miền Nam: 5-7 ngày làm việc kể từ ngày hệ thống xác nhận đơn.'},
    {q:'Khi phát hiện vấn đề lúc nhận hàng, cần làm gì?',
     opts:['Từ chối toàn bộ đơn ngay','Báo ngay vào nhóm Zalo kho','Tự xử lý không cần báo','Liên hệ đơn vị vận chuyển'],
     c:1,exp:'Khi phát hiện vấn đề, báo ngay vào nhóm Zalo kho để được hỗ trợ đúng quy trình.'},
    {q:'Bước ĐẦU TIÊN khi xử lý sự cố nguyên liệu là gì?',
     opts:['Liên hệ điện thoại ngay','Chụp hình/quay video sản phẩm lỗi','Trả lại toàn bộ hàng','Yêu cầu bồi thường bằng văn bản'],
     c:1,exp:'Bước 1 là chụp hình/video sản phẩm lỗi để có bằng chứng trước khi báo cáo.'},
    {q:'Thời hạn tối đa báo hàng lỗi kể từ ngày nhận hàng là bao nhiêu?',
     opts:['1 ngày','2 ngày','3 ngày','7 ngày'],
     c:0,exp:'Thời hạn tối đa báo hàng lỗi là 1 ngày kể từ ngày nhận hàng, hoặc 2 ngày kể từ ngày nhận được biên nhận.'},
    {q:'Sau khi hệ thống đưa ra hướng xử lý sự cố (đổi hàng/bồi thường), bước cuối cùng của quy trình xử lý là gì?',
     opts:['Kho tự đóng hồ sơ sự cố','Cửa Hàng xác nhận phương án xử lý','Gửi lại hình ảnh bằng chứng lần hai','Lập biên bản thiệt hại bằng văn bản'],
     c:1,exp:'Bước 5 - Cửa Hàng xác nhận phương án xử lý do hệ thống đề xuất. Đây là bước đóng hồ sơ sự cố chính thức.'}
  ]
}
];

// ─── FINAL QUIZ (10 câu tổng kết) ─────────────────────────────
const FINAL_QUIZ = [
  {q:'Cửa hàng nhận hàng và phát hiện thiếu 2 gói Trà Oolong so với biên nhận. Theo SOP, bước xử lý ĐÚNG là gì?',
   opts:['Chấp nhận và đặt bù đơn tiếp theo','Từ chối toàn bộ lô hàng ngay tại chỗ','Chụp hình lô hàng và báo ngay vào nhóm Zalo kho (trong 1 ngày kể từ nhận hàng)','Liên hệ đơn vị vận chuyển đòi bồi thường'],
   c:2,exp:'Khi nhận hàng thiếu/lỗi, phải chụp hình và báo nhóm Zalo kho ngay - trong 1 ngày kể từ ngày nhận hàng. Không tự xử lý hay liên hệ vận chuyển.'},
  {q:'Trách nhiệm nào sau đây KHÔNG thuộc về Cửa Hàng/ĐTNQ theo SOP Chuỗi Cung Ứng?',
   opts:['Chủ động lập kế hoạch đặt hàng định kỳ','Kiểm tra hàng hóa khi nhận theo biên nhận','Chuẩn bị hàng, xuất kho và gửi biên nhận cho cửa hàng','Thanh toán đúng hạn theo quy định'],
   c:2,exp:'Chuẩn bị hàng, xuất kho và gửi biên nhận là trách nhiệm của bộ phận Chuỗi Cung Ứng - không phải Cửa Hàng.'},
  {q:'Cửa hàng muốn mua thêm Bột Matcha Đài Loan. Theo SOP, cần làm điều gì đặc biệt?',
   opts:['Mua từ nhà cung cấp bên ngoài vì đây là NL Không Độc Quyền','Xin phép hệ thống trước khi mua bất kỳ đâu','Đặt qua hệ thống KiotViet, kiểm tra giá linh hoạt theo thị trường','Chỉ được đặt khi tồn kho = 0'],
   c:2,exp:'Bột Matcha Đài Loan là NL Không Độc Quyền - đặt qua KiotViet, giá cập nhật theo thị trường. Không cần xin phép nhưng phải đặt qua hệ thống.'},
  {q:'Cuối tháng, hệ thống thông báo giá Cà Phê Mộc 9:1 sẽ tăng. Cửa hàng nhận thông báo vào ngày nào sớm nhất trước khi giá áp dụng?',
   opts:['7 ngày trước','10 ngày trước','15 ngày trước','Không có quy định cụ thể'],
   c:2,exp:'NVL Độc Quyền điều chỉnh giá sẽ được thông báo trước tối thiểu 15 ngày để cửa hàng chủ động tài chính.'},
  {q:'Nhân viên mới tạo đơn hàng KiotViet xong bấm "Đặt Hàng" nhưng QUÊN gửi Zalo kho. Điều gì sẽ xảy ra?',
   opts:['Hệ thống tự động thông báo cho kho','Kho không nhận được thông tin, đơn hàng có thể không được xử lý','Kho vẫn nhận được vì dữ liệu đồng bộ tự động','Đơn bị hủy sau 24 giờ'],
   c:1,exp:'Kho KHÔNG tự nhận được thông báo. Phải chụp màn hình thanh toán và gửi Zalo kho ngay - đây là bước bắt buộc trong quy trình.'},
  {q:'Cửa hàng đang lập đơn hàng KiotViet nhưng cần kiểm tra lại số lượng tồn kho thực tế trước khi hoàn tất. Nên dùng tính năng nào?',
   opts:['Xóa đơn và tạo lại từ đầu','Bấm "Lưu Tạm" để lưu đơn tạm thời và bổ sung sau','Gửi đơn ngay rồi liên hệ kho xin chỉnh sửa','Tạo thêm đơn hàng mới song song'],
   c:1,exp:'"Lưu Tạm" giúp lưu đơn đang làm để xem xét và bổ sung thêm sau. Đơn lưu tạm nằm ở góc phải màn hình Bán Hàng.'},
  {q:'Cửa hàng cần đặt Trà Đen Phúc Tea (MOQ 5 gói) và Trân Châu Giòn (MOQ 1 thùng = 6 gói). Đơn hàng TỐI THIỂU là bao nhiêu đơn vị?',
   opts:['5 gói Trà Đen + 1 gói Trân Châu','5 gói Trà Đen + 1 thùng Trân Châu (6 gói)','1 gói Trà Đen + 1 thùng Trân Châu','10 gói Trà Đen + 2 thùng Trân Châu'],
   c:1,exp:'MOQ Trà Đen = 5 gói (tối thiểu), MOQ Trân Châu Giòn = 1 thùng (= 6 gói). Đây là số lượng tối thiểu bắt buộc mỗi lần đặt.'},
  {q:'Cửa hàng ở Miền Nam đặt hàng vào Thứ Sáu, hệ thống xác nhận ngay trong ngày. Ngày nhận hàng SỚM NHẤT có thể là?',
   opts:['Thứ Tư tuần sau (5 ngày làm việc)','Thứ Năm tuần sau (5 ngày làm việc không tính T7-CN)','Thứ Sáu tuần sau (7 ngày làm việc)','Thứ Hai tuần sau vì cần đủ 5 ngày'],
   c:1,exp:'Miền Nam: 5-7 ngày làm việc. Tính từ Thứ Sáu: T2+T3+T4+T5+T6 = 5 ngày làm việc → sớm nhất là Thứ Năm tuần sau (không tính T7-CN).'},
  {q:'Nhân viên phát hiện 3 gói Trà Xanh Lài bị ẩm sau khi nhận hàng 4 ngày. Kết quả xử lý theo SOP sẽ như thế nào?',
   opts:['Được đổi hàng vì còn trong tuần','Hệ thống có thể từ chối vì đã quá thời hạn báo lỗi 1 ngày kể từ nhận hàng','Được bồi thường vì lỗi vận chuyển','Phải gửi sản phẩm về kho để kiểm tra'],
   c:1,exp:'Thời hạn tối đa báo hàng lỗi là 1 ngày kể từ ngày nhận hàng. Nhận hàng 4 ngày chưa báo là đã quá hạn - hệ thống có thể không xử lý được yêu cầu đổi trả.'},
  {q:'Khi gửi báo cáo sự cố lên group nguyên liệu, thông tin nào là ĐẦY ĐỦ và ĐÚNG theo SOP?',
   opts:['Chỉ cần ghi tên sản phẩm bị lỗi','Gọi điện trực tiếp cho phụ trách kho','Hình ảnh/video + tên sản phẩm + số lượng lỗi + mô tả chi tiết lỗi','Gửi email kèm hóa đơn nhập hàng'],
   c:2,exp:'Theo SOP, khi báo lỗi phải gửi đầy đủ: hình ảnh/video + tên sản phẩm + số lượng lỗi + mô tả lỗi vào group nguyên liệu.'}
];


// ─── THE HOA LESSONS ──────────────────────────────────────────
const LESSONS_TH = [
{
  id:0, icon:'🌸',
  title:'Tổng Quan Chuỗi Cung Ứng',
  subtitle:'Mục đích, phạm vi & vai trò',
  content:`
  <div class="section">
    <h3>1. Mục Đích Của SOP</h3>
    <p>Tài liệu SOP Chuỗi Cung Ứng được xây dựng nhằm <strong>chuẩn hóa toàn bộ quy trình đặt hàng, cung ứng, tiếp nhận hàng hóa và xử lý các vấn đề phát sinh</strong> trong hệ thống The Hoa.</p>
    <div class="highlight-box">🎯 <strong>Mục tiêu:</strong> Đảm bảo cửa hàng luôn đủ hàng, đúng chất lượng, đúng thời hạn và vận hành trơn tru.</div>
  </div>
  <div class="section">
    <h3>2. Phạm Vi Áp Dụng</h3>
    <ul>
      <li>Tất cả cửa hàng nhượng quyền <strong>The Hoa</strong></li>
      <li>Áp dụng cho <strong>toàn bộ nguyên vật liệu</strong> được cung ứng qua hệ thống</li>
      <li>Bao gồm: Nguyên Liệu Độc Quyền, Nguyên Liệu Hệ Thống, Vật Liệu Bao Bì</li>
    </ul>
  </div>
  <div class="section">
    <h3>3. Vai Trò & Trách Nhiệm</h3>
    <div class="table-wrap"><table>
      <tr><th>Bên</th><th>Trách nhiệm chính</th></tr>
      <tr><td><strong>Chuỗi Cung Ứng</strong></td><td>Chuẩn bị hàng, xuất kho, giao hàng, gửi biên nhận</td></tr>
      <tr><td><strong>Cửa Hàng / ĐTNQ</strong></td><td>Lập kế hoạch đặt hàng, kiểm hàng khi nhận, thanh toán đúng hạn, báo lỗi kịp thời</td></tr>
    </table></div>
  </div>
  <div class="section">
    <h3>4. Quy Định Chung</h3>
    <ul>
      <li>Chỉ đặt hàng qua hệ thống <strong>KiotViet</strong></li>
      <li>Thanh toán trước khi nhận hàng</li>
      <li>Giá <strong>Nguyên Liệu Độc Quyền</strong> cố định, thông báo thay đổi trước <strong>tối thiểu 15 ngày</strong></li>
      <li>Giá <strong>Nguyên Liệu Hệ Thống</strong> linh hoạt theo thị trường</li>
      <li>Giá <strong>Vật Liệu</strong> đã bao gồm phí vận chuyển</li>
    </ul>
  </div>`,
  questions:[
    {q:'Hệ thống The Hoa yêu cầu cửa hàng đặt hàng qua kênh nào?',
     opts:['Zalo trực tiếp','Email cho kho','Hệ thống KiotViet','Điện thoại'],
     c:2,exp:'Tất cả đơn hàng phải được đặt qua hệ thống KiotViet theo quy định SOP.'},
    {q:'Trách nhiệm chuẩn bị hàng và xuất kho thuộc về bên nào?',
     opts:['Cửa hàng nhượng quyền','Đơn vị vận chuyển','Bộ phận Chuỗi Cung Ứng','Kế toán hệ thống'],
     c:2,exp:'Bộ phận Chuỗi Cung Ứng chịu trách nhiệm chuẩn bị hàng, xuất kho và giao hàng cho cửa hàng.'},
    {q:'Giá Nguyên Liệu Độc Quyền thay đổi sẽ được thông báo trước bao nhiêu ngày?',
     opts:['5 ngày','10 ngày','15 ngày','30 ngày'],
     c:2,exp:'Thay đổi giá NVL Độc Quyền phải được thông báo trước tối thiểu 15 ngày để cửa hàng chủ động tài chính.'},
    {q:'Nhóm nào sau đây có giá ĐÃ BAO GỒM phí vận chuyển?',
     opts:['Nguyên Liệu Độc Quyền','Nguyên Liệu Hệ Thống','Vật Liệu Bao Bì','Tất cả các nhóm'],
     c:2,exp:'Giá Vật Liệu Bao Bì đã bao gồm phí vận chuyển. Nguyên Liệu các nhóm chưa bao gồm phí vận chuyển.'},
    {q:'Cửa hàng nhượng quyền The Hoa có thể tự mua nguyên liệu không thuộc NHÓM ĐỘC QUYỀN từ nhà cung cấp bên ngoài không?',
     opts:['Không, mọi nguyên liệu đều phải đặt qua hệ thống','Có, miễn là giá rẻ hơn','Có, nhưng phải đảm bảo đúng loại Hệ Thống đưa ra; nếu khác cần liên hệ bộ phận Kho trước khi sử dụng','Chỉ được mua ngoài khi tồn kho về 0'],
     c:2,exp:'Nguyên liệu không thuộc Nhóm Độc Quyền có thể mua từ bên ngoài, nhưng phải đảm bảo đúng loại mà Hệ Thống đã quy định. Nếu loại khác, cần liên hệ bộ phận Kho trước khi đưa vào sử dụng.'}
  ]
},
{
  id:1, icon:'📦',
  title:'Danh Mục Nguyên Vật Liệu',
  subtitle:'Phân loại, quy cách & lưu ý',
  content:`
  <div class="section">
    <h3>1. Nguyên Liệu Địa Phương</h3>
    <p>Tự mua tại địa phương, không cần đặt qua hệ thống.</p>
    <div class="table-wrap"><table>
      <tr><th>Sản phẩm</th><th>ĐVT</th></tr>
      <tr><td>Đường Phèn</td><td>Kg</td></tr>
      <tr><td>Đường Cát</td><td>Kg</td></tr>
      <tr><td>Chanh Trái</td><td>Kg</td></tr>
      <tr><td>Sữa Đặc Phương Nam</td><td>Hộp</td></tr>
      <tr><td>Bột Sương Sáo Đen Thuận Phát (50gr)</td><td>Gói</td></tr>
      <tr><td>Bột Rau Câu Dẻo Con Cá</td><td>Gói</td></tr>
      <tr><td>Sữa Rich</td><td>Hộp</td></tr>
      <tr><td>Kem Lá Dứa</td><td>Hộp</td></tr>
      <tr><td>Bột Hoa Anh Đào</td><td>Gói</td></tr>
    </table></div>
  </div>
  <div class="section">
    <h3>2. Nguyên Liệu Độc Quyền</h3>
    <p>Chỉ đặt qua hệ thống The Hoa. <strong>Giá chưa bao gồm phí vận chuyển.</strong></p>
    <div class="table-wrap"><table>
      <tr><th>Sản phẩm</th><th>ĐVT</th><th>MOQ</th></tr>
      <tr><td>Bột Pha Chế PT35</td><td>Thùng</td><td>1</td></tr>
      <tr><td>Bột Socola 02</td><td>Gói</td><td>1</td></tr>
      <tr><td>Trà Hòa Tan Vị Đào</td><td>Gói</td><td><strong>5</strong></td></tr>
      <tr><td>Trà Hòa Tan Vị Vải</td><td>Gói</td><td><strong>5</strong></td></tr>
      <tr><td>Vải Tươi Ngâm Đường</td><td>Thùng</td><td>1</td></tr>
      <tr><td>Trà Xanh Lài</td><td>Gói</td><td>1</td></tr>
      <tr><td>Trà Xanh Gạo Rang</td><td>Gói</td><td>1</td></tr>
      <tr><td>Trà Oolong Quế Hoa</td><td>Gói</td><td>1</td></tr>
      <tr><td>Trà Oolong Sữa</td><td>Gói</td><td>1</td></tr>
      <tr><td>Trà Xanh Shan Tuyết</td><td>Gói</td><td>1</td></tr>
      <tr><td>Cà Phê Hạt</td><td>Gói</td><td><strong>2</strong></td></tr>
    </table></div>
    <div class="highlight-box" style="margin-top:10px"><strong>🌿 TRÀ DƯỠNG</strong> (ĐVT: Gói - MOQ <strong>20 gói/loại</strong>):<br>
    Bách Nhật Tinh Hoa (Dưỡng Gan) · Bổ Huyết Ngũ Thảo (Dưỡng Khí) · Dưỡng Nhan Thất Vị (Dưỡng Thần) · Đông Trùng Tứ Vị (Dưỡng Thận) · Hương Quế Hoàng Cam (Dưỡng Phế) · Mộc Hương Tĩnh (Dưỡng Thanh Hương) · Quý Phi Ngũ Thảo (Dưỡng Sắc) · Thất Nguyên Đông Trùng (Dưỡng Tâm) · Thực Khang Thảo (Dưỡng An Bụng) · Trà Ngũ Hắc (Dưỡng Tóc)</div>
    <div class="highlight-box warn">🚚 Giá <strong>Nguyên Liệu Độc Quyền</strong> <strong>chưa bao gồm phí vận chuyển</strong>.</div>
  </div>
  <div class="section">
    <h3>3. Nguyên Liệu Không Độc Quyền</h3>
    <p>Giá linh hoạt theo thị trường. <strong>Giá chưa bao gồm phí vận chuyển.</strong></p>
    <div class="highlight-box info">💡 Nhóm này <strong>có thể mua từ nhà cung cấp bên ngoài</strong>, nhưng phải đảm bảo <strong>đúng loại</strong> mà Hệ Thống đã quy định. Nếu loại khác, cần <strong>liên hệ bộ phận Kho trước</strong> khi đưa vào sử dụng.</div>
    <div class="table-wrap"><table>
      <tr><th>Sản phẩm</th><th>ĐVT</th><th>MOQ</th></tr>
      <tr><td>Bột Matcha Đài Loan</td><td>Gói</td><td>1</td></tr>
      <tr><td>Bột Jelly Ciel</td><td>Gói</td><td>1</td></tr>
      <tr><td>Đào Ngâm Fresko 820gr</td><td>Thùng</td><td>1</td></tr>
      <tr><td>Lê Ngâm Đường</td><td>Lon</td><td><strong>6</strong></td></tr>
      <tr><td>Sinh Tố Xoài Berrino</td><td>Chai</td><td>1</td></tr>
      <tr><td>Sinh Tố Dâu Tây Berrino</td><td>Chai</td><td>1</td></tr>
      <tr><td>Mứt Hoa Mộc Quế</td><td>Hủ</td><td>1</td></tr>
      <tr><td>Syrup Lựu Lermao</td><td>Gói</td><td>1</td></tr>
      <tr><td>Thạch Nha Đam</td><td>Gói</td><td><strong>5</strong></td></tr>
      <tr><td>Hạt Sen Lon NIF</td><td>Lon</td><td><strong>12</strong></td></tr>
      <tr><td>Sữa Nước Ice Blanc</td><td>Hộp</td><td><strong>24</strong></td></tr>
      <tr><td>Nước Dừa Xiêm Vico</td><td>Chai</td><td><strong>6</strong></td></tr>
      <tr><td>Trà Oolong Sen</td><td>Gói</td><td>1</td></tr>
      <tr><td>Trà Đen Sài Gòn</td><td>Gói</td><td>1</td></tr>
      <tr><td>Trân Châu Trà Oolong Nhài</td><td>Gói</td><td><strong>20</strong></td></tr>
      <tr><td>Trân Châu 3Q Trà</td><td>Gói</td><td><strong>6</strong></td></tr>
    </table></div>
    <div class="highlight-box info">💡 Đơn giá không nằm trong tài liệu đào tạo. Khi đặt hàng, xem <strong>đơn giá hiện hành trực tiếp trên KiotViet</strong>.</div>
  </div>
  <div class="section">
    <h3>4. Vật Liệu Bao Bì</h3>
    <div class="table-wrap"><table>
      <tr><th>Phân loại</th><th>Sản phẩm</th><th>ĐVT</th><th>MOQ</th></tr>
      <tr><td rowspan="9"><span class="badge bg-green">VL Độc Quyền</span></td>
          <td>Ly nhựa PET 550ml lùn - phi 98</td><td>Thùng</td><td>1</td></tr>
      <tr><td>Nắp ly PET Cheese - phi 98</td><td>Thùng</td><td>1</td></tr>
      <tr><td>Ly Giấy 2 Lớp In Màu 500ml - Phi 90</td><td>Thùng</td><td>1</td></tr>
      <tr><td>Nắp Ly Giấy Premium trắng phi 90</td><td>Thùng</td><td>1</td></tr>
      <tr><td>Túi giấy Hồng The Hoa</td><td>Cái</td><td><strong>200</strong></td></tr>
      <tr><td>Khay đế ly carton 4 ngăn</td><td>Cái</td><td><strong>200</strong></td></tr>
      <tr><td>Combo Thùng Và Túi 12 Ly The Hoa</td><td>Combo</td><td><strong>10</strong></td></tr>
      <tr><td>Bịch 1 Ly The Hoa</td><td>Kg</td><td><strong>5</strong></td></tr>
      <tr><td>Bịch 2 Ly The Hoa</td><td>Kg</td><td><strong>5</strong></td></tr>
      <tr><td rowspan="8"><span class="badge bg-blue">VL Không ĐQ</span></td>
          <td>Giấy chống tràn 13cm (Ly giấy 500ml)</td><td>Xấp</td><td><strong>2</strong></td></tr>
      <tr><td>Ống hút bọc kiếng phi 12</td><td>Kg</td><td><strong>5</strong></td></tr>
      <tr><td>Ống hút bọc kiếng phi 6</td><td>Kg</td><td><strong>5</strong></td></tr>
      <tr><td>Ống Hút Bùng Hương</td><td>Gói</td><td><strong>10</strong></td></tr>
      <tr><td>Muỗng nhựa trắng bọc kiếng 15cm</td><td>Thùng</td><td>1</td></tr>
      <tr><td>Hũ đựng topping 4Oz</td><td>Thùng</td><td>1</td></tr>
      <tr><td>Băng Keo Trong 1,2cm</td><td>Cuộn</td><td><strong>5</strong></td></tr>
      <tr><td>Băng keo trắng 1,5cm</td><td>Cuộn</td><td><strong>5</strong></td></tr>
    </table></div>
    <div class="highlight-box" style="background:#fde8ea;border-color:#f5b8be">🚚 Giá <strong>Vật Liệu Bao Bì</strong> <strong>đã bao gồm phí vận chuyển</strong>.</div>
  </div>`,
  questions:[
    {q:'"Nguyên Liệu Độc Quyền" của The Hoa là gì?',
     opts:['NVL mua được ở bất kỳ đâu','NVL chỉ được cung ứng qua hệ thống The Hoa','NVL nhập khẩu trực tiếp từ nước ngoài','NVL do cửa hàng tự chọn nhà cung cấp'],
     c:1,exp:'NVL Độc Quyền chỉ được cung ứng qua hệ thống The Hoa, không được mua từ nguồn khác.'},
    {q:'Giá nhóm Vật Liệu Bao Bì có đặc điểm gì?',
     opts:['Chưa bao gồm phí vận chuyển','Đã bao gồm phí vận chuyển','Giá linh hoạt theo thị trường','Cần thương lượng mỗi đơn'],
     c:1,exp:'Giá Vật Liệu Bao Bì đã bao gồm phí vận chuyển. Nguyên Liệu (Độc Quyền và Không Độc Quyền) chưa bao gồm phí vận chuyển.'},
    {q:'Sản phẩm nào sau đây thuộc nhóm Vật Liệu Độc Quyền The Hoa?',
     opts:['Bột Matcha Đài Loan','Túi giấy Hồng The Hoa','Ống hút bọc kiếng','Thạch Nha Đam'],
     c:1,exp:'Túi giấy Hồng The Hoa là Vật Liệu Độc Quyền, chỉ cung ứng qua hệ thống.'},
    {q:'TRÀ DƯỠNG có số lượng tối thiểu (MOQ) là bao nhiêu mỗi loại?',
     opts:['1 gói','5 gói','10 gói','20 gói'],
     c:3,exp:'MOQ của TRÀ DƯỠNG là 20 gói/loại theo danh mục nguyên liệu The Hoa.'},
    {q:'Sản phẩm nào thuộc nhóm Nguyên Liệu Không Độc Quyền?',
     opts:['Bột Pha Chế PT35','Vải Tươi Ngâm Đường','Bột Matcha Đài Loan','Trà Xanh Lài'],
     c:2,exp:'Bột Matcha Đài Loan là Nguyên Liệu Không Độc Quyền - giá linh hoạt theo thị trường và có thể mua từ bên ngoài (đúng loại Hệ Thống quy định).'},
    {q:'Nhóm nào sau đây KHÔNG cần đặt qua hệ thống KiotViet của The Hoa?',
     opts:['Nguyên Liệu Độc Quyền','Vật Liệu Bao Bì Độc Quyền','Nguyên Liệu Địa Phương','Nguyên Liệu Không Độc Quyền'],
     c:2,exp:'Nguyên Liệu Địa Phương (đường, chanh, sữa đặc...) được mua trực tiếp tại địa phương, không cần đặt qua hệ thống.'}
  ]
},
{
  id:2, icon:'📋',
  title:'MOQ - Số Lượng Đặt Tối Thiểu',
  subtitle:'Quy định số lượng tối thiểu mỗi lần đặt',
  content:`
  <div class="section">
    <h3>1. MOQ Nguyên Liệu Độc Quyền</h3>
    <div class="table-wrap"><table>
      <tr><th>Sản phẩm</th><th>ĐVT</th><th>MOQ</th></tr>
      <tr><td>Bột Pha Chế PT35</td><td>Thùng</td><td>1</td></tr>
      <tr><td>Bột Socola 02</td><td>Gói</td><td>1</td></tr>
      <tr><td>Trà Hòa Tan Vị Đào</td><td>Gói</td><td><strong>5</strong></td></tr>
      <tr><td>Trà Hòa Tan Vị Vải</td><td>Gói</td><td><strong>5</strong></td></tr>
      <tr><td>Vải Tươi Ngâm Đường</td><td>Thùng</td><td>1</td></tr>
      <tr><td>Trà Xanh Lài</td><td>Gói</td><td>1</td></tr>
      <tr><td>Trà Xanh Gạo Rang</td><td>Gói</td><td>1</td></tr>
      <tr><td>Trà Oolong Quế Hoa</td><td>Gói</td><td>1</td></tr>
      <tr><td>Trà Oolong Sữa</td><td>Gói</td><td>1</td></tr>
      <tr><td>Trà Xanh Shan Tuyết</td><td>Gói</td><td>1</td></tr>
      <tr><td>Cà Phê Hạt</td><td>Gói</td><td><strong>2</strong></td></tr>
      <tr><td>TRÀ DƯỠNG (mỗi loại)</td><td>Gói</td><td><strong>20</strong></td></tr>
    </table></div>
  </div>
  <div class="section">
    <h3>2. MOQ Nguyên Liệu Không Độc Quyền</h3>
    <div class="table-wrap"><table>
      <tr><th>Sản phẩm</th><th>ĐVT</th><th>MOQ</th></tr>
      <tr><td>Bột Matcha Đài Loan</td><td>Gói</td><td>1</td></tr>
      <tr><td>Bột Jelly Ciel</td><td>Gói</td><td>1</td></tr>
      <tr><td>Đào Ngâm Fresko 820gr</td><td>Thùng</td><td>1</td></tr>
      <tr><td>Lê Ngâm Đường</td><td>Lon</td><td><strong>6</strong></td></tr>
      <tr><td>Sinh Tố Xoài Berrino</td><td>Chai</td><td>1</td></tr>
      <tr><td>Sinh Tố Dâu Tây Berrino</td><td>Chai</td><td>1</td></tr>
      <tr><td>Mứt Hoa Mộc Quế</td><td>Hủ</td><td>1</td></tr>
      <tr><td>Syrup Lựu Lermao</td><td>Gói</td><td>1</td></tr>
      <tr><td>Thạch Nha Đam</td><td>Gói</td><td><strong>5</strong></td></tr>
      <tr><td>Hạt Sen Lon NIF</td><td>Lon</td><td><strong>12</strong></td></tr>
      <tr><td>Sữa Nước Ice Blanc</td><td>Hộp</td><td><strong>24</strong></td></tr>
      <tr><td>Nước Dừa Xiêm Vico</td><td>Chai</td><td><strong>6</strong></td></tr>
      <tr><td>Trà Oolong Sen</td><td>Gói</td><td>1</td></tr>
      <tr><td>Trà Đen Sài Gòn</td><td>Gói</td><td>1</td></tr>
      <tr><td>Trân Châu Trà Oolong Nhài</td><td>Gói</td><td><strong>20</strong></td></tr>
      <tr><td>Trân Châu 3Q Trà</td><td>Gói</td><td><strong>6</strong></td></tr>
    </table></div>
  </div>
  <div class="section">
    <h3>3. MOQ Vật Liệu Bao Bì</h3>
    <div class="table-wrap"><table>
      <tr><th>Sản phẩm</th><th>ĐVT</th><th>MOQ</th></tr>
      <tr><td>Ly nhựa PET 550ml lùn - phi 98</td><td>Thùng</td><td>1</td></tr>
      <tr><td>Nắp ly PET Cheese - phi 98</td><td>Thùng</td><td>1</td></tr>
      <tr><td>Ly Giấy 2 Lớp In Màu 500ml - Phi 90</td><td>Thùng</td><td>1</td></tr>
      <tr><td>Nắp Ly Giấy Premium trắng phi 90</td><td>Thùng</td><td>1</td></tr>
      <tr><td>Túi giấy Hồng The Hoa</td><td>Cái</td><td><strong>200</strong></td></tr>
      <tr><td>Khay đế ly carton 4 ngăn</td><td>Cái</td><td><strong>200</strong></td></tr>
      <tr><td>Combo Thùng Và Túi 12 Ly The Hoa</td><td>Combo</td><td><strong>10</strong></td></tr>
      <tr><td>Bịch 1 Ly The Hoa</td><td>Kg</td><td><strong>5</strong></td></tr>
      <tr><td>Bịch 2 Ly The Hoa</td><td>Kg</td><td><strong>5</strong></td></tr>
      <tr><td>Giấy chống tràn 13cm</td><td>Xấp</td><td><strong>2</strong></td></tr>
      <tr><td>Ống hút bọc kiếng phi 12</td><td>Kg</td><td><strong>5</strong></td></tr>
      <tr><td>Ống hút bọc kiếng phi 6</td><td>Kg</td><td><strong>5</strong></td></tr>
      <tr><td>Ống Hút Bùng Hương</td><td>Gói</td><td><strong>10</strong></td></tr>
      <tr><td>Muỗng nhựa trắng bọc kiếng 15cm</td><td>Thùng</td><td>1</td></tr>
      <tr><td>Hũ đựng topping 4Oz</td><td>Thùng</td><td>1</td></tr>
      <tr><td>Băng Keo Trong 1,2cm</td><td>Cuộn</td><td><strong>5</strong></td></tr>
      <tr><td>Băng keo trắng 1,5cm</td><td>Cuộn</td><td><strong>5</strong></td></tr>
    </table></div>
  </div>
  <div class="section">
    <h3>4. Lưu Ý Quan Trọng</h3>
    <div class="highlight-box warn">⚠️ Đặt hàng <strong>dưới MOQ</strong> → hệ thống sẽ <strong>không xử lý đơn</strong>. Luôn kiểm tra MOQ trước khi tạo đơn.</div>
    <div class="highlight-box">💡 Nên lập kế hoạch đặt hàng <strong>định kỳ</strong> để tối ưu số lượng và tránh thiếu hàng.</div>
  </div>`,
  questions:[
    {q:'MOQ của Trà Hòa Tan Vị Đào / Vị Vải là bao nhiêu mỗi lần đặt?',
     opts:['1 gói','3 gói','5 gói','10 gói'],
     c:2,exp:'MOQ của Trà Hòa Tan Vị Đào và Vị Vải là 5 gói mỗi loại mỗi lần đặt.'},
    {q:'Cửa hàng muốn đặt Túi giấy Hồng The Hoa. Số lượng tối thiểu là bao nhiêu?',
     opts:['50 cái','100 cái','200 cái','500 cái'],
     c:2,exp:'MOQ Túi giấy Hồng The Hoa là 200 cái mỗi lần đặt.'},
    {q:'Điều gì xảy ra nếu cửa hàng đặt số lượng dưới MOQ?',
     opts:['Hệ thống tự điều chỉnh lên đủ MOQ','Được giao hàng sau khi có thêm đơn','Hệ thống sẽ không xử lý đơn','Phải đặt cọc thêm 20%'],
     c:2,exp:'Đặt dưới MOQ sẽ không được hệ thống xử lý. Phải đảm bảo đủ số lượng tối thiểu.'},
    {q:'MOQ của TRÀ DƯỠNG là bao nhiêu mỗi loại?',
     opts:['5 gói','10 gói','20 gói','50 gói'],
     c:2,exp:'MOQ của từng loại TRÀ DƯỠNG là 20 gói/loại.'},
    {q:'MOQ Khay đế ly carton 4 ngăn là bao nhiêu?',
     opts:['50 cái','100 cái','200 cái','500 cái'],
     c:2,exp:'MOQ Khay đế ly carton 4 ngăn là 200 cái mỗi lần đặt.'}
  ]
},
{
  id:3, icon:'🛒',
  title:'Quy Trình Đặt Hàng',
  subtitle:'Hướng dẫn đặt hàng qua KiotViet',
  content:`
  <div class="section">
    <h3>Chuẩn Bị Trước Khi Đặt Hàng</h3>
    <ol class="step-list">
      <li class="step-item"><div class="step-num">1</div><div class="step-content"><strong>Kiểm tra tồn kho thực tế</strong> tại cửa hàng - xác định mặt hàng cần nhập</div></li>
      <li class="step-item"><div class="step-num">2</div><div class="step-content"><strong>Lập danh sách đặt hàng</strong> - đảm bảo đủ MOQ từng sản phẩm</div></li>
      <li class="step-item"><div class="step-num">3</div><div class="step-content"><strong>Thanh toán</strong> - ngay sau khi Hệ Thống xác nhận đơn hàng</div></li>
    </ol>
  </div>
  <div class="section">
    <h3>Quy Trình Đặt Hàng KiotViet (7 Bước)</h3>
    <ol class="step-list">
      <li class="step-item"><div class="step-num">1</div><div class="step-content">Tải app <strong>KiotViet</strong> trên App Store hoặc CH Play</div></li>
      <li class="step-item"><div class="step-num">2</div><div class="step-content">Đăng nhập theo thông tin hệ thống cung cấp: <strong>Gian hàng</strong>, <strong>tên đăng nhập</strong>, <strong>mật khẩu</strong></div></li>
      <li class="step-item"><div class="step-num">3</div><div class="step-content">Chỗ <strong>"Khách lẻ"</strong> bấm chọn <strong>tên cửa hàng của anh/chị</strong></div></li>
      <li class="step-item"><div class="step-num">4</div><div class="step-content">Chọn các sản phẩm cần đặt, <strong>điều chỉnh số lượng</strong> phù hợp <em>(nên chọn theo nhóm: 1 loạt vật liệu xong đến 1 loạt nguyên liệu)</em></div></li>
      <li class="step-item"><div class="step-num">5</div><div class="step-content">Kiểm tra toàn bộ đơn hàng - nếu cần kiểm soát lại kho thêm thì bấm <strong>"Lưu vào phiếu tạm"</strong></div></li>
      <li class="step-item"><div class="step-num">6</div><div class="step-content">Bấm <strong>Đặt hàng</strong></div></li>
      <li class="step-item"><div class="step-num">7</div><div class="step-content"><strong>Chụp màn hình</strong> đơn hàng → gửi lên <strong>nhóm kho Zalo</strong></div></li>
    </ol>
    <div class="highlight-box warn" style="margin-top:14px">
      ⚠️ <strong>Bắt buộc:</strong> Chụp màn hình đơn hàng và gửi vào nhóm Zalo kho. Thiếu bước này kho sẽ không xử lý đơn.
    </div>
  </div>`,
  questions:[
    {q:'Bước đầu tiên trước khi đặt hàng trên KiotViet là gì?',
     opts:['Tạo đơn ngay trên KiotViet','Gọi điện cho kho xác nhận','Kiểm tra tồn kho thực tế tại cửa hàng','Chụp ảnh kệ hàng gửi Zalo'],
     c:2,exp:'Luôn kiểm tra tồn kho thực tế trước để biết cần nhập mặt hàng nào và số lượng bao nhiêu.'},
    {q:'Sau khi đặt hàng trên KiotViet, bước tiếp theo bắt buộc là gì?',
     opts:['Chờ kho liên hệ trong 24 giờ','Chụp màn hình đơn hàng gửi nhóm kho Zalo','Gọi điện xác nhận với kế toán','Thanh toán sau khi nhận hàng'],
     c:1,exp:'Sau khi đặt hàng phải chụp màn hình và gửi ngay vào nhóm kho Zalo. Đây là bước bắt buộc, thiếu sẽ không được xử lý.'},
    {q:'Chức năng "Lưu vào phiếu tạm" trong KiotViet dùng để làm gì?',
     opts:['Hủy đơn hàng','Xác nhận thanh toán ngay','Lưu đơn chưa hoàn tất để bổ sung sau','Gửi thông báo tự động cho kho'],
     c:2,exp:'"Lưu vào phiếu tạm" giúp lưu đơn đang làm để kiểm tra lại kho và bổ sung sau khi cần.'},
    {q:'Khi chọn sản phẩm trên KiotViet, nên chọn theo thứ tự nào để tối ưu?',
     opts:['Chọn ngẫu nhiên theo ý muốn','Chọn theo giá tăng dần','Chọn theo nhóm: vật liệu trước rồi đến nguyên liệu','Chọn nguyên liệu trước rồi vật liệu'],
     c:2,exp:'Nên chọn theo nhóm (1 loạt vật liệu xong đến 1 loạt nguyên liệu) để dễ kiểm tra và tránh bỏ sót.'},
    {q:'Cửa hàng cần thanh toán vào thời điểm nào?',
     opts:['Sau khi nhận hàng 3 ngày','Trước khi nhận hàng','Ngay sau khi Hệ Thống xác nhận đơn hàng','Trong vòng 7 ngày sau khi đặt'],
     c:2,exp:'Cửa hàng cần thanh toán ngay sau khi Hệ Thống xác nhận đơn hàng.'}
  ]
},
{
  id:4, icon:'🚚🛠️',
  title:'Nhận Hàng & Xử Lý Sự Cố',
  subtitle:'Kiểm tra khi nhận, báo lỗi & liên hệ hỗ trợ',
  content:`
  <div class="section">
    <h3>1. Thời Gian Giao Hàng</h3>
    <p>Tính từ <strong>ngày hệ thống XÁC NHẬN đơn hàng</strong> (không phải ngày đặt).</p>
    <div class="table-wrap"><table>
      <tr><th>Khu vực</th><th>Thời gian giao hàng</th></tr>
      <tr><td>🟢 <strong>Miền Nam</strong></td><td><strong>5 - 7 ngày làm việc</strong></td></tr>
      <tr><td>🔵 <strong>Miền Trung & Miền Bắc</strong></td><td><strong>7 - 10 ngày làm việc</strong></td></tr>
    </table></div>
    <div class="highlight-box warn">⚠️ Thứ 7 và Chủ nhật <strong>không được tính</strong> vào ngày làm việc.</div>
  </div>
  <div class="section">
    <h3>2. Quy Trình Nhận Hàng - 5 Bước</h3>
    <ol class="step-list">
      <li class="step-item"><div class="step-num">1</div><div class="step-content"><strong>Kiểm tra số lượng hàng hóa</strong> - Đếm khớp với đơn đặt hàng.</div></li>
      <li class="step-item"><div class="step-num">2</div><div class="step-content"><strong>Đối chiếu với đơn đặt hàng</strong> - Đúng sản phẩm, đúng chủng loại.</div></li>
      <li class="step-item"><div class="step-num">3</div><div class="step-content"><strong>Kiểm tra tình trạng bao bì</strong> - Không rách, móp, ẩm, hư hại.</div></li>
      <li class="step-item"><div class="step-num">4</div><div class="step-content"><strong>Kiểm tra hạn sử dụng</strong> - Còn đủ thời gian khai thác.</div></li>
      <li class="step-item"><div class="step-num">5</div><div class="step-content"><strong>Kiểm tra chất lượng sản phẩm</strong> - Xem xét bên trong nếu cần.</div></li>
    </ol>
    <div class="highlight-box">✅ Phát hiện vấn đề → <strong>báo ngay vào nhóm Zalo kho</strong>. Không tự ý xử lý.</div>
  </div>
  <div class="section">
    <h3>3. Quy Trình Xử Lý Sự Cố - 5 Bước</h3>
    <ol class="step-list">
      <li class="step-item"><div class="step-num">1</div><div class="step-content"><strong>Chụp hình / quay video sản phẩm lỗi</strong> - Ghi lại bằng chứng ngay lập tức.</div></li>
      <li class="step-item"><div class="step-num">2</div><div class="step-content"><strong>Gửi lên group nguyên liệu</strong> - Kèm: hình ảnh + tên SP + số lượng lỗi + mô tả lỗi.</div></li>
      <li class="step-item"><div class="step-num">3</div><div class="step-content"><strong>Bộ phận hệ thống tiếp nhận & đánh giá</strong> - Phản hồi trong 30-60 phút.</div></li>
      <li class="step-item"><div class="step-num">4</div><div class="step-content"><strong>Hệ thống đưa ra hướng xử lý</strong> - Đổi hàng, bồi thường hoặc phương án khác.</div></li>
      <li class="step-item"><div class="step-num">5</div><div class="step-content"><strong>Cửa Hàng xác nhận phương án</strong></div></li>
    </ol>
  </div>
  <div class="section">
    <h3>4. Thời Hạn Quan Trọng</h3>
    <div class="table-wrap"><table>
      <tr><th>Mốc thời gian</th><th>Quy định</th></tr>
      <tr><td>Phản hồi ban đầu</td><td><strong>30-60 phút</strong></td></tr>
      <tr><td>Khi phát hiện lỗi</td><td>⚡ <strong>Báo ngay</strong> - không chờ</td></tr>
      <tr><td>Thời hạn tối đa báo lỗi</td><td><strong>2 ngày</strong> kể từ ngày nhận biên nhận, hoặc <strong>1 ngày</strong> kể từ ngày nhận hàng</td></tr>
      <tr><td>Phản hồi tình trạng sản phẩm</td><td><strong>Trong vòng 3 ngày</strong> làm việc</td></tr>
    </table></div>
    <div class="highlight-box warn">⚠️ <strong>Phát hiện lỗi → báo ngay</strong>. Thời hạn tối đa: <strong>2 ngày</strong> kể từ ngày nhận biên nhận hoặc <strong>1 ngày</strong> kể từ ngày nhận hàng. Quá hạn → hệ thống có thể không xử lý được yêu cầu đổi trả.</div>
  </div>
  <div class="section">
    <h3>5. Giờ Làm Việc & Liên Hệ</h3>
    <div class="table-wrap"><table>
      <tr><th>Thời gian</th><th>Hoạt động hỗ trợ</th></tr>
      <tr><td><strong>Thứ 2-6: 09:00-17:00</strong></td><td>Làm việc đầy đủ, phản hồi 30-60 phút</td></tr>
      <tr><td><strong>Thứ 7-Chủ nhật</strong></td><td>Tiếp nhận thông tin, xử lý vào ngày làm việc tiếp theo</td></tr>
    </table></div>
    <div class="highlight-box info" style="margin-top:14px">
      <strong>📞 Liên hệ trực tiếp:</strong><br>
      Phụ trách: <strong>Trần Thị Hạnh Nhân</strong> - Chuỗi Cung Ứng<br>
      Điện thoại: <strong>0344 858 727</strong> | Email: <strong>hanhnhan@phuctea.com.vn</strong>
    </div>
  </div>`,
  questions:[
    {q:'Thời gian giao hàng khu vực Miền Nam là bao lâu (tính từ ngày xác nhận đơn)?',
     opts:['3-5 ngày làm việc','5-7 ngày làm việc','7-10 ngày làm việc','2-3 ngày làm việc'],
     c:1,exp:'Miền Nam: 5-7 ngày làm việc kể từ ngày hệ thống xác nhận đơn.'},
    {q:'Khi phát hiện vấn đề lúc nhận hàng, cần làm gì?',
     opts:['Từ chối toàn bộ đơn ngay','Báo ngay vào nhóm Zalo kho','Tự xử lý không cần báo','Liên hệ đơn vị vận chuyển'],
     c:1,exp:'Khi phát hiện vấn đề, báo ngay vào nhóm Zalo kho để được hỗ trợ đúng quy trình.'},
    {q:'Bước đầu tiên khi xử lý sự cố nguyên liệu là gì?',
     opts:['Liên hệ điện thoại ngay','Chụp hình/quay video sản phẩm lỗi','Trả lại toàn bộ hàng','Yêu cầu bồi thường bằng văn bản'],
     c:1,exp:'Bước 1 là chụp hình/video sản phẩm lỗi để có bằng chứng trước khi báo cáo.'},
    {q:'Thời hạn tối đa báo hàng lỗi kể từ ngày nhận hàng là bao nhiêu?',
     opts:['1 ngày','2 ngày','3 ngày','7 ngày'],
     c:0,exp:'Thời hạn tối đa báo hàng lỗi là 1 ngày kể từ ngày nhận hàng, hoặc 2 ngày kể từ ngày nhận được biên nhận.'},
    {q:'Sau khi hệ thống đưa ra hướng xử lý sự cố, bước cuối cùng là gì?',
     opts:['Kho tự đóng hồ sơ','Cửa Hàng xác nhận phương án xử lý','Gửi lại hình ảnh bằng chứng lần hai','Lập biên bản thiệt hại'],
     c:1,exp:'Bước 5 - Cửa Hàng xác nhận phương án xử lý do hệ thống đề xuất để đóng hồ sơ sự cố.'}
  ]
}
];

// ─── THE HOA FINAL QUIZ ────────────────────────────────────────
const FINAL_QUIZ_TH = [
  {q:'Cửa hàng The Hoa nhận hàng và phát hiện thiếu 2 gói Trà Oolong Sữa. Theo SOP, bước xử lý đúng là gì?',
   opts:['Chấp nhận và đặt bù đơn tiếp theo','Từ chối toàn bộ lô hàng ngay tại chỗ','Chụp hình lô hàng và báo ngay vào nhóm Zalo kho (trong 1 ngày kể từ nhận hàng)','Liên hệ đơn vị vận chuyển đòi bồi thường'],
   c:2,exp:'Khi nhận hàng thiếu/lỗi, phải chụp hình và báo nhóm Zalo kho ngay - trong 1 ngày kể từ ngày nhận hàng. Không tự xử lý hay liên hệ vận chuyển.'},
  {q:'Trách nhiệm nào sau đây KHÔNG thuộc về Cửa Hàng/ĐTNQ The Hoa?',
   opts:['Kiểm tra tồn kho trước khi đặt hàng','Kiểm tra hàng hóa khi nhận theo biên nhận','Chuẩn bị hàng, xuất kho và giao hàng cho cửa hàng','Thanh toán trước khi nhận hàng'],
   c:2,exp:'Chuẩn bị hàng, xuất kho và giao hàng là trách nhiệm của bộ phận Chuỗi Cung Ứng, không phải Cửa Hàng.'},
  {q:'Cửa hàng muốn mua thêm Bột Matcha Đài Loan. Cần làm gì?',
   opts:['Mua từ nhà cung cấp bên ngoài vì đây là NL Hệ Thống','Xin phép hệ thống trước khi mua bất kỳ đâu','Đặt qua hệ thống KiotViet của The Hoa','Chỉ được đặt khi tồn kho = 0'],
   c:2,exp:'Bột Matcha Đài Loan là NL Hệ Thống - phải đặt qua KiotViet của hệ thống The Hoa.'},
  {q:'Giá Nguyên Liệu Độc Quyền thay đổi sẽ được thông báo trước bao nhiêu ngày?',
   opts:['7 ngày','10 ngày','15 ngày','30 ngày'],
   c:2,exp:'NVL Độc Quyền điều chỉnh giá sẽ được thông báo trước tối thiểu 15 ngày để cửa hàng chủ động tài chính.'},
  {q:'Nhân viên tạo đơn KiotViet xong bấm Đặt Hàng nhưng quên gửi Zalo kho. Điều gì xảy ra?',
   opts:['Hệ thống tự thông báo cho kho','Kho không nhận được thông tin, đơn có thể không được xử lý','Kho vẫn nhận được vì dữ liệu đồng bộ tự động','Đơn bị hủy sau 24 giờ'],
   c:1,exp:'Kho KHÔNG tự nhận được thông báo. Phải chụp màn hình và gửi Zalo kho ngay - đây là bước bắt buộc.'},
  {q:'Cửa hàng đang lập đơn KiotViet nhưng cần kiểm tra lại tồn kho trước khi hoàn tất. Nên dùng tính năng nào?',
   opts:['Xóa đơn và tạo lại từ đầu','Bấm "Lưu vào phiếu tạm" để lưu và bổ sung sau','Gửi đơn ngay rồi liên hệ kho chỉnh sửa','Tạo thêm đơn mới song song'],
   c:1,exp:'"Lưu vào phiếu tạm" giúp lưu đơn đang làm để xem xét và bổ sung thêm sau.'},
  {q:'Cửa hàng cần đặt Trà Hòa Tan Vị Đào (MOQ 5 gói) và Trân Châu Giòn (MOQ 1 thùng). Đơn tối thiểu là gì?',
   opts:['1 gói Trà Hòa Tan + 1 gói Trân Châu','5 gói Trà Hòa Tan + 1 thùng Trân Châu Giòn','3 gói Trà Hòa Tan + 1 thùng Trân Châu','10 gói Trà Hòa Tan + 2 thùng Trân Châu'],
   c:1,exp:'MOQ Trà Hòa Tan = 5 gói, MOQ Trân Châu Giòn = 1 thùng. Đây là số lượng tối thiểu bắt buộc mỗi lần đặt.'},
  {q:'Cửa hàng Miền Nam đặt hàng Thứ Sáu, hệ thống xác nhận ngay. Nhận hàng sớm nhất vào ngày nào?',
   opts:['Thứ Ba tuần sau','Thứ Tư tuần sau','Thứ Năm tuần sau','Thứ Sáu tuần sau'],
   c:2,exp:'Miền Nam: 5-7 ngày làm việc. Từ Thứ Sáu: T2+T3+T4+T5+T6 = 5 ngày làm việc → sớm nhất Thứ Năm tuần sau.'},
  {q:'Nhân viên phát hiện gói Trà Oolong Camelia bị ẩm sau khi nhận hàng 4 ngày. Kết quả theo SOP?',
   opts:['Được đổi hàng vì còn trong tuần','Hệ thống có thể từ chối vì đã quá thời hạn báo lỗi 1 ngày kể từ nhận hàng','Được bồi thường vì lỗi vận chuyển','Phải gửi sản phẩm về kho để kiểm tra'],
   c:1,exp:'Thời hạn báo lỗi là 3 ngày kể từ khi nhận hàng. Quá 3 ngày, hệ thống có thể không xử lý được.'},
  {q:'Khi gửi báo cáo sự cố lên group, thông tin nào là đầy đủ và đúng theo SOP?',
   opts:['Chỉ cần ghi tên sản phẩm bị lỗi','Gọi điện trực tiếp cho phụ trách','Hình ảnh/video + tên SP + số lượng lỗi + mô tả chi tiết lỗi','Gửi email kèm hóa đơn nhập hàng'],
   c:2,exp:'Theo SOP, khi báo lỗi phải gửi đầy đủ: hình ảnh/video + tên SP + số lượng lỗi + mô tả lỗi vào group nguyên liệu.'}
];

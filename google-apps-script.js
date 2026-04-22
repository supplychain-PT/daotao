/**
 * HƯỚNG DẪN CÀI ĐẶT GOOGLE SHEETS TRACKING
 * ==========================================
 * 1. Mở Google Sheets mới tại sheets.google.com
 * 2. Vào menu: Extensions → Apps Script
 * 3. Xoá code mặc định, dán TOÀN BỘ code dưới vào
 * 4. Bấm Save (Ctrl+S)
 * 5. Bấm Deploy → New deployment
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Bấm Deploy → Copy URL
 * 7. Dán URL vào file index.html dòng: const WEBHOOK_URL = '...';
 * 8. Upload lại lên Vercel
 */

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    // Tạo sheet nếu chưa có
    let sheet = ss.getSheetByName('Học Viên');
    if (!sheet) {
      sheet = ss.insertSheet('Học Viên');
      sheet.appendRow([
        'STT', 'Thời gian đăng ký', 'Họ và tên', 'Email',
        'Cửa hàng', 'Trạng thái', 'Điểm TB (%)',
        'Thời gian học', 'Hoàn thành lúc'
      ]);
      // Format header
      const header = sheet.getRange(1, 1, 1, 9);
      header.setBackground('#0f5c2b');
      header.setFontColor('#ffffff');
      header.setFontWeight('bold');
      sheet.setFrozenRows(1);
      sheet.setColumnWidth(1, 50);
      sheet.setColumnWidth(2, 160);
      sheet.setColumnWidth(3, 200);
      sheet.setColumnWidth(4, 220);
      sheet.setColumnWidth(5, 220);
      sheet.setColumnWidth(6, 150);
      sheet.setColumnWidth(7, 100);
      sheet.setColumnWidth(8, 130);
      sheet.setColumnWidth(9, 160);
    }

    if (data.event === 'register') {
      const lastRow = sheet.getLastRow();
      sheet.appendRow([
        lastRow,              // STT
        data.time,            // Thời gian đăng ký
        data.name,            // Họ tên
        data.email,           // Email
        data.store,           // Cửa hàng
        'Đang học 📚',        // Trạng thái
        '',                   // Điểm TB
        '',                   // TG học
        ''                    // Hoàn thành
      ]);
    }

    if (data.event === 'complete') {
      const rows = sheet.getDataRange().getValues();
      for (let i = 1; i < rows.length; i++) {
        if (rows[i][3] === data.email) {
          sheet.getRange(i + 1, 6).setValue('Hoàn thành ✅');
          sheet.getRange(i + 1, 7).setValue(data.score + '%');
          sheet.getRange(i + 1, 8).setValue(data.duration);
          sheet.getRange(i + 1, 9).setValue(data.time);
          // Tô màu xanh dòng hoàn thành
          sheet.getRange(i + 1, 1, 1, 9).setBackground('#e6f9ee');
          break;
        }
      }
    }

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function - chạy để kiểm tra
function testSetup() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  Logger.log('Sheet name: ' + ss.getName());
  Logger.log('Setup OK!');
}

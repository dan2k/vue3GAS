/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function config() {

  var sheetID = "17-9O_ENKetib7Mr7ACNQGxTNMJDsFrugeTUIkdOJdDQ"; //ดู Note [1] ด้านล่าง
  
  var links = [];
  links["students"] = "sheet1";   //ตัวอย่าง links["students"] = "Student";
  links["data2"] = "sheet2";

  return { sheetID: sheetID, links: links };
}

function doGet(e) {
  return HtmlService.createTemplateFromFile('index.html')
    .evaluate()
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .setTitle('Vue3 GAS')
}
function test(){
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName('Sheet1'); // เปลี่ยนชื่อชีทตามต้องการ
    const data = sheet.getDataRange().getValues();
    const jResponse = JSON.stringify(toObject(data));
    //return ContentService.createTextOutput(jResponse).setMimeType(ContentService.MimeType.JSON  );
    return jResponse; 
}
// function doGet(e) {
//   var configs = config();
//   // var params = e.parameter;
//   // var query = params.q != undefined ? params.q : "";
//   // var sheetName = configs.links[query];
//   var sheetName = configs.links['students'];
//   var dt = [];

//   if (sheetName != null) {

//     dt = readWorkSheet(configs.sheetID, sheetName);

//   }
  
//   const jResponse = JSON.stringify(toObject(dt));
//   console.log(toObject(dt))
//   return ContentService.createTextOutput(jResponse).setMimeType(
//     ContentService.MimeType.JSON  );
// }


function readWorkSheet(sheetID, sheetName) {
  var ss = SpreadsheetApp.openById(sheetID);
  var ws = ss.getSheetByName(sheetName);
  var datatable = ws
    .getRange(1, 1, ws.getLastRow(), ws.getLastColumn())
    .getValues();

  return datatable;
}


function toObject(dt) {
  //กำหนดให้แถวแรกเป็น header
  const header = [];
  const objs = [];

  if (dt != null && dt.length > 0) {
    for (var i = 0; i < dt[0].length; i++) {
      header.push(dt[0][i]);
    }

    for (var i = 1; i < dt.length; i++) {
      var row = dt[i];
      var newObj = {};
      for (var j = 0; j < row.length; j++) {
        newObj[header[j]] = row[j];
      }
      objs.push(newObj);
    }
  }

  return objs;
}
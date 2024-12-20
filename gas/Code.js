/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const setting=config();
function doGet(e) {
  return HtmlService.createTemplateFromFile('index.html')
    .evaluate()
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .setTitle('Vue3 GAS')
}
function test(){
    // const ss = SpreadsheetApp.getActiveSpreadsheet();
    const ss = SpreadsheetApp.openById(setting.sheetID);
    const sheet = ss.getSheetByName(setting.links['students']); // เปลี่ยนชื่อชีทตามต้องการ
    const data = sheet.getDataRange().getValues();
    const jResponse = JSON.stringify(toObject(data));
    //return ContentService.createTextOutput(jResponse).setMimeType(ContentService.MimeType.JSON  );
    return jResponse; 
}
function config() {
    // var sheetID = "17-9O_ENKetib7Mr7ACNQGxTNMJDsFrugeTUIkdOJdDQ"; //ดู Note [1] ด้านล่าง
    var sheetID=SpreadsheetApp.getActiveSpreadsheet().getId();
    var links = [];
    links["students"] = "sheet1";   //ตัวอย่าง links["students"] = "Student";
    // links["data2"] = "sheet2";
  
    return { sheetID: sheetID, links: links };
}
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
    for (let i = 1; i < dt.length; i++) {
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
function addUser(data){
    const ss = SpreadsheetApp.openById(setting.sheetID);
    const sheet = ss.getSheetByName(setting.links['students']);
    sheet.appendRow([data.fname,data.lname]);
}
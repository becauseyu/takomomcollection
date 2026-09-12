// ----------------------------------------------------------------------------------
/* 
    20230516 Maria 顯示警示訊息之 有ok版本(共用)
    參數說明：
    title:		標題（字較大）,
    text:		文字內容（字較小）,
    type:		顯示圖標 https://sweetalert2.github.io/#icons
        warning:警示符號
        error:錯誤符號
        success:正確符號
*/
// ----------------------------------------------------------------------------------
function showMsg(title, text, type) {
  Swal.fire({
      title: title,
      html: text,
      icon: type,
      width: 800,
      allowOutsideClick: false,
  })
}
// ----------------------------------------------------------------------------------
/* 
  取得目前月份的最後一天
  參數說明：
  DateValue   -> 傳入的日期(傳入new Date()格式的日期)
*/
// ----------------------------------------------------------------------------------
// function GetLastDay(DateValue) {
//   var date = new Date(DateValue);
//   var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0); //設定為下個月的第 0 天（即本月的最後一天）
//   return showDate(lastDay);
// }
/*---------------------------------------------*/
// 日期顯示格式化
/*---------------------------------------------*/
function showDate(value){
    var dateValue = new Date(value);;
    var val_Y = dateValue.getFullYear();
    // 如果有人輸入的年大於4位數，就自動只取前四碼
    val_Y = val_Y+="";
    val_Y = val_Y.length > 4?val_Y.substring(0,4):val_Y;
    var val_M = (dateValue.getMonth() + 1 < 10 ? '0' + (dateValue.getMonth() + 1) : dateValue.getMonth() + 1);
    var val_D = (dateValue.getDate() < 10 ? '0' + dateValue.getDate() : dateValue.getDate());
    // yyyy-mm-dd
    var val_date = val_Y + '-' + val_M + '-' + val_D
    return val_date;
}
/*---------------------------------------------*/
// 日期時間顯示格式化
/*---------------------------------------------*/
function showDateTime(value){
    var timeValue = new Date(value);
    var val_Y = timeValue.getFullYear();
    // 如果有人輸入的年大於4位數，就自動只取前四碼
    val_Y = val_Y+="";
    val_Y = val_Y.length > 4?val_Y.substring(0,4):val_Y;
    var val_M = (timeValue.getMonth() + 1 < 10 ? '0' + (timeValue.getMonth() + 1) : timeValue.getMonth() + 1);
    var val_D = (timeValue.getDate() < 10 ? '0' + timeValue.getDate() : timeValue.getDate());
    var val_Time = timeValue.toTimeString().substr(0, 8);
    // yyyy-mm-dd hh:mm:ss
    var val_time = val_Y + '-' + val_M + '-' + val_D + ' ' + val_Time
    return val_time;
}
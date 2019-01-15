const noneIssueMsg = "모든 이슈가 완료되었습니다. 아~ 일을 더 하셔야겠군요?";
const noneCompleteIssueMsg = "완료된 이슈가 없습니다.";

var redmineUrl = "";
/** 비동기 데이터 송수신 JSONP */
function ajaxJsonp(url, sendObj, successFunction) {

    $.ajax({
        async : false
        , dataType : "json"
        , data : sendObj
        , error : function() { }
        , success : successFunction
        , type : "GET"
        , url : redmineUrl + url
    });
}

function ajaxJsonPost(url, sendObj, successFunction) {

    $.ajax({
        data : JSON.stringify(sendObj)
        , dataType : "json"
        , contentType: "application/json; charset=utf-8"
        , error : function() { }
        , success : successFunction
        , type : "POST"
        , url : redmineUrl + url
    });
}

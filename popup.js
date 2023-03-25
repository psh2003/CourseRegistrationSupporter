var xmlHttp;

document.querySelector('#chooseArea').addEventListener('click', function (e) {
    chrome.tabs.executeScript({
        file: "script.js"
    }, function(){

    });
    
    
});

function srvTime() {
    try {
        //FF, Opera, Safari, Chrome
        xmlHttp = new XMLHttpRequest();
    }
    catch (err1) {
        //IE
        try {
            xmlHttp = new ActiveXObject('Msxml2.XMLHTTP');
        }
        catch (err2) {
            try {
                xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
            }
            catch (eerr3) {
                //AJAX not supported, use CPU time.
                alert("AJAX not supported");
            }
        }
    }
    xmlHttp.open('HEAD', window.location.href.toString(), false);
    xmlHttp.setRequestHeader("Content-Type", "text/html");
    xmlHttp.send('');
    return xmlHttp.getResponseHeader("Date");
}

function setAlarm(date) {
    const serverTime = new Date(srvTime());
    const gabTime = new Date().getTime() - serverTime.getTime();        //millisconds로 계산
    
    setInterval(function() {
        let localTime = new Date(new Date.getTime() - gabTime + 1000);
        /* Timer Logic */
    }, 1000);
}
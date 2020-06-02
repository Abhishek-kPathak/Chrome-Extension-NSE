
console.log("chrome extension go!");


window.addEventListener ("load", myMain, false);

function myMain (evt) {
    var jsInitChecktimer = setInterval (checkForJS_Finish, 111);
    function checkForJS_Finish () {
        if (  typeof document.querySelectorAll(".line-hd")[0] != "undefined"
        ) {
            clearInterval (jsInitChecktimer);
              let title = document.querySelectorAll(".line-hd")[0].textContent;
              let message = document.querySelectorAll(".line-sub")[0].textContent;
              let eMessage = document.querySelectorAll(".line-clamp")[0].textContent;

              var notif = {
                type:"basic",
                iconUrl: "get_started48.png",
                title: title,
                message: message,
                contextMessage: eMessage
              };

              console.log(notif);
              chrome.runtime.sendMessage(notif, function(response) {
              console.log(response.farewell)
              });

        }
    }
}

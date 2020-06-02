var titleOld="Abhishek"
chrome.runtime.onMessage.addListener(
  function(req, sender, sendResponse) {

    console.log(req);
    sendResponse({farewell: "goodbye"});
    if(req.title!=titleOld){
      chrome.notifications.create("limitNotif",req, function(){
        console.log("notified!");
      });
      titleOld=req.title;
    }

  });

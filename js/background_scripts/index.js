const app = new OAuthClientTwitter({
  'consumer_key': "xxxxx", //consumer key of your app here
  'consumer_secret': "xxxxx", //consumer secret of your app here
  'url_authorize_callback': chrome.extension.getURL("background.html")
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if(request.type === "login"){
    app.login()
    .then(() => {
      console.log(app);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  if(request.type === "api"){  
    //some request for twitter
  }
});
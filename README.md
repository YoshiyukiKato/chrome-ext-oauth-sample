# chrome-ext-oauth-sample
sample app of chrome-ext-oauth

# quick start
## download
Please note that cloning with `--recursive` option because this project includes submodule
```
$ git clone https://github.com/YoshiyukiKato/chrome-ext-oauth-sample --recursive
```
## twitter app
This sample uses twitter oauth api. If you never have any twitter app, please make your new one from [twitter apps console](https://apps.twitter.com/) and get `consumer_key` and `consumer_secret`.

## setup
Set `consumer_key` and `consumer_secret` of your twitter app into `js/background_scripts/index.js`.

```js
const app = new OAuthClientTwitter({
  'consumer_key': "xxxxx", //consumer key of your app here
  'consumer_secret': "xxxxx", //consumer secret of your app here
  'url_authorize_callback': chrome.extension.getURL("background.html")
});
//...
```

## install
Load the project into Google Chrome as extension.

## run
After install, the app icon will appears on your chrome. Open popup from the icon, and then click button to login to twitter.

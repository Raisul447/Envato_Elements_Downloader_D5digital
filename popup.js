chrome.tabs.query({
    active: true,
    lastFocusedWindow: true
}, function(tabs) {

var tab = tabs[0];

if(tab.url.startsWith("https://elements.envato.com")) {






     window.open("https://pixelmedialabs.biz/api/envdl.php?url=" + tab.url + "&serial=Envato-Mahbuba-y4dch8f7v9gxlic0mrh9ory0yn5bos8zc");
      }
});
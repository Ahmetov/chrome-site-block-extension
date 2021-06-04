chrome.tabs.onUpdated.addListener(
  function(tabId, changeInfo, tab) {
    // read changeInfo data and do something with it
    // like send the new url to contentscripts.js
    if (changeInfo.url) {
        let isYoutube = changeInfo.url.includes('vk.com');
        let isVk = changeInfo.url.includes('youtube.com');
        if (isYoutube || isVk) {
            alert('Back to work!');
            chrome.tabs.query({ active: true }, function(tabs) {
                chrome.tabs.remove(tabs[0].id);
            });
        }
    }
  }
);
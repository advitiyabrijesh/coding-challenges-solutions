chrome.action.onClicked.addListener(function (tab) {
    chrome.tabs.create({ url: chrome.runtime.getURL("popup.html") }, function(newTab) {
      // Change the extension icon dynamically
      chrome.action.setIcon({
        path: {
          "16": "images/icon.png",
          "48": "images/icon.png",
          "128": "images/icon.png",
        },
        tabId: newTab.id
      });
    });
  });
  
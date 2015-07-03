

(function($, _, chrome, document, window){

    var manifest = chrome.runtime.getManifest(),
        title = manifest.browser_action.default_title.replace("${version}", manifest.version);

    chrome.browserAction.setTitle({title:title});


    chrome.browserAction.onClicked.addListener(function(tab) {
        chrome.tabs.insertCSS(null, {
                file: "lib/css/content.css"
            }
        );
        chrome.tabs.executeScript(null, {
                file: "lib/js/content_script.js"
            }
        );
    });

})(window.$, window._, window.chrome, window.document, window);

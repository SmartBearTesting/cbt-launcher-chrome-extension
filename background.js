// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// When the extension is installed or upgraded ...
chrome.browserAction.onClicked.addListener(function(tab) {

    chrome.tabs.executeScript(null, {
            file: "content_script.js"
        }
    );
});

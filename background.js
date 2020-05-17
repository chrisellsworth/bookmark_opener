'use strict';

chrome.commands.onCommand.addListener((command) => {
    let value = command.charAt(command.length - 1);
    let index = parseInt(value) - 1;

    chrome.tabs.query({ currentWindow: true, active: true }, (tab) => {
        chrome.bookmarks.getTree((results) => {
            let url = results[0].children[0].children[index].url;
            chrome.tabs.update(tab.id, { url: url });
        });
    });
});
// ==UserScript==
// @name         minds hide boosted posts
// @match        https://www.minds.com/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==



function hideBoostedPosts()
{
    var postdivs = $("minds-activity.ng-star-inserted.item.m-border.mdl-card");
    postdivs.has(".is-boosted").hide();
    return;
}

hideBoostedPosts()
setTimeout(function(){
    hideBoostedPosts();
    setInterval (function(){
        hideBoostedPosts();
    }, 300);
}, 1000);

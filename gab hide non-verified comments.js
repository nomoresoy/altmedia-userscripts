// ==UserScript==
// @name         gab hide non-verified comments
// @description  ignore non-pro, non-verified comments. you know, those shitty spammer types
// @match        https://v2.gab.ai/*
// @match        https://gab.ai/*
// @match        https://gab.com/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

//auto-hide replies from non-verified, non-pro users. Press Shift+C outside of a textbox will toggle showing/hiding of comments.

//uncomment the log lines to see keycodes and set own shortcut.

var donthide = 0;

function hideCommentCrap(donthide)
{
    //Note: Pro status isn't displayed in comments. If it were displayed in comments, I would use it.
    if (donthide === 1)
    {
        return;
    }
    $(".post-comment:not(hidden):not(:has('.post-comment__avatar__verified'))").hide();
    return;
}

hideCommentCrap(donthide);
setTimeout(function(){
    hideCommentCrap(donthide);
    setInterval (function(){
        hideCommentCrap(donthide);
    }, 1000);
}, 1000);

window.addEventListener('keydown', KeyCheckShiftQ, true);

function KeyCheckShiftQ(e)
{
    //console.log(e.keyCode);
    var escapetypes = ["text","textarea","search"];
	if (escapetypes.indexOf(document.activeElement.type) === -1)
	{
		if (e.shiftKey && e.keyCode == 67)
        {
            donthide = 1 - donthide;
            //console.log(donthide);
            if (donthide === 1)
            {
                $(".post-comment:hidden:not(:has('.post-comment__avatar__verified'))").show();
            }
        }
	}
	return;
}

// ==UserScript==
// @name         gab hide non-verified posts
// @description  ignore non-pro, non-verified posts.
// @match        https://v2.gab.ai/*
// @match        https://gab.ai/*
// @match        https://gab.com/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

var donthide = 0;

function hideWeeniePosts(donthide)
{
    //Note: Pro status isn't displayed in comments. If it were displayed in comments, I would use it.
    if (donthide === 1)
    {
        return;
    }
    $(".gab:not(hidden):not(:has('.gab__meta__avatar__verified')):not(:has('.gab__meta__author__badge--pro.gab__meta__author__badge'))").hide();
    return;
}

hideWeeniePosts(donthide);
setTimeout(function(){
    hideWeeniePosts(donthide);
    setInterval (function(){
        hideWeeniePosts(donthide);
    }, 1000);
}, 1000);

window.addEventListener('keydown', KeyCheckShiftL, true);

function KeyCheckShiftL(e)
{
    //console.log(e.keyCode);
    var escapetypes = ["text","textarea","search"];
	if (escapetypes.indexOf(document.activeElement.type) === -1)
	{
		if (e.shiftKey && e.keyCode == 76) //shift+L (P)
        {
            donthide = 1 - donthide;
            //console.log(donthide);
            if (donthide === 1)
            {
                $(".gab:hidden:not(:has('.gab__meta__avatar__verified')):not(:has('.gab__meta__author__badge--pro.gab__meta__author__badge'))").show();
            }
        }
	}
	return;
}

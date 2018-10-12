// ==UserScript==
// @name         gab hide reposts
// @match        https://v2.gab.ai/*
// @match        https://gab.ai/*
// @match        https://gab.com/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

var donthide = 0;

function hideRepeats(donthide)
{
    if (donthide !== 0)
    {
        return;
    }
    var gabs = $(".gab");
    for (var i=0; i<gabs.length; i++)
    {
        //$(".gab").has(".gab__reason:not(:hidden)").hide();
        $(".gab").has(".gab__reason:not(:hidden):contains('reposted')").hide();
    }
    return;
}

function hideCrap(donthide)
{
    //hideBoostedPosts();
    //hideUserPosts(hidlist);
    hideRepeats(donthide);
    return;
}

hideCrap(donthide);
setTimeout(function(){
    hideCrap(donthide);
    setInterval (function(){
        hideCrap(donthide);
    }, 1000);
}, 1000);

window.addEventListener('keydown', KeyCheckShiftQ, true);

function KeyCheckShiftQ(e)
{
    //console.log(e.keyCode);
    var escapetypes = ["text","textarea","search"];
	if (escapetypes.indexOf(document.activeElement.type) === -1)
	{
		//if (e.shiftKey && e.keyCode == 81) //shift+q
        if (e.shiftKey && e.keyCode == 80)
        {
            donthide = 1 - donthide;
            //console.log("donthide", donthide);
            if (donthide === 1)
            {
                $(".gab").has(".gab__reason:hidden:contains('reposted')").show();
            }
            else
            {
                $(".gab").has(".gab__reason:not(:hidden):contains('reposted')").hide();
            }
            //console.log(donthide);
        }
	}
	return;
}

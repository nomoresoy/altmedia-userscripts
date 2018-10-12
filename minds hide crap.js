// ==UserScript==
// @name         minds hide crap
// @match        https://www.minds.com/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

var mutelist = [
              ];
//console.log(mutelist);

function hideUserPosts(mutelist)
{
    //console.log("started");
    var postdivs = $("minds-activity.ng-star-inserted.item.m-border.mdl-card");
    var divtext = "minds-activity.ng-star-inserted.item.m-border.mdl-card";
    //postdivs.has(".is-boosted").hide();
    var ii;
    var thisusername;
    for (ii=0;ii<postdivs.length;ii++)
    {
        thisusername = postdivs[ii].getElementsByClassName("avatar")[0].getElementsByTagName("a")[0].href.split("/").slice(-1)[0];
        //console.log(thisusername);
        if (mutelist.indexOf(thisusername) !== -1)
        {
            //postdivs[i].style.display = "none";
            //$(divtext+":nth-of-type("+(ii+1)+")").hide();
            //$(divtext+":nth-of-type("+(ii+1)+")").remove();
            //console.log(thisusername);
            //postdivs[ii].parentNode.removeChild(postdivs[ii])
            postdivs[ii].style.display = "none";
        }
    }
    return;
}
function hideBoostedPosts()
{
    var postdivs = $("minds-activity.ng-star-inserted.item.m-border.mdl-card");
    postdivs.has(".is-boosted").hide();
    return;
}
function hideRepeats()
{
    var postdivs = $("minds-activity.ng-star-inserted.item.m-border.mdl-card");
    postdivs.has(".material-icons.selected.ng-star-inserted:contains('repeat')").hide();
    return;
}

function hideCrap(mutelist)
{
    hideBoostedPosts();
    hideUserPosts(mutelist);
    hideRepeats();
    return;
}

//document.addEventListener('DOMContentLoaded', function () {
hideCrap(mutelist);
setTimeout(function(){
    hideCrap(mutelist);
    setInterval (function(){
        hideCrap(mutelist);
    }, 300);
}, 1000);
//});

// This simple script allows popout some YouTube stream chat's information
// (messages + donates + members)

// Warning: This simple script was written in a nutshell(in a hurry) so it needs some corretions(meaning it might have bugs).
// (i.e. do not update the whole window, but only added info via events or such etc.)
// Works as of 20:42:05 10.02.2020

// Currently, this just opens two windows with chat's info and updates each 3 seconds

// How to:
// While viewing a stream on YouTube
//   1. Open a console with "Top" scope
//   2. Run JQUERY + CHAT
//   3. Run MEMBERS
//      * Run 2. and 3. separately because of 1 window per execute(there might be a workaround)

// JQUERY //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var script = document.createElement('script');
script.src = "https://code.jquery.com/jquery-3.4.1.min.js";
document.getElementsByTagName('head')[0].appendChild(script);

// CHAT ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var html_1 = '<html>\
<head>\
<title>Messages [YouTube Stream]</title>\
<style>\
html { background: #111; color: #888; font-family: "Courier New", Courier, monospace; font-size: 14px; }\
img { height: 16px; width: 16px; }\
span { white-space: pre; } \
</style>\
</head>\
<body>\
<div id="messages_1"></div>\
</body>\
</html>';

function updateWindow_1() {
    window_1.messages_1.innerHTML = '';
    $("iframe").contents().find("yt-live-chat-text-message-renderer").each(function(i,e) {
    	number_1 = ("0000" + i).slice(-4);
        timestamp_1 = $(this).find("#timestamp").html();
        author_1 = $(this).find("#author-name").contents().filter(function(){ 
            return this.nodeType == 3;
        })[0].nodeValue;
        message_1 = $(this).find("#message").html();
        window_1.messages_1.innerHTML = window_1.messages_1.innerHTML + '[' + number_1 + ', ' + timestamp_1 + ']: [<b style="color: #fff;">' + author_1 + '</b>]: [' + message_1 + ']<br>';
    });
    window_1.scrollTo(0, 999999);
    date_o_1 = new Date();
    time_1 = (date_o_1.getHours()<10?'0':'') + date_o_1.getHours() + ':' + (date_o_1.getMinutes()<10?'0':'') + date_o_1.getMinutes() + ':' + (date_o_1.getSeconds()<10?'0':'') + date_o_1.getSeconds();
    window_1.document.title = 'Messages [YouTube Stream]: Updated at [' + time_1 + ']';
    window_1.timeout_1 = setTimeout(updateWindow_1, 3000);
}

var window_1 = window.open('','window_1','width=800,height=600');
	window_1.onload = function() {
	window_1.document.open();
	window_1.document.write(html_1);
	updateWindow_1;
	window_1.timeout_1 = setTimeout(updateWindow_1, 3000);
}; 1;

// MEMBERS /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var html_2 = '<html>\
<head>\
<title>Cards [YouTube Stream]</title>\
<style>\
html { background: #111; color: #888; font-family: "Courier New", Courier, monospace; font-size: 14px; }\
img { height: 16px; width: 16px; }\
span { white-space: pre; } \
</style>\
</head>\
<body>\
<div id="cards_1"></div>\
</body>\
</html>';

function updateWindow_2() {
    window_2.cards_1.innerHTML = '';
    $("iframe").contents().find(".yt-live-chat-item-list-renderer").find("#card").each(function(i,e) {
        number_2 = ("0000" + i).slice(-4);
        if ($(e).find(".yt-live-chat-viewer-engagement-message-renderer").length > 0)
        {
        	timestamp_2 = "xxxxxxxx";
        	author_2 = '<span style="color: #f99">Stream</span>';
        }
        else
        {
        	timestamp_2 = ("        " + $(e).find("#timestamp").html()).slice(-8);
        	author_2 = $(e).find("#author-name").contents();
        	if (author_2.length > 0) 
            author_2 = author_2.filter(function(){ 
                return this.nodeType == 3; 
            })[0].nodeValue;
        }
        if ($(e).find(".yt-live-chat-membership-item-renderer").length > 0)
            message_2 = '<b style="color: #9f9">New member</b>';
        else
            message_2 = $(e).find("#message").html();

        if ($(e).find("#purchase-amount").length > 0)
        	money_1 = '[<span style="color: #cc44da">' + ("              " + $(e).find("#purchase-amount").html().replace(/&nbsp;/g, " ")).slice(-14) + '</span>] ';
    	else
    		money_1 = "";

        window_2.cards_1.innerHTML = window_2.cards_1.innerHTML + '[' + number_2 + ', ' + timestamp_2 + ']: [<b style="color: #fff;">' + author_2 + '</b>]: ' + money_1 + '[' + message_2 + ']<br>';
    });
    window_2.scrollTo(0, 999999);
    date_o_2 = new Date();
    time_2 = (date_o_2.getHours()<10?'0':'') + date_o_2.getHours() + ':' + (date_o_2.getMinutes()<10?'0':'') + date_o_2.getMinutes() + ':' + (date_o_2.getSeconds()<10?'0':'') + date_o_2.getSeconds();
    window_2.document.title = 'Cards [YouTube Stream]: Updated at [' + time_2 + ']';
    window_2.timeout_2 = setTimeout(updateWindow_2, 3000);
}

var window_2 = window.open('','window_2','width=800,height=300');
window_2.onload = function() {
	window_2.document.open();
	window_2.document.write(html_2);
	updateWindow_2;
	window_2.timeout_2 = setTimeout(updateWindow_2, 3000);
}; 2;

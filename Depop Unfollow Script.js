var aTags = document.getElementsByTagName("a");
var searchText = "Following";
var found;
var count = 0;

function scroll(){
	var scrollArea = document.querySelectorAll("[data-css-wocr69]");
	var area = scrollArea[0];
	area.scrollTop = 9999999999999;
}

var scrollToBottom = setInterval(scroll,2);
//Paste everything above and wait until it stop scrolling


//Then paste everything below and wait a few minutes
clearInterval(scrollToBottom);

for (var i = 0; i < aTags.length; i++) {
	  if (aTags[i].textContent == searchText) {
		found = aTags[i];
		found.click()
		
	  }
}
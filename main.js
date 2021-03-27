var progress = document.getElementById('progressbar');
var totalheight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
	var progressheight = (window.pageYOffset / totalheight) * 100;
	progress.style.height = progressheight + "%";
}



window.addEventListener("load", function(){
	var loader = document.querySelector(".centerdiv")
	loader.className += " hidden";
})


var progress = document.getElementById('progressbar');
var totalwidth = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
	var progressheight = (window.pageYOffset / totalwidth) * 100;
	progress.style.width = progressheight + "%";
}

window.addEventListener("load", function(){
	var loader = document.querySelector(".centerdiv")
	loader.className += " hidden";
})

var counter = document.querySelectorAll(".counter");
for(var i = 0; i < counter.length; i++) {
	window.addEventListener('scroll', ()=>{
		if(window.pageYOffset > 500){
			let count = 1;
				setInterval( ()=>{
					if(count < 1200){
						count++;
						counter[0].innerHTML = count;
					}
				} , 50)

				setInterval( function(){
					if(count < 1300){
						count++;
						counter[1].innerHTML = count;
					}
				} , 10)
				setInterval( function(){
					if(count < 1300){
						count++;
						counter[2].innerHTML = count;
					}
				} , 10)
		} return;

	});

}







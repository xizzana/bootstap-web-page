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

window.addEventListener('scroll', ()=>{
	if(window.pageYOffset > 500){
		console.log('yleo');
		const counter = document.querySelector('.counter');
		let count = 1;
			setInterval( ()=>{
				if(count < 500){
					count++;
					counter.innerHTML = count;
				}
			} , 10)
	}
})






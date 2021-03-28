var progress = document.getElementById('progressbar');
var totalwidth = window.innerHeight;
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

function openCity(evt, cityName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();






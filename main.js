window.addEventListener("load", function(){
	var loader = document.querySelector(".centerdiv")
	loader.className += " hidden";
	changecolor.style.display = "block";
});

var counter = document.querySelectorAll(".counter");
for(var i = 0; i < counter.length; i++) {
	window.addEventListener('scroll', ()=>{
		if(window.pageYOffset < 50 ){
			let count = 1;
				setInterval( ()=>{
					if(count < 600){
						count++;
						counter[0].innerHTML = count;
					}
				} , 50)

				setInterval( function(){
					if(count < 500){
						count++;
						counter[1].innerHTML = count;
					}
				} , 10)
				setInterval( function(){
					if(count < 650){
						count++;
						counter[2].innerHTML = count;
					}
				} , 10)
		} else if(pageYOffset > 600){
			return;
		 };

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
  };
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

  var colorchangerbtn = document.querySelector('#focus i');
  var changecolor = document.getElementById("focus");
  colorchangerbtn.addEventListener('click', function(){
	  changecolor.classList.toggle("active");
  })

  // change color 
function red(){
	console.log('red');
	document.querySelector('body').className = "red";
}
function blue(){
console.log('blue');
document.querySelector('body').className = "blue";

}
function lblue(){
	console.log('lblue');
	document.querySelector('body').className = "lblue";

}

// backtop

var back = document.getElementById('scrolltop');
window.addEventListener('scroll', ()=>{
	if(pageYOffset > 1000){
		back.classList.add('active');
	}else{
		back.classList.remove('active');
	}
})

	back.addEventListener('click', ()=>{
		window.scroll({
			top: 0,
			behavior: 'smooth'
		})
	})


  var progress = document.getElementById('progressbar');
var totalwidth = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
	var progressheight = (window.pageYOffset / totalwidth) * 100;
	progress.style.width = progressheight + "%";
};



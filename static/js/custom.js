let i =1;


let menu= document.querySelector('.fa-bars');
menu.addEventListener('click', function(){
	document.querySelector(".side-nav").style.display='block';
	let open=document.querySelector(".fa-bars").style.display='none';
	document.querySelector(".fa-times").style.display='block';

	
});

let close = document.querySelector(".fa-times");
	close.addEventListener('click', function(){
		document.querySelector(".side-nav").style.display='none';
		document.querySelector(".fa-times").style.display='none';
		document.querySelector(".fa-bars").style.display='block';
	});
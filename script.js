//your code here


const btn = document.querySelector('#btn');
const display = document.querySelector('#num');
const UserInput = Number(document.querySelector('#guess').value);
const response = document.getElementById("respond");

function run(e) {
	const res = Math.floor(Math.random()*40) -20;
	display.innerText=res;
	guess(res);
}

function guess(res) {
	if(Math.abs(res - UserInput) <= 10){
		response.innerText = 'Hot';
	}else{
		response.innerText = 'Cold';
	}
}

btn.addEventListener('click',run);



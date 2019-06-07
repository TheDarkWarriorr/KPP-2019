const readlineSync = require('readline-sync');

function getRandomInt(max){
	return Math.floor(Math.random() * Math.floor(max));
}

let f = "";
for(let i = 0 ;i < 4; i++){
	let p = true;
	while(p){
		p = false;
		let c = getRandomInt(9) + 1;
		for(let j = 0 ; i<f.length;i++){
			if(c === parseInt(f[j])){
				p = true;
			}
		}
		if (!p){
			f += c;
		}
	}
}


let e = true;
let num = 0;
while(e){
	const a = readlineSync.question('Write your number :');
	let b = 0;
	let c = 0;
	for(let i = 0; i < 4; i++){
		if(f[i] === a[i]){
			b++
		}else{
			for(let j = 0 ;j < 4; j++){
				if(a[i]==f[j]){
					c++;
				}
			}
		}
		num++;
	}
	console.log('Bulls: ' + b + ' , Cows: ' + c);
	if (b == 4){
		e = false;
	}
}



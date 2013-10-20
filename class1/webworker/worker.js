//Gets the first K prime numbers
function getPrimeNumbers (k) {
	var primeNumbers = [2,3,5,7],
    num = 8;

	do{
		if(num%2 != 0)
		 if(num%3 != 0)
		  if(num%5 != 0)
			if(num%7 != 0){
				var temp = parseInt(Math.sqrt(num)),
					prime = true;
				for (var i = 2; i <= temp; i++) {
					if(num%i == 0){
						prime = false;
						break;
					}	
				}
				if(prime)
					primeNumbers.push(num);
			}
				 
		num++;

	}while(primeNumbers.length < k);

	var out = primeNumbers.join(' ');

	return out;
}

postMessage(getPrimeNumbers(500000));
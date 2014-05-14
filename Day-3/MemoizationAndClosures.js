/*create a "spinner" object that behaves as follows:

spinner.up(); => 1
spinner.up(); => 2
spinner.up(); => 3
spinner.up(); => 4

spinner.down(); => 3
spinner.down(); => 2
spinner.down(); => 1
spinner.down(); => 0
spinner.down(); => -1
*/

function getSpinner(){
	var counter = 0;
	function up(){
		return ++counter;
	}
	function down(){
		return --counter;
	}
	return {
		up : up,
		down : down
	};
}

/*Function Memoization*/
function isPrime(n){
	for(var i=0;i<=3;i++)
		isPrime[i] = isPrime[i] || true;
	
	if (typeof isPrime[n] !== "undefined"){
		console.log("From cache..");
		return isPrime[n];
	}
	isPrime[n] = true;
	for(var i=2;i<= Math.sqrt(n); i++)
		if (n % i === 0) {
			isPrime[n] = false;
			break;
		}
	console.log("Freshly brewed..");
	return isPrime[n];

}

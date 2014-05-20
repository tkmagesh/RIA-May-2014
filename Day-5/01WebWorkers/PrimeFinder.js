function isPrime(n){
	if (n<=3) return true;
	for(var i=2;i<=(n/2);i++)
		if (n % i === 0) return false;
	return true;
}
self.addEventListener("message",function(msgEvt){
	var inputData = msgEvt.data;
	var primeCount = 0;
	for(var i=inputData.start;i<=inputData.end;i++){
		if (isPrime(i)){
			primeCount++;
		};
		var percentCompleted = ((i - inputData.start)/(inputData.end - inputData.start)) * 100;
		self.postMessage({primeCount : primeCount, percentCompleted : percentCompleted});
	}
});
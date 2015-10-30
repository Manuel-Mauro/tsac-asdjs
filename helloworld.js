// your js code here.
//Mauro Manuel, TSAC1
//Fibonacci
function Fib(N){
	if (N < 2){
		return 1;
	}else{
		return Fib(N-2) + Fib(N-1);
	}
};

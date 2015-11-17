//Manuel Mauro, TSAC1


//Per Tiziano

function ex_1_I(myarray) {
    return sumwhileneg(myarray);
}

function ex_1_R(myarray) {
    return sumwhilenegR(myarray);
}

function ex_1_F() {
	return sumwhilenegF(myarray);
};

function ex_2_I(x) {
    return firstOdd(x);
}

function ex_2_R(x) {
    return firstOddR(x);
}

function ex_2_F() {
	return firstOddF(x);
};

function ex_3_I(myarray) {
	return Avg(myarray);
};

function ex_3_R() {
	
};

function ex_3_F() {
	
};

function ex_4_I(a, b) {
	return SumInterval(a,b);
};

function ex_4_R() {
	
};

function ex_4_F() {
	
};

function ex_5_I(a, b) {
	return MultSomma(a,b);
};

function ex_5_R() {
	
};

function ex_5_F() {
	
};

function ex_6_I() {
	
};

function ex_6_R() {
	
};

function ex_6_F() {
	
};

function ex_7_I(a, b) {
	return Pow(a,b);
};

function ex_7_R() {
	
};

function ex_7_F() {
	
};

function ex_8_I() {
	
};

function ex_8_R() {
	
};

function ex_8_F() {
	
};

function ex_9_I(myarray) {
	return Invert(myarray);
};

function ex_9_R() {
	
};

function ex_9_F() {
	
};

function ex_10_I(myarray) {
	return SameValue(myarray);
};

function ex_10_R() {
	
};

function ex_10_F() {
	
};

function ex_11_I() {
	
};

function ex_11_R() {
	
};

function ex_11_F() {
	
};


/*
Esercizio 1
Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore negativo
*/
// I
// Spazio: O(1) 
// Tempo: O(n)
function sumwhileneg(myarray) {
    var tot = 0;
    for(i = 0; i < myarray.length; ++i) {
        var x = myarray[i];
        if (x > 0) {
            tot += x;
        } else {
            return tot;
        }
    }
    return tot;
}

// R
// Spazio: O(n) 
// Tempo: O(n)
function sumwhilenegR(myarray) {
    if (myarray.length == 0 || myarray[0] < 0) {
        return 0;
    } else {
        return myarray[0] + sumwhilenegR(myarray.slice(1));
    }
}

// F
// Spazio: 
// Tempo: 
function sumwhilenegF(myarray) {
	var sum=0;
	myarray.every(function(x){
		if(x>0){
			sum+=x;
		}
		return x>0;
	});
	return myarray.reduce(function(tot, x){return tot+x})
}

/*
Esercizio 2
Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
*/
//I
// Spazio: O(1) 
// Tempo: O(n)
function firstOdd(n) {
    var tot = 0;
    for(i = 0; i < n; ++i) {
        tot += 1 + 2 * i;
    }
    return tot;
}

//R
// Spazio: O(n) 
// Tempo: O(n)
function firstOddR(n) {
    if (n == 0) {
        return 0;
    } else {
        return 2 * n - 1 + firstOddR(n - 1);
    }
}

// F
// Spazio: 
// Tempo: 
function firstOddF(myarray) {
	
}

/*
Esercizio 3
Dato un array di 10 elementi, calcolarne la media
*/
//I
// Spazio: O(K)
// Tempo: O(N)
function Avg(MyArray) {
	var N=MyArray.length
	var Tot=0;
	for(I=0; I<N; I++) {
		Tot+=MyArray[I];
	}
	return Tot/N;
}

//R
// Spazio:  
// Tempo:

/*
Esercizio 4
Dato un intervallo [a, b] con a e b due interi positivi, restituire la somma di tutti i numeri
compresi all’interno dell’intervallo, estremi inclusi. Nel caso che b fosse minore di a,
calcolare la somma nell’intervallo [b,a]
Esempio:
sumInterval(3, 5) => 12
sumInterval(5, 3) => 12
*/
//I
// Spazio: O(K)
// Tempo: O(N)
function SumInterval(A, B) {
	if(A>B) {
		var S=0;
		S=B;
		B=A;
		A=S;
	}
	var Tot=0
	for(I=A; I<=B; I++) {
		Tot+=I;
	}
	return Tot;
}

//R
// Spazio:  
// Tempo:

/*
Esercizio 5
Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo
operatore somma.
Esempio:
mult(2, 3) => 6
*/
//I
// Spazio: O(K)
// Tempo: O(N)
function MultSomma(A, B) {
	var Tot=0;
	for(I=1; I<=B; I++) {
		Tot+=A;
	}
	return Tot;
}

//R
// Spazio:  
// Tempo:

/*
Esercizio 6
Si calcoli la divisione e il resto della divisione tra due numeri a, b maggiori a zero, tramite
l’utilizzo dei soli operatori somma e sottrazione.
Esempio:
div(5, 3) => 1 resto 2
*/
//I
// Spazio:  
// Tempo:
function DivSomSot(A,B) {
	var Quo=0;
	var Res=0;
	//Se una funzione alla fine della sua chiamata assume un solo valore, come faccio a restituire due risultati (quoziente e resto)?
}

//R
// Spazio:  
// Tempo:

/*
Esercizio 7
Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero, tramite l’utilizzo dei soli
operatori somma, sottrazione e della funzione mult.
Esempio:
pow(2, 3) => 8
*/
//I
// Spazio: O(K)
// Tempo: O(N)
function Pow(X, Y) {
	var Tot=1;
	for(I=1; I<=Y; I++) {
		Tot=MultSomma(Tot, X);
	}
	return Tot;
}

//R
// Spazio:  
// Tempo:

/*
Esercizio 8
Dato un array contenente n^2 elementi, scrivere un algoritmo che permetta di inserire tutti gli
oggetti in un array bidimensionale n x n.
*/
//I
// Spazio:  
// Tempo:


//R
// Spazio:  
// Tempo:

/*
Esercizio 9
Dato una lista di elementi, scrivere un algoritmo che permetta di invertire l’ordine degli
elementi.
Esempio:
Input: A = {2, 5, 8}
Output A= {8, 5, 2}
*/
//I
// Spazio: O(2N)
// Tempo: O(N)
function Invert(MyArray) {
	var N=MyArray.length;
	var ArrayProv=MyArray;
	for(I=0; I<N; I++) {
		ArrayProv[N-I]=MyArray[I];
	}
	return ArrayProv;
}

//R
// Spazio:  
// Tempo:

/*
Esercizio 10
Dati due interi a, n maggiori di 0, scrivere un algoritmo che crea un lista di n elementi
contenenti a.
Esempio:
replicate(3, 4) => A= {3, 3, 3, 3}
*/
//I
// Spazio:  O(N)
// Tempo: O(N)
function SameValue(A, N) {
	var ArrayP;
	for(I=0; I<N; I++) {
		ArrayP[I]=A;
	}
	return ArrayP;
}

//R
// Spazio:  
// Tempo:

/*
Esercizio 11
Data una lista di interi A, si riordini gli elementi della lista in modo tale che tutti gli elementi
dispari precedano nello stesso ordine tutti gli elementi pari.
Esempio
Input: A = {2, 5, 1, 8}
Output: A = {5, 1, 2, 8}
*/
//I
// Spazio:  
// Tempo:
function OddFirst(MyArray) {
	var N=MyArray.length;
	var ArrayP=MyArray;
	var J=0;
	for(I=0; I<N; I++) {
		if MyArray[I]
	}
}
	
//R
// Spazio:  
// Tempo:

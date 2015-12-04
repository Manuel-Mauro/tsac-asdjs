/* Manuel Mauro, TSAC1, 04/12/2015 */

//InitialArray

function initialArray() {
var seed = 1;
function random() {
var x = Math.sin(seed++) * 10000;
return Math.floor(x);
}
var a = [];
for(var i = 0; i < 10000; ++i) {
a.push(random());
}
return a;
}
/*
* START Esercizio Stack
*/
var _0xd10d=["\x28\x20\x28\x20\x28\x20\x28\x20\x28\x20\x33\x33\x32\x31\x33\x20\x2A\x20\x32\x33\x33\x20\x29\x20\x2B\x20\x39\x39\x32\x31\x20\x29\x20\x2D\x20\x28\x20\x37\x33\x32\x31\x34\x31\x38\x20\x2B\x20\x33\x33\x32\x31\x32\x32\x20\x29\x20\x29\x20\x2D\x20\x31\x34\x31\x33\x32\x34\x32\x20\x29\x20\x2A\x20\x28\x20\x32\x34\x31\x34\x31\x30\x20\x2D\x20\x32\x34\x31\x34\x31\x39\x20\x29\x20\x29"];
function evaluateExpr(callback) {
callback(_0xd10d[0]);
}
/* END Esercizio Stack */

//Esercizio Ricorsione

function elemCount(arrayA) {
	var c;
	if(arrayA.length == 0) {
		c = c + 0;
		return  c;
	}else{
		if(arrayA[0] == 5070){
			c = c + 1;
		}
		return elemCount(arrayA.slice(1));
	}
}

//Esercizio Filter/Map/Reduce

function sqrtSum(arrayA) {
	var arrayB = arrayA.filter(function(x) {return x >= 0;});
	arrayB = arrayB.filter(function(x) {return x % 2 == 0;});
	arrayB = arrayB.map(function(x) {return Math.pow(x, 2);});
	var res = arrayB.reduce(function(prev, current) {return prev + current;}, 0);
	res = Math.sqrt(res);
	return res;
}

//Esercizio Stack

function Stack() {
	this.myarray = [];
}

Stack.prototype.push = function(e) {
	this.myarray.push(e);
}

Stack.prototype.pop = function(e) {
	return this.myarray.pop(e);
}

Stack.prototype.peek = function() {
	return this.myarray[this.myarray.length-1];
}

Stack.prototype.isEmpty = function() {
	return this.myarray.length == 0;
}

function parStack(expr) {
	var v = new Stack();
	var s = new Stack();
	var c = [];
	var arr = [];
	for(i = 0; i <= expr.length; i++) {
		var j = 0;
		if(expr.substring(i - 1; i) == " ") {
			j++;
		}else{
			c[j] += String(expr.substring(i-1; i));
		}
	}
	for(i = 0; i <= arr.length; i++) {
		if(c[i] == "(" || c[i] == "+" || c[i] == "-" || c[i] == "*" || c[i] == "+" || c[i] == "/") {
			s.push(c[i]);
		}else{
			if(c[i] == ")") {
				v2 = v.pop;
				v1 = v.pop;
				op = s.pop;
				ap = s.pop;
				if(op = "+") {
					v.push(v1 + v2);
				}
				if(op = "-") {
					v.push(v1 - v2);
				}
				if(op = "*") {
					v.push(v1 * v2);
				}
				if(op = "/") {
					v.push(v1 / v2);
				}
			}else{
				v.push(parseInt(c[i]));
			}
		}
	}
	res = v.pop
	return res;
}

//Complessità Stack

//O(n)


//Tree

function Node(){
	this.item = i;
	this.l = left;
	this.r = right;
}

function BST() {
	this.root = null;
}

BST.prototype.addNode = function(currentNode, newNode) {
	if(newNode.item < currentNode.item) {
		if(currentNode.l == null) {
			currentNode.l = newNode;
		}else{
			return this.addNode(currentNode.l, newNode);
		}
	}else{
		if(currentNode.r == null) {
			currentNode.r = newNode;
		}else{
			this.addNode(currentNode.r, newNode);
		}
	}
}

BST.prototype.add = function(item) {
	if(this.root == null) {
		this.root = new Node(item, null, null);
	}else{
		this.addNode(this.root, new Node(item, null, null));
	}
}

function searchNode(node, e) {
	if(node == null) {
		return false;
	}
	if(e == node.item) {
		return true
	}else{
		if (e < node.item) {
			return search(node.l, e);
		}else{
			if(e > node.item) {
				return search(node.r, e);
			}
		}
	}
}

function arrayInTree(arrayA, bsTree) {
	for(i = 0; i < arrayA.length - 1; i++) {
		bsTree.add(arrayA[i]);
	}
}

//tecnicamente, se l'albero è ordinato, per trovare il maggior valore basta andare a dx fino a trovare l'ultima foglia a dx
function searchMaxNode(node) {
	if(node.r == null) {
		return node.item;
	}else{
		searchMaxNode(node.r);
	}
}
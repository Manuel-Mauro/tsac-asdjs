function merge(a, b){
	var c.length=a.length+b.length;
	for(i=0; i<a.length; i++){
		c[i]=a[i];	
	}
	for(j=0; j<b.length; j++){
		c[i]=b[j];
		i++;
	}
	return c
}

//implementare 1 queue a priorità in cui i queueitem sono un oggetto con elemento e priorità
function Queue(){
	this.queue=[];
}

Queue.prototype.enqueue=function(e){
	this.queue.unshift(e);
}

Queue.prototype.dequeue=function(e){
	return this.queue.pop();
}

Queue.prototype.front=function(){
	return this.queue[this.queue.length-1];
}

Queue.prototype.size=function(){
	return this.queue.length;
}

Queue.prototype.isEmpty=function(){
	return this.size()==0;
}

function QueueItem(i, p){
	this.item=i;
	this.priority=p;
}


function searchElement(nodeRoot, e){
	if(nodeRoot.item==e){
		return x; //come faccio a ritornare la posizione del nodo?
	}else{
		if(e>nodeElement.item){
			searchElement(nodeRoot.r, e);
		}else{
			searchElement(nodeRoot.l, e);
		}
	}	
}
function count(){
	for(i=99; i>=1; i=i-1){
		var y= i-1;
		if(i>=1){
			document.getElementById("main").innerHTML+="<br />"+i+" bottles of beer on the wall, "+i+" bottles of beer, take one down pass it around "+y+" bottles of beer on the wall <br />";
		}
		else if(i=1){
			document.getElementById("main").innerHTML+="<br />"+i+" bottle of beer on the wall, "+i+" bottle of beer, take one down pass it around "+y+" bottles of beer on the wall";
		}
		else {
		}
	}
}
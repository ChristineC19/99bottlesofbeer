/* function count(){
	for(i=0;i<=100;i=i+1){
		document.getElementById("main").innerHTML+="<br />"+i+",";
	}
	
}
//Countdown 100 - 0 
function count2(){
	for(i=100;i>=0;i=i-1){
		document.getElementById("main").innerHTML+="<br />"+i+",";
	}
	
} */
//Print all Even numbers
/* function count3(){
	for(i=-10;i<=10;i=i+2){
		document.getElementById("main").innerHTML+="<br />"+i+",";
	}
	
} */
//Take in 2 numbers from a user and print all numbers between these 2 
/* function count4(){
	var 1 = parseInt(document.getElementById("enterNo1").value);
	var 2 = parseInt(document.getElementById("enterNo2").value);

	for(i="var 1";i<="var 2";i=i+"){
		document.getElementById("Nos").innerHTML+="<br />"+i+",";
	}
	
} */
document.getElementById('btn').onclick = function(){
    var a = parseInt(document.getElementById("number").value);
	var b = parseInt(document.getElementById("number2").value);
    for(var i = a; i <= b; i++) {
        document.getElementById("btn").innerHTML+="<br />"+i+","
    }
}
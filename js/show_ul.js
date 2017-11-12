window.onload=function(){
	var aDiv=document.getElementById("left")
	var oUl=aDiv.getElementsByTagName("ul")
	var oDiv=document.getElementById("cent")
	for(i=0;i<oUl.length;i++){
		oUl[i].onmouseover=function(){
	    var oA=this.getElementsByTagName("a")
    	for(var a=0;a<oA.length; a++){
    	 oA[a].style.color=" #ff5000"}
		this.style.background="#ffe4dc"
		this.style.Option=0.5
		oDiv.style.display="block"
		}
		oUl[i].onmouseout=function(){
		this.style.background="white"
		var oA=this.getElementsByTagName("a");
		oDiv.style.display="none"
		for(var a=0;a<oA.length; a++){
    	 oA[a].style.color=" #666"}
		}
	}
}

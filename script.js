cells=document.getElementsByClassName('cell');
for(x=0;x<9;x++)cells[x].vlr=" ";
for(x=0;x<9;x++)cells[x].onclick=function(){
	this.innerHTML="<font style='font-size:30px;'>x</font>";
	this.vlr='x';
	livres=0;
	for(y=0;y<9;y++)if(cells[y].vlr==" ")livres++;
	if(livres>0)do{
		lugardo0=parseInt(Math.random()*9);
	}while(cells[lugardo0].vlr=='x'||cells[lugardo0].vlr=='o');
	cells[lugardo0].vlr='o';
	setTimeout("cells[lugardo0].innerHTML=\"<font style='font-size:30px;'>o</font>\"",500);
	//txt="";for(y=0;y<9;y++)txt+=cells[y].vlr+",";alert(txt);
}
document.getElementById('restartButton').onclick=function(){location.href='';};
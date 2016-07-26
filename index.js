var i, j;
document.open();
for(i=0;i<8;i++){
	document.write("<tr>");
	for(j=0;j<8;j++){
		document.write("<td> </td>");
	}
	document.write("</tr>");
}
document.close();
var a = new Array(8);
for(i=0;i<8;i++)
	a[i] = new Array(8);
for(i=0;i<8;i++)
	for(j=0;j<8;j++)
		a[i][j] = 0;
for(i=0;i<10;i++){
	var x, y;
	x = Math.random().toString(8).slice(3,4);
	y = Math.random().toString(8).slice(3,4);
	while(a[x][y]!==0){
		x = Math.random().toString(8).slice(3,4);
		y = Math.random().toString(8).slice(3,4);
	}
	a[x][y] = 100;
}
for(i=0;i<8;i++)
	for(j=0;j<8;j++){
		if(!a[i][j]){
			check(i,j);
		}
	}
function check(x, y){
	var aa=[0,0,1,1,1,-1,-1,-1],b=[1,-1,0,1,-1,0,1,-1];
	var p;
	if(a[i][j])return;
	for(p=0;p<8;p++){
		if(x+aa[p]>=0&&x+aa[p]<8&&y+b[p]>=0&&y+b[p]<8)
			if(a[x+aa[p]][y+b[p]]==100)
				a[x][y]++;
	}
}
var s;
for(i=0;i<8;i++)
	for(j=0;j<8;j++){
		var table = document.getElementById("mytable").rows;
		var y=table[i].cells;
		s = "";
		s = a[i][j].toString();
		if(a[i][j] == 100)
			y[j].onclick = function () {
				gg(this);
			};
		else
			y[j].onclick = function () {
				ggg(this);
			};
			// y[j].innerHTML = "*";
			// y[j].innerHTML = s;
	}
function gg(tableCell){
	// var s = a[x][y].toString();
	tableCell.innerHTML = "*";
}
function ggg(tableCell){
	// var s = a[i][j].toString();
	tableCell.innerHTML = s;
}
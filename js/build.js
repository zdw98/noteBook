var font = document.getElementsByClassName('font')[0];
var select = document.getElementsByClassName('size-select')[0];
var set = document.getElementsByClassName('font-set')[0];
var define = document.getElementsByClassName('define')[0];
var cancel = document.getElementsByClassName('cancel')[0];
var body = document.getElementsByClassName('body')[0];
var form = document.getElementsByClassName('font-style')[0];
var text = document.getElementsByClassName('text')[0];
var exampleFont = document.getElementsByClassName('example-font')[0];
var a = [];
// a.join('.');
function test(){
	for(var i = 1; i < 100; i++){
			a[i] = "<option value="+i+">"+i+"</option>";
			console.log(a[i]);
			select.innerHTML = a.join(' ');
	}(i);
}

// select.innerHTML = str

font.onclick = function(){
	set.style.display = "flex";
	exampleFont.style.fontSize = select.value+'px';
	exampleFont.style.fontFamily = body.value;
	exampleFont.style.fontStyle = form.value;
};

function change(){
	exampleFont.style.fontSize = select.value+'px';
	exampleFont.style.fontFamily = body.value;
	exampleFont.style.fontStyle = form.value;
}

define.onclick = function(){
	set.style.display = "none";
	text.style.fontSize = select.value+'px';
	text.style.fontFamily = body.value;
	text.style.fontStyle = form.value;
};

cancel.onclick = function(){
	set.style.display = "none";
};
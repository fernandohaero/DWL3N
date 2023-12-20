var text = document.getElementById('judul');

text.innerHTML = "contoh penerapan external JS dan innerHTML";

var text = document.getElementById('sub-judul').style.fontfamily = "arial";
var text = document.getElementById('sub-judul').style.color ="indigo";
var text = document.getElementById('sub-judul').style.animation = "atasbawah 4s 1000";


function darkmode()
{
	document.body.style.backgroundColor ="#333";
	document.body.style.Color ="#fff";
}

function lightmode()
{
	document.body.style.backgroundColor ="#fff";
	document.body.style.Color ="#333";
}


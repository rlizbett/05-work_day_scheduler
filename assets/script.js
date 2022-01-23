var textEl = document.getElementById('9am');
var button = document.getElementById('saveBtn');
var time = ['', '', '', '', '', '', '', ''];
var text = [document.getElementById('9am')];


function save() {
    console.log(texts[0].value);
    localStorage.setItem('nineAM', save);
}
button.addEventListener('click', save);


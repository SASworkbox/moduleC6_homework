let x = 0
function change() {
    if (x % 2 === 0) {
        x++
        document.querySelector('.btn__svg2').style.display = 'none';
        document.querySelector('.btn__svg').style.display = 'block';
    } else {
        x++
        document.querySelector('.btn__svg2').style.display = 'block';
        document.querySelector('.btn__svg').style.display = 'none';
    }
}
document.querySelector('.btn').onclick = change;
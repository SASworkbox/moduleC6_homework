document.querySelector('.screen').onclick = function () {
    alert(`Ширина экрана в пикселях ${screenWidth}, высота экрана в пикселях ${screenHeight}`);
}
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
let websocket = new WebSocket("wss://echo.websocket.org/");

// Geolocation

const mapLink = document.querySelector('#map-link');
const btn = document.querySelector('.j-btn-test');

// Функция, выводящая текст об ошибке
const error = () => {
    status.textContent = 'Невозможно получить ваше местоположение';
}

// Функция, срабатывающая при успешном получении геолокации
const success = (position) => {
    console.log('position', position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;


    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = 'Гео-локация';
}

btn.addEventListener('click', () => {
    mapLink.href = '';
    mapLink.textContent = '';

    if (!navigator.geolocation) {
        status.textContent = 'Geolocation не поддерживается вашим браузером';
    } else {
        status.textContent = 'Определение местоположения…';
        navigator.geolocation.getCurrentPosition(success, error);
    }
});

// Chat

const btnSend = document.querySelector('.j-btn-send');
const inputIN = document.querySelector('.mesage');

function writeToScreen(message) {
    let pre = document.createElement("p");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = message;
    output.appendChild(pre);
}

btnSend.addEventListener('click', () => {
    let message = inputIN.value;
    writeToScreen("SENT: " + message);
    websocket.send(message);
    inputIN.value = '';
    websocket.onmessage = function (evt) {
        writeToScreen(
            '<span  class="response" style="color: blue;">RESPONSE: ' + evt.data + '</span>'
        );
    };
    websocket.onerror = function (evt) {
        writeToScreen(
            '<span style="color: red;">ERROR:</span> ' + evt.data
        );
    };
});


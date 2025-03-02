const startBtn = document.getElementById('start-btn');
const output = document.getElementById('output');

if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'ru-RU'; // Устанавливаем язык распознавания

    recognition.onstart = () => {
        output.textContent = "Слушаю...";
    };

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        output.textContent = transcript;
    };

    recognition.onerror = (event) => {
        output.textContent = "Ошибка: " + event.error;
    };

    recognition.onend = () => {
        output.textContent = "Голосовой ввод завершен.";
    };

    startBtn.addEventListener('click', () => {
        recognition.start();
    });
} else {
    output.textContent = "Ваш браузер не поддерживает голосовой ввод.";
}

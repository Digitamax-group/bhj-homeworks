const chatMessages = [
    'Кто тут?',
    'Где ваша совесть?',
    'Добрый день! До свидания!',
    'Мы ничего не будем вам продавать',
    'К сожалению, все операторы сейчас заняты. Не пишите нам больше',
    'Вы не купили ни одного товара для того, чтобы так с нами разговаривать',
    'Добрый день, мы ещё не проснулись. Позвоните через 10 лет'
];

const chatWidget = document.querySelector('.chat-widget');
const input = document.getElementById('chat-widget__input');
const messages = document.getElementById('chat-widget__messages');
const buttonWidget = document.querySelector('.chat-widget__side');

const initTimer = 30;

const timer = {
    counter: initTimer,
    repeat: () => {
        timer.counter--;
        if (timer.counter <= 0)
            botResponse();
    }
};

const botResponse = () => {
    timer.counter = initTimer;
    const index = Math.floor(Math.random() * chatMessages.length);
    messages.innerHTML += `<div class="message"><div class="message__time">${new Date().toLocaleTimeString().substring(0, 5)}</div><div class="message__text">${chatMessages[index]}</div></div>`;
    messages.lastElementChild.scrollIntoView(false);
};

buttonWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
    setInterval(timer.repeat, 1000);
});

input.addEventListener("keydown", function (e) {
    if (e.key !== 'Enter')
        return;
    if (this.value.length === 0)
        return;
    messages.innerHTML += `<div class="message message_client"><div class="message__time">${new Date().toLocaleTimeString().substring(0, 5)}</div><div class="message__text">${this.value}</div></div>`;
    this.value = '';
    botResponse();
})

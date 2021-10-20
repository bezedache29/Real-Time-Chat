require('./bootstrap');

const nickname = document.querySelector('#nickname')
const message = document.querySelector('#message')
const submitBtn = document.querySelector('#submit-btn')
const myChat = document.querySelector('#chat')

submitBtn.addEventListener('click', () => {
  // On appel notre store
  axios.post('/chat', {
    nickname: nickname.value,
    message: message.value
  })
})

// Pour ecouter
window.Echo.channel('chat')
  .listen('.chat-message', (event) => {
    myChat.innerHTML += `<div class="other break-all mt-2  ml-5 rounded-bl-none float-none bg-gray-300 mr-auto rounded-2xl p-2">
    <p class="italic">${event.nickname}</p>
    <p>${event.message}</p>
    </div>`
  })
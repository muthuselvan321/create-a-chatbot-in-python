document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.querySelector('#chat-form');
    const chatLog = document.querySelector('#chat-log');
    const userMessageInput = document.querySelector('#user-message');
  
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const userMessage = userMessageInput.value;
      appendMessage(userMessage, 'user');
      userMessageInput.value = '';
  
      fetch('/chat', {
        method: 'POST',
        body: JSON.stringify({ user_message: userMessage }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(data => {
          const botResponse = data.response;
          appendMessage(botResponse, 'bot');
        })
        .catch(error => console.error('Error:', error));
    });
  
    function appendMessage(message, sender) {
      const messageElement = document.createElement('div');
      messageElement.classList.add(sender);
      messageElement.innerText = message;
      chatLog.appendChild(messageElement);
    }
  });
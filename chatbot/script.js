document.addEventListener('DOMContentLoaded', function() {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const apiUrl = 'http://localhost:11434/api/generate'; // URL de la API local
  
    sendBtn.addEventListener('click', function() {
      sendMessage();
    });
  
    function sendMessage() {
      const userMessage = userInput.value.trim();
      if (userMessage !== '') {
        appendMessage('user', userMessage);
        userInput.value = '';
  
        // Enviar el mensaje del usuario al servidor
        fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ prompt: userMessage, model: "llama2", stream: false })
        })
        .then(response => response.json())
        .then(data => {
          const botResponse = data.response;
          appendMessage('bot', botResponse);
        })
        .catch(error => {
          console.error('Error:', error);
          appendMessage('bot', 'Lo siento, ha ocurrido un error.');
        });
      }
    }
  
    function appendMessage(sender, message) {
      const messageElement = document.createElement('div');
      messageElement.classList.add('message', sender);
      messageElement.innerText = message;
      chatBox.appendChild(messageElement);
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  });
  
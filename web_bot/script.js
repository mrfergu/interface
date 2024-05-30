function enviarMensaje() {
    var userInput = document.getElementById("user-input").value;
    var chatBox = document.getElementById("chat-box");
    
    // Mostrar el mensaje del usuario en el chat
    var userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.classList.add("user-message");
    userMessage.innerText = userInput;
    chatBox.appendChild(userMessage);
    
    // Enviar el mensaje del usuario a Llama2 (aquí puedes agregar la lógica de comunicación con Llama2)
    // Por ahora, solo mostraremos una respuesta de ejemplo
    var llama2Response = "¡Hola! Soy MGP Bot. ¿En qué puedo ayudarte?";
    
    // Mostrar la respuesta de Llama2 en el chat
    var llama2Message = document.createElement("div");
    llama2Message.classList.add("message");
    llama2Message.classList.add("llama2-message");
    llama2Message.innerText = llama2Response;
    chatBox.appendChild(llama2Message);
    
    // Desplazar la ventana de chat para que el último mensaje sea visible
    chatBox.scrollTop = chatBox.scrollHeight;
    
    // Limpiar el cuadro de entrada
    document.getElementById("user-input").value = "";
  }
  function enviarConsulta() {
    var inputText = document.getElementById("user-input").value;
  
    fetch('http://localhost:8000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ consulta: inputText }),
    })
    .then(response => response.json())
    .then(data => {
      mostrarRespuesta(data.respuesta);
    })
    .catch(error => {
      console.error('Error al enviar la consulta:', error);
    });
  }
  
  function mostrarRespuesta(respuesta) {
    var chatBox = document.getElementById("chat-box");
  
    // Mostrar la respuesta de Llama2 en el chat
    var llama2Message = document.createElement("div");
    llama2Message.classList.add("message");
    llama2Message.classList.add("llama2-message");
    llama2Message.innerText = respuesta;
    chatBox.appendChild(llama2Message);
  
    // Desplazar la ventana de chat para que el último mensaje sea visible
    chatBox.scrollTop = chatBox.scrollHeight;
  
    // Limpiar el cuadro de entrada
    document.getElementById("user-input").value = "";
  }
  
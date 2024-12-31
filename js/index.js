const responses = {
    'hola': '¡Hola! ¿Cómo estás?',
    'adiós': '¡Adiós! Que tengas un buen día.',
    'cómo estás': 'Estoy bien, gracias por preguntar.',
    'qué puedes hacer': 'Puedo responder a tus preguntas básicas.',
    'como te llamas': 'Mi nombre es ChatEBAC estoy a tus ordenes.',
    'sabes programar' : 'Por el momento mis respuestas son limitadas pero mi conocimiento es amplio , Que te gustaria saber.'
};

document.getElementById('sendButton').addEventListener('click', sendMessage);
document.getElementById('userInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const inputField = document.getElementById('userInput');
    const userMessage = inputField.value.trim();

    if (userMessage) {
        addMessageToChat('Tú: ' + userMessage);
        inputField.value = '';

        const botResponse = getBotResponse(userMessage.toLowerCase());
        addMessageToChat('Chatbot: ' + botResponse);
    }
}

function addMessageToChat(message) {
    const messagesDiv = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messagesDiv.appendChild(messageElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function getBotResponse(userMessage) {
    return responses[userMessage] || 'Lo siento, no entendí eso.';
}
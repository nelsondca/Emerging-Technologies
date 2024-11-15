let conversationHistory = [];

function getResponse(input) {
    const responses = {
        "hello": "Hi there! How can I help you?",
        "how are you": "I'm just a program, but I'm here to help!",
        "bye": "Goodbye! Take care.",
        "default": "Can you elaborate on that?"
    };

    // Normalize input and match a response
    const normalizedInput = input.toLowerCase();
    return responses[normalizedInput] || responses["default"];
}

function processInput() {
    const userInput = document.getElementById("user-input").value;
    if (!userInput.trim()) return;

    const response = getResponse(userInput);
    conversationHistory.push(`You: ${userInput}`);
    conversationHistory.push(`ELIZA: ${response}`);

    updateConversation();
    document.getElementById("user-input").value = "";
}

function updateConversation() {
    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML = conversationHistory.join("<br>");
}

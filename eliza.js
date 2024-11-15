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

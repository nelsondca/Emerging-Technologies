let conversationHistory = [];

/**
 * Function to generate a response based on user input.
 * @param {string} input - The user's message.
 * @returns {string} - ELIZA's response.
 */
function getResponse(input) {
    // Responses based on keywords
    const responses = {
        "hello": "Hi there! How can I help you?",
        "how are you": "I'm just a program, but I'm here to help!",
        "bye": "Goodbye! Take care.",
        "default": "Can you elaborate on that?"
    };

    // User input to lowercase for matching
    const normalizedInput = input.toLowerCase();
    // Return a matching response or the default response
    return responses[normalizedInput] || responses["default"];
}

/**
 * Function to process the user's input.
 * Called when the "Send" button is clicked.
 */
function processInput() {
    // Get the value of the input field
    const userInput = document.getElementById("user-input").value;

    // Skip processing if the input is empty
    if (!userInput.trim()) return;

    // Get ELIZA's response to the user's input
    const response = getResponse(userInput);

    // Add the user's message and ELIZA's response to the conversation history
    conversationHistory.push(`You: ${userInput}`);
    conversationHistory.push(`ELIZA: ${response}`);

    // Update the chatbox to display the conversation
    updateConversation();

    // Clear the input field for the next message
    document.getElementById("user-input").value = "";
}

/**
 * Function to update the conversation display.
 * Called whenever the conversation history changes.
 */
function updateConversation() {
    // Get the chatbox element
    const chatBox = document.getElementById("chat-box");

    // Display the conversation history, with each message on a new line
    chatBox.innerHTML = conversationHistory.join("<br>");
}

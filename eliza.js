// A dictionary of responses based on various patterns
// Got from github assingment repo
const responses = [
    { pattern: /hello|hi|hey/i, responses: ["Hello! How are you feeling today?", "Hi there! What’s on your mind?", "Hey! How can I help you?"] },
    { pattern: /you remind me of (.*)/i, responses: ["Why do you think I remind you of {0}?", "What makes you think of {0} when talking to me?", "Is it a good feeling to be reminded of {0}?"] },
    { pattern: /mother|father|family|parent/i, responses: ["Tell me more about your family.", "How does that make you feel about your family?", "What role does your family play in your thoughts?"] },
    { pattern: /I need (.*)/i, responses: ["Why do you need {1}?", "Would getting {1} really help you?", "What if you didn’t need {1}?"] },
    { pattern: /I am (.*)/i, responses: ["Why do you think you are {1}?", "How long have you felt that way?", "What made you feel like {1}?"] },
    { pattern: /I feel (.*)/i, responses: ["Why do you feel {1}?", "Does feeling {1} happen often?", "How does that feeling affect you?"] },
    { pattern: /sorry|apologize/i, responses: ["No need to apologize.", "Apologies aren't necessary. Why do you feel that way?", "It’s okay to feel that way."] },
    { pattern: /bye|goodbye|exit/i, responses: ["Goodbye! Take care.", "Thank you for sharing. Goodbye!", "Bye! I’m here if you need to talk again."] },
    { pattern: /.*/, responses: ["Can you tell me more?", "Why do you say that?", "How does that make you feel?", "What do you mean by that?", "Interesting... go on."] }
];

// Reflections for reversing perspectives in responses
const reflections = {
    "I": "you",
    "me": "you",
    "my": "your",
    "am": "are",
    "you": "I",
    "your": "my",
    "yours": "mine",
    "are": "am"
};

// Function to reflect pronouns in text
function reflect(text) {
    return text.split(" ").map(word => reflections[word] || word).join(" ");
}

// Generating ELIZA's response based on user input
function getElizaResponse(userInput) {
    for (let i = 0; i < responses.length; i++) {
        const { pattern, responses: responseOptions } = responses[i];
        const match = userInput.match(pattern);

        if (match) {
            // Select a random response
            let response = responseOptions[Math.floor(Math.random() * responseOptions.length)];
            
            // Reflect captured groups in the response if any
            if (match.length > 1) {
                const reflectedGroups = match.slice(1).map(group => reflect(group));
                response = response.replace(/{(\d+)}/g, (_, index) => reflectedGroups[index]);
            }

            return response;
        }
    }

    // Default fallback
    return "I'm not sure I understand. Can you elaborate?";
}

// Displaying a message in the conversation area
function displayMessage(sender, message) {
    console.log(`Displaying message from ${sender}: ${message}`);
    const conversation = document.getElementById("conversation");
    conversation.innerHTML += `<p><strong>${sender}:</strong> ${message}</p>`;
    conversation.scrollTop = conversation.scrollHeight; // Scroll to bottom
}

// Function to handle user input and generate ELIZA's response
function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") {
        console.log("Empty input, ignoring.");
        return; // Ignore empty messages
    }

    console.log("User input:", userInput);

    // Display user's message in the conversation area
    displayMessage("You", userInput);

    // Generate ELIZA's response and display it
    const elizaResponse = getElizaResponse(userInput);
    console.log("ELIZA's response:", elizaResponse);
    displayMessage("ELIZA", elizaResponse);

    // Clear the input field
    document.getElementById("user-input").value = "";
}
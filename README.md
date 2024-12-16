# Emerging-Technologies 

These tasks create text that mimics genuine English by using trigrams to create a model of English text patterns. It demonstrates how to use python in a few Project Gutenberg manuscripts to create,analyse,and export a trigram-based generator.

# Overview

A trigram is a sequence of three characters in text, like "THE" or "AND". We can simulate patterns in the English language by counting the instances of each trigram. Then we can produce fresh text that "sounds" like English by beggining with a seed and using these trigrams to generate text character by character.

# Goals

- Build a model from classic English texts
- Generate text based on the trigram model.
- Analysis of the generated text to see how much it looks like actual English.
- Export the trigram model as JSON file for reutilisation.

# What Does This Tasks Do?

Task1 - Builds the Trigram model
Loads English texts from Project Gutenberg, cleans them,and counts each trigram (three-character sequence). The resulting model captures common patterns in the language.

Task2 - Generates text
Using the trigram model, it generates a 10,000 character string that sounds familiar with English text. Starting with "TH",it picks each next character based on probabilites from the model, builds a text that refelcts the style of the original works.

Task3 - Analysis of the Generated text
To see how "English-like" the generated text is, it compares it agains a list of valid English words in (words.txt). By calculating the percentage of valid words in the generated text,we can measure how closely the model replicates real English.

Task4 - Exporting the Model as JSON
Exports the trigram model as JSON file (trigrams.json). This allows us to use it in the project later on.

# Getting Started

- Python 3.x
- Jupyter Notebook (optional but recommended for step-by-step execution)
- words.txt (file which you can file in repo structure or create a sample one)

# Set up

1. Clone the repository
in terminal run command
- git clone https://github.com/nelsondca/Emerging-Technologies

2. Intall any necessary libraries (if they are not installed already)
run command
- pip install Jupyter

3. Open trigrams.ipynb in Jupyter Notebook to run each cell and follow the steps.

# Running the Project

Each task in the project structured in the Jupyter Notebook has a clear explanation and code blocks. Open trigrams.ipynb and execute each cell in order. You will be able to see:
- How the trigram model is built
- The generated text
- The percentage of valid English words in that text
- The exported JSON file

# Exporting the Model

After the completion of task 4, you will have a trigrams.json file in the /Data directory. This file contains the trigram model, saved in JSON format, with each trigram and its frequency count.

# Example Outputs

Here is a short example of what the generated text might look like ( each run will change slightly):

"TH IS A SA MP LE OF TE XT TH AT LO OKS LI KE EN GL ISH BUT MI GH T NO T MA KE S EN SE"

The generated text will likely contain between 30 - 50 % valid english words in this case using the source texts in /Data directory.

# Conclusion

We have shown through these tests that a trigram-based model can estimate language patterns and produce English-structured text. It is a very straightforward method and it can be reusable for more text production and natural language processing strategies. 




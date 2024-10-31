# Emerging-Technologies 

These Tasks create text that mimics genuine English by using trigrams to create a model of English text patterns. It demonstrates how to use python in a few Project Gutenberg manuscripts to create,analyse,and export a trigram-based generator.

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




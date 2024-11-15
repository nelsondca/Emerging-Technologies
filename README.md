# ELIZA CHATBOT

# Overview

This project is a simple implementation of the ELIZA chatbot, created using HTML, CSS, and JavaScript. The chatbot runs entirely on client side, with no external libraris or APIs, and is deployed using GitHub Pages.

[View the Chatbot on GitHub Pages](https://nelsondca.github.io/Emerging-Technologies/)

## Table of Contents
- [Overview](#overview)
- [Goals](#goals)
- [Features](#features)
- [Running the project](#running-the-project)
- [Prerequisites](#prerequisites)
- [Troubleshooting](#troubleshooting-common-issues)
- [Conclusion](#conclusion)
- [References](#references)

## Goals

- **Develop a Functional Chatbot** a chatbot that can respond to user input in a way similar to the original ELIZA.
- **Client-Side Only** to create a standalone, client-side application that does not rely on external APIs or libraries.
- **Deploy to GitHub Pages** to use GitHub Actions to automate the deployment of the chatbot to GitHub Pages.
- **Educational Value** to understand basic chatbot logic, UI design, and deployment workflows with GitHub Actions.


## Features

- **Simple Chatbot Logic** The chatbot uses basic pattern matching to respond to user input.
- **Client-Side Deployment** Runs entirely on the client side using HTML, CSS, and JavaScript.
- **GitHub Pages Deployment** Automatically deploys to GitHub Pages using GitHub Actions.

## Running the project

Running locally:

clone the repository to your local machine:

    git clone https://github.com/nelsondca/Emerging-Technologies.git

navigate to the project directory and open 

    index.html 

in your web browser to start chatbot

## Prerequisites

To run this project locally, you only need a web browser.


# Troubleshooting Common Issues

GitHub Actions Deployment Error: 

If you encounter a Git permission error (exit code 128), ensure that you have added a Personal Access Token as a repository secret.

GitHub Pages Not Updating: 

Make sure GitHub Pages is set to use the gh-pages branch in the repository settings.



# Conclusion

This project demonstrates the fundamentals of client-side web development and chatbot functionality. Based on the simplicity of the original ELIZA, this version of the chatbot only emits responses that are hardcoded in JavaScript logic and based on pattern matching. Also offers the deployment of GitHub pages.

# References

I used the following resources that helped me complete this project

- [GitHub Page Documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) for guidance on setting up and configuring GitHub Pages. GitHub Pages Documentation
- [GitHub Actions Documentation](https://docs.github.com/en/actions) and [GitHub Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-an-issue) for understanding and troubleshooting GitHub Actions workflows.
- ChatGPT for support and explanations on implementing specific features and solving issues.
- Lecturers and Lab Materials for guidance, and code stubs that assisted in building this project.



# Quizzing

## Introduction

Quizzing is a simple and fun quiz page that aims to test your general knowledge skills with questions ranging from geography to entertainment and everything in between.

It's for those moments where you want to challenge your friends and see who really listened during class or for the crazy game nights at home with your family to actually test if your dad is as smart as he says he is.

There are many quiz sites out there but you can never have enough in my opinion! Especially when they are as visually pleasing and challenging as this one.

Link to the live site here - [Quizzing](https://mayamariaruth.github.io/quizzing/quiz.html)

![Responsive Mockup](docs/screenshots/home-resp.png)

![Responsive Mockup](docs/screenshots/quiz-resp.png)

## Table of Contents:
1. [**Introduction**](#introduction)
1. [**Design**](#Design)
    * [***Target audience***](#target-audience)
    * [***User Stories***](#user-stories)
    * [***Site aims***](#site-aims)
    * [***Color scheme***](#color-scheme)
    * [***Typography***](#typography)
1. [**Features**](#Features)
    * [***Header***](#header)
    * [***Home page***](#home-page)
    * [***Quiz***](#quiz)
    * [***End of quiz popup***](#end-of-quiz-popup)
    * [***Footer***](#the-footer)
1. [**Testing**](#testing)
    * [***Manual testing***](#manual-testing)
    * [***Validator testing***](#validator-testing)
    * [***JSHint testing***](#jshint-testing)
    * [***Lighthouse testing***](#lighthouse-testing)
       * [*Home page & Quiz area*](#home-page--quiz-area)
    * [***Wave accessibility evaluation***](#wave-accessibility-evaluation)
1. [**Deployment**](#deployment)
    * [***Cloning***](#cloning)
1. [**Bugs**](#bugs)
    * [***Fixed Bugs***](#fixed-bugs)
    * [***Unfixed Bugs***](#unfixed-bugs)
1. [**Credits**](#credits)
    * [***Code***](#code)
    * [***Content***](#content)
    * [***Media***](#media)
    * [***General reference***](#general-reference)

## Design

### Target audience 
* People of all ages, quizzes are for everyone!
* People who enjoy quizzes and answering questions of different topics.
* People who like an intellectual challenge.
* People who like to play games and testing ones knowledge, as well as learning.

### User stories
* I want to see and understand what the subject of the site is immediately.
* I want to easily navigate the site if needed.
* I want to be tested on my general knowdledge skills.
* I want to feel happy from the look and feel of the site, ready to embark on the quiz challenge.

### Site aims 
* To spread some happiness with the design of the site and challenging questions.
* To bring people together and start quizzing!
* To teach some general knowledge.
* To activate user's brain and get them excited about general knowledge.

### Color scheme
I adapted the colors on the site to my main image so it would look more cohesive.
I generated the colors from the image on [Coolors](https://coolors.co/) so the background image would match the image and the questions color/quiz buttons color would match the pattern on the image.

I utilized the Contrast grid by Eightshapes to test my color combos so the colors complied with the highest accessibility.

I did not add the green and red text to the answer options after user selected (I just added a thick green/red border) since they did not pass on the '#EF7A16' background as seen below.

![Color](docs/screenshots/contrastgrid.png)

### Typography
I used two different fonts across the page:
 * Rubik Doodle Shadow, used for the logo.
 * Lato, used for the quiz text.

I wanted a fun font for the logo so it would match the playful vibe of a quiz site so Rubik Doodle Shadow was perfect for that.
Lato is a very standard looking font so it was a perfect mix of fun/serious, which I think makes sense for a General Knowledge quiz.

The fonts were sourced from Google Fonts.

## Features 

### Header
  - 

  ![Header](docs/screenshots/header.png)

### Home page

- It has a simple design with a beautiful background in yellow/orange whichand a playful logo to immediately invoke a happy 

![Home page](docs/screenshots/homepage.png)

### Quiz
- 
- If the user has selected an incorrect answer, they will not see what the correct answer is which is a common feature on some quiz sites. I decided not to do so since that would help in keeping the user on the site after completing the quiz and wanting to play the quiz more times to get a higher score.

![Quiz](docs/screenshots/quiz.png)

### End of quiz popup
- This is a very

![End of quiz](docs/screenshots/endpopup.png)

### Footer

- 

![Footer](docs/screenshots/footer.png)


### Future features
- Disable Next button until user has selected an answer.
- Add different quizzes focused on various subjects, such as a Science quiz, History quiz and so on.
- Add a navigation bar to choose between the different quizzes to play.
- Add up to 50 questions to make the quiz longer and keep users on the site.
- Add a feature to allow users to send the quiz to their friends and create 'rooms' to keep track of everyone's score (It's always more fun to play with friends!).

## Testing 

### Manual testing
I manually tested this site in multiple ways highlighted below:
* Tested every feature and its responsiveness through an extension of a live server in VScode.
* Deployed the site in an early stage and received feedback from a professional developer (mentor), as well as students in my community.
* Tested the site for cross-compatibility in the two most used browsers, Chrome and Safari.
* I used DevTools to easily move between different screen sizes, simulating sizes between 320px to 4000px (but it is also functional on even larger screens given the max-width setting on the Body element to keep the content compact instead of stretched).

### Validator Testing 
I tested all the pages in the validators to make sure they all passed.
- HTML
  - There were no errors present when passing through the official W3C validator ![W3C validator](docs/screenshots/html-validator.png)

- CSS
  - There were no errors present when passing through the official Jigsaw validator ![(Jigsaw) validator](docs/screenshots/css-validator.png)

  ### JSHint testing
There is one warning in JSHint about the scoreSum global variable in the checkAnswer function.

* **Fix**
    * I am aware that passing the score through my functions as a parameter would resolve it, however to combat it at this late stage I added the required clarifcation with a comment saying that the variable being updated was a global one.

  ![JSHint testing](docs/screenshots/jshint.png)

### Lighthouse testing 

This testing was done in an incognito window in Chrome to make sure the results were not influenced by browser extensions.

The testing was the same score for the home page and quiz page so below are the scores for both pages.

I 

#### Home page & Quiz area
__Mobile version:__

![Mobile home page](docs/screenshots/lighthouse-mobile.png)

__Desktop version:__

![Desktop home page](docs/screenshots/lighthouse-desktop.png)


### Wave accessibility evaluation

I also used the Wave evaluation tool to make sure I covered all my bases. 

The evaluation is free from errors and below is taken from the Home page and quiz page.

#### Wave home page
![Wave evaluation](docs/screenshots/wave-home.png)

#### Wave quiz page
![Wave evaluation](docs/screenshots/wave-quiz.png)

## Deployment

To deploy the site to GitHub pages, I went through below steps: 
- Go to the Settings tab of the project's Github repository.
- There is a General menu on the left side of the screen, go to Code & Automation and click Pages.
- Scroll down to the Build & Deployment section and choose the Source 'Deploy from a branch'.
- Below this, you choose the Branch 'Main' and the Folder '/root'.
- Press Save and go back to the Code page of your repository.
- After a couple of minutes, refresh the page and the successfully deployed site will be found on the right-hand side of the page under 'Deployments' with the name "GitHub pages".

Live link to the site - [Quizzing](https://mayamariaruth.github.io/quizzing/quiz.html)

### Cloning

I used the cloning method to use the VSCode desktop IDE with GitHub, below are the steps I took:
- Generate a repository and click the Code button in the middle of the screen.
- Go to Local and under Clone, copy the Git repository URL on the HTTPS tab.
- Go to the VSCode IDE front page and click 'Clone Git Repository' under Start or go to the Source Control button on the left hand side menu bar and click 'Clone Repository'.
- Input the URL in the URL tab at the top of the window and press Enter.
- Select the location/folder where you want to store your repository on your computer through the popup and click the 'Select Repository location' button.
- VSCode will now clone the repository and you can choose to open it in your currect window or in a new window.

## Bugs

### Fixed Bugs
1. **Issue**
    * The 'checkAnswer' function is not running when clicking answers.
* **Fix**
    * Added 'checkAnswer(this)' in the 'onclick' HTML element.

2. **Issue**
    * 'showQuestions' function kept getting error that '.question' was not defined when pressing the Next button at the end of the quiz.
* **Fix**
    * Added the 'finishQuiz' function and it was then sorted.

3. **Issue**
    * 'finishQuiz' function was not registering the Display style settings so the end of quiz popup was not popping up after quiz was over.
* **Fix**
    * Changed the class tag to an ID tag on the HTML elements.

4. **Issue**
    * Score not showing up on end of quiz popup.
* **Fix**
    * Added a new ID tag to the element and a variable 'totalScore' and it's textContent equaled the scoreSum in the 'finishQuiz' function.

5. **Issue**
    * When clicking Next button, class tags to disable answer buttons and add color to correct/incorrect answer doesn't reset.
* **Fix**
    * Added an eventListener function for the answer options buttons and enabled the buttons in a For loop inside the Next button function.

### Unfixed Bugs

1. **Issue**
    * Warning in JSHint about the scoreSum global variable: "Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (checkAnswer)" 
* **Fix**
    * I am aware that passing the score through my functions as a parameter would resolve it, however to combat it at this late stage I added the required clarifcation with a comment saying that the variable being updated was a global one.

## Credits 

### Code 

_External pages credit_
- I drew help from [Codehal YouTube](https://www.youtube.com/watch?v=Vp8x8-reqZA&ab_channel=Codehal) for the code found in the 'checkAnswer'function.

### Content 

- The questions and answers were generated with ChatGPT.
- The social media links directly to the homepages of each site.
- Fonts were acquired from [Google Fonts](https://fonts.google.com/).
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/).

### Media

- The background image was generated with Microsoft Designer's AI tool.
- The color palette was generated with the image on[Coolors](https://coolors.co/).
- [Am I Responsive](https://ui.dev/amiresponsive) was used to generate the initial image of the ReadME to showcase how the site looks on different screens.

### General reference

- I relied upon my code learnings from the Code Institute, as well as the walk-through of the Love maths project and [Codehal's YouTube video](https://www.youtube.com/watch?v=Vp8x8-reqZA&ab_channel=Codehal). There are similarities in some of the code but I credited the necessary sections.
- W3Schools and StackOverflow were the sites mostly used for external references.
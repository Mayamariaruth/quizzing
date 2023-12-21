# Quizzing

## Introduction

This site was created 

Link to the live site here - [Quizzing]()

![Responsive Mockup](docs/screenshots/)

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
    * [***End of quiz***](#end-of-quiz)
    * [***Footer***](#the-footer)
1. [**Testing**](#testing)
    * [***Manual testing***](#manual-testing)
    * [***Validator testing***](#validator-testing)
    * [***Lighthouse testing***](#lighthouse-testing)
       * [*Home page*](#home-page)
       * [*Quiz*]()
       * [*End of quiz*]()
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
* Women who need a change in their lives.
* 

### User stories
* I want to see and understand what the subject of the site is immediately.
* I want to easily navigate the site if needed.
* 

### Site aims 
* To 

### Color scheme



I utilized the Contrast grid by Eightshapes to test my color combos so the colors complied with the highest accessibility.

![Color](docs/screenshots/)

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

  ![Header](docs/screenshots/)

### Home page

- 

![Home page](docs/screenshots/)

### Quiz

- 

![Quiz](docs/screenshots/)

### End of quiz

- 

![End of quiz](docs/screenshots/)

### Footer

- 

![Footer](docs/screenshots/)


### Future features

- 


## Testing 

### Manual testing
I manually tested this site in multiple ways highlighted below:
* Tested every feature and its responsiveness through an extension of a live server in VScode.
* Deployed the site in an early stage and received feedback from a professional developer (mentor), as well as students in my community.
* Tested the site for cross-compatibility in the two most used browsers, Chrome and Safari.
* I used DevTools to easily move between different screen sizes, simulating sizes between 320px to 2000px (but it is also functional on even larger screens given the max-width setting on the Body element to keep the content compact instead of stretched).

### Validator Testing 
I tested all the pages in the validators to make sure they all passed.
- HTML
  - There were no errors present when passing through the official W3C validator ![W3C validator](docs/screenshots/html-validator.png)

- CSS
  - There were no errors present when passing through the official Jigsaw validator ![(Jigsaw) validator](docs/screenshots/css-validator.jpg)

### Lighthouse testing 

This testing was done in an incognito window in Chrome to make sure the results were not influenced by browser extensions.

#### Home page
__Mobile version:__

![Mobile home page](docs/screenshots/)

__Desktop version:__

![Desktop home page](docs/screenshots/)

#### Quiz
__Mobile version:__

![Mobile services page](docs/screenshots/)

__Desktop version:__

![Desktop services page](docs/screenshots/)

#### End of quiz
__Mobile version:__

![Mobile contact page](docs/screenshots/)

__Desktop version:__

![Desktop contact page](docs/screenshots/)

### Wave accessibility evaluation

I also used the Wave evaluation tool to make sure I covered all my bases. 

The evaluation is free from errors and below is taken from the Home page but the results match on all pages.

![Wave evaluation](docs/screenshots/)

## Deployment

To deploy the site to GitHub pages, I went through below steps: 
- Go to the Settings tab of the project's Github repository.
- There is a General menu on the left side of the screen, go to Code & Automation and click Pages.
- Scroll down to the Build & Deployment section and choose the Source 'Deploy from a branch'.
- Below this, you choose the Branch 'Main' and the Folder '/root'.
- Press Save and go back to the Code page of your repository.
- After a couple of minutes, refresh the page and the successfully deployed site will be found on the right-hand side of the page under 'Deployments' with the name "GitHub pages".

Live link to the site - [Quizzing]()

### Cloning



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
    * when clicking Next button, class tags to disable answer buttons and add color to correct/incorrect answer doesn't reset.
* **Fix**
    * 

6. **Issue**
    * 
* **Fix**
    * 

### Unfixed Bugs

No unfixed bugs.

## Credits 

### Code 

_External pages credit_
- I drew help from [Codehal YouTube](https://www.youtube.com/watch?v=Vp8x8-reqZA&ab_channel=Codehal) for some of the code found in the 'nextBtn' function and 'checkAnswer'function.

### Content 

- The questions and answers were generated with ChatGPT.
- The social media links direct to the homepages of each site.
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/).

### Media

- The background image was generated with Microsoft Designer's AI tool.
- Fonts were acquired from [Google Fonts](https://fonts.google.com/).
- [Am I Responsive](https://ui.dev/amiresponsive) was used to generate the initial image of the ReadME to showcase how the site looks on different screens.

### General reference

- I relied upon my code learnings from the Code Institute, as well as the walk-through of the Love maths project and [Codehal's YouTube video](https://www.youtube.com/watch?v=Vp8x8-reqZA&ab_channel=Codehal). There are similarities in the code but I credited the necessary sections.
- W3Schools and StackOverflow were the sites mostly used for external references.
# Tic-Tac-Toe
(Developer: Sanor Smith)

![Mockup image](assets/docs/validation/am_i_responsive.jpg)

[Live page]( https://sanorsmith.github.io/CI_PP2_Tic_Tac/ )

## Table of Content
#
0. [Introduction](#introduction)
1. [Project Goals](#project-goals)
    - [User Goals](#user-goals)
    - [Site Owner Objectives](#Site-Owner-Objectives)
2. [User Experience(UX)](#user-experienceux)
    - [Intended audience](#ideal-user)
    - [User Requirements and Expectations](#user-requirements-and-expectations)
    - [User Stories](#user-stories)
3. [Design](#design)
    - [ Chosen Design](#chosen-design)
    - [Wireframes](#wireframes)
    - [Colour](#colour)
    - [Fonts](#fonts)
    - [Structure](#structure)
    
4. [Technologies Used](#technologies-used)
    - [Primary Programming Languages Employed](#languages)
    - [Frameworks & Tools](#frameworks-libraries--programs-used)
5. [Features](#features)
     - [Existing-features](#existing-features) 
6. [Testing](#validation)
    - [HTML Validation](#html-validation)
    - [CSS Validation](#css-validation)
    - [Accessibility](#accessibility)
    - [Performance](#performance)
    - [Device testing](#device-testing)
    - [Browser compatibility](#browser-compatability)
    - [Testing user stories](#testing-user-stories)
8. [Bugs](#bugs)
9. [Deployment](#deployment)
   - [Deploying on GitHub pages](#deploying-on-github-pages)
   - [Local Development](#local-development)      
10. [Credits](#credits)
11. [Acknowledgments](#acknowledgments)

<hr>

## Introduction

Tic-Tac-Toe is a classic two-player game on a 3x3 grid. Players take turns placing "X" or "O" in empty squares, aiming to form a line of three horizontally, vertically, or diagonally.

## Project Goals 
***

### User Goals
- Feel a sense of anticipation and satisfaction as you compete against an opponent, exercising strategic thinking in a simple yet enjoyable setting.
- Engaged, entertained, and perhaps a touch of competitive satisfaction, whether you win, lose, or draw.
-  Rediscover the joy and simplicity of a childhood game, fostering a nostalgic connection that adds a warm and comforting layer to the experience.

### Site Owner Objectives
- Provide a platform for users to enjoy a quick and entertaining game of Tic-Tac-Toe.
- Serve as a tool for users, especially younger audiences, to learn and develop strategic thinking skills.
- Increase website traffic and user acquisition by providing a simple, accessible game.
- Generate revenue through advertisements, in-app purchases, or premium features.

[Back to top &uarr;](#Tic-Tac-Toe)

User Experience (UX)
### Intended audience
- Individuals looking for easy-to-play, quick games to pass the time.
- Parents and children seeking family-friendly activities.
- Individuals reminiscing about classic games from their childhood.
- Users looking for social interactions through gaming.

### User Requirements and Expectations

- Ensure the website is accessible on various devices, especially mobile.
- Ensure the website loads quickly, and the game responds promptly.
- Use visually appealing graphics and design elements.
- Design the website to handle various user loads, especially during peak times.
- Include a feedback or contact form for users to report issues or provide suggestions.

### User Stories

- As a user, I want A clean and intuitive user interface with easy navigation.
- As a user, I expect to play the game seamlessly on their preferred devices.
- As a user, I can anticipate the ability to challenge others, fostering a social gaming experience.
- As a user, I can easily understand the rules and gameplay mechanics.
- As a user, I appreciate a visually pleasing interface that enhances the gaming experience.
- As a user, I should be able to access and play the game without interruptions, even during high traffic.
- As a user, I appreciate a platform that values their input and actively addresses concerns.

[Back to top &uarr;](#Tic-Tac-Toe)

## Design
<hr>

### Design decisions
The design choices for the Tic-Tac-Toe game website focus on creating a visually appealing and user-friendly environment. Using a playful color palette and a minimalist interface, the design aims to evoke nostalgia and simplicity. The goal is to provide a joyful and inviting platform for users to enjoy a delightful gaming experience.


### Wireframes

***

- [Mobile-wireframes(pdf)](assets/docs/wireframes/mobile_wireframes.pdf)
- [Tablet-wireframes(pdf)](assets/docs/wireframes/tablet_wireframes.pdf)
- [Desktop-wireframes(pdf)](assets/docs/wireframes/desktop_wireframes.pdf)


### Colour
A subdued color scheme that imparts a vibrant and clean look to the website.




<details><summary>Colour palette</summary>
<img src="assets/docs/features/color_pallete.png">
</details>

### Fonts

Google fonts are used as follows:


- The website primarily employs the Oswald sans-serif font, which is integrated into the CSS file using the @import method.This font was selected for its compatibility with web body text, ensuring readability even at small sizes.

<details><summary>Google font</summary>
<img src="assets/docs/features/font_Literata_serif.jpg">
</details>

- The social-network icons utilizes the Font Awesome 6, which has been imported into the html through java-script. This font family was chosen for footer icons.

<details><summary>Font awesome</summary>
<img src="assets/docs/features/font_awesome_6-1.jpg">
</details>


### Structure

In the website structure with one index file, CSS and JavaScript dynamically creates three different pages: Home, Play, and Contact Us. The index file serves as the main entry point for the website, and through JavaScript, it dynamically generates content for each page based on user interaction.

- Home Page: The default landing page when users visit the website. Provides an overview of the Tic-Tac-Toe game, with a brief introduction and game history.

- Play Page: Accessed when users click the "Start Game" button or a similar call-to-action on the Home page. Hosts the interactive Tic-Tac-Toe game, allowing users to play against another player or an AI opponent. Displays the game board, player information, and any relevant instructions.

- Contact Us Page: A page where users can reach out for support, provide feedback, or ask questions. Contains a contact form, email address, or other means of communication. Offers information about the development team or company behind the website.

## Technologies Used
<hr>

### Languages
- HTML5
- CSS
- JavaScript 

### Frameworks Libraries & Programs Used
- GitHub
- Git
- Visual Studio Code
- Squoosh
- Photoshope
- Font Awesome
- Google Fonts
- Balsamiq
- Coolors
- lighthouse
- W3C Markup validation service
- W3C Jigsaw CSS validation service 
- jshint
- am i responsive
- WAVE WebAIM web accessibility evaluation tool
- Grammarly


[Back to top &uarr;](#Tic-Tac-Toe)

## Features

### Favicon
- The website includes a favicon, a small icon displayed in the browser tab or next to the website's name in bookmarks, which enhances branding and improves recognition.

<details><summary>Favicon</summary>
<img src="assets/docs/features/favicon.jpg">
</details>

### Logo
- The site logo, which I personally designed using Photoshop, serves as a visual representation of the website's identity and brand.

<details><summary>Site Logo</summary>
<img src="assets/docs/features/logo.jpg">
</details>

### Navigation
- Both navigation systems are designed to be user-friendly, intuitive, and responsive across all screen sizes. A hamburger menu is utilized for mobile devices and screens up to 768px, while a sticky navigation bar is employed for screens larger than 768px. This setup provides users with a clear and seamless navigation experience, with links to specific sections of the website. On the desktop version, links are underlined and increase in size when hovered over, enhancing user engagement.

<details><summary>Desktop navbar</summary>
<img src="assets//docs/features/desktop_navbar.jpg">
</details>

<details><summary>Mobile navbar</summary>
<img src="assets/docs/features/mobile_navbar.jpg">
</details>

### Home
- The homepage consists of two sections: "About the Game" and "The History of the Game." Here's a brief overview of each section.In the "About the Game" section, you'll find everything you need to know about Tic-Tac-Toe. From its simple rules to its engaging gameplay, we've got you covered. Explore the rich heritage of Tic-Tac-Toe in our "History of the Game" section. Uncover its origins, cultural significance, and enduring popularity across generations.

<details><summary>Home</summary>
<img src="assets/docs/features/home-features.jpg">
</details>

### Play
- In the "Play" section, users will find a prominent button to initiate the game and clear instructions on how to play.

<details><summary>Play</summary>
<img src="assets/docs/features/play-features.jpg">
</details>

- The user has the option to select the number of players and decide between playing with a friend or against the computer. The computer's moves are determined using mathematical functions.


<details><summary>The number of players </summary>
<img src="assets/docs/features/play_features_no_of_players.jpg">
</details>

- At any point during the game, the user has the option to reset the board or restart the game.

<details><summary>Reset or Restart</summary>
<img src="assets/docs/features/reset_restar_features.jpg">
</details>
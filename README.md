# Learn with Blook by Denise and Eudora

## Website description

‘Learn with Blook’ is a safe online educational website for children ages 6 and up! Blook is a little monster that will guide the child through our website. The website aims to help children develop ICT skills in a fun and interactive way. One of the games is a touch-typing game called ‘Touch Typer Quest’. The game will consist of many levels and whenever a child gets a 3-star rating, they will receive a badge to congratulate them for their amazing achievement.
There are several benefits to teaching children to touch type at a young age. One of the main benefits of touch typing is that it can improve their overall typing speed and accuracy, making them more efficient at completing schoolwork and other tasks requiring typing. It can give children a valuable skill that will serve them well throughout their lives, as typing is an essential skill in today's digital world. Another game featured on our website is a memory game. Memory games can help develop children's thinking and concerntration skills. <br>

Users would have to log in or create a new account if this is their first time using our website. Our website would then retain and store their information be it their profile information or their level and achievements information, and every time they log back into the website, they’ll be able to continue from where they stopped. Our website consists of a few games, and definitely more are coming! The website will consist of a homepage, explaining the benefits of our website. A signup/login page so users can save their progress. A library that has educational videos and games the child can choose from. Profile page where users can view their learning progress and where all their achievements will be displayed. Lastly, for each game there will be a start page where there will be instructions and description of the game (levels, achievements).

## Project/Website name: Learn with Blook

## Homepage (By:Denise)

This page includes an introduction, benefits of website, a sign up form, and a contact us form. The sign up form allows users to create a new account which will be saved in RestDB. The contact us form allows users to send a message to the host email. It uses Email API which sends the message to the host email.

## Library (By: Denise)

This page includes six learning videos and three games. The videos can be played in the website so users do not have to leave the website. When user hovers over the game images, it will be zoomed in. By clicking on the images, users will be directed to the respective game pages.

## Profile (By: Eudora)

The profile page is a sample showing users how it will look like if they were to have a profile

## Login (By: Denise)

This page checks if username and password matches the data in restDB database. If username or password do not match, an alert message will indicate that username or password is wrong. If the username and password matches the data in restDB, an alert message will tell users that login is successful.

## Game 1: Touch Typer Quest (By: Eudora)

The game touch typer quest allows users to learn the spelling of different words ranging from easy to difficult while enjoying the game. The game also takes down the score of the user to encourage the user to beat their previous score and aim for another high score. This allows users to not just have fun but to also learn new words and practice spelling while practicing their typing speed.

## Game 2: Hangman (By: Denise)

Hangman game allows users to practice their spelling and to learn new words. The game will feature words from the educational videos. A random word will be generated each time the game starts. User will get 6 chances to guess the correct word. If the letter is incorrect, it will be added to the list of 'Wrong Letters'. If a letter is repeated an alert message will appear at the bottom of the page indicating that the letter has already been entered. If the user manages to guess the correct word, they will be directed to a winning ending screen prompting them to play again. If the user fails to guess the word, they will be directed to a losing ending screen prompting them to play again. 

## Game 3: Memory game (By: Denise)

Memory game builds children's thinking skills, concentration and attention span. When the game starts, all cards will be face down. User will need to choose 2 cards to see if the image on the cards matches. If the cards don't match they will be turned down again and if the cards match, they will remain face up. When user matches all cards the cards will automatically reshuffle and the game will restart.

## Design Process

[Wireframe made with Adobe XD](https://xd.adobe.com/view/8d5f786c-9ec3-41e0-a438-0207801a45df-d80c/)

## Features of Website

- Browser tab icon using favicon
- Sign up and Log in
- Contact Us form 
- Library includes youtube videos that help children learn before attempting the games, for example the child should watch touch typing videos provided before attempting the touch typer quest game.
- Memory game
- Hangman
- Typing game
- Sample profile page


## Technologies used

- Shape Divider app to create waves which makes website look more appealing.
- Youtube videos 
- LottieFiles 
- RestDB API 
- Email API
- Canva to create profile cover 
- Flaticon 
- Favicon

## Testings

### Navigation Bar
- Clicking on "Home", brings user to home page
- Clicking on "Library", brings users to library page
- Clicking on "Profile", brings users to profile page
- Clicking on "Log In", brings users to log-in page

### Buttons
- In the sign up section of the home page, clicking on "Create Account" would allow user to create account and a dropdown message would notify users that account is created.
- In the send us a message section of the home page, clicking on "Send Now" would allow user to send learn with blook a message and a dropdown message would be shown to notify users that message is sent.
- In the learning videos of the library page, clicking on the youtube videos would prompt the videos to play.
- In the games section of the library page, clicking on the games would prompt the program to bring users into the selected game page.
- In the log in section of the log in page, clicking on the "Login" button would allow users to log in to their account and a dropdown message would be shown to inform users that log in is successful.

### Sign up
- In the sign up section, if users did not enter either of the required fields, a dropdown message would be shown to notify users that one of the sections is not filled up and sign up is not successful.
- In the sign up section, if users enter a username that already exists, a dropdown message would be shown to notify users that the username is already taken, and that sign up is not successfull.

### Log in
- In the log in section, if users do not enter the correct information details, a dropdown message will indicate that passowrd or username is incorrect. When user enters correct details, a message will indicate that the log in is successful.
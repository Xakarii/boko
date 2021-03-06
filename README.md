# README #

#This README would normally document whatever steps are necessary to get your application up and running.

Project name : Boko Casino

1.) Team members:
		Joshua Lopez
		Adam McBay
		Alexander Martin
		Michael Mondragon

2.) We will be creating a series of casino style games of chance.

3.) Project will be created for gaming and gambling enthusiasts.

4.) Would like to increase the amount of quality, free, open source games of chance available online.


Technologies: Javascript

Features : 

User story : Web based online games with a casino theme.
GUI : Some graphical representation of interactions in game.  
User story : Allow a player to experience a variety of web-based games of chance and place bets.



Javascript: What we've learned
	As a team, we have chosen to use javascript in order to make sure our implementation of our game goes hand and hand with our website/HTML. However, none of us are fluent in Javascript and HTML/CSS. But through research, we've been able to dive deeper into Javascript learning about libaries to use to help us in our project.


Project Status:
The first game for our site is Blackjack and it is functioning.  Next steps involve adding card graphics, animations, and betting functions.

As of Sprint 2:
The second game, Simplified Craps is functioning and basic betting feature has been implemented. Site design has been improved and features new graphics, navigation links a custom logo.

As of Sprint 3:
BlackJack has been reworked using react with updated graphics and mechanics.  A new game "BombFleecer" a minesweeper-esque game of chance has been implemented, along with navigation and user interface changes.


Next steps: 
Alex - Integrating animations with existing code.
Josh - UI improvement, adding to or changing front end display
Adam - Work on implementing the Marble Race game.
Michael - Extend betting functionality, add a new dice game.

Tools Used

Navagation Bar - https://www.w3schools.com/howto/howto_css_dropdown_navbar.asp


### What is this repository for? ###

* Quick summary
* Version
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

* Summary of set up
* Configuration
* Dependencies
* Database configuration
* How to run tests
* Deployment instructions

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact

Final Sprint contributions

//Michael Mondragon
Added minesweeper functionality, including a new game button and betting functions.
https://bitbucket.org/cs3398-f21-klingons/bokos_casino/commits/db42b2de95dee57c64c556a0073bcb71ca4b698b
Css refactored to increase code readability and reduce redundancy.
https://bitbucket.org/cs3398-f21-klingons/bokos_casino/commits/f9731a80e6da3fdbba5dde5a3598ffa69631ab69

//Joshua Lopez
Added music to be used on homepage.
https://bitbucket.org/cs3398-f21-klingons/bokos_casino/commits/fb6cf58da635866c9880a168c1c2f04ae53da36a
New nav bar with drop down menu for use on game pages. 
https://bitbucket.org/cs3398-f21-klingons/bokos_casino/commits/76483f0525a0fcc8abbd5f96c8eeb81c53cff33b

//Alexander Martin
Refactored javascript for blackjack making it more object oriented, added changeable betting with JQuery
https://bitbucket.org/cs3398-f21-klingons/bokos_casino/commits/ccf05c681983a275c2f661afb9d71beb9ab45baf

Adam McBay
*created infrastructure for the minesweeper ("BombFleecer") game by researching and editing existing code to fit our needs.
https://bitbucket.org/cs3398-f21-klingons/bokos_casino/commits/982456861b0852b73834c279140cd90df0d8c03e

Research:
Future implementation of a betting game where a randomly genarated video of marble races will appear but before it starts the user must bet on what marbel 
they think will win the race. I have gathered alot of videos and I have looked into how i will set up the betting sysytem.

*Alexander Martin
Set up and implemented animations 
This code will be integrated with and used to animate the cards in games such as blackjack. Some refactoring
may be necessary to integrate with existing code.
https://bitbucket.org/cs3398-f21-klingons/bokos_casino/commits/80c084b224e4d1bbf029b2ec6c5795b0ffb30b29


Added betting feature, small redesign on layout for game board. Players start with 100 dollars and have a default
bet size of 10 dollars for now. Added card images for the blackjack game.  Implemented simplified craps game.
https://bitbucket.org/cs3398-f21-klingons/bokos_casino/commits/db6468225b7bb6a0a9d48ced33b85d41b1ace4c2
https://bitbucket.org/cs3398-f21-klingons/bokos_casino/commits/d27927bfe69bf2f259040f15cda030826d6c3c29
https://bitbucket.org/cs3398-f21-klingons/bokos_casino/commits/1a4a61e945c801e70d3efb42db7f6d7b8c0b1c36
-Michael Mondragon

*Changed the look of the splash page and the way buttons are displayed, making them more extensible and
graphically interesting. The buttons on the main page are styled and positioned with css and send users to
the corresponging games.
*created infastrure for the minesweeper game by reserching and editing existing code to fit our needs.
https://bitbucket.org/cs3398-f21-klingons/bokos_casino/commits/a8f6414f12d2a480275f9a032fe7cee5599e8fe5#chg-Artifacts/cover.jpg
https://bitbucket.org/cs3398-f21-klingons/bokos_casino/src/master/slotmachine.jpeg
https://bitbucket.org/cs3398-f21-klingons/bokos_casino/src/master/Blackjack21.jpeg
https://bitbucket.org/cs3398-f21-klingons/bokos_casino/commits/982456861b0852b73834c279140cd90df0d8c03e

//used code from https://code-boxx.com/simple-javascript-minesweeper/ to make minesweeper game

 Adam McBay

*Background and Logo added, UI changes
https://bitbucket.org/cs3398-f21-klingons/bokos_casino/commits/a03a69fc71576deb16e8fcd75f90e8c2a14dc7e3
https://bitbucket.org/cs3398-f21-klingons/bokos_casino/commits/1856155d63fc5913f5b85cc1963b91b81113b52e
https://bitbucket.org/cs3398-f21-klingons/bokos_casino/commits/22bab07045b8711ef54f5dae994137f78183f5de
Joshua Lopez



*Implemented the getScore() method so that it accurately reflects
 scores based on card values and taking Aces being 1 or 11 into consideration. getScore() method
 is accompanied by a comment ending with //Contributed by Michael Mondragon
https://bitbucket.org/cs3398-f21-klingons/bokos_casino/src/demoBranch/Boko's%20Casino%20-%20Blackjack/script.js
 
*Created hompage.html and two images that are implemented by the hompage, the hompage links to blackjack and any future games 
https://casinoboko.com/home.html
//Contributed by adam McBay

*Implemented the createDeck() method to intialize the creation of a standard 52 card deck, for use in shuffleDeck() method.
Made simple for easy implementation of future card games, and or features.
https://bitbucket.org/cs3398-f21-klingons/bokos_casino/src/demoBranch/Boko's%20Casino%20-%20Blackjack/script.js
//Contributed by Alexander Martin 

*Created framework for blackjack game on javascript. This mailny inlcudes the logic behind the game of blackjack such as when the player bust', the player loses, etc. Also created the index.html file which is just a small amount of html work done for basic function. 
https://bitbucket.org/cs3398-f21-klingons/bokos_casino/src/demoBranch/Boko's%20Casino%20-%20Blackjack/script.js



Asset License for assets used in logos and games (Craps, Blackjack logo, BombFleecer game)
####################################################################################################################
	Top-down Tanks Redux
	Playing Cards Pack
	Boardgame pack v2

	by  Kenney Vleugels (Kenney.nl)
	Creation date: 01-12-2020
			------------------------------

	License (Creative Commons Zero, CC0)
	http://creativecommons.org/publicdomain/zero/1.0/

	You may use these assets in personal and commercial projects.
	Credit (Kenney or www.kenney.nl) would be nice but is not mandatory.

			------------------------------

	Donate:   http://support.kenney.nl
	Request:  http://request.kenney.nl

	Follow on Twitter for updates:
	@KenneyNL
####################################################################################################################
/**
 *   @author Fordyce, William (wfordyce28@gmail.com)
 *   @version 0.0.1
 *   @summary Code demonstration:  :: created:
 */

"use strict";
const PROMPT = require('readline-sync');
let continueResponse, continueResponseTwo, continueResponseThree, continueResponseFour;
let movieMenu, newMovie, newMovieRating, newMovieRatings, amtMovieRatings, avgMovieRating;
let futureRating, gamesRating, avgFutureRating, avgGamesRating;
let futureRatings, gamesRatings, amtFutureRatings, amtGamesRatings;
const MIN_RATING = 1, MAX_RATING = 10;


function main() {
    displayWelcomeMessage();
    if (continueResponse !== 0 && continueResponse !== 1) {
        setContinueResponse();
    }
    while (continueResponse === 1) {
        setMovieMenu();
        switch (movieMenu) {
            case 1: setContinueResponseTwo();
                while (continueResponseTwo === 1) {
                    setFutureRating();
                    setContinueResponseTwo();
                }
                break;
            case 2: setContinueResponseThree();
                while (continueResponseThree === 1) {
                    setGamesRating();
                    setContinueResponseThree();
                }
                break;
            case 3: setContinueResponseFour();
                while (continueResponseFour === 1) {
                    setNewMovie();
                    setNewMovieRating();
                    setContinueResponseFour();
                }
                break;
            case 4:
                finalRatings();
                displayEndMessage();
                break;
            default: console.log(`ERROR`);
        }
    }
}

main();

/**
 * @method
 * @desc Inputting whether or not to continue
 * @returns {null}
 */
function setContinueResponse() {
    if (continueResponse === 1 || continueResponse === 0) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        while (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    } else {
        continueResponse = 1;
    }
}


/**
 * @method
 * @desc Inputting whether or not to continue
 * @returns {null}
 */
function setContinueResponseTwo() {
    if (continueResponseTwo === 1 || continueResponseTwo === 0) {
        continueResponseTwo = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        while (continueResponseTwo !== 0 && continueResponseTwo !== 1) {
            console.log(`${continueResponseTwo} is an incorrect value. Please try again.`);
            continueResponseTwo = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    } else {
        continueResponseTwo = 1;
    }
}


/**
 * @method
 * @desc Inputting whether or not to continue
 * @returns {null}
 */
function setContinueResponseThree() {
    if (continueResponseThree === 1 || continueResponseThree === 0) {
        continueResponseThree = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        while (continueResponseThree !== 0 && continueResponseThree !== 1) {
            console.log(`${continueResponseThree} is an incorrect value. Please try again.`);
            continueResponseThree = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    } else {
        continueResponseThree = 1;
    }
}


/**
 * @method
 * @desc Inputting whether or not to continue
 * @returns {null}
 */
function setContinueResponseFour() {
    if (continueResponseFour === 1 || continueResponseFour === 0) {
        continueResponseFour = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        while (continueResponseFour !== 0 && continueResponseFour !== 1) {
            console.log(`${continueResponseFour} is an incorrect value. Please try again.`);
            continueResponseFour = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    } else {
        continueResponseFour = 1;
    }
}

/**
 * @method
 * @desc Showing movies to be rated and other options
 * @returns {null}
 */
function setMovieMenu() {
    movieMenu = -1;
    while (movieMenu !== 1 && movieMenu !== 2 && movieMenu !== 3 && movieMenu !== 4) {
        movieMenu = Number(PROMPT.question(
            `\tPlease select a movie to rate: 
           \t\t1) Back to the Future
           \t\t2) War Games
           \t\t3) New Movie
           \t\t4)List movies by rating, highest to lowest
           \t\tPlease enter the number of the movie or option you'd like to select: `
        ));
    }
}

/**
 * @method
 * @desc Setting rating of movie number one
 * @returns {null}
 */
function setFutureRating() {
    if (futureRatings === undefined && amtFutureRatings === undefined) {
        futureRatings = 0;
        amtFutureRatings = 0;
    }
    futureRating = Number(PROMPT.question(`\nPlease enter your rating for "Back to the Future" [1-10]: `));
    while (futureRating < MIN_RATING || futureRating > MAX_RATING) {
        console.log(`${futureRating} is an incorrect value. Please try again.`);
        futureRating = Number(PROMPT.question(`\nPlease enter your rating for "Back to the Future" [1-10]: `));
    }
    futureRatings+= futureRating;
    amtFutureRatings++;
    avgFutureRating = futureRatings / amtFutureRatings;
    console.log(`\nThe average rating for "Back to the Future" is ${avgFutureRating} stars`);
}

/**
 * @method
 * @desc Setting rating of movie number two
 * @returns {null}
 */
function setGamesRating() {
    if (gamesRatings === undefined && amtGamesRatings === undefined) {
        gamesRatings = 0;
        amtGamesRatings = 0;
    }
    gamesRating = Number(PROMPT.question(`\nPlease enter your rating for "War Games" [1-10]: `));
    while (gamesRating < MIN_RATING || gamesRating > MAX_RATING) {
        console.log(`${gamesRating} is an incorrect value. Please try again.`);
        gamesRating = Number(PROMPT.question(`\nPlease enter your rating for "War Games" [1-10]: `));
    }
    gamesRatings+= gamesRating;
    amtGamesRatings++;
    avgGamesRating = gamesRatings / amtGamesRatings;
    console.log(`\nThe average rating for "Back to the Future" is ${avgGamesRating} stars!`);
}

/**
 * @method
 * @desc Inputting new movie name
 * @returns {null}
 */
function setNewMovie() {
    newMovie = PROMPT.question(`\nPlease enter the movie you would like to rate: `);
    while (! newMovie || !/^[a-zA-Z -]{1,30}$/.test(newMovie)) {
        newMovie = PROMPT.question(`Please enter the movie you would like to rate: `);
        if (! /^[a-zA-Z -]{1,30}$/.test(newMovie)) {
            console.log(`${newMovie} is invalid. Please try again.`);
        }
    }
}

/**
 * @method
 * @desc Inputting rating for new movie
 * @returns {null}
 */
function setNewMovieRating() {
    if (newMovieRatings === undefined && amtMovieRatings === undefined) {
        newMovieRatings = 0;
        amtMovieRatings = 0;
    }
    newMovieRating = Number(PROMPT.question(`\nPlease enter your rating for "${newMovie}" [1-10]: `));
    while (newMovieRating < MIN_RATING || newMovieRating > MAX_RATING) {
        console.log(`${newMovieRating} is an incorrect value. Please try again.`);
        newMovieRating = Number(PROMPT.question(`\nPlease enter your rating for "${newMovie}" [1-10]: `));
    }
    newMovieRatings+= newMovieRating;
    amtMovieRatings++;
    avgMovieRating = newMovieRatings / amtMovieRatings;
    console.log(`\nThe average rating for "Back to the Future" is ${avgMovieRating} stars!`);
}

/**
 * @method
 * @desc Showing list of rated movies in order of rating high to low
 * @returns {null}
 */
function finalRatings() {
    if (avgFutureRating > avgGamesRating && avgGamesRating > avgMovieRating) {
        console.log(`
        \nMovie:\tRating
        \nBack to the Future:\t${avgFutureRating}      
        \nWar Games:\t${avgGamesRating}
        \n${newMovie}:\t${avgMovieRating}`);
    } else if (avgGamesRating > avgFutureRating && avgFutureRating > avgMovieRating) {
        console.log(`
        \nMovie:\tRating
        \nWar Games:\t${avgGamesRating}
        \nBack to the Future:\t${avgFutureRating}
        \n${newMovie}:\t${avgMovieRating}`);
    } else if (avgGamesRating > avgMovieRating && avgMovieRating > avgFutureRating) {
        console.log(`
        \nMovie:\tRating
        \nWar Games:\t${avgGamesRating}
        \n${newMovie}:\t${avgMovieRating}
        \nBack to the Future:\t${avgFutureRating}`);
    } else if (avgFutureRating > avgMovieRating && avgMovieRating > avgGamesRating) {
        console.log(`
        \nMovie:\tRating
        \nBack to the Future:\t${avgFutureRating}
        \n${newMovie}:\t${avgMovieRating}
        \nWar Games:\t${avgGamesRating}`);
    } else if (avgMovieRating > avgGamesRating && avgGamesRating > avgFutureRating) {
        console.log(`
        \nMovie:\tRating
        \n${newMovie}:\t${avgMovieRating}
        \nWar Games:\t${avgGamesRating}
        \nBack to the Future:\t${avgFutureRating}`);
    } else if (avgFutureRating > avgMovieRating && avgMovieRating > avgGamesRating) {
        console.log(`
        \nMovie:\tRating
        \n${newMovie}:\t${avgMovieRating}
        \nBack to the Future:\t${avgFutureRating}
        \nWar Games:\t${avgGamesRating}`);
    }
}

/**
 * @method
 * @desc Displaying a welcome message
 * @returns {null}
 */
function displayWelcomeMessage(){
    console.log(`Welcome to the Petoskey Cinema Movie Kiosk`)
}

/**
 * @method
 * @desc Displaying a goodbye message
 * @returns {null}
 */
function displayEndMessage(){
    console.log(`Thank you for providing feedback, have a nice day`)
}

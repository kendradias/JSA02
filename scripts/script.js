'use strict';
//game object
const game = {
    isRunning: false,
    wasRunning: false,
    currentScreen: 'splash-screen',

    //switch screen function
    switchScreen: function(screen) {
        //update current screen property
        this.currentScreen = screen;
        //hide all screens and show selected screen
        $('.screen').hide();
        $(`#${screen}`).show();

        //handling button visibility in header based on selected screen
        //show quit button in game screen, hide on other screens
        if (screen === 'game-screen') {
            $('#header-quit-btn').show();
        } else {
            $('#header-quit-btn').hide();
            this.isRunning = false;
        } 
        //toggle help button visibility, hide if game over screen
        if (screen === "game-over-screen") {
            $('#help-btn').hide();
        } else {
            $('#help-btn').show();
        }

    },

    //show help function
    showHelp: function() {
        if (this.currentScreen === 'game-screen') {
            //if game screen, save running state and pause
            this.wasRunning = this.isRunning;
            this.isRunning = false;
            $('#gameplay-modal').modal('show');
        } else {
            //show setup instructions modal on splash screen
            $('#setup-modal').modal('show');
        }

    },

    //toggle game function 
    toggleRunning: function () {
        this.isRunning = !this.isRunning;
        //update button text to display play/pause 
        $('#play-pause-btn').text(this.isRunning ? 'Pause' : 'Play');
    }
};

//Event Listeners
$(document).ready(function() {
    //HEADER BUTTONS
    //display help modal on click
    $('#help-btn').click(() => game.showHelp());
    //quit game and return to splash screen on click
    $('#quit-btn').click(() => game.switchScreen('splash-screen'));

    //SPLASH SCREEN BUTTONS
    //start game and navigate to game screen on click 
    $('#play-game-btn').click(() => game.switchScreen('game-screen'));

    //GAME SCREEN BUTTONS
    //toggle game state on click
    $('#play-pause-btn').click(() => game.toggleRunning());
    //end game and navigate to game over screen on click
    $('#end-game-btn').click(() => game.switchScreen('game-over-screen'));
    //redirect back to splash screen on click
    $('#final-quit-btn').click(() => game.switchScreen('splash-screen'));

    //GAME OVER BUTTONS
    // switch to game screen on click
    $('#play-again-btn').click(() => game.switchScreen('game-screen'));
    //redirect back to splash screen on click
    $('#final-quit-btn').click(() => game.switchScreen('splash-screen'));

    //Modal Handlers

    //switch from setup to gameplay instructions when more info is clicked
    $('#more-info-btn').click(() => {
        $('#setup-modal').modal('hide');
        $('#gameplay-modal').modal('show');
    });

    // restore the game running state after closing gameplay modal
    $('#gameplay-modal').on('hidden.bs.modal', () => {
        if (game.currentScreen === 'game-screen') {
            game.isRunning = game.wasRunning;
        }
    });

    // restore the game running state after closing setup modal
    $('#setup-modal').on('hidden.bs.modal', () => {
        if (game.currentScreen === 'game-screen') {
            game.isRunning = game.wasRunning;
        }
    });
    
});
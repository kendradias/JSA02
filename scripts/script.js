'use strict';
//game object
const game = {
    isRunning: false,
    wasRunning: false,
    currentScreen: 'splash-screen',

    //switch screen function
    switchScreen: function(screen) {
        this.currentScreen = screen;
        console.log(`Current screen is ${screen}`);
        $('.screen').hide();
        $(`#${screen}`).show();

        //handling button visibility in header
        if (screen === 'game-screen') {
            $('#header-quit-btn').show();
        } else {
            $('#header-quit-btn').hide();
            this.isRunning = false;
        } 

        if (screen === "game-over-screen") {
            $('#help-btn').hide();
        } else {
            $('#help-btn').show();
        }

    },

    //show help function
    showHelp: function() {
        if (this.currentScreen === 'game-screen') {
            this.wasRunning = this.isRunning;
            this.isRunning = false;
            $('#gameplay-modal').modal('show');
        } else {
            $('#setup-modal').modal('show');
        }

    },

    //toggle game function
    toggleRunning: function () {
        this.isRunning = !this.isRunning;
        $('#play-pause-btn').text(this.isRunning ? 'Pause' : 'Play');
    }
};

//event Listeners
$(document).ready(function() {
    //header buttons
    $('#help-btn').click(() => game.showHelp());
    $('#quit-btn').click(() => game.switchScreen('splash-screen'));

    //splash screen buttons
    $('#play-game-btn').click(() => game.switchScreen('game-screen'));

    //game screen buttons
    $('#play-pause-btn').click(() => game.toggleRunning());
    $('#end-game-btn').click(() => game.switchScreen('game-over-screen'));
    $('#final-quit-btn').click(() => game.switchScreen('splash-screen'));

    //game over screen buttons
    $('#play-again-btn').click(() => game.switchScreen('game-screen'));
    $('#final-quit-btn').click(() => game.switchScreen('splash-screen'));

    //modal handlers
    $('#more-info-btn').click(() => {
        $('#setup-modal').modal('hide');
        $('#gameplay-modal').modal('show');
    });
    
});
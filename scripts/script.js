'use strict';

//game object
const game = {
    isRunning: false,
    wasRunning: false,
    currentScreen: 'splash-screen',

    //switch screen function
    switchScreen: function(screen) {
        this.currentScreen = screen;
        $('.screen').hide();
        $(`#${screen}`).show();

        //handling button visibility in header
        if (screen === 'game-screen') {
            $('#header-quit-btn').show();
        } else {
            $('#header-quit-btn').hide();
            this.isRunning = false;
        }

    },

    //show help function
    showHelp: function() {

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


    //splash screen buttons


    //game screen buttons


    //game over screen buttons


    //modals
})
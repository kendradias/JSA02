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
        if (this.CurrentScreen === 'game-screen') {
            this.wasRunning = this.isRunningl
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
    $('#help-btn').click(() => game.showHelp())

    //splash screen buttons


    //game screen buttons


    //game over screen buttons


    //modals
})
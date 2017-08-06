// Initialize Firebase

var config = {
  apiKey: "AIzaSyDubMwzxuMjnS07DXPxfNFbTV381rFTbus",
  authDomain: "multi-rps-57eb9.firebaseapp.com",
  databaseURL: "https://multi-rps-57eb9.firebaseio.com",
  projectId: "multi-rps-57eb9",
  storageBucket: "",
  messagingSenderId: "473504819417"
};

firebase.initializeApp(config);

var database = firebase.database();

var player1;
var player2;
// initial state
var iAmPlayer1 = false;
var iAmPlayer2 = false;

var player1Ref = database.ref().child("players").child(1);
var player2Ref = database.ref().child("players").child(2);

player1Ref.on('value', function (snapshot) {
    console.log("player1.value: " +  snapshot.key + ": " + JSON.stringify(snapshot.val()));

    player1 = snapshot.val();
    render();
});

player2Ref.on('value', function (snapshot) {

    console.log("player2.value: " +  snapshot.key + ": " + JSON.stringify(snapshot.val()));

    if (!player2 && snapshot.val()) {
        iAmPlayer2 = true;
    }
    player2 = snapshot.val();

    render();
});

function reset() {
    database.ref().child("players").set({});
}

function addPlayer1(name) {
    iAmPlayer1 = true;
    database.ref().child("players").set(
        {
            1: {
                losses: 0,
                wins: 0,
                name: name
            }
        }
    );
    $("#status")
        .html($('<h1>')
            .addClass("text-center")
            .text("Hi " + player1.name + "!" + " You are Player 1"));
}


function addPlayer2(name) {
    iAmPlayer2 = true;
    database.ref().child("players").update(
        {
            2:
                {
                    losses: 0,
                    wins: 0,
                    name: name
                }
        }
    );
    $("#status")
        .html($('<h1>')
            .addClass("text-center")
            .text("Hi " + player2.name + "!" + " You are Player 2"));
}


$("#start-button").click(function (event) {
    console.log("player-name: " + $('#player-name').val());

    var name = $('#player-name').val();
    if (name) {
        if (!player1) {
            addPlayer1(name);
        }
        else {
            addPlayer2(name);
        }
    }
    render();
});

function render() {

    var gameInProgress = player1 && player2;

    if (gameInProgress || iAmPlayer1 || iAmPlayer2) {
        $("#start-row").hide();
        $("#status-row").show();
    }
    else {

        $("#status-row").hide();
        $("#start-row").show();
    }

    if (gameInProgress) {
        if (!player1.choice) {
            if (iAmPlayer1) {
                // It's my turn show choices
                var p = $("#player1");
                p.html($("<h2>").text(player1.name));
                p.append($("<h2>").attr("id","rock").text("Rock"));
                p.append($("<h2>").attr("id","paper").text("Paper"));
                p.append($("<h2>").attr("id","scissors").text("Scissors"));
                p.append($("<h3>").text("wins: " + player1.wins + " losses: " + player1.losses));
            }
            else {
                // Change color on player1 border.
            }
        }
        else if (!player2.choice) {
            // waiting for player 2
        }

        // determine what stage of play
        // This could be player-1 turn or player-2 turn
        // Show choices for the player whose turn it is.

        if (!player1.choice && iAmPlayer1) {
            // player1 turn

            var p = $("#player1");

            p.html($("<h2>").text(player1.name));
            p.html($("<h2>")).append($(""))

            $("#player1").append($("<h3>").text("wins: " + player1.wins + " losses: " + player1.losses));
        }
    }
    else {
    }
}
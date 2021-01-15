var createPolitician = function(name, partyColor) {
    var politician = {};
     politician.name = name;
     politician.partyColor = partyColor;
     politician.electionResults = null;
     politician.totalVotes = 0;
   
     politician.tallyUpTotalVotes = function () {
     this.totalVotes=0;
     
     for (var i = 0; i < this.electionResults.length; i++) {
          this.totalVotes = this.totalVotes + this.electionResults[i];
       }
   };
     
     return politician;
}
   
var biden = createPolitician("Joe Biden", [168, 218, 220]);

var trump = createPolitician("Donald Trump", [235, 92, 104]);

//*results*//

biden.electionResults = [0, 0, 11, 0, 50, 9, 7, 3, 3, 10, 16, 4, 0, 20, 0, 0, 0, 0, 0, 3, 10, 11, 16, 10, 0, 0, 0, 1, 6, 4, 14, 5, 29, 0, 0, 0, 0, 7, 20, 4, 0, 0, 0, 10, 0, 3, 13, 12, 0, 10, 0];
   
trump.electionResults = [9, 3, 0, 6, 5, 0, 0, 0, 0, 19, 0, 0, 4, 0, 11, 6, 6, 8, 8, 1, 0, 0, 0, 0, 6, 10, 3, 4, 0, 0, 0, 0, 0, 15, 3, 18, 7, 0, 0, 0, 9,  3, 11, 28, 6, 0, 0, 0, 5, 0, 3];
   
biden.electionResults[9] = 0;
trump.electionResults[9] = 29;
   
biden.electionResults[4] = 55;
trump.electionResults[4] = 0;
   
biden.electionResults[43] = 0;
trump.electionResults[43] = 38;
   
var setStateResults = function(state) {
    theStates[state].winner = null;
    if (biden.electionResults[state] > trump.electionResults[state]) {
      theStates[state].winner = biden;  
    } else if (trump.electionResults[state] > biden.electionResults[state]) {
      theStates[state].winner = trump;
    }
    var stateWinner = theStates[state].winner;
    if (theStates[state].winner != null) {
      theStates[state].rgbColor = stateWinner.partyColor;
    }
    else {
      theStates[state].rbgColor = [11, 32, 57];
    }
    var stateInfoTable = document.getElementById("stateResults");
    var header = stateInfoTable.children[0];
    var body = stateInfoTable.children[1];
    var stateName = header.children[0].children[0];
    var abbrev = header.children[0].children[1];
    var candidate1Name = body.children[0].children[0];
    var candidate2Name = body.children[1].children[0];
    var candidate1Results = body.children[0].children[1];
    var candidate2Results = body.children[1].children[1];
    var winnerName = body.children[2].children[1];

    stateName.innerText = theStates[state].nameFull;
    abbrev.innerText = theStates[state].nameAbbrev;
    candidate1Name.innerText = biden.name;
    candidate2Name.innerText = trump.name;
    candidate1Results.innerText = biden.electionResults[state];
    candidate2Results.innerText = trump.electionResults[state];

    if (theStates[state].winner === null) {
        winnerName.innerText = "TIE"
    } else {
        winnerName.innerText = theStates[state].winner.name;
    }
}   


biden.tallyUpTotalVotes();
trump.tallyUpTotalVotes();
   
var winner = "?";
   
if (biden.totalVotes > trump.totalVotes) {
    winner = biden.name;
} else if (biden.totalVotes < trump.totalVotes) { 
    winner = trump.name;
} else {
    winner = "TIE."
}
   
var countryInfoTable = document.getElementById("countryResults");
var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = biden.name;
row.children[1].innerText = biden.totalVotes;
row.children[2].innerText = trump.name;
row.children[3].innerText = trump.totalVotes;
row.children[5].innerText = winner;

var createPolitician = function(name) {
    var politician = {};
     politician.name = name;
     politician.electionResults = null;
     politician.totalVotes = 0;
     return politician;
}

var biden = createPolitician("Joe Biden");

var trump = createPolitician("Donald Trump");

biden.electionResults = [0, 0, 11, 0, 50, 9, 7, 3, 3, 10, 16, 4, 0, 20, 0, 0, 0, 0, 0, 3, 10, 11, 16, 10, 0, 0, 0, 1, 6, 4, 14, 5, 29, 0, 0, 0, 0, 7, 20, 4, 0, 0, 0, 10, 0, 3, 13, 12, 0, 10, 0];

trump.electionResults = [9, 3, 0, 6, 5, 0, 0, 0, 0, 19, 0, 0, 4, 0, 11, 6, 6, 8, 8, 1, 0, 0, 0, 0, 6, 10, 3, 4, 0, 0, 0, 0, 0, 15, 3, 18, 7, 0, 0, 0, 9,  3, 11, 28, 6, 0, 0, 0, 5, 0, 3];

console.log(biden.electionResults);
var createPolitician = function(name) {
    var politician = {};
     politician.name = name;
     politician.electionResults = null;
     politician.totalVotes = 0;
     return politician;
}

var biden = createPolitician("Joe Biden");

var trump = createPolitician("Donald Trump");

console.log(biden);

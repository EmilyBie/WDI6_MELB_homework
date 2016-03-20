console.log('Train map is working.');

// Stops of three trainlines
var trainLines = [['Flinders Street','Richmond','East Richmond','Burnley','Hawthorn','Glenferrie'],['Flagstaff','Melbourne Central','Parliament','Richmond','Kooyong','Tooronga'],['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']];

//display the journey when you give an journey array
var displayJourney = function(journeyArr) {
    var journey = journeyArr.join('---->');
    var stops = journeyArr.length -1;
    debugger
    console.log(journey);
    console.log(stops+ " stops total");
}

//find the index of a stop in tranLines array
var findStops = function(stop) {
    var stopIndex = {};
    for(var i = 0; i< trainLines.length; i++) {
        for(var j=0; j< trainLines[i].length; j ++) {
            if(trainLines[i][j] === stop) {
              stopIndex.line = i;
              stopIndex.stop = j;
              break;
            }
        }
        if(stopIndex.line) {
            break;
        }
    }
    console.log(stop+' index is: '+stopIndex.line + "," + stopIndex.stop);
    return stopIndex;
}

//Plan the journey when you give an origin and a destination
var journeyPlanner = function(origin, destination) {
    console.log('Origin:' + origin +', destination: ' + destination);
    var startIndex = {};
    var destIndex = {};
    if(origin !== 'Richmond' && destination !== 'Richmond') {
        startIndex = findStops(origin);
        destIndex = findStops(destination);
    } else if(origin === 'Richmond') {
        destIndex = findStops(destination);
        startIndex.line = destIndex.line;
        startIndex.stop = trainLines[startIndex.line].indexOf('Richmond');
    } else if(destination === 'Richmond') {
        startIndex = findStops(origin);
        destIndex.line = startIndex.line;
        destIndex.stop = trainLines[destIndex.line].indexOf('Richmond');
    }

    if(startIndex.line === destIndex.line) {
        //var lineNum = startIndex.line;
        var start = Math.min(startIndex.stop, destIndex.stop);
        var dest = Math.max(startIndex.stop, destIndex.stop) + 1;
        //var total = dest - start + 1;
        var journeyArr = trainLines[startIndex.line].slice(start,dest);
        //if journeyArr[0] !== origin reverse()
        if(journeyArr[0] !== origin) {
            journeyArr.reverse();
        }
        displayJourney(journeyArr);
        return journeyArr;
    } else {

        //find Richmond in the line contains origin stop
        var richmondIndexOrg = {};
        richmondIndexOrg.line = startIndex.line;
        richmondIndexOrg.stop = trainLines[startIndex.line].indexOf('Richmond');
        console.log(richmondIndexOrg);

        var start = Math.min(richmondIndexOrg.stop, startIndex.stop);
        var dest = Math.max(richmondIndexOrg.stop, startIndex.stop) + 1;
        //var total = dest - start + 1;
        var firstJourney = trainLines[startIndex.line].slice(start, dest);
        if(firstJourney[0] !== origin) {
            firstJourney.reverse();
        }
        firstJourney.pop();

        //find Richmond in the line contains destination
        var richmondIndex = {};
        for(var i = 0; i<trainLines[destIndex.line].length;i++) {
            if(trainLines[destIndex.line][i] === 'Richmond') {
                richmondIndex.line = destIndex.line;
                richmondIndex.stop = i;
                break;
            }
        }
        var journeyArr;
        var secondJourney;
        start = Math.min(richmondIndex.stop, destIndex.stop);
        dest = Math.max(richmondIndex.stop, destIndex.stop) + 1;
        //total = dest - start + 1;
        secondJourney = trainLines[destIndex.line].slice(start,dest);
        var lastItemIndex = secondJourney.length - 1;
        if(secondJourney[lastItemIndex] !== destination) {
            secondJourney.reverse();
        }
        var wholeJourney = firstJourney.concat(secondJourney);
        displayJourney(wholeJourney);
        return wholeJourney;
    }    
}

//call function journeyPlanner
//Test Case 1: origin === 'Richmond' && destination === 'Richmond'
displayJourney(journeyPlanner('Richmond','Richmond'));

//Test Case 2: origin === 'Richmond' && destination !== 'Richmond'
displayJourney(journeyPlanner('Richmond','Flinders Street'));
displayJourney(journeyPlanner('Richmond','East Richmond'));
displayJourney(journeyPlanner('Richmond','Melbourne Central'));
displayJourney(journeyPlanner('Richmond', 'Prahran'));
displayJourney(journeyPlanner('Richmond','Kooyong'));
displayJourney(journeyPlanner('Richmond','Southern Cross'));
//Test Case 3: origin !== 'Richmond' && destination === 'Richmond'
journeyPlanner('Flinders Street','Richmond');
journeyPlanner('Hawthorn','Richmond');
journeyPlanner('Melbourne Central','Richmond');
journeyPlanner('Tooronga','Richmond');
journeyPlanner('Southern Cross','Richmond');
journeyPlanner('South Yarra','Richmond');
journeyPlanner('Windsor','Richmond');
//Test Case 4: origin !== 'Richmond' && destination !== 'Richmond'
journeyPlanner('Flinders Street','Glenferrie');
journeyPlanner('Tooronga','Flagstaff');
journeyPlanner('Southern Cross','South Yarra');
journeyPlanner('Flinders Street','Flagstaff');
journeyPlanner('Flinders Street','Tooronga');
journeyPlanner('Burnley','Flinders Street');
journeyPlanner('Burnley','Melbourne Central');
journeyPlanner('Burnley','Kooyong');
journeyPlanner('Burnley','Windsor');
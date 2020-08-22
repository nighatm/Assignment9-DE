//FUNCTION1, ADD 2 NUMBERS AND MULTIPLY BY 5
//FIRST CALL FUNCTION 1
function addMultiply(numberOne, numberTwo) {
    var result = (numberOne + numberTwo) * 5;

    return result;

}

var resultant = addMultiply(10, 10);
console.log(resultant);
//SECOND CALL FUNCTION 1

function addMultiply(numberOne, numberTwo) {
    var result = (numberOne + numberTwo) * 5;

    return result;

}

var resultant = addMultiply(4, 5);
console.log(resultant);
//THIRD CALL FUNCTION 1

function addMultiply(numberOne, numberTwo) {
    var result = (numberOne + numberTwo) * 5;

    return result;

}

var resultant = addMultiply(10, 5);
console.log(resultant);
//FUNCTION2, STRING LENGTH

function stringLength(message) {
    if (message.length >= 10) {
        console.log("Correct! string size is of 10 characters");
    }
    else
        console.log(" String size is not if 10 characters");
}
//SECOND CALL FUNCTION 2
var stringlengthresult = stringLength("thisisatestforthefunction");
function stringLength(message) {
    if (message.length >= 10) {
        console.log("Correct! string size is of 10 characters");
    }
    else
        console.log(" String size is not if 10 characters");
}
//SECOND CALL FUNCTION 3
var stringlengthresult = stringLength("this");
function stringLength(message) {
    if (message.length >= 10) {
        console.log("Correct! string size is of 10 characters");
    }
    else
        console.log(" String size is not of 10 characters");
}

var stringlengthresult = stringLength("thisisatestforthe");


//FUNCTION3 TO CHECK THE STRING STARTING WITH PH OR ph


function stringCheck(stringMessage) {
    var counter = 0;
    while (counter < 6) {
        if (stringMessage[counter].startsWith("ph") || ("PH")) {
            return stringMessage[counter];
        }
        counter++;
    }
}

var stringInput = ["PHONEX", "phone", "to", "get", "phish :)"];
var resultString = stringCheck(stringInput);

var lowerString = resultString.toLowerCase();
console.log(lowerString);

function stringCheck(stringMessage) {
    var counter = 0;
    while (counter < 6) {
        if (stringMessage[counter].startsWith("ph") || ("PH")) {
            return stringMessage[counter];
        }
        counter++;
    }
}

//FUNCTION3 TO CHECK THE STRING STARTING WITH TH OR th


var stringInput = ["tHIS", "is", "THE", "third", "example"];
var resultString = stringCheck(stringInput);

var lowerString = resultString.toLowerCase();
console.log(lowerString);

function stringCheck(stringMessage) {
    var counter = 0;
    while (counter < 6) {
        if (stringMessage[counter].startsWith("ph") || ("PH")) {
            return stringMessage[counter];
        }
        counter++;
    }
}

//FUNCTION3 TO CHECK THE STRING STARTING WITH WH OR wh  


var stringInput = ["WHO", "is", "going", "where", "to test"];
var resultString = stringCheck(stringInput);

var lowerString = resultString.toLowerCase();
console.log(lowerString);



const strings = require('../constants/strings')

module.exports = {

    swapLetters(exchangeResponse,assignedLetters){
        var requestUserAssignedLetters = assignedLetters[exchangeResponse.request_user]
        var respondUserAssignedLetters = assignedLetters[exchangeResponse.respond_user]
        requestUserAssignedLetters[requestUserAssignedLetters.indexOf(exchangeResponse.letterToReceive)] = exchangeResponse.letterToExchange
        respondUserAssignedLetters[respondUserAssignedLetters.indexOf(exchangeResponse.letterToExchange)] = exchangeResponse.letterToReceive
        console.log("Exchange completed")
        console.log(exchangeResponse.request_user+": "+requestUserAssignedLetters)
        console.log(exchangeResponse.respond_user+": "+respondUserAssignedLetters)
        assignedLetters[exchangeResponse.request_user] = requestUserAssignedLetters
        assignedLetters[exchangeResponse.respond_user] = respondUserAssignedLetters
    },

    assignLetters(allCharacters,userName){
        const lettersExtracted = allCharacters.slice(0, userName.length)
        allCharacters = allCharacters.substring(userName.length)
        const lettersAssigned = lettersExtracted.split("")
        console.log("Assigned letters " + lettersAssigned + " to user " + userName);
        return lettersAssigned
    }
}
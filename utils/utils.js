
module.exports = {

    insertLetter(lettersUsed,letterToInsert){
        const index = lettersUsed.findIndex('-')
    },

    shuffleString(input){
        var a = input.split(""),
            n = a.length;

        for(var i = n - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
        return a.join("");
    },

    saveToLocalStorage(key,value){
        if(typeof localStorage !== 'undefined') {
            console.log("Setting local storage "+key+":"+value)
            localStorage.setItem(key, value)
        }
    },

}
module.exports = function check(str, bracketsConfig) {

    if (str.length % 2 !== 0) {
        return false;
    }

    var checkedString = str.split('');
    var oneCoupleStorage = [];

    for ( var i = 0; i < str.length; i++) {
        for ( var j = 0; j < bracketsConfig.length; j++) {

            if (checkedString[i] === bracketsConfig[j][1] && oneCoupleStorage[oneCoupleStorage.length - 1] === bracketsConfig[j][0]) {
                oneCoupleStorage.pop();
            }

            else if (checkedString[i] === bracketsConfig[j][0]) {
                oneCoupleStorage.push(checkedString[i]);
            }
        }
    }

    if (oneCoupleStorage.length === 0) return true;

    else return false;

};
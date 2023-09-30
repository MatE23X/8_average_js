function calcAverage(dolphin_1,dolphin_2,dolphin_3,koala_1,koala_2,koala_3){

    var avNum_1 = dolphin_1 + dolphin_2 + dolphin_3;
    var avNum_2 = koala_1 + koala_2 + koala_3;

    dolphinsAverage = avNum_1/3;
    koalasAverage = avNum_2/3;

    if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100){
        return `The dolphins team will win the trophy!`;
    }
    else if (dolphinsAverage > koalasAverage && dolphinsAverage < 100){
        return `Neither team wins a trophy`;
    }
    else if (dolphinsAverage < koalasAverage && koalasAverage >= 100){
        return `The Koalas team will win the trophy!`;
    }
    else if (dolphinsAverage < koalasAverage && koalasAverage < 100){
        return `Neither team wins a trophy!`;
    }
    else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100){
        return `It is a draw!`;
    }
}
// #1--------------
console.log(calcAverage(96,108,89,88,91,110));
// #2--------------bonus 1
console.log(calcAverage(97,112,101,109,95,123));
// #3--------------bonus 2
console.log(calcAverage(97,112,101,109,95,106));
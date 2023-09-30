function calcAverage(dolphin_1,dolphin_2,dolphin_3,koala_1,koala_2,koala_3){

    var avNum_1 = dolphin_1 + dolphin_2 + dolphin_3;
    var avNum_2 = koala_1 + koala_2 + koala_3;

    dolphinAverage = avNum_1/3;
    koalaAverage = avNum_2/3;

    if (dolphinAverage>koalaAverage){
        return `The dolphins team will win the trophy!`;
    }
    if (dolphinAverage < koalaAverage){
        return `The Koalas team will win the trophy!`;
    }
    else{
        return `It is a draw!`;
    }
}

console.log(calcAverage(96,108,89,88,91,110));
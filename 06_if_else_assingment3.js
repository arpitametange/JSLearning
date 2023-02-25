function eligible(gradScore,hscScore,sscScore,candidateName){
    if ((gradScore>=70)  || (hscScore>=80 )|| (sscScore>90)) {
        console.log(`Congrates ${candidateName} you are eligible for TCS interview`);
    } else {
      console.log(`${candidateName} Unfortunaltely you are not eligible for interview`);   
    }
}
eligible(80,86,90,"Arpita");
eligible(70,65,55,"Sakshi");
eligible(60,79,88,"Hrutuja");
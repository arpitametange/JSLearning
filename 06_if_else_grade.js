console.log("*********First step*********");
function voteEligibility(age){
  if (age<=0 || age>=120 || age==undefined){
    console.log(`Invalid data ${age} :  please provide valid age`);
  }
   if (age>=18 && age<=120) {
    console.log(`Your age is ${age} : Yes ,You are eligible for voting `);
   }
   if ( age>0 && age<18 ){
    console.log(`Your age is ${age} : No ,You are not eligible for voting `);
   }

}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(undefined);
voteEligibility(null);



console.log('****************second step***************');
function gradeCalculation(marks){
    if(marks<=0 || marks > 100 || (typeof marks!= "number") || marks==null|| marks==undefined  || marks!=marks){
        console.log(`Please provide the valid marks - ${marks}`);
    }
    
    if (marks>=90 && marks<=100 && (typeof marks== "number")){
        console.log(`Fantastic marks: ${marks}, Your grade is A+`);
    }
    if (marks>=75 && marks<90 ) {
        console.log(`Excellent marks ${marks}, your grade is A`);
        
    }
   if (marks>=50 && marks<75) {
     console.log(`Good marks ${marks}, your grade is B`);
  }
  if ( marks>0  && marks<50  ) {
    console.log(`Marks is ${marks}, your grade is C, Need improvement`);

  }
  
    }
    gradeCalculation(98);
    gradeCalculation(80);
    gradeCalculation(90);
    gradeCalculation(0);
    gradeCalculation(150);
    gradeCalculation(-7);
    gradeCalculation(35);
    gradeCalculation(29);
    gradeCalculation(64);
    gradeCalculation(49);
    gradeCalculation("91");
    gradeCalculation("Eighty");
    gradeCalculation("Seventy One");
    gradeCalculation(NaN);
    gradeCalculation(undefined);
    gradeCalculation(null);
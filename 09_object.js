let student={
    firstName:"arpita",
    lastName:'metange',
    age:22,
    isWorking:false,
    id:1234,
    address:{
        street:"some",
        PIN:34,
        city:"pune",

    },
    friends:["bill","stev","elon"],
    show:function () {
        console.log('hsoqw');
    },
    addressDetails: function(){
        return `Address is: Street ${this.address.street}, City ${this.address.city}, PIN ${this.address.PIN}`
     }
};
let result=student.addressDetails();
console.log(result);
student.show();
console.log(student.friends[student.friends.lenght-1]);
student.marks = {
    math: 80,
    physics: 60,
    drawing: 70
}
console.log(student);
student.address.PIN=431205;
console.table(student);
// . Dot Notation
console.log(student.firstName);

// [] Notation
console.log(student["lastName"]);

let collegeName="abc"
collegeName="COEP pune"

console.log(student.age);
student.country="India";

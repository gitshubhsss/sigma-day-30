//with the help of union we can assign the variable with more than one data type for one single variable

let userId:(string | number)="shubham";//here we have declared the userId with type strings and numbers
userId=45465654;
userId="omakar daswadkar";

let display=(userId:(string | number))=>{
    console.log(userId);
    
}

//so here i can pass the two variables
display("shubham");
display(65468);
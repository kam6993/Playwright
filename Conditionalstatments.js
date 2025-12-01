let genderType="Female";

function printGenderType() {
    let color="Brown";

    if (genderType.startsWith("Female" ))
    {
        var age=30;
        let color="pink";
        console.log("Printing the color inside if block: " +color);
    }
    else {
    var age=50;
    console.log("Printing the color inside the if block: " ,color);
}
console.log("printing the age inside the function but outside the if block " +age);

}
printGenderType();
console.log("printing the gendertype globally", genderType);
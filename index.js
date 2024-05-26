import inquirer from "inquirer";
const guess = Math.floor(Math.random() * 10 + 1);
const ans = await inquirer.prompt([
    {
        message: "Guess a number between 1-10",
        type: "number",
        name: "Guessed_number",
    },
]);
console.log(ans);
if (ans.Guessed_number === guess) {
    console.log("you have guessed the number");
}
else {
    console.log("wrong Guessed");
}

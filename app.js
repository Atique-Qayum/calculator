import inquirer from "inquirer";
let answer = await inquirer.prompt([{
        type: "number",
        name: "num1",
        message: "Enter first number: "
    },
    {
        type: "number",
        name: "num2",
        message: "Enter second number: "
    },
    {
        type: "list",
        name: "operator",
        message: "Enter operator: ",
        choices: ["+", "-", "*", "/"]
    }]);
let result;
switch (answer.operator) {
    case "+":
        result = answer.num1 + answer.num2;
        console.log(result);
        break;
    case "-":
        result = answer.num1 - answer.num2;
        console.log(result);
        break;
    case "*":
        result = answer.num1 * answer.num2;
        console.log(result);
        break;
    case "/":
        result = answer.num1 / answer.num2;
        console.log(result);
        break;
}

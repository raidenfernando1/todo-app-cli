import inquirer from "inquirer";
export const accessMethod = inquirer.prompt([
    {
        type: "list",
        name: "accessMethod",
        message: "Already have an account?",
        choices: ["Login", "Signup"],
    },
]);
accessMethod.then((answers) => {
    if (answers.accessMethod === "Login") {
        inquirer.prompt([
            {
                type: "input",
                name: "username",
                message: "Enter username",
            },
            {
                type: "password",
                name: "password",
                message: "Enter password",
            },
        ]);
    }
    else if (answers.accessMethod === "Signup") {
        inquirer.prompt([
            {
                type: "input",
                name: "username",
                message: "Create a username",
            },
            {
                type: "password",
                name: "password",
                message: "Create a password",
                mask: "*",
            },
            {
                type: "password",
                name: "confirmPassword",
                message: "Confirm password",
                mask: "*",
            },
        ]);
    }
});

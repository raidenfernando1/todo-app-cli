import inquirer from "inquirer";
export const login = inquirer.prompt([
    {
        type: "list",
        name: "login",
        message: "Already have an account?",
        choices: ["Login", "Signup"],
    },
]);
login.then((answers) => {
    if (answers.login === "Login") {
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
    else if (answers.login === "Signup") {
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

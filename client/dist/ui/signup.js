import inquirer from "inquirer";
import fs from "fs";
import { console } from "inspector";
export const signup = () => {
    inquirer
        .prompt([
        {
            type: "input",
            name: "username",
            message: "Username: ",
        },
        {
            type: "password",
            name: "createPassword",
            message: "Create Password: ",
            mask: "-",
        },
        {
            type: "password",
            name: "confirmPassword",
            message: "Confirm Password: ",
            mask: "-",
        },
    ])
        .then((answers) => {
        const data = JSON.stringify(answers, null, 2);
        fs.writeFile(dataFolder, data, (err) => {
            if (err) {
                console.error("Error writing file: " + err);
            }
            else {
                console.log("User created sucessfully open the app again");
            }
        });
    });
};
export default signup;

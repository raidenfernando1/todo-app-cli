import inquirer from "inquirer";
import { checkSpecialChars } from "../helper/regex.js";
import fetch from "node-fetch";
const validateLogin = async (username, password) => {
    try {
        const response = await fetch("http://localhost:8080/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });
        const data = (await response.json());
        if (data.error) {
            console.log("ERROR: " + data.error);
        }
        else {
            console.log("RESPONSE: " + JSON.stringify(data));
        }
    }
    catch (e) {
        console.error("REQUEST FAILED ERROR: ", e);
    }
};
export const login = () => {
    inquirer
        .prompt([
        {
            type: "input",
            name: "username",
            message: "Username: ",
            validate(answers) {
                if (answers == "") {
                    return "Empty input";
                }
                if (answers.includes(" ")) {
                    return "Username must not contain spaces";
                }
                return true;
            },
        },
        {
            type: "password",
            name: "password",
            message: "Password: ",
            mask: "-",
            validate(answers) {
                if (answers == "" && answers.includes(" ")) {
                    return "Invalid no whitespace allowed";
                }
                if (!checkSpecialChars(answers) && answers.length < 10) {
                    return "Password lacks special characters or below 10 characters";
                }
                return true;
            },
        },
    ])
        .then((input) => {
        const { username, password } = input;
        validateLogin(username, password);
    });
};
export default login;

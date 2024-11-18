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
        // Parse response as JSON and cast it to LoginResponse
        const data = (await response.json());
        // Check if the response has an error message
        if (data.error) {
            console.log("Login failed: " + data.error); // Log error message from server
        }
        else {
            console.log("response: " + JSON.stringify(data)); // Log the successful response
            console.log("Login successful!");
        }
    }
    catch (e) {
        console.error("Request failed:", e);
    }
};
export const login = () => {
    const userLogin = inquirer
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

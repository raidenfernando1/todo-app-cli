import inquirer from "inquirer";
import { checkSpecialChars } from "../helper/regex.js";
import { mainLayout } from "../helper/login-layout.js";

const validateLogin = (username: string, password: string) => {
  //empty request
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
        validate: function (answers) {
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
      console.log(input);
    });
};

export default login;

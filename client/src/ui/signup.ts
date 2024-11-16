import inquirer from "inquirer";

export const signup = () => {
  inquirer.prompt([
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
  ]);
};

export default signup;

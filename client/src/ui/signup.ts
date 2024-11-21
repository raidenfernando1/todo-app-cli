import inquirer from "inquirer";

export const signup = async () => {
  let isNotValid = true;
  while (isNotValid) {
    const answers = await inquirer.prompt([
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

    const { username, createPassword, confirmPassword } = answers;

    if (createPassword !== confirmPassword) {
      console.log("Passwords do not match. Please try again.");
    } else {
      console.log(`Signup successful for ${username}`);
      break;
    }
  }
};

export default signup;

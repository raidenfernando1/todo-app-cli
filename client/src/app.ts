import inquirer from "inquirer";
import login from "./ui/login.js";
import signup from "./ui/signup.js";

async function app() {
  const askUser = await inquirer.prompt([
    {
      type: "confirm",
      name: "hasAccount",
      message: "Already have an account?",
    },
  ]);
  if (askUser.hasAccount) {
    login();
  }
}

app();

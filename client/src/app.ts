import inquirer from "inquirer";
import login from "./ui/login.js";
import signup from "./ui/signup.js";
import { mainLayout } from "./helper/login-layout.js";

async function app() {
  console.log(`    _______
   /      /,
  /      //
 /______//
(______(/
            Todo-app
            By: Raiden Fernando
`);

  const askUser = await inquirer.prompt([
    {
      type: "confirm",
      name: "hasAccount",
      message: "Already have an account?",
    },
  ]);
  if (askUser.hasAccount) {
    mainLayout(login(), "login");
  } else {
    signup();
  }
}

app();

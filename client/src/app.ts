import inquirer from "inquirer";
import login from "./ui/login.js";
import { mainLayout } from "./helper/login-layout.js";
import { prerequisite } from "./prelaunch/index.cjs";
import { signup } from "./ui/signup.js";
async function app() {
  prerequisite();
  console.log(`    
    _______
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

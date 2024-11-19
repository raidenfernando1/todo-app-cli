import { prerequisite } from "./prelaunch/index.cjs";
/*

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
  */
const app = () => {
    prerequisite();
};
app();

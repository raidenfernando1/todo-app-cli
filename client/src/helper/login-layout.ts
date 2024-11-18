export const mainLayout = (child: any, pageTitle: string) => {
  console.clear();
  console.log(`    _______
   /      /,
  /      //
 /______//
(______(/
            Todo-app
            By: Raiden Fernando
`);
  console.log(pageTitle);
  return child;
};

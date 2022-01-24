const keepass = require("./keepass");

const adminUser = "admin_user@my-app.com";
const normalUser1 = "normal_user1@my-app.com";
const nonExistentUser = "non_existent_user@my-app.com";

console.log("Lets get some passwords.\n");

const getPass = async (userName: string) => await keepass.getPassword(userName);

getPass(adminUser).then((pass) => {
  console.log(`The credentials for adminUser are: ${adminUser} / ${pass}`);
});

getPass(normalUser1).then((pass) => {
  console.log(`The credentials for normalUser1 are: ${normalUser1} / ${pass}`);
});

getPass(nonExistentUser).then((pass) => {
  console.log(
    `The credentials for nonExistentUser are: ${nonExistentUser} / ${pass}`
  );
});


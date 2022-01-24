const kpio = require("keepass.io");

const dbPath = "./users.kdbx";
const masterpass = process.env["KEEPASS_PW"];

class Keepass {
  getPassword = async (userName: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      let db = new kpio.Database();
      db.addCredential(new kpio.Credentials.Password(masterpass));
      db.loadFile(dbPath, function (err: any) {
        if (err) reject(err);
        const rawDb = db.getRawApi().get();
        const entries = rawDb["KeePassFile"]["Root"]["Group"]["Entry"].map(
          (x: any) => x["String"]
        );
        const secrets = entries.map((entry: any) => {
          const userName = entry.find((x: any) => x["Key"] === "UserName")[
            "Value"
          ];
          const password = entry.find((x: any) => x["Key"] === "Password")[
            "Value"
          ]["_"];
          return {
            userName,
            password,
          };
        });
        const returnValue = secrets.find((s: any) => s.userName === userName)
          ?.password;
        resolve(returnValue);
      });
    });
  };
}
exports.Keepass = Keepass;
module.exports = new Keepass();


## Example project for keepass and typescript

This is a simple demo project showing how to use keepass.io library to retrieve data from a .kdbx database.

It is explained in my [blog](https://calzone.proofofpizza.com//using-keepass-programatically-with-typescript/)

The `users.kdbx` encrypted keepass database has a password: `super-secret12#$`

To use it simply:

```
git clone git@github.com:ProofOfPizza/example-keepass-and-typescript.git
npm install
tsc
KEEPASS_PW=super-secret12#$ npm start
```

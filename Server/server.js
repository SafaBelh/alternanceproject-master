const mongoose = require("mongoose");
const app = require("./app");

// ENV 
const dotenv = require("dotenv");
dotenv.config();
let port = process.env.PORT || 4000;
let connectingString = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);


// ⚠  This Must Be In Top Of Any Code !! Especially The One In The App don't change this 
process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION ! SHUTTING DOWN 💥");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
}); 




// DB Connection 
mongoose
  .connect(connectingString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB Connecting ...!'));


// Running Server 
let server = app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});


// Handling Errors 
process.on('unhandledRejection', (err) => {
  // Shutting Down The App
  // console.log('📛 UNHANDLER REJECTION ! Shutting Down The App... ');
  console.log(err.name, err.message);
  // But It's Better to Shut gracefully the app ( => close the server first)
  server.close(() => {
    process.exit(1);
  });
});



























// const DB = process.env.DATABASE.replace(
//   "   <password>",
//   process.env.DATABASE_PASSWORD
// );

// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("DB connection successful");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const port = process.env.PORT || 3000;
// const server = app.listen(port, () => {
//   console.log(`App running on port ${port}...`);
// });

// process.on("unhandledRejection", (err) => {
//   console.log(err.name, err.message);
//   console.log("UNHANDLED REJECTION ! SHUTTING DOWN 💥");
//   server.close(() => {
//     process.exit(1);
//   });
// });

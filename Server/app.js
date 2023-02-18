const express = require("express");
const app = express();
const cors = require("cors");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

// let userRouter = require("./routes/userRoute");
let jobRouter = require("./routes/jobRoute.js");
let alternanceBac = require("./routes/bacAlternanceRoute");
let alternanceLicence = require("./routes/licenceAlternanceRoute");
let application = require("./routes/applicationRoute");
let bacForm = require("./routes/bacFormRoute");
let licenceForm = require("./routes/licenceFormRoute");

app.use(express.json());
app.use(cors());

// ROUTES

//  Routes alernanceBac
app.use("/api/v1/jobs", jobRouter);
app.use("/api/v1/application/alternanceBac", alternanceBac);
app.use("/api/v1/application/alternanceLicence", alternanceLicence);
app.use("/api/v1/application", application);
app.use("/api/v1/form/bacForm", bacForm);
app.use("/api/v1/form/licenceForm", licenceForm);
// app.use("/api/v1", express.static("public"));
app.use("/api/v1", express.static("public/ProfilePictures"));

// app.use("public/ProfilePictures", express.static("ProfilePictures"));

// Error Handler
app.use(globalErrorHandler);

// Handling Unhandled Routes
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server ! `, 404));
});

// Exporting APP
module.exports = app;

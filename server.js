const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./db");
const app = express();

connectDB();

const authRoute = require("./routes/auth");
const verifyRoute = require("./routes/otpverify");


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("build"));

app.use("/api/auth", authRoute);
app.use("/api/otp", verifyRoute);


const port = process.env.PORT || 2000;

app.listen(port, function () {
    console.log("Server is running at " + port);
}
);


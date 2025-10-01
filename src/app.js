const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const integrationRoutes = require("./routes/integrationRoutes");

dotenv.config();
const app = express();
app.use(express.json());

const connectDB = require("./config/db");
connectDB();


app.use("/api/integrations", integrationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT , () => console.log(`server running on  port ${PORT}`))

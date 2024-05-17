const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const portfolioRoutes = require("./routes/portfolioRoute");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/portfolio", portfolioRoutes);
app.get("/", function(req, res) {
    res.send(`<h5>Server is up and running</h5>`);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});
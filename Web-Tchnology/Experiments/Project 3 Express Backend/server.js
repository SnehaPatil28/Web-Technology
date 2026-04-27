const express = require('express')
const path = require("path")
const app = express()
const PORT = 3000;

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(express.static(path.join(__dirname)));

const eventsRouter = require("./routes/events");
const memberRouter = require("./routes/members");
const registerRouter = require("./routes/register");
const contactRouter = require("./routes/contact");

app.use("/events", eventsRouter);
app.use("/members", memberRouter);
app.use("/register", registerRouter);
app.use("/contact", contactRouter);

app.listen(PORT, ()=>{
    console.log(`Server started at PORT : ${PORT}`);
});
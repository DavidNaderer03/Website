const express = require("express");
const port = 3000;
const app = express();

app.use(express.static('./public'));

app.listen(port, "mywebsit.ecom", () => {
    console.log(`port listens to 3000`);
});
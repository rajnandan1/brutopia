const express = require("express");
const app = express();
const PORT = 9867;

app.use(express.static("./dist"));


app.listen(PORT, () => console.log(`Server listening on port: ${PORT}. go to http://localhost:${PORT}/index.html`));
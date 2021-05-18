require("dotenv").config();
const express = require("express");
// const massive = require("massive");
// const session = require("express-session");

const bootCtrl = require("./controllers/bootCtrl");

const app = express();
const port = 5050;

// console.log(bootCtrl)

app.use(express.json());

// user endpoints
app.get("/api/user");
app.post("/api/user");

// boot endpoints
app.get("/api/boot", bootCtrl.getAvailibleBoots);
app.post("/api/boot", bootCtrl.postBootToCollection);
app.put("/api/boot/cc/:id", bootCtrl.addCleanCondition);
app.put("/api/boot/wears/:id", bootCtrl.addWear);
app.delete("/api/boot/:id", bootCtrl.deleteBoots);

app.listen(port, () => console.log(`server is running on ${port}`));

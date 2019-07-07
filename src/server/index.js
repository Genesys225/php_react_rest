import express from "express";
import cors from "cors";
import router from "../../nodeApi/rendering-service/component";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.static("public"));
app.use("*", router);

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`);
});

module.exports = router;

/*
  1) Just get shared App rendering to string on server then taking over on client.
  2) Pass data to <App /> on server. Show diff. Add data to window then pick it up on the client too.
  3) Instead of static data move to dynamic data (github gists)
  4) add in routing.
*/

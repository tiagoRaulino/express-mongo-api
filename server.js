import "dotenv/config";
import app from "./src/app.js";

const PORT = 5000;

app.listen(PORT, () => {
  console.log("servidor escutando na porta "+PORT);
});

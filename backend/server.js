import app from "./app.js";
import { server } from "./src/config/database.js";

const port = server;

app.listen(port, () => {
  console.log('Rodando app...');
  console.log(`http://localhost:${port}`);
});

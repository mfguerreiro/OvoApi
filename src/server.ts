import "dotenv/config";

import { app } from "./app";

app.listen(process.env.APP_PORT as unknown as number, () => {
  console.log(`🤖 Server is running on port ${process.env.APP_PORT}`);
});

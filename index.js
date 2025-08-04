import { createApp } from "./app.js";

const PORT = process.env.PORT || 3000;
console.log("ejecución");
createApp().then(app => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
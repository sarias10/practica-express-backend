import app from "./app.js"; // ojo con el .js
import logger from "./utils/logger.js";

const PORT = 3001

app.listen(PORT, () => {
    logger.info(`Server running on http://localhost:${PORT}`)
})
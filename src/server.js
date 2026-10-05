import app from "./app/app.js";
import { connectToDB } from "./db.js";

const PORT = process.env.PORT || 5000;

async function startServer() {
    try {
        await connectToDB();

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1);
    }
}

startServer();
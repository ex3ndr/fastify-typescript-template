import "reflect-metadata";
import { startApi } from "./api/startApi";
import { db } from "./storage/db";
import { log } from "./utils/log";

async function main() {

    // Connect to DB
    log('Connecting to DB...');
    await db.$connect();

    // Start API
    await startApi();
}

main().catch(async (e) => {
    console.error(e);
    await db.$disconnect()
    process.exit(1);
}).then(async () => {
    await db.$disconnect();
});
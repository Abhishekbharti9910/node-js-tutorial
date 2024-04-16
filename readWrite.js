#!/usr/bin/env node

const fs = require("node:fs/promises");
const os = require("os");

async function example() {
    try {
        const homeDirectory = os.homedir();
        const filePath = `${homeDirectory}/nodeGenerated.txt`;
        const content = "writing using async await";
        await fs.writeFile(filePath, content, { flag: 'a+' });
        console.log("File written successfully!");
    } catch (err) {
        console.error("Error writing file:", err);
    }
}

example();

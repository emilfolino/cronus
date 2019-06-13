"use strict";

// Read from commandline
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let count = 0;

(function() {
    rl.on("close", exitProgram);
    rl.on("line", handleInput);

    rl.setPrompt("Take time: ");
    rl.prompt();
})();

function handleInput(line) {
    line = line.trim();
    switch (line) {
        case "quit":
        case "exit":
            exitProgram();
            break;
        case "help":
        case "menu":
            showMenu();
            break;
        default:
            storeTime();
    }

    rl.prompt();
}

function storeTime() {
    const time = Date.now();
    
    console.info(`Number of persons: ${++count}, time: ${Math.floor(time/1000)}`);
}

function showMenu() {
    console.log("Menu");
}

function exitProgram(code) {
    code = code || 0;

    console.info("Exiting with status code " + code);
    process.exit(code);
}
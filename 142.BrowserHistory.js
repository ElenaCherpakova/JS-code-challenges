function getBrowserHistory(commands) {
    let history = [];
    let currentIndex = -1; // no visited page yet

    for (let i = 0; i < commands.length; i++) {
        const cm = commands[i];
        if (cm === 'Back') {
            currentIndex = Math.max(0, currentIndex - 1);
        } else if (cm === 'Forward') {
            currentIndex = Math.min(history.length - 1, currentIndex + 1);
        } else {
            history = history.slice(0, currentIndex + 1);
            history.push(cm);
            currentIndex = currentIndex + 1;
        }
    }
    return [history, currentIndex]
}


console.log(getBrowserHistory(["example.com", "example.com/about", "example.com/contact", "example.com/blog"])); // [["example.com", "example.com/about", "example.com/contact", "example.com/blog"], 3]
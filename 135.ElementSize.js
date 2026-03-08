// Element Size
// Given a window size, the width of an element in viewport width "vw" units, and the height of an element in viewport height "vh" units, determine the size of the element in pixels.

// The given window size and returned element size are strings in the format "width x height", "1200 x 800" for example.

// "vw" units are the percent of window width. "50vw" for example, is 50% of the width of the window.

// "vh" units are the percent of window height. "50vh" for example, is 50% of the height of the window.


function getElementSize(windowSize, elementVw, elementVh) {

    const [width, height] = windowSize.split(' x ').map(Number);
    const vw = Number(elementVw.slice(0, -2));
    const vh = Number(elementVh.slice(0, -2));
    const pixelVW = Math.round(width * vw / 100);
    const pixedVH = Math.round(height * vh / 100);
    return `${pixelVW} x ${pixedVH}`;
}


console.log(getElementSize("1200 x 800", "50vw", "50vh")); // "600 x 400".
console.log(getElementSize("320 x 480", "25vw", "50vh")); // "80 x 240".
console.log(getElementSize("1000 x 500", "7vw", "3vh")); // "70 x 15".
console.log(getElementSize("1920 x 1080", "95vw", "100vh")); // "1824 x 1080".
console.log(getElementSize("1200 x 800", "0vw", "0vh")); // "0 x 0".
console.log(getElementSize("1440 x 900", "100vw", "114vh")); // "1440 x 1026".
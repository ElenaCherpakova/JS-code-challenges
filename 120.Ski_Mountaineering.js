// 2026 Winter Games Day 14: Ski Mountaineering
// Given the snow depth and slope of a mountain, determine if there's an avalanche risk.

// The snow depth values are "Shallow", "Moderate", or "Deep".
// Slope values are "Gentle", "Steep", or "Very Steep".
// Return "Safe" or "Risky" based on this table:

//            "Shallow"	"Moderate"	"Deep"
// "Gentle"	    "Safe"	 "Safe"	    "Safe"
// "Steep"	    "Safe"	 "Risky"	"Risky"
// "Very Steep"	"Safe"	 "Risky"	"Risky"


function avalancheRisk(snowDepth, slope) {
    return snowDepth === 'Shallow' || slope === "Gentle" ? "Safe" : "Risky"
}

console.log(avalancheRisk("Shallow", "Gentle")) // "Safe".
console.log(avalancheRisk("Shallow", "Steep")) // "Safe".
console.log(avalancheRisk("Shallow", "Very Steep")) // "Safe".
console.log(avalancheRisk("Moderate", "Gentle")) // "Safe".
console.log(avalancheRisk("Moderate", "Steep")) // "Risky".
console.log(avalancheRisk("Moderate", "Very Steep")) // "Risky".
console.log(avalancheRisk("Deep", "Gentle")) // "Safe".
console.log(avalancheRisk("Deep", "Steep")) // "Risky".
console.log(avalancheRisk("Deep", "Very Steep")) // "Risky".
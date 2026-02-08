function findOccurances(s, x){
    if(!x) return -1;
    const pattern = x.replace(/\*/g, '.');
    const regex = new RegExp(pattern)
    const match = s.match(regex)
    return match ? match.index : -1

}

console.log(findOccurances("xabcdey", "ab*de")) // 1
console.log(findOccurances("juliasamanthantjulia", "ant")) //8
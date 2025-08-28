/**
 * @param {string[]} strs
 * @return {string}
 */


var longestCommonPrefix = function (strs) {
    if(strs.length === 0){
        return ''
    }
    let prefix = strs[0];
    for(let i= 1; i < strs.length; i++){
        let currentStr = strs[i]
        while(!currentStr.startsWith(prefix)){
            prefix = prefix.slice(0, prefix.length - 1)
        }
    }
    return prefix
}


console.log(longestCommonPrefix(["flower", "flow", "flight"])); // fl
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ''
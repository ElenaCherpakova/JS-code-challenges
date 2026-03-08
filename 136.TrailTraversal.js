// Given an array of strings representing your trail map, return a string of the moves needed to get to your goal.
// 
// The given strings will contain the values:
// 
// "C": Your current location
// "G": Your goal
// "T": Traversable parts of the trail
// "-": Untraversable parts of the map
// Return a string with the moves needed to follow the trail from your location to your goal where:
// 
// "R" is a move right
// 
// "D" is a move down
// 
// "L" is a move left
// 
// "U" is a move up
// 
// There will always be a single continuous trail, without any branching, from your current location to your goal.
// 
// Each trail location will have a maximum of two traversable locations touching it.
// 
// For example, given:
// 
// [
//   "-CT--",
//   "--T--",
//   "--TT-",
//   "---T-",
//   "---G-"
// ]
// Return "RDDRDD".

function navigateTrail(map) {
    map = map.map(r => r.split(''))
    let row, col
    for (let r = 0; r < map.length; r++) {
        c = map[r].indexOf('C')
        if (c !== -1) {
            row = r
            col = c
            break
        }
    }
    let moves = ''
    const directions = [
        { dr: 0, dc: 1, move: 'R' },
        { dr: 1, dc: 0, move: 'D' },
        { dr: 0, dc: -1, move: 'L' },
        { dr: -1, dc: 0, move: 'U' }
    ]
    while (map[row][col] !== 'G') {
        map[row][col] = 'X'

        for (const { dr, dc, move } of directions) {
            const newRow = row + dr
            const newCol = col + dc
            if (map[newRow]?.[newCol] === 'T' || map[newRow]?.[newCol] === 'G') {
                row = newRow
                col = newCol
                moves += move
                break
            }
        }
    }
    return moves
}

console.log(navigateTrail(["-CT--", "--T--", "--TT-", "---T-", "---G-"])) // "RDDRDD".
console.log(navigateTrail(["-----", "--TTG", "--T--", "--T--", "CTT--"])) // "RRUUURR".
console.log(navigateTrail(["-C----", "TT----", "T-----", "TTTTT-", "----G-"])) // "DLDDRRRRD".
console.log(navigateTrail(["--------", "-CTTT---", "----T---", "---GT---", "--------"])) // "RRRDDL".
console.log(navigateTrail(["TTTTTTT-", "T-----T-", "T-----T-", "TTTT--TG", "---C----"])) // "ULLLUUURRRRRRDDDR".
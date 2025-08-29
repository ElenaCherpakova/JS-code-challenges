var removeElement = function (nums, val) {
    if (nums.length === 0) return 0;
    let writeIndx = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[writeIndx] = nums[i];
            writeIndx++;
        }
    }
    return writeIndx;
};


console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
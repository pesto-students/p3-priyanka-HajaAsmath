var nextGreaterElements = function(nums) {
    const len = nums.length; 
    let res = Array(len).fill(-1);
    let stack = [];
    
    for(let i=0;i<len;++i){
        while(stack.length&&nums[stack[stack.length-1]]<nums[i%len]){
            res[stack[stack.length-1]]=nums[i%len];
            stack.pop();
        }
        if(i<len){
            stack.push(i);
        }
    }
    return res;
};

console.log(nextGreaterElements([6, 8, 0, 1, 3]));
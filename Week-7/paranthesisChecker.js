class Stack {
    constructor() {
        this.arr = new Array();
    }

    push(data) {
        this.arr.push(data);
    }

    pop() {
        return this.arr.pop();
    }

    size() {
        return this.arr.length;
    }
}

paranthesisChecker = (str) => {
    let stack = new Stack();
    if(str[0] === '}' || str[0] === ']' || str[0] === ')') {
        return false;
    }

    for(let i of str) {
        console.log(i);
        switch (i) {
            case '[':
                stack.push('[');
                break;
            case '{':
                stack.push('{');
                break;
            case '(':
                stack.push('(');
                break;
            case '}':
                if(stack.pop() !== '{') {
                    return false;
                }
                break;
            case ']':
                if(stack.pop() !== '[') {
                    return false;
                }
                break;
            case ')':
                if(stack.pop() !== '(') {
                    return false;
                }
                break;
        }
    }
    if(stack.size() > 0) {
        return false;
    }
    return true;
}


console.log(paranthesisChecker('[({})]{'))



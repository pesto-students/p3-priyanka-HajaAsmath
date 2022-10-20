class Queue {
    constructor() {
        this.stack1 = new Array();
        this.stack2 = new Array();
    }

    push(data) {
        this.stack1.push(data);
    }

    pop() {
        let ele = this.stack2.pop()
        if(ele) {
            return ele;
        } else if(this.stack1.length < 1){
            return -1;
        } else {
            let a = null;
            while(a = this.stack1.pop()) {
                this.stack2.push(a);
            }
            return this.stack2.pop();
        }
    }
}

let queue = new Queue();

let arr = [1 ,2, 2, 2, 1, 4];

for(let i = 0;i<arr.length;) {
    if(arr[i] == 1) {
        queue.push(arr[i+1]);
        i=i+2;
    } else {
        console.log(queue.pop());
        i++;
    }
}
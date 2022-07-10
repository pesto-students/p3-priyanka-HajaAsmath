// function CustomPromise(exeFun) {

//     this.status = 'pending';

//     let onResolveParam;
//     let onRejectParam;

//     let thenCallbacks = [];
//     let catchCallbacks = [];

//     resolve = (x) => {
//         this.status = 'fulfilled';
//         onResolveParam = x;
//     }

//     reject = (x) => {
//         this.status = 'rejected';
//         onRejectParam = x;
//     }

//     this.then = (onResolve, onReject) => {
//         if(this.status === 'fulfilled') {
//             try {
//                 onResolve(onResolveParam);
//             } catch(err) {
//                 reject(err);
//             }
//         } else if(onReject !== undefined && this.status === 'pending') {
//             onReject(onRejectParam);
//             this.status = 'rejected';
//         }
//         return this;
//     }

//     this.catch = (catchFun) => {
//         if(this.status === 'pending') {
//             try {
//                 catchFun(onRejectParam);
//                 this.status = 'rejected';
//             } catch(err) {
//                 reject(err)
//             }
//         }
//         return this;
//     }

//     try {
//         exeFun(resolve, reject);
//     } catch (err){
//         reject(err);
//     }

// }

// let p = new CustomPromise((resolve, reject) => {
//     reject('rejected');
// }).then(x => console.log(x))
// .catch(x => {
//     console.log('on catch');
//     console.log(x);
// }).then(x => {
//     console.log('in then');
//     console.log(x);
// });

//console.log(p);

// let p  = new Promise((resolve, reject) => {
//     reject('resolved');
// });

// p.then(x => console.log(x), x => console.log(x))
// .catch(x => {
//     console.log('on catch');
//     console.log(x);
// }).then(x => {
//     console.log('in then');
//     return 200;
// }).then(x => {
//     console.log(x)
// });

// console.log(p);

function CustomPromise(exeFunc) {
    this.status = 'pending';

    let thenList = [];
    let catchList = [];

    let onResolveParam;
    let onRejectParam;

    resolve = (x) => {
        this.status = 'fulfilled'
        onResolveParam = x;
        while(thenList.length !== 0) {
            const fun = thenList.pop();
            onResolveParam = fun(onResolveParam);
        }
    }

    reject = (x) => {
        this.status = 'rejected';
        onRejectParam = x;
        while(catchList.length !== 0) {
            const fun = catchList.pop();
            onRejectParam = fun(onRejectParam);
        }
    }

    this.then = (onResolve, onReject) => {
        if(this.status === 'pending') {
            if(onResolve !== undefined) {
                thenList.push(onResolve)
            }
            if(onReject !== undefined) {
                catchList.push(onReject);
            }
        } else if(this.status === 'fulfilled' && onResolve != null) {
            onResolveParam = onResolve(onResolveParam);
        } else if(this.status === 'rejected' && onReject !== undefined) {
            onRejectParam = onReject(onRejectParam);
        }
        return this;
    }

    this.catch = (errFunc) => {
        return this.then(null, errFunc);
    }

    // runAsync = (fun, param) => {
    //     setTimeout(fun, 0, param);
    // }

    try {
        exeFunc(resolve, reject);
    } catch(err) {
        reject(err);
    }
}

console.log('before promise');
let p = new CustomPromise((resolve, reject) => {
    let randomNumber = Math.floor(Math.random() * 10000);
    console.log(randomNumber);
    if (randomNumber % 3 === 0) {
        resolve('Number is divisible by 3');
    } else {
        reject('Number is not divisible by 3');
    }
}).then(res => console.log(res))
.catch(res => console.log(res));
console.log('after promise')

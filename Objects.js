//Ещё допилю оставшиеся задания

//Реализация стека
class Stack{

    constructor(arr=[]) {
        this.data = arr;
    }

    pop() {
        return this.data.pop();
    }

    push(x) {
        this.data.push(x);
    }

    static fromArray(arr=[]) {
        let obj = new Stack();
        obj.data = arr;
        return obj;
    }
};

let test = new Stack([1,2,3]);
console.log(test.data);
test.push(4)
console.log(test.data);
test.pop();
console.log(test.data);


//Deque от стека
class Deque extends Stack {
    constructor(arr) {
        super(arr);
        this.data = arr;
    }

    pushLeft(x){
        this.data.unshift(x);
    }
    popLeft(){
        return this.data.shift();
    }
};

const test = new Deque([1,2,3,4,5]);
console.log('Test deque is ', test.data);
test.pop();
test.popLeft();
console.log('After popLeft and pop', test.data);


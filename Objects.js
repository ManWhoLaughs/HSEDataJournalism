//Ещё допилю оставшиеся задания

//Реализация стека
const Stack = {
    data : [],
    push : function(x) {
        this.data.push(x);
        return x;
    },
    pop : function() {
        return this.data.pop();
    }
};

console.log(Stack.data);
Stack.push("Stack");
Stack.push("Overflow");
console.log(Stack.data);
Stack.pop();
console.log(Stack.data);

//Нормальный Stack и Deque, построенный от него.

function newStack(arr) {
    this.data = arr;
    this.push = function(x) { return this.data.push(x)};
    this.pop = function(x) { return this.data.pop(x)};
}

class Deque extends newStack {
    constructor(arr) {
        super(arr);
        this.data = arr;
        this.pushLeft = function(x){
            return this.data.unshift(x);
        };
        this.popLeft = function(){
            return this.data.shift();
        };
    }
};

const test = new Deque([1,2,3,4,5]);
console.log('Test deque is ', test.data);
test.pop();
test.popLeft();
console.log('After popLeft and pop', test.data);

//Фабрика
newStack.prototype.fromArray = function fromArray([x, y]) {
    for (let i = x; i < y; ++i) {
        this.push(i);
    }
    return this;
}
//Вызываем фабрику newStack для Deque.

test.fromArray([100,120]);
console.log(test.data);

console.log(test.fromArray);

class Stack{
    constructor(){
        this.items = [];
    }

    push(element){
        this.items.push(element);
    }
    
    pop(){
        return this.items.pop();
    }
    
    peek(){
        return this.items[this.items.length - 1];
    }

    isEmpty(){
        return this.items.length === 0     
    }

    size(){
        return this.items.length;
    }

    print(){
        console.log(this.items.toString());
    }
}

const stack = new Stack();

stack.push(8)
stack.push(6)
stack.push(4)
stack.push(9)


stack.print()
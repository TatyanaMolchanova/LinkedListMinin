// What is Data Structures?

// Array 
// Object
// Set 
// Map
// WeakMap, WeakSet

// const map = new Map();
// map.

// Linked List
// [value, next] -> [value, next] -> [value, next]

// [].push(42)
// [1, 2, 3, 4, 5, 6].unshift(42)

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        // this.list = []
        this.head = null
        this.tail = null
    }

    append(data) {
        // const node = {data, next: null}
        const node = new Node(data)

        if (this.tail) {
            this.tail.next = node
        }

        if (!this.head) {
            this.head = node
        }

        this.tail = node
    }

    prepend(data) {
        // const node = {data, next: this.head}
        const node = new Node(data, this.head)

        this.head = node

        if (!this.tail) {
            this.tail = node
        }
    }

    insertAfter(after, data) {
        const found = this.find(after)

        if (!found) { 
            return
        }

        // const node = new Node(data, found.next)
        // found.next = node

        found.next = new Node(data, found.next)
    }

    find (data) {
        if (!this.head) {
            return
        }

        let current = this.head
        while (current) {
            if (current.data === data) {
                return current
            }

            current = current.next
        }
    }

    toArray() {
        const output = []
        let current = this.head

        while(current) {
            output.push(current)
            current = current.next
        }

        return output
    }

    remove(data) {
        if (!this.head) {
            return
        }

        while (this.head && this.head.data === data) {
            this.head = this.head.next
        }

        let current = this.head

        while (current.next) {
            if (current.next.data === data) {
                //remove
                current.next = current.next.next
            } else {
                current = current.next
            }
        }

        if (this.tail.data === data) {
            this.tail = current
        }
    }
}

const list = new LinkedList()

list.append('my')
list.append('name')
list.prepend('HI')
// list.append('is')
list.append('Slim')
list.append('Jady')

list.toArray()
list.insertAfter('name', 'is')
list.prepend(42)
list.append(24)

list.remove(42)
list.remove(24)
console.log('list', list)

console.log('list.toArray()', list.toArray())
console.log('list.find("name")', list.find('name'))
console.log('list.find("Jady")', list.find('Jady'))

















// class LinkedList {
//     constructor() {
//         // this.list = []
//         this.head = null
//         this.tail = null
//     }

//     append(data) {
//         const node = {data, next: null}

//         if (this.tail) {
//             this.tail.next = node
//         }

//         if (!this.head) {
//             this.head = node
//         }

//         this.tail = node
//     }

//     prepend(data) {
//         const node = {data, next: this.head}

//         this.head = node

//         if (!this.tail) {
//             this.tail = node
//         }
//     }
// }

// const list = new LinkedList()

// list.append('my')
// list.append('name')
// list.prepend('HI')

// console.log('list', list)


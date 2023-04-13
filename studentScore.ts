import {Node} from "./node";

export class StudentScore <T> {
    head:Node<T> | null;
    tail : Node<T>|null;
    size : number
    constructor() {
        this.head=null;
        this.tail=null
        this.size=0;
    }
    insertFirst(name:string,score:number){
        let node = new Node(name,score);
        node.next=this.head;
        this.head=node;
        if (!this.tail){
            this.tail=node
        }
        this.size++
    }
    insertLast(name:string,score:number){
        if (!this.head){
            this.insertFirst(name,score)
        }else {
            let node=new Node(name,score);
            if (this.tail!==null){
                this.tail.next=node;
            }
            this.tail=node
            this.size++
        }
    }
    showList(){
        let arr =[]
        let current = this.head;
        while (current){
            arr.push({name:current.name,score:current.score})
            current = current.next
        }

        return arr
    }
    totalStudentsFail(){
        let current = this.head
        let count = 0
        while (current){
            if (current.score<5){
                count++
            }
            current=current.next
        }
        return count;
    }
    listStudentMaxScore(){
        let current = this.head
        let arr = []
        let max : number = -Infinity
        while (current){
            if (current.score > max ){
                max = current.score
            }
            current = current.next
        }
        current = this.head
        while (current){
            if (current.score===max){
                arr.push({name:current.name,score:current.score})
            }
            current = current.next
        }return arr
    }
    findByName(name:string){
        let current = this.head
        while (current){
            if (current.name===name){
                return name
            }
            current = current.next
        }

    }
}
let student = new StudentScore()
student.insertLast('ha',9)
student.insertLast('ha',9)
student.insertFirst('nam',3)
student.insertFirst('nam',3)
console.log(student.findByName('nam'))

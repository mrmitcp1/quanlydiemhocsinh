"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentScore = void 0;
var node_1 = require("./node");
var StudentScore = /** @class */ (function () {
    function StudentScore() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    StudentScore.prototype.insertFirst = function (name, score) {
        var node = new node_1.Node(name, score);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    };
    StudentScore.prototype.insertLast = function (name, score) {
        if (!this.head) {
            this.insertFirst(name, score);
        }
        else {
            var node = new node_1.Node(name, score);
            if (this.tail !== null) {
                this.tail.next = node;
            }
            this.tail = node;
            this.size++;
        }
    };
    StudentScore.prototype.showList = function () {
        var current = this.head;
        while (current) {
            console.log("".concat(current.name, " : ").concat(current.score));
            current = current.next;
        }
        if (current.next === null) {
            return;
        }
        return current;
    };
    StudentScore.prototype.totalStudentsFail = function () {
        // let
    };
    return StudentScore;
}());
exports.StudentScore = StudentScore;
var student = new StudentScore();
student.insertLast('ha', 9);
student.insertFirst('nam', 3);
student.insertFirst('nam', 3);
console.log(student.showList());

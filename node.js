"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(name, score) {
        this.next = null;
        this.name = name;
        this.score = score;
    }
    return Node;
}());
exports.Node = Node;

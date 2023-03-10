import LinkedList from './linkedlists.js';

const list = new LinkedList();
describe("LinkedList methods", () => {
    test("happy path", () => {
        expect(LinkedList);
    });
    test("append(value) adds a new node containing value to the end of the list", () => {
        list.append("node1");
        list.append("node2");
        expect(list.head()).toBe("node1");
        expect(list.tail()).toBe("node2");
    });
    test("prepend(value) adds a new node containing value to the start of the list", () => {
        list.prepend("node0");
        expect(list.head()).toBe("node0");
        expect(list.tail()).toBe("node2");
    });
    test("size() return the total number of nodes in the list", () => {
        expect(list.size()).toBe(3);
    });
    test("at(index) returns the node at the given index", () => {
        expect(list.at(1).value).toBe("node1");
    });
    test("pop() removes the last element from the list", () => {
        list.pop();
        expect(list.size()).toBe(2);
        expect(list.tail()).toBe("node1");
    });
    test("contains(value) returns true if the passed in value is in the list and otherwise returns false", () => {
        expect(list.contains("node0")).toBe(true);
        expect(list.contains("node1")).toBe(true);
        expect(list.contains("node2")).toBe(false);
    })
    test("find(value) returns the idnex of the node containing value, or null if not found", () => {
        expect(list.find("node1")).toBe(1);
        expect(list.find("node2")).toBe(null);
    })
    test("toString() prints all LinkedList objects as strings to the console", () => {
        expect(list.toString()).toBe("(node0) -> (node1) -> null");
        list.prepend("preNode");
        expect(list.size()).toBe(3);
        expect(list.toString()).toBe("(preNode) -> (node0) -> (node1) -> null");       
    });
    test("insertAt(value, index) inserts a new node with the provided value at the given index", () => {
        list.insertAt("node3", 2);
        expect(list.size()).toBe(4);
        expect(list.at(2).value).toBe("node3");
        expect(list.toString()).toBe("(preNode) -> (node0) -> (node3) -> (node1) -> null")
    });
    test("removeAt(index) removes a node at the given index", () => {
        list.removeAt(2);
        expect(list.size()).toBe(3);
        expect(list.at(2).value).toBe("node1");
        expect(list.toString()).toBe("(preNode) -> (node0) -> (node1) -> null");
        list.removeAt(0);
        expect(list.size()).toBe(2);
        expect(list.at(1).value).toBe("node1");
        expect(list.toString()).toBe("(node0) -> (node1) -> null")
    });
});

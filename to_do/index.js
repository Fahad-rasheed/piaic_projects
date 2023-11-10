"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
// todo array
//function
//operation
let todos = ["bilal", "fawad"];
function createTodo(todos) {
    return __awaiter(this, void 0, void 0, function* () {
        do {
            let ans = yield inquirer_1.default.prompt({
                type: "list",
                message: "Select an operation",
                name: "select",
                choices: ["add", "update", "view", "delete"]
            });
            if (ans.select == "add") {
                let addTodo = yield inquirer_1.default.prompt({
                    type: "input",
                    message: "add item",
                    name: "todo",
                });
                todos.push(addTodo.todo);
                console.log(todos);
            }
            if (ans.select == "update") {
                let updateTodo = yield inquirer_1.default.prompt({
                    type: "list",
                    message: "select item for update",
                    name: "todo",
                    choices: todos.map(item => item)
                });
                let addTodo = yield inquirer_1.default.prompt({
                    type: "input",
                    message: "add item ",
                    name: "todo",
                });
                let newTodos = todos.filter(val => val !== updateTodo.todo);
                todos = [...newTodos, addTodo.todo];
                console.log(todos);
            }
            if (ans.select == "view") {
                console.log(todos);
            }
            if (ans.select == "delete") {
                let deleteTodo = yield inquirer_1.default.prompt({
                    type: "list",
                    message: "select item for update",
                    name: "todo",
                    choices: todos.map(item => item)
                });
                let newTodos = todos.filter(val => val !== deleteTodo.todo);
                todos = [...newTodos];
                console.log(newTodos);
            }
        } while (true);
    });
}
createTodo(todos);

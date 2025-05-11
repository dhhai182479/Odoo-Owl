/** @odoo-module */
import { Component, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";

//import { TodoItem } from "./todo_item";
import { TodoItem } from "../todo_list/todo_item";
import { useAutofocus } from "../todo_list/untils";


export class TodoList extends Component {
    static template = "owl.todo_list_template";
    static components = { TodoItem };

    setup() {
        this.todos = useState([]);
        this.nextItem = 0;
        useAutofocus("input-todo-item")
    }

    addTodoItem(ev) {
        if (ev.keyCode == 13 && ev.target.value != '') {
            this.todos.push({
                id: this.nextItem++,
                description: ev.target.value,
                isCompleted: this.randomIsCompleted(),

            });
            ev.target.value = "";
        }
        console.log(ev.keyCode)
        console.log(ev)
//        console.log(ev.target)
    }

    randomIsCompleted() { return Math.random() < 0.5 }

    toggleTodoList(todoItemId) {
        const todo_item = this.todos.find((todo) => todo.id === todoItemId);
        if (todo_item) {
            todo_item.isCompleted = !todo_item.isCompleted;
        }
    }

    removeTodoItem(todoItemId) {

        const todo_item_index = this.todos.find((todo) => todo.id === todoItemId)
        if (todo_item_index) {
            this.todos.splice(todo_item_index, 1);
        }

    }

}
registry.category('actions').add('action_todo_list', TodoList);




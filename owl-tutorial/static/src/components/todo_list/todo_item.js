/** @odoo-module */
import { Component, useState } from "@odoo/owl";


export class TodoItem extends Component {
    static template = "owl.todo_item_template";

    static props = {
        todo: {
            type: Object,
            shape: { id: Number, description: String, isCompleted: Boolean }
        },
        toggleState: Function,
        removeTodo: Function,
    };

    onchange_todo_item() {
        this.props.toggleState(this.props.todo.id)
    }

    onRemove() {
        this.props.removeTodo(this.props.todo.id)
    }

}

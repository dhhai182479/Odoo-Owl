/** @odoo-module **/
import { Component, useState, markup } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { Counter } from "../counter/counter";
import { Card } from "../card/card";
import { TodoList } from "../todo_list/todo_list";


export class MainGround extends Component {
    static template = "owl.main_ground_template";

    // Gọi components
    static components = { Counter, Card, TodoList };

    state = useState({
        str: 'string',
        int: 696969,
        html: "<div>some content</div>",
        html_markup: markup("<div>some content</div>"),

        value_sum_bind: 0,

    });

    sum_count() {
        this.state.value_sum_bind++;
    }

}
registry.category('actions').add('action_main_ground', MainGround);

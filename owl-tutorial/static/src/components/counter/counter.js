/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";


export class Counter extends Component {
    static template = "owl.counter_template"

    static props = {
        onChange: { type: Function, optional: true }
    }

    setup() {
        this.state = useState({ value: 0 })
    }


    button_count() {
        this.state.value++;

        if (this.props.onChange) {
            this.props.onChange();
        }

    }

}

registry.category('actions').add('action_counter', Counter);

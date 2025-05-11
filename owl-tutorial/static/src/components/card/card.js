/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";


export class Card extends Component {

    static template = "owl.card_template"

    static props = {
        value1: String,
        value2: { type: Number, optional: true, default: 0 },
        value3: String,
        value4: Number,
        value5: { type: String, optional: true, default: "Default" },

        slot: {
            type: Object,
            shape: {
                default: true
            },
        }

    }

    setup() {
        this.displayValue5 = this.props.value5 || "Default";
    }
}

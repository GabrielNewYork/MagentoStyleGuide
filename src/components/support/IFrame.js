// Source https://stackoverflow.com/questions/43088256/render-component-in-iframe-using-vuejs-without-src-attribute

import Vue from "vue";

Vue.component('i-frame', {

    render(h) {
        return h('iframe', {
            on: {load: this.renderChildren}
        })
    },
    beforeUpdate() {
        //freezing to prevent unnessessary Reactifiation of vNodes
        this.iApp.children = Object.freeze(this.$slots.default)
    },
    methods: {
        renderChildren() {

            const children = this.$slots.default

            // import './index.css';

            const body = this.$el.contentDocument.body
            const head = document.head.innerHTML
            this.$el.contentDocument.head.innerHTML = head;
            // this.$el.contentDocument.head = document.head;

            const el = document.createElement('DIV') // we will mount or nested app to this element
            body.appendChild(el)


            // head.appendChild(require('@/assets/tailwind.css'));

            const iApp = new Vue({
                name: 'iApp',
                //freezing to prevent unnessessary Reactifiation of vNodes
                data: {children: Object.freeze(children)},
                render(h) {
                    return h('div', this.children)
                },
            })

            iApp.$mount(el) // mount into iframe

            this.iApp = iApp // cache instance for later updates

        }
    }
});
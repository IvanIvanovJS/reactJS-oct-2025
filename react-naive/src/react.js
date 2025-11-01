
export default {
    createElement(type, props, ...children) {
        return {
            type, props: props || {}, children
        }
    }
}
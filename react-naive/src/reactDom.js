export default {
    render(element, container) {
        container.innerHTML = ''

        const domSubTree = this._createDomElement(element)

        container.appendChild(domSubTree)
    },
    _createDomElement(node) {
        if (typeof node === 'string' || typeof node === 'number') {
            return document.createTextNode(node)
        }

        if (typeof node.type === 'function') {
            const component = node.type
            const element = component({ ...node.props, children: node.children })
            return this._createDomElement(element)
        }
        const domElement = document.createElement(node.type)
        Object.keys(node.props).forEach(key => {
            if (key === 'style' && typeof node.props[key] === 'object') {
                Object.assign(domElement.style, node.props[key])
            } else {
                domElement.setAttribute(key, node.props[key])
            }
        })

        node.children.forEach(child => {
            domElement.appendChild(this._createDomElement(child))
        })
        return domElement
    }

}
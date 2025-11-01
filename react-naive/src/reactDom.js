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

        const domElement = document.createElement(node.type)
        Object.keys(node.props).forEach(key => {
            domElement.setAttribute(key, node.props[key])
        })

        node.children.forEach(child => {
            domElement.appendChild(this._createDomElement(child))
        })
        return domElement
    }

}
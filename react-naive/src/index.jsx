
import React from './react.js'
import reactDom from './reactDom.js'

// const reactElement = React.createElement(
//     'div',
//     null,
//     React.createElement('H1', { class: 'site-header' }, 'My first React naive app!'),
//     React.createElement('H2', null, 'Awesome second header'))

const reactElement = (
    <header>
        <h1>My first naive JSX react element</h1>
        <h2>My second JSX header</h2>
        <div>Test my luck
            <p>Nested Paragraph</p>
        </div>
    </header>
)

const rootElement = document.getElementById('root')

reactDom.render(reactElement, rootElement)

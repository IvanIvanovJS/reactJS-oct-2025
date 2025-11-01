
import App from './app.jsx'
import React from './react.js'
import reactDom from './reactDom.js'

// const reactElement = React.createElement(
//     'div',
//     null,
//     React.createElement('H1', { class: 'site-header' }, 'My first React naive app!'),
//     React.createElement('H2', null, 'Awesome second header'))

function Try() {
    return (
        <header>
            <h1>Hello</h1>
        </header>
    )
}

const rootElement = document.getElementById('root')

reactDom.render(<App />, rootElement)

import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import tooltip from '../src';
import '../style.css';

let Link = props => (
    <a {...props}>{props.children}</a>
);

Link.propTypes = {
    children: PropTypes.node.isRequired,
};

Link = tooltip(Link, {
    className: 'react-tooltip',
});

const App = () => (
    <div>
        <Link href="https://google.com" title="Title text">Hover me</Link>
        or
        <Link href="https://google.com" title="Title text 2">Hover me</Link>
    </div>
);

render(
    <App />,
    document.querySelector('#root'),
);

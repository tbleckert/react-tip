import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

export default class Tooltips extends Component {
    constructor(props) {
        super(props);

        const elementId = 'reactTipWrapper';

        this.element = document.getElementById(elementId);

        if (!this.element) {
            this.element = document.createElement('div');

            this.element.id = elementId;

            document.body.appendChild(this.element);
        }
    }

    render() {
        return createPortal(
            this.props.children,
            this.element,
        );
    }
}

Tooltips.propTypes = {
    children: PropTypes.node.isRequired,
};

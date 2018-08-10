import React from 'react';
import PropTypes from 'prop-types';

const TooltipContent = (props) => {
    if (!props.title) {
        return null;
    }

    const wrapperAttributes = { style: {} };
    const contentAttributes = {};

    if (props.className) {
        if (typeof props.className === 'string') {
            wrapperAttributes.className = props.className;
            contentAttributes.className = `${props.className}__content`;
        } else {
            wrapperAttributes.className = props.className.container;
            contentAttributes.className = props.className.content;
        }
    } else if (props.styles) {
        wrapperAttributes.style = props.styles.container;
        contentAttributes.style = props.styles.content;
    }

    wrapperAttributes.style.left = `${props.rect.left + (props.rect.width / 2)}px`;
    wrapperAttributes.style.top = `${props.rect.bottom}px`;
    wrapperAttributes.style.transform = 'translate(-50%, 0)';

    return (
        <span {...wrapperAttributes}>
            <span {...contentAttributes}>{props.title}</span>
        </span>
    );
};

TooltipContent.defaultProps = {
    title: null,
    className: 'react-tip',
    styles: null,
    rect: null,
};

TooltipContent.propTypes = {
    title: PropTypes.node,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.objectOf(PropTypes.string)]),
    styles: PropTypes.object,
    rect: PropTypes.object,
};

export default TooltipContent;

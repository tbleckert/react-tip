import React from 'react';
import PropTypes from 'prop-types';

const TooltipContent = (props) => {
    if (!props.title) {
        return null;
    }

    const wrapperAttributes = { style: {} };
    const contentAttributes = {};

    if (props.className) {
        wrapperAttributes.className = props.className;
        contentAttributes.className = `${props.className}__content`;
    } else if (props.styles) {
        wrapperAttributes.style = props.styles.wrapper;
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
    className: null,
    styles: null,
};

TooltipContent.propTypes = {
    title: PropTypes.node,
    className: PropTypes.string,
    styles: PropTypes.object,
    rect: PropTypes.object,
};

export default TooltipContent;

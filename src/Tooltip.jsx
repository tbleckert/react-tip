import React, { Component, Fragment } from 'react';
import Tooltips from './Tooltips';
import TooltipContent from './TooltipContent';

const tooltip = (WrappedComponent, settings) => class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            display: false,
            rect: null,
            title: null,
        };
    }

    onMouseEnter = (e) => {
        const { target } = e;

        this.setState({
            display: true,
            rect: target.getBoundingClientRect(),
            title: target.getAttribute('title'),
        });
    };

    onMouseLeave = () => {
        this.setState({ display: false, title: null });
    };

    render() {
        return (
            <Fragment>
                <WrappedComponent
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                    {...this.props}
                />
                <Tooltips>
                    <TooltipContent {...this.state} {...settings} />
                </Tooltips>
            </Fragment>
        );
    }
};

export default tooltip;

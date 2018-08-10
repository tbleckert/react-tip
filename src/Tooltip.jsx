import React, { Component, Fragment } from 'react';
import Tooltips from './Tooltips';
import TooltipContent from './TooltipContent';

let defaultSettings = {};

const tooltip = (WrappedComponent, settings) => {
    if (!WrappedComponent) {
        defaultSettings = settings;

        return null;
    }

    return class extends Component {
        constructor(props) {
            super(props);

            this.state = {
                display: false,
                rect: null,
                title: null,
            };

            this.settings = settings || defaultSettings;
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
                        <TooltipContent {...this.state} {...this.settings} />
                    </Tooltips>
                </Fragment>
            );
        }
    }
};

export default tooltip;

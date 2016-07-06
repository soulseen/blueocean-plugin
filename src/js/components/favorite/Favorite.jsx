// @flow

import React, { Component, PropTypes } from 'react';

type Props = {
    checked: boolean,
    onToggle: (checked: boolean) => void,
    className: string
}

export class Favorite extends Component {

    state: {
        checked: boolean
    };

    static defaultProps = {
        checked: false,
        className: ''
    };

    constructor(props: Props){
        super(props);
        this.state = {
            checked: this.props.checked
        };
    }

    toggle(e: Event) {
        if (e.target instanceof HTMLInputElement) {
            const checked = e.target.checked;
            this.setState({
                checked: checked
            });

            if (this.props.onToggle != null){
                this.props.onToggle(checked);
            }
        }
    }

    render() {
        return (
            <label className={`checkbox ${this.props.className}`}>
                <input type="checkbox"
                       onChange={this.toggle.bind(this)}
                       checked={this.state.checked} />
                <span></span>
            </label>
        );
    }
}

Favorite.propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.oneOf(['', 'dark-yellow', 'dark-white']),
    onToggle: PropTypes.func
};

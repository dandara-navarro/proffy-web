import React, {Component, InputHTMLAttributes} from 'react';
import PropTypes from 'prop-types';


class Input extends Component {
    render() {
        return (
            <div className="input-block">
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <input type="text" id={this.props.name} />
            </div>
        );
    }
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}

export default Input;
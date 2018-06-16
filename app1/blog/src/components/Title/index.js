import React, { Component } from 'react';

class Title extends Component {

    state = {
        color: 'red'
    }

    onColorChange = () => this.setState(
        { color: this.state.color === 'red' ? 'blue' : "red" });

    render() {
        const { styles, title } = this.props;
        const { color } = this.state;

        return (
            <h1
                style={{
                    ...styles,
                    color: color,
                    fontSize: '60px'
                }}
                onMouseOver={this.onColorChange}>
                {title}
            </h1>
        );
    }

}

export default Title;
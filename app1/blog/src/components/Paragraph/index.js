import React, { Component } from 'react';

class Paragraph extends Component {

    state = {
        color: 'white',
        fontSize: '16px'
    }

    onColorAndFontChange = () => {
        const color = this.state.color === 'white' ? 'red' : 'white';
        const fontSize = this.state.fontSize === '16px' ? '24px' : '16px';
        this.setState({ color, fontSize });
    }

    render() {
        const { styles, body } = this.props;
        const { color, fontSize } = this.state;

        return (
            <p style={{ ...styles, color: color, fontSize: fontSize }}
                onMouseOver={this.onColorAndFontChange} >
                {body}
            </p>
        );

    }

}

export default Paragraph;
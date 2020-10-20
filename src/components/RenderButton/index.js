import React, { Component } from 'react';

import { Button, Text } from './styles';

class RenderButton extends Component {
    render() {
        const { label } = this.props;
        return (
            <Button onClick={this.props.onClick}>
                <Text>{label}</Text>
            </Button>
        )
    }
}

RenderButton.defaultProps = {
    label: 'Button',
    onClick: () => {},
}

export default RenderButton;

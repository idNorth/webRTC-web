import React, { Component } from 'react';

import { RenderButton } from '../../components';
import { Wrapper } from './styles';

class PreviewPageView extends Component {
    render() {
        return (
            <Wrapper>
                <RenderButton
                    onClick={this.props.setIsConnected}
                    label="Create room"
                />
                <RenderButton
                    onClick={this.props.setIsConnected}
                    label="Join room"
                />
            </Wrapper>
        );
    }
}

PreviewPageView.defaultProps = {
    setIsConnected: () => {},
}

export default PreviewPageView;

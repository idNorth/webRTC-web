import React, { Component } from 'react';
import PreviewPageView from './view';

class PreviewPage extends Component {
    render() {
        const { setIsConnected } = this.props;
        return (
            <PreviewPageView
                setIsConnected={setIsConnected}
            />
        );
    }
}

export default PreviewPage;

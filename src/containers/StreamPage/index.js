import React, { Component } from 'react';
import StreamPageView from './view';

class StreamPage extends Component {
    render() {
        const { setIsConnected } = this.props;
        return (
            <StreamPageView
                setIsConnected={setIsConnected}
            />
        );
    }
}

export default StreamPage;

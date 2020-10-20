import React, { Component } from 'react';
import StreamPage from '../StreamPage';
import PreviewPage from '../PreviewPage';

class Layout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isConnected: false,
        }
    }

    setIsConnected = (isConnected) => this.setState({ isConnected })

    renderPage = () => {
        const { isConnected } = this.state;
        if (isConnected) {
            return (
                <StreamPage
                    setIsConnected={() => this.setIsConnected(false)}
                />
            )
        }

        return (
            <PreviewPage
                setIsConnected={() => this.setIsConnected(true)}
            />
        )
    }

    render() {
        return this.renderPage();
    }
}

export default Layout;

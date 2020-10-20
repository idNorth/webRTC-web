import React, { Component } from 'react';

import {RenderButton} from '../../components';

class StreamPageView extends Component {
    render() {
        return (
            <div>
                <RenderButton
                    onClick={this.props.setIsConnected}
                    label="Disconnect"
                />
            </div>
        );
    }
}

StreamPageView.defaultProps = {
    setIsConnected: () => {},
}

export default StreamPageView;

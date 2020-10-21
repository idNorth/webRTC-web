import React, { Component } from 'react';

import {SimpleTextButton} from '../../components';

class StreamPageView extends Component {
    render() {
        return (
            <div>
                <SimpleTextButton
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

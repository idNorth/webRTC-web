import React, { Component } from 'react';

import {SimpleTextButton} from '../../components';

class StreamPageView extends Component {
  render() {
    const { handleDisconnect, videoStreamRef } = this.props;
    return (
      <div>
        <SimpleTextButton
          onClick={handleDisconnect}
          label="Disconnect"
        />
        <video
          ref={videoStreamRef}
          autoPlay
        />
      </div>
    );
  }
}

StreamPageView.defaultProps = {
  handleDisconnect: () => {},
}

export default StreamPageView;

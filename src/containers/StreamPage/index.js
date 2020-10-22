import React, { Component } from 'react';
import StreamPageView from './view';

class StreamPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoStream: null
    }
    this.videoStreamRef = React.createRef();
    this.videoStream = null;
  }

  async componentDidMount() {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    if (!this.videoStreamRef.current) return;
    // this.videoStreamRef.current.srcObject = stream;
    console.log(URL.createObjectURL(new Blob([stream], {type: "video\\/mp3"})));
    this.videoStreamRef.current.src = URL.createObjectURL(new Blob([stream], {type: "video\\/mp3"}));
  }

  render() {
    const { handleDisconnect } = this.props;
    const { videoStream } = this.state;
    return (
      <StreamPageView
        handleDisconnect={handleDisconnect}
        videoStreamRef={this.videoStreamRef}
      />
    );
  }
}

export default StreamPage;

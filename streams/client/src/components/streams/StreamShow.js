import flv from 'flv.js';
import React from 'react';
import { connect } from 'react-redux';

import { fetchStream } from '../../actions';

class StreamShow extends React.Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.fetchStream(id);
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  componentWillUnmount() {
    this.player.destroy();
  }

  buildPlayer() {
    if (this.player || !this.props.stream) {
      return;
    }

    const { id } = this.props.match.params;

    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`,
    });

    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  render() {
    const { stream } = this.props;

    if (!stream) {
      return null;
    }

    return (
      <div>
        <h1>{stream.title}</h1>
        <h5>{stream.description}</h5>
        <video ref={this.videoRef} style={{ width: '100%' }} controls />
      </div>
    );
  }
}

const mapStateToProps = ({ streams }, { match }) => {
  return {
    stream: streams[match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);

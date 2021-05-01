import React from 'react';
import { connect } from 'react-redux';

import { fetchStream } from '../../actions';

class StreamShow extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.fetchStream(id);
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

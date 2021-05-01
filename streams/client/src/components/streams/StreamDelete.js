import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchStream, deleteStream } from '../../actions';
import History from '../../history';
import Modal from '../modal';

class StreamDelete extends React.Component {
  componentDidMount() {
    const { match } = this.props;
    this.props.fetchStream(match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <Link to="/" className="ui button">
          Cancel
        </Link>
        <button
          className="ui button negative"
          onClick={() => this.props.deleteStream(id)}
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  render() {
    const { stream } = this.props;

    if (!stream) {
      return null;
    }

    return (
      <Modal
        title="Delete Stream"
        content={`Are you sure you want to delete ${stream.title}?`}
        actions={this.renderActions()}
        onDismiss={() => History.push('/')}
      />
    );
  }
}

const mapStateToProps = ({ streams }, { match }) => {
  return {
    stream: streams[match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete,
);

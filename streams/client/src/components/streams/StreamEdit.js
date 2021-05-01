import { pick } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
  componentDidMount() {
    const { match } = this.props;
    this.props.fetchStream(match.params.id);
  }

  onSubmit = (formValues) => {
    const { match } = this.props;
    this.props.editStream(match.params.id, formValues);
  };

  render() {
    const { stream } = this.props;

    if (!stream) {
      return <div>Loading</div>;
    }

    return (
      <div>
        <h2>Edit Stream</h2>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={pick(stream, ['title', 'description'])}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ streams }, { match }) => {
  return { stream: streams[match.params.id] };
};
export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit,
);

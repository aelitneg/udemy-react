import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = ({ users }, { userId }) => {
  const user = users.find((u) => {
    return u.id === userId;
  });

  return { user };
};

export default connect(mapStateToProps, null)(UserHeader);

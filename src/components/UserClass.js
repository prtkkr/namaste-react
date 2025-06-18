import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.onBtnClick = this.onBtnClick.bind(this);
  }

  onBtnClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    const { name, designation, location, contact } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h3>{name}</h3>
        <p>👨‍💻 {designation}</p>
        <p>📍 {location}</p>
        <p>📞 {contact}</p>
        <div>
          <button className="p-2 m-2 border" onClick={this.onBtnClick}>
            Increment
          </button>
          <h4>{count}</h4>
        </div>
      </div>
    );
  }
}

export default UserClass;

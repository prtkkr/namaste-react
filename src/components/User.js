const User = (props) => {
  const { name, designation, location, contact } = props;
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>👨‍💻 {designation}</p>
      <p>📍 {location}</p>
      <p>📞 {contact}</p>
    </div>
  );
};

export default User;

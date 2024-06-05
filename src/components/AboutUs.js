import User from './User';
import UserClass from './UserClass';

const AboutUs = () => {
  return (
    <div>
      <h1>About Us</h1>
      <hr />
      <div className="menu-container">
        <User
          name={'Pratik Kumar'}
          location={'Pune, Maharashtra'}
          designation={'Frontend Developer'}
          contact={9123456789}
        />
        <UserClass
          name={'John Doe'}
          location={'Bangalore, Karnataka'}
          designation={'Software Developer'}
          contact={8123456789}
        />
      </div>
    </div>
  );
};

export default AboutUs;

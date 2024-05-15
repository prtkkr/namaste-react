import React from 'react';
import ReactDOM from 'react-dom/client';

const jsxHeading = <h1>Namaste React 🚀 using JSX</h1>;

const HeadingComponent = () => {
  return (
    <div className="container">
      {jsxHeading}
      <hr />
      <p>This is a Functional Component</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);

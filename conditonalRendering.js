 function LoggedInUser(props) {
    return <div>
       <h1>Welcome back! </h1>
       <span>Log out </span>
     </div>;
  }
  function LoggedOutUser(props) {
    return <div>
       <h1>Sign in, please! </h1>
       <span>Log out </span>
     </div>;
  }
  function LoggedStatus(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <LoggedInUser />;
    }
  return <LoggedOutUser />;
  }
  ReactDOM.render(
    <LoggedStatus isLoggedIn={true} />,
    document.getElementById('container')
  );
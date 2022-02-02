import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '501269022844-828ud9cmjh7uuv5ei33a7m243fcq6lnh.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;

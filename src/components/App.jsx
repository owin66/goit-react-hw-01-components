import React from 'react';
import user from './Profile/user.json';
import Profile from './Profile/Profile';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
    </div>
  );
};

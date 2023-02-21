import React from 'react';
import ProfileCard from './ProfileCard';

export default function Profile({ user }) {
  return (
    <div>
      <ProfileCard
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
  );
}

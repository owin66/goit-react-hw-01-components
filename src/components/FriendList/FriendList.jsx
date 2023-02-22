import React from 'react';
import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import { StyledFriendList } from './Friends.styled';

export default function FriendList({ friends }) {
  return (
    <div>
      <StyledFriendList>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </StyledFriendList>
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

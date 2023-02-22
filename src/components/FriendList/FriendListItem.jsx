import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledFriendListItem,
  StyledStatus,
  StyledAvatar,
  StyledName,
} from './Friends.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div>
      <StyledFriendListItem>
        <StyledStatus isOnline={isOnline} />
        <StyledAvatar src={avatar} alt="User avatar" width="48" />
        <StyledName>{name}</StyledName>
      </StyledFriendListItem>
    </div>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

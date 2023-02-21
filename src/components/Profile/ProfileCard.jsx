import React from 'react';
import PropTypes from 'prop-types';
import css from './Profile.module.css';

export default function ProfileCard({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>{followers}</span>
          <span className={css.quantity}>1000</span>
        </li>
        <li>
          <span className={css.label}>{views}</span>
          <span className={css.quantity}>2000</span>
        </li>
        <li>
          <span className={css.label}>{likes}</span>
          <span className={css.quantity}>3000</span>
        </li>
      </ul>
    </div>
  );
}

ProfileCard.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
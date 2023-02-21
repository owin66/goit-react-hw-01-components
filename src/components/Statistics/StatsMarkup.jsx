import React from 'react';
import { StatPercentage, StatLabel } from './Statistics.styled';
import PropTypes from 'prop-types';

export default function StatsMarkup({ label, percentage }) {
  return (
    <>
      <StatLabel>{label}</StatLabel>
      <StatPercentage>{percentage}%</StatPercentage>
    </>
  );
}
StatsMarkup.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

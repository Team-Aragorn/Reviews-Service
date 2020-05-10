import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RatingBG = styled.span`
  color: e3e3e3;
  display: block;
  position: relative;
  margin: 0;
  width: 100%;
`;

const RatingFill = styled.span`
  color: da291c;
  display: block;
  margin: 0;
  position: relative;
  top: -20px;
  width: ${(props) => (Math.floor((props.rating / 5) * 100))}%;
  overflow: hidden;
  white-space: nowrap;
`;

const BarRating = ({ className, rating }) => (
  <div className={className}>
    <RatingBG>
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
    </RatingBG>
    <RatingFill rating={rating}>
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
    </RatingFill>
  </div>
);

const StyledBarRating = styled(BarRating)`
  font-size: 20px;
  line-height: 24px;
  align-self: center;
  height: 24px;
  width: 5.625em;
`;

export default StyledBarRating;

BarRating.propTypes = {
  className: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

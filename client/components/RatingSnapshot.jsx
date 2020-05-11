import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import BarRating from './BarRating';

const Title = styled.h3`
  font-size: 14;
  font-weight: 700;
  height: auto;
  margin: 0;
  margin-bottom: 24px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 40px auto 20%;
  gap: 0px 10px;
  font-size: 16;
  width: 60%;
`;

const RatingSnapshot = ({ counts, total, setter }) => (
  <div>
    <Title>Rating Snapshot</Title>
    <Container>
      <>
        <div>
          {'5 '}
          <FontAwesomeIcon icon={faStar} />
        </div>
        <BarRating
          onClick={() => { setter(true, 4); }}
          rating={(counts[4] / total) * 5}
          clean
          clickable
        />
        <div>
          {counts[4]}
        </div>
      </>
      <>
        <div>
          {'4 '}
          <FontAwesomeIcon icon={faStar} />
        </div>
        <BarRating
          onClick={() => { setter(true, 3); }}
          rating={(counts[3] / total) * 5}
          clean
          clickable
        />
        <div>
          {counts[3]}
        </div>
      </>
      <>
        <div>
          {'3 '}
          <FontAwesomeIcon icon={faStar} />
        </div>
        <BarRating
          onClick={() => { setter(true, 2); }}
          rating={(counts[2] / total) * 5}
          clean
          clickable
        />
        <div>
          {counts[2]}
        </div>
      </>
      <>
        <div>
          {'2 '}
          <FontAwesomeIcon icon={faStar} />
        </div>
        <BarRating
          onClick={() => { setter(true, 1); }}
          rating={(counts[1] / total) * 5}
          clean
          clickable
        />
        <div>
          {counts[1]}
        </div>
      </>
      <>
        <div>
          {'1 '}
          <FontAwesomeIcon icon={faStar} />
        </div>
        <BarRating
          onClick={() => { setter(true, 0); }}
          rating={(counts[0] / total) * 5}
          clean
          clickable
        />
        <div>
          {counts[0]}
        </div>
      </>
    </Container>
    Select a row above to filter reviews.
  </div>
);


export default RatingSnapshot;

RatingSnapshot.propTypes = {
  counts: PropTypes.arrayOf(PropTypes.number).isRequired,
  total: PropTypes.number.isRequired,
  setter: PropTypes.func.isRequired,
};

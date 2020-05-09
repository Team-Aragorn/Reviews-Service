import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BarRating from './BarRating';
import StarRating from './StarRating';

const Title = styled.h3`
  font-size: 14;
  font-weight: 700;
  height: auto;
  margin: 0;
  margin-bottom: 24px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 160px auto;
  gap: 0px 20px;
  font-size: 16;
  width: 60%;
`;

const StyledStars = styled(StarRating)`
  margin-bottom: 14px;
  width: 113px;
`;

const RatingAverages = ({ averages }) => (
  <div>
    <Title>Average Customer Ratings</Title>
    <Container>
      <>
        <div>
          Overall
        </div>
        <StyledStars rating={averages[0]} />
        <div>
          {averages[0]}
        </div>
      </>
      <>
        <div>
          Graphics
        </div>
        <BarRating rating={averages[1]} />
        <div>
          {averages[1]}
        </div>
      </>
      <>
        <div>
          Gameplay
        </div>
        <BarRating rating={averages[2]} />
        <div>
          {averages[2]}
        </div>
      </>
      <>
        <div>
          Lasting Appeal
        </div>
        <BarRating rating={averages[3]} />
        <div>
          {averages[3]}
        </div>
      </>
    </Container>
  </div>
);


export default RatingAverages;

RatingAverages.propTypes = {
  averages: PropTypes.arrayOf(PropTypes.number).isRequired,
};

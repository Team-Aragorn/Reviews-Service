import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import RatingSnapshot from './RatingSnapshot';
import RatingAverages from './RatingAverages';
import ReviewTiny from './ReviewTiny';

const Container = styled.div`
  display: grid;
  grid-template-areas:
    "snapshot"
    "average"
    "favorable"
    "unfavorable";
  grid-template-rows: auto auto 250px 250px;
  gap: 50px 10px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "snapshot  average"
      "favorable unfavorable";
    grid-template-rows: auto 250px;
  }

  padding: 20px 10px;
  margin-bottom: 0px;
`;

const Favorable = styled(ReviewTiny)`
  grid-area: favorable;
`;

const Unfavorable = styled(ReviewTiny)`
  grid-area: unfavorable;
`;

const ReviewSummary = (props) => {
  const {
    counts,
    averages,
    total,
    favorable,
    unfavorable,
    setter,
  } = props;

  return (
    <Container>
      <RatingSnapshot counts={counts} total={total} setter={setter} />
      <RatingAverages averages={averages} />
      <Favorable review={favorable} title="Favorable" />
      <Unfavorable review={unfavorable} title="Critical" />
    </Container>
  );
};

export default ReviewSummary;

ReviewSummary.propTypes = {
  counts: PropTypes.arrayOf(PropTypes.number).isRequired,
  averages: PropTypes.arrayOf(PropTypes.number).isRequired,
  total: PropTypes.number.isRequired,
  favorable: PropTypes.shape({
    _id: PropTypes.string,
    gameId: PropTypes.number,
    date: PropTypes.string,
    overall: PropTypes.number,
    title: PropTypes.string,
    review: PropTypes.string,
    recommend: PropTypes.bool,
    nickname: PropTypes.string,
    location: PropTypes.string,
    email: PropTypes.string,
    buyForSelf: PropTypes.bool,
    ageBracket: PropTypes.number,
    gender: PropTypes.number,
    graphics: PropTypes.number,
    gameplay: PropTypes.number,
    appeal: PropTypes.number,
    ownershipBracket: PropTypes.number,
    purchaseOnline: PropTypes.bool,
    readReviews: PropTypes.bool,
    recommendBGS: PropTypes.number,
    meta: PropTypes.shape({
      helpful: PropTypes.number,
      unhelpful: PropTypes.number,
    }),
  }).isRequired,
  unfavorable: PropTypes.shape({
    _id: PropTypes.string,
    gameId: PropTypes.number,
    date: PropTypes.string,
    overall: PropTypes.number,
    title: PropTypes.string,
    review: PropTypes.string,
    recommend: PropTypes.bool,
    nickname: PropTypes.string,
    location: PropTypes.string,
    email: PropTypes.string,
    buyForSelf: PropTypes.bool,
    ageBracket: PropTypes.number,
    gender: PropTypes.number,
    graphics: PropTypes.number,
    gameplay: PropTypes.number,
    appeal: PropTypes.number,
    ownershipBracket: PropTypes.number,
    purchaseOnline: PropTypes.bool,
    readReviews: PropTypes.bool,
    recommendBGS: PropTypes.number,
    meta: PropTypes.shape({
      helpful: PropTypes.number,
      unhelpful: PropTypes.number,
    }),
  }).isRequired,
  setter: PropTypes.func.isRequired,
};

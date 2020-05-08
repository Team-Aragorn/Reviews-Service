import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';

import ReviewBadge from './ReviewBadge';
import ReviewHeader from './ReviewHeader';
import ReviewOwned from './ReviewOwned';
import ReviewRatings from './ReviewRatings';
import ReviewRecommend from './ReviewRecommend';
import ReviewText from './ReviewText';

const Container = styled.div`
display: grid;
grid-template-columns: 60px 7fr 3fr;
grid-template-rows: auto auto auto auto 30px;
grid-template-areas:
"avatar header    badge"
"   .   review    ratings"
"   .   owned     ratings"
"   .   recommend ratings"
"   .   helpful   helpful";
gap: 0px 10px;
padding: 10px 20px 10px 10px;
`;

const Avatar = styled.div`
  grid-area: avatar;
  color: #bbb;
  font-size: 50px;
  justify-self: center;
`;

const Helpful = styled.div`
grid-area: helpful;
background: #fff2ae;
`;

const Rule = styled.hr`
  border: none;
  border-top: 1px solid;
  border-color: #d9d9d9;
`;


const ReviewListItem = (props) => {
  const { review } = props;

  return (
    <>
      <Rule />
      <Container>
        <Avatar><FontAwesomeIcon icon={faUserAlt} /></Avatar>
        <ReviewHeader review={review} />
        <ReviewBadge badge={review.purchaseOnline} />
        <ReviewText review={review.review} />
        <ReviewOwned owned={review.ownershipBracket} />
        <ReviewRecommend recommend={review.recommend} />
        <ReviewRatings review={review} />
        <Helpful />
      </Container>
    </>
  );
};

export default ReviewListItem;

ReviewListItem.propTypes = {
  review: PropTypes.shape({
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
};

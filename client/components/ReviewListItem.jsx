import React from 'react';
import styled from 'styled-components';

import Header from './Header';

const Container = styled.div`
display: grid;
grid-template-columns: 60px 7fr 3fr;
grid-template-rows: auto auto 30px 30px 30px;
grid-template-areas:
"avatar header    badge"
"   .   review    ratings"
"   .   owned     ratings"
"   .   recommend ratings"
"   .   helpful   helpful";
`;

const Avatar = styled.div`
grid-area: avatar;
background: #b3e2cd;
`;

const Badge = styled.div`
grid-area: badge;
background: #cbd5e8;
`;

const Review = styled.div`
grid-area: review;
background: #f4cae4;
line-height: 24px;
font-size: 16px;
`;

const Owned = styled.div`
grid-area: owned;
background: #e6f5c9;
`;

const Recommend = styled.div`
grid-area: recommend;
background: #f1e2cc;
`;

const Ratings = styled.div`
grid-area: ratings;
background: #cccccc;
`;

const Helpful = styled.div`
grid-area: helpful;
background: #fff2ae;
`;


const ReviewListItem = (props) => {
  const { review } = props;

  return (
    <Container>
      <Avatar />
      <Header review={review} />
      <Badge />
      <Review>{review.review}</Review>
      <Owned />
      <Recommend />
      <Ratings />
      <Helpful />
    </Container>
  );
};

export default ReviewListItem;

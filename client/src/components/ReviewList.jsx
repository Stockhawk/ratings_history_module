import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Review from './Review';

const ReviewList = props => (
  <AllReviews>
    <Review oneReview={props.stock.reviewBuy} miniHeader="Buy Summary" market={props.market} />
    <Review oneReview={props.stock.reviewSell} miniHeader="Sell Summary" market={props.market} />
  </AllReviews>
);

const AllReviews = styled.div`
  display: inline-flex:
  flex-direction: row;
  flex-wrap: nowrap;
  width: 480px;
  justify-content: space-between;
`;

ReviewList.propTypes = {
  stock: PropTypes.object,
};

export default ReviewList;

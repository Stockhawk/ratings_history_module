import React from 'react';
import { shallow, mount } from 'enzyme';

/* Components */
import RatingsApp from '../client/src/components/RatingsApp';
import DataBarChart from '../client/src/components/DataBarChart';
import DataSpotlight from '../client/src/components/DataSpotlight';
import ReviewList from '../client/src/components/ReviewList';
import HistoryApp from '../client/src/components/HistoryApp';
import Purchase from '../client/src/components/Purchase';

/* Mock Data */
const exampleStock = {
  symbol: 'AAPL',
  recBuy: 9,
  recHold: 2,
  recSell: 18,
  reviewBuy: 'Granite robust transform solutions Apple Inc. holistic Small. \n The killer extend markets Accusamus cum neque.. \n Overall, robust transform solutions Apple Inc. user-facing Unde dolorum dolores ut qui alias sunt.',
  reviewSell: 'Granite leading-edge benchmark partnerships holistic Apple Inc. Small. \n For customized disintermediate platforms Accusamus cum neque.. \n Hence, leading-edge benchmark partnerships Apple Inc. user-facing Unde dolorum dolores ut qui alias sunt.',
};

const examplePurchases = [
  {
    symbol: 'AAPL',
    purchase_id: 752,
    name: 'Apple',
    timeinforce: 'Good for day',
    submitted: '2016-09-24T00:51:08',
    status: 'filled',
    enteredQuantity: 84,
    filled: '2018-08-23T16:43:24',
    filledQuantityShares: 84,
    filledQuantityPrice: 84,
    total: 25,
  },
  {
    symbol: 'AAPL',
    purchase_id: 1976,
    name: 'Apple',
    timeinforce: 'Good for day',
    submitted: '2016-02-19T10:43:43',
    status: 'filled',
    enteredQuantity: 72,
    filled: '2017-05-06T02:31:04',
    filledQuantityShares: 72,
    filledQuantityPrice: 14,
    total: 12.33,
  },
  {
    symbol: 'AAPL',
    purchase_id: 134,
    name: 'Apple',
    timeinforce: 'Good for day',
    submitted: '2010-05-19T10:43:43',
    status: 'filled',
    enteredQuantity: 1,
    filled: '2010-05-06T02:31:04',
    filledQuantityShares: 1,
    filledQuantityPrice: 140,
    total: 140.33,
  },
];

/* Setup */
function setup() {
  const ratingsApp = shallow(<RatingsApp />);
  const dataBarChart = shallow(<DataBarChart stock={exampleStock} />);
  const dataSpotlight = shallow(<DataSpotlight stock={exampleStock} />);
  const dataReviewList = shallow(<ReviewList stock={exampleStock} />);

  const historyApp = shallow(<HistoryApp />);
  const purchase = shallow(<Purchase purchase={examplePurchases[0]} key={examplePurchases[0].purchase_id} />);
  const purchase2 = shallow(<Purchase purchase={examplePurchases[1]} key={examplePurchases[1].purchase_id} />);

  const fullRatingsApp = mount(<RatingsApp />);
  const fullHistoryApp = mount(<HistoryApp />);
  return {
    ratingsApp, dataBarChart, dataSpotlight, dataReviewList, historyApp, purchase, fullRatingsApp, fullHistoryApp,
  };
}

afterAll(() => {
  const jsdomAlert = window.alert;
  window.alert = jsdomAlert;
});

/* Test Suite */
describe('Ratings App', () => {
  test('A DataBarChart component will render', () => {
    const jsdomAlert = window.alert;
    window.alert = () => {};

    const { dataBarChart } = setup();
    expect(dataBarChart.exists()).toBe(true);
  });

  test('A DataSpotlight component will render', () => {
    const jsdomAlert = window.alert;
    window.alert = () => {};

    const { dataSpotlight } = setup();
    expect(dataSpotlight.exists()).toBe(true);
  });
});


describe('History App', () => {
  test('A purchase component will render', () => {
    const jsdomAlert = window.alert;
    window.alert = () => {};

    const { purchase } = setup();
    expect(purchase.exists()).toBe(true);
  });
});

// xdescribe('ReviewList', () => {
//   const wrapper = shallow(<ReviewList />);

//   xtest('it should render two top level nodes', () => {
//     expect(wrapper.children()).toNotHaveLength(0);
//   });
// });

describe('True test', () => {
  test('Should be true', () => {
    expect(true).toBe(true);
  });
});

import React from 'react';
import { shallow } from 'enzyme';

import App from '../client/src/components/App';
import RatingsApp from '../client/src/components/RatingsApp';
import HistoryApp from '../client/src/components/HistoryApp';

function setup() {
  const myApp = shallow(<App />);
  const ratingsApp = shallow(<RatingsApp />);
  const historyApp = shallow(<HistoryApp />);
  return { myApp, ratingsApp, historyApp };
}

afterAll(() => {
  const jsdomAlert = window.alert;
  window.alert = jsdomAlert;
});


describe('App', () => {
  test('App renders on page', () => {
    const jsdomAlert = window.alert;
    window.alert = () => {};

    const { myApp } = setup();
    expect(myApp.exists()).toBe(true);
  });
});

describe('Expert Analyst Ratings Module', () => {
  test('Analyst Ratings Module renders on page', () => {
    const jsdomAlert = window.alert;
    window.alert = () => {};

    const { ratingsApp } = setup();
    expect(ratingsApp.exists()).toBeTruthy();
  });

});


describe('History of Purchases Module', () => {
  test('History of Purchases Module renders on page', () => {
    const jsdomAlert = window.alert;
    window.alert = () => {};

    const { historyApp } = setup();
    expect(historyApp.exists()).toBeTruthy();
  });

});

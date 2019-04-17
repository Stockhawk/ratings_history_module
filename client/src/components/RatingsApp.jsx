import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import DataSpotlight from './DataSpotlight';
import DataBarChart from './DataBarChart';
import ReviewList from './ReviewList';

class RatingsApp extends React.Component {
  constructor() {
    super();
    this.state = {
      stock: {
        symbol: 'DUMMY',
        recBuy: 11,
        recHold: 8,
        recSell: 20,
        reviewBuy: 'Dummy Data Taiwan Semiconductor Manufacturing Company Limited local Ergonomic. \n The impactful transform architectures encompassing. \n Overall, granular scale convergence Taiwan Semiconductor Manufacturing Company Limited optimizing',
        reviewSell: 'Dummy Data B2C target e-tailers local Taiwan Semiconductor Manufacturing Company Limited Ergonomic. \n For B2C implement applications encompassing. \n Hence, B2C target e-tailers Taiwan Semiconductor Manufacturing Company Limited optimizing',
      },
      market: 'Bull',
    };
    this.market = this.state.pricedifferenceFromStartToToday === 'Negative' ? 'Bear' : 'Bull';
    this.getStockData = this.getStockData.bind(this);
  }

  componentDidMount() {
    this.getStockData();
  }

  getStockData() {
    const stockID = window.location.pathname.split('/')[2];
    if (!stockID) {
      alert('Please enter a stock ID in the browser window location bar, in the format [host]/[path]/stocks/stockID');
    } else {
      axios.get(`/api/ratings/${stockID}`)
        .then(res => res.data)
        .then((result) => {
          this.setState({
            stock: result[0],
          }, () => console.log('my new state is: ', this.state));
        });
    }
  }

  render() {
    return (
      <div>
        <ModuleHeader>Analyst Ratings</ModuleHeader>
        <Row>
          <Left>
            <DataSpotlight stock={this.state.stock} />
          </Left>
          <Right>
            <DataBarChart stock={this.state.stock} />
            <ReviewList stock={this.state.stock} />
          </Right>
        </Row>
      </div>
    );
  }
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 16px;
`;

const Left = styled.div`
  width: 134px;
  padding: 13px 48px 24px 24px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
`;

const ModuleHeader = styled.div`
  font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
  font-weight: normal;
  font-size: 26px;
  line-height: 30px;
  text-align: start;
  letter-spacing: -0.14px;
  border-bottom: 1px solid;
  border-color: #f4f4f5;
  padding-bottom: 16px;
  max-width: 697px;
`;

export default RatingsApp;

import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Purchase from './Purchase';

class HistoryApp extends React.Component {
  constructor() {
    super();
    this.state = {
      purchases: [
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
      ],
    };
    this.getPurchaseData = this.getPurchaseData.bind(this);
  }

  componentDidMount() {
    this.getPurchaseData();
  }

  getPurchaseData() {
    const stockID = window.location.pathname.split('/')[2];
    axios.get(`/api/history/${stockID}`)
      .then(res => res.data)
      .then((result) => {
        this.setState({
          purchases: result,
        });
      });
  }

  render() {
    const { purchases } = this.state;
    return (
      <div>
        <ModuleHeader>History</ModuleHeader>
        {purchases.map(item => <Purchase purchase={item} key={item.purchase_id} />)}
      </div>
    );
  }
}

const ModuleHeader = styled.div`
  font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
  font-weight: normal;
  font-size: 26px;
  line-height: 30px;
  text-align: start;
  letter-spacing: -0.14px;
  max-width: 673px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(23,23,24,0.05);
`;

export default HistoryApp;
//  const numberOfPurchases = this.state.purchases.length;
//  {Array(numberOfPurchases).fill(<Purchase purchase={this.state.purchases[0]}/>)}

import React, { Component } from 'react';
import BuySellBlock from './BuySellBlock';
import '../App.css';
class BuySellSection extends Component {
  render() {
    return (
      <div> 
      <div>Buy Sell Section</div>
      <div className="BuySellBlocks">
      <BuySellBlock className="BuySellBlock"> </BuySellBlock>
      <BuySellBlock className="BuySellBlock"> </BuySellBlock>
      </div>
      
      </div>
    );
  }
}

export default BuySellSection;
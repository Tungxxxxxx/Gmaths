import { NumberFormat } from 'react-native';
import React from 'react';

class PriceFormat extends React.Component {
  priceFormat = (price) => {
    // Sử dụng Intl.NumberFormat để định dạng số
    return new Intl.NumberFormat('en-DE').format(price);
  };
  render() {
    // console.log('>>>Check price:', this.priceFormat(this.props.price));
    return <>{this.priceFormat(this.props.price)}</>;
  }
}

export default PriceFormat;

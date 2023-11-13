import * as React from 'react';
import SvgUri from 'react-native-svg-uri'; // SVG Package
import testSvg from '../assets/images/icons/social-zalo.svg'; // SVG File

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <SvgUri width="200" height="200" svgXmlData={testSvg} />;
  }
}

export default Test;

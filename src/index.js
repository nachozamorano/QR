import React from 'react';
import { render } from 'react-dom';
import { QRCode } from 'react-qr-svg';
const access=1;
var url="https://friendfoods.herokuapp.com/?access="

const styles = {
  root: {
    fontFamily: 'sans-serif',
  },
  h1: {
    textAlign: 'center',
  },
  qrcode: {
    textAlign: 'center',
  },
};

export default class App extends React.Component {
  componentDidMount() {}

  render() {
    var md5 = require('md5');
    url = url + md5(access);
    return (
      <div style={styles.root}>
        <h1 style={styles.h1}>Restaurant Code</h1>
        <div style={styles.qrcode}>
          <QRCode
            level="Q"
            style={{ width: 256 }}
            value={url}
          />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
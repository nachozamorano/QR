import React from 'react';
import { render } from 'react-dom';
import { QRCode } from 'react-qr-svg';

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
    return (
      <div style={styles.root}>
        <h1 style={styles.h1}>Restaurant Code</h1>
        <div style={styles.qrcode}>
          <QRCode
            level="Q"
            style={{ width: 256 }}
            value={JSON.stringify({
              id: 1,
              name: 'Restaurant'
            })}
          />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
import React, { Component } from "react";
import QRCode from "react-qr-code";

export default class EvertonBrowQrCode extends Component {
  state = {};
  render() {
    return (
      <>
        <div style={{ height: "auto", margin: "0 auto", maxWidth: 512, width: "100%" }}>
          <QRCode size={256} style={{ height: "auto", maxWidth: "100%", width: "100%" }} value={"https://the-cosy-corner.netlify.app/everton-brow"} viewBox={`0 0 256 256`} />
        </div>
      </>
    );
  }
}

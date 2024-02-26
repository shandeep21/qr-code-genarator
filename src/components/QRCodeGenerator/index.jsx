import React, { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
  const [getInputValue, setInputValue] = useState("");
  const [getQrCode, setQrCode] = useState("");
  console.log(">>>>>>>", getInputValue);

  function handleGenerateQRCode() {
    if (getInputValue) {
      setQrCode(getInputValue);
    }
    setInputValue("");
  }

  return (
    <div>
      <div>
        <h1>QR CODE GENERATOR</h1>
        <input
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          type="text"
          name="qrcode"
          value={getInputValue}
          placeholder="Enter the value"
        ></input>
        <button
          onClick={handleGenerateQRCode}
          disabled={getInputValue ? false : true}
        >
          GENERATE
        </button>
      </div>
      <div className="qrcode-position">
        <QRCode value={getQrCode} id="qr-code-value" />
      </div>
    </div>
  );
}

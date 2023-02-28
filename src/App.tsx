import { QRCode } from "./QRCode";
import { NextQRCode } from "./NextQRCode";
import "./App.css";

function App() {
  return (
    <div className="App">
      <QRCode text="https://www.google.com/" />
      <NextQRCode text="https://www.google.com/" />
    </div>
  );
}

export default App;

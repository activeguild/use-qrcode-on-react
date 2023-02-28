import { useEffect, useState } from "react";
import QRCode from "qrcode";

export const useQRCode = (text: string) => {
  const [dataUrl, setDataUrl] = useState("");

  useEffect(() => {
    QRCode.toDataURL(text)
      .then((url) => {
        setDataUrl(url);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [text]);

  return { dataUrl };
};

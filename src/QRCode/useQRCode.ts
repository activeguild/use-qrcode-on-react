import { useEffect, useState } from "react";
import { toDataURL } from "qrcode";

export const useQRCode = (text: string) => {
  const [dataUrl, setDataUrl] = useState("");

  useEffect(() => {
    toDataURL(text)
      .then((url) => {
        setDataUrl(url);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [text]);

  return { dataUrl };
};

import React, { FC } from "react";
import { useQRCode } from "./useQRCode";

interface QRCodeProps {
  text: string;
}

export const QRCode: FC<QRCodeProps> = ({ text }) => {
  const { dataUrl } = useQRCode(text);
  return <img src={dataUrl} alt="qrcode" />;
};

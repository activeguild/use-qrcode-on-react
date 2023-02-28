import React, { FC } from "react";
import { useQRCode } from "next-qrcode";

interface QRCodeProps {
  text: string;
}

export const NextQRCode: FC<QRCodeProps> = ({ text }) => {
  const { Image } = useQRCode();

  return (
    <Image
      text={text}
      options={{
        level: "M",
        margin: 3,
        scale: 4,
        width: 200,
        color: {
          dark: "#010599FF",
          light: "#FFBF60FF",
        },
      }}
    />
  );
};

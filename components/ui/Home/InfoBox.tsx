/** @format */

import Link from "next/link";

interface InfoBoxProps {
  heading: string;
  backgroundColor?: string;
  textColor?: string;
  children: React.ReactNode;
  ButtonInfo: {
    link: string;
    text: string;
    backgroundColor: string;
    color?: string;
  };
}

const InfoBox: React.FC<InfoBoxProps> = ({
  heading,
  backgroundColor = "bg-white",
  textColor = "text-gray-800",
  children,
  ButtonInfo,
}) => {
  return (
    <div className={`${backgroundColor} p-6 rounded-lg shadow-md relative`}>
      <h2 className={`${textColor} text-2xl font-bold`}>{heading}</h2>
      <p className={`${textColor} mt-2 mb-4`}>{children}</p>
      <Link
        href={ButtonInfo.link}
        className={`${ButtonInfo.backgroundColor} ${
          ButtonInfo.color || "text-white"
        } inline-block   rounded-lg px-8 py-4 hover:bg-gray-700`}>
        {ButtonInfo.text}
      </Link>
    </div>
  );
};

export default InfoBox;

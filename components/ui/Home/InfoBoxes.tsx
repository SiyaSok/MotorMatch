/** @format */

import InfoBox from "./InfoBox";

const InfoBoxes = () => {
  return (
    <section>
      <div className='max-w-7xl mx-auto my-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
          <InfoBox
            heading={"Compare Cars"}
            ButtonInfo={{
              text: "Compare Cars Now",
              link: "/properties",
              backgroundColor: " bg-black",
            }}>
            Compare specs & pricing at a glance. See the differences that matter
            and choose with confidence.
          </InfoBox>
          <InfoBox
            heading={"Car Affordability Calculator"}
            textColor={"text-white"}
            backgroundColor={"bg-black"}
            ButtonInfo={{
              text: " Calculate My Affordability",
              link: "/",
              backgroundColor: "bg-white",
              color: "text-black",
            }}>
            Calculate your perfect car budget by factoring in your financial
            goals, income, and expenses.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;

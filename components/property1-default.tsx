import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type Property1DefaultType = {
  dimensionsText?: string;

  /** Style props */
  property1DefaultPosition?: CSSProperties["position"];
  property1DefaultTop?: CSSProperties["top"];
  property1DefaultLeft?: CSSProperties["left"];
};

const Property1Default: NextPage<Property1DefaultType> = ({
  dimensionsText,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
}) => {
  const property1DefaultStyle: CSSProperties = useMemo(() => {
    return {
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [property1DefaultPosition, property1DefaultTop, property1DefaultLeft]);

  return (
    <div
      className="w-[959.3px] h-[460.7px] text-right text-29xl text-white font-heading-2"
      style={property1DefaultStyle}
    >
      <div className="absolute top-[269px] left-[7px] inline-block w-[447px] opacity-[0.37]">
        Late Night Maggie Party for the boost
      </div>
      <img
        className="absolute top-[0px] left-[498px] rounded-[35.19px] w-[461.3px] h-[460.7px] overflow-hidden object-contain"
        alt=""
        src={dimensionsText}
      />
    </div>
  );
};

export default Property1Default;

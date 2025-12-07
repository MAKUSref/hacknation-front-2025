import React from "react";
import {
  StepPlace,
  type ILegislationStep,
} from "@/api/baseApi/legislation/types";
import redMoon from "@/assets/red-moon.svg";
import grayMoon from "@/assets/gray-moon.svg";
import rocketIcon from "@/assets/rocket.svg";

const TimelineIcon: React.FC<{ type: "rocket" | "moon-gray" | "moon" }> = ({
  type,
}) => {
  if (type === "rocket") {
    return (
      <div className="flex items-center justify-center w-20 h-20">
        <img className="mr-[30px]" src={rocketIcon} alt="Rocket Icon" />
      </div>
    );
  }

  if (type === "moon-gray") {
    return (
      <div className="flex items-center justify-center w-12 h-12">
        <img src={grayMoon} alt="Gray Moon Icon" />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-12 h-12">
      <img src={redMoon} alt="Red Moon Icon" />
    </div>
  );
};

const mapPlaceToIcon = (place: StepPlace) => {
  switch (place) {
    case "PREZYDENT":
      return <TimelineIcon type={"rocket"} />;
    case "SEJM":
      return <TimelineIcon type={"moon-gray"} />;
    case "SENAT":
      return <TimelineIcon type={"moon"} />;
    default:
      return <TimelineIcon type={"moon-gray"} />;
  }
};

const mapPlaceToBadge = (place: StepPlace) => {
  switch (place) {
    case "PREZYDENT":
      return (
        <span className="inline-block px-3 py-1 text-xs font-medium text-red-700 bg-red-100 rounded-full">
          {place}
        </span>
      );
    case "SEJM":
      return (
        <span className="inline-block px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
          {place}
        </span>
      );
    case "SENAT":
      return (
        <span className="inline-block px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
          {place}
        </span>
      );
    default:
      return <></>;
  }
};

export const Timeline: React.FC<{ items: ILegislationStep[] }> = ({
  items,
}) => {
  return (
    <div className="relative">
      {[...items].reverse().map((item, index) => (
        <div key={`${item._id}-${index}`} className="relative flex gap-4 pb-8">
          {index < items.length - 1 && (
            <div className="absolute left-[133px] top-12 w-1.5 h-full bg-gray-300 -z-10" />
          )}

          <div className="shrink-0 w-24 pt-3">
            <span className="text-sm font-medium">
              {new Date(
                (item.isActive ? item.startDate : item.endDate) ||
                  item.startDate
              ).toLocaleDateString()}
            </span>
          </div>

          <div className="shrink-0">
            {mapPlaceToIcon(
              item.isActive || item.place === StepPlace.PREZYDENT
                ? StepPlace.PREZYDENT
                : item.isOmitted || item.place === StepPlace.SENAT
                ? StepPlace.SENAT
                : StepPlace.SEJM
            )}
          </div>

          <div className="flex-1 pt-1">
            <h4 className="text-base font-semibold mb-1">{item.type}</h4>

            {item.description && (
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
            )}

            {item.place && mapPlaceToBadge(item.place)}
          </div>
        </div>
      ))}
    </div>
  );
};

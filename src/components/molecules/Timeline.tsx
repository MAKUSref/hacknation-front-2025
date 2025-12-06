import React from "react";
import redMoon from "@/assets/red-moon.svg";
import grayMoon from "@/assets/gray-moon.svg";
import rocketIcon from "@/assets/rocket.svg";

export interface TimelineItem {
  id: string;
  date: string;
  title: string;
  description?: string;
  tag?: string;
  icon: "rocket" | "moon" | "moon-gray";
}

interface TimelineProps {
  items: TimelineItem[];
}

const TimelineIcon: React.FC<{ type: TimelineItem["icon"] }> = ({ type }) => {
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

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative">
      {items.map((item, index) => (
        <div key={item.id} className="relative flex gap-4 pb-8">
          {index < items.length - 1 && (
            <div className="absolute left-[133px] top-12 w-1.5 h-full bg-gray-300 -z-10" />
          )}

          <div className="shrink-0 w-24 pt-3">
            <span className="text-sm font-medium">{item.date}</span>
          </div>

          <div className="shrink-0">
            <TimelineIcon type={item.icon} />
          </div>

          <div className="flex-1 pt-1">
            <h4 className="text-base font-semibold mb-1">{item.title}</h4>
            {item.description && (
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
            )}
            {item.tag && (
              <span className="inline-block px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                {item.tag}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

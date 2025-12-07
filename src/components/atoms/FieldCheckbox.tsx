import clsx from "clsx";
import { useState } from "react";
import { LegislationIcon } from "./LegislationIcon";
import { LegislationTag } from "@/api/baseApi/legislation/types";

type FieldCheckboxProps = {
  name: LegislationTag;
  active?: boolean;
  onChange?: (active: boolean, fieldName: LegislationTag) => void;
};

export function FieldCheckbox({
  name,
  active = false,
  onChange,
}: FieldCheckboxProps) {
  const [isActive, setIsActive] = useState(active);

  function handleClick() {
    onChange?.(!isActive, name);
    setIsActive(!isActive);
  }

  return (
    <div
      className={clsx(
        "outline outline-[#CECECE] hover:bg-[#F7F9F9] border-2 border-transparent rounded-2xl px-6 py-3 flex items-center gap-4 cursor-pointer max-md:flex-col max-md:text-center",
        isActive && "outline-primary outline-[3px] border-0"
      )}
      onClick={handleClick}
    >
      <LegislationIcon tag={name} />
      <p>{name}</p>
    </div>
  );
}

import { Select, type SelectProps } from "antd";
import { Controller, useFormContext } from "react-hook-form";

export function SelectInput({
  name,
  placeholder,
  options,
  ...props
}: SelectProps & { name: string; }) {
  const form = useFormContext();

  return (
    <Controller
      name={name}
      control={form.control}
      {...props}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <Select
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          ref={ref}
          placeholder={placeholder}
          options={options}
        />
      )}
    />
  );
}

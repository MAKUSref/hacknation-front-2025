import { type InputProps, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

export function TextInput({
  name,
  type,
  placeholder,
  error,
  ...props
}: InputProps & { name: string; error?: string }) {
  const form = useFormContext();

  return (
    <div>
      <Controller
        name={name}
        control={form.control}
        {...props}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Input
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            ref={ref}
            type={type}
            placeholder={placeholder}
            status={error ? "error" : undefined}
          />
        )}
      />
      {error && <p className="text-xs text-red-600 mt-0.5 p-0">{error}</p>}
    </div>
  );
}

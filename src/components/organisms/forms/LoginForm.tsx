import { Btn } from "@/components/atoms/Button";
import { SchemaForm } from "@/components/molecules/SchemaForm";
import { SelectInput } from "@/components/molecules/SelectInput";
import { TextInput } from "@/components/molecules/TextInput";
import { useSchemaForm } from "@/hooks/useSchemaForm";
import z from "zod";

const loginFormSchema = z.object({
  email: z.string().min(1, "Email is required"),
  country: z.string().min(1, "Country is required"),
  password: z.string().min(1, "Password is required"),
});
type LoginFormSchema = z.infer<typeof loginFormSchema>;

export function LoginForm() {
  const form = useSchemaForm(loginFormSchema);

  const onSubmit = (data: LoginFormSchema) => {
    console.log("submit");

    console.log(data);
  };

  return (
    <SchemaForm
      className="h-full flex flex-col"
      form={form}
      onSubmit={onSubmit}
    >
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <p>Email</p>
          <TextInput
            name="email"
            type="email"
            placeholder="m@example.com"
            required
            error={form.formState.errors.email?.message}
          />
        </div>
        <div className="grid gap-2">
          <p>Country</p>
          <SelectInput
            name="country"
            placeholder="Select your country"
            options={[
              { value: 'pl', label: "Poland" },
              { value: 'us', label: "United States" },
              { value: 'de', label: "Germany" },
            ]}
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <p>Password</p>
            <a
              href="#"
              className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <TextInput
            name="password"
            type="password"
            placeholder="Your password"
            required
            error={form.formState.errors.password?.message}
          />
        </div>
        <div className="flex-1 flex items-end">
          <Btn type="submit" className="w-full">
            Login
          </Btn>
        </div>
      </div>
    </SchemaForm>
  );
}

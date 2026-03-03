import { Controller } from "react-hook-form";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface FormFieldProps {
  control: any;
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
}

const FormField = ({
  control,
  name,
  label,
  placeholder,
  type = "text",
}: FormFieldProps) => {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <Input {...field} type={type} placeholder={placeholder} />
          )}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};

export default FormField;

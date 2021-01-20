import { FieldProps } from "formik";
import { TextField, TextFieldProps } from "@material-ui/core";

export const MyField: React.FC<FieldProps & TextFieldProps> = ({
  label,
  placeholder,
  field,
  error

}) => {
  
  return <TextField error={Boolean(error)} helperText={error} label={label} placeholder={placeholder} {...field} />;
};

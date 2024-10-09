/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo } from "react";
import { useField, FieldInputProps, FieldMetaProps, FieldHelperProps } from "formik";
import { AutoCompleteProps } from "antd";
import AutoComplete, { OptionType } from "../autoComplete/AutoComplete";

interface FormikAutocompleteProps extends Omit<AutoCompleteProps, "onChange" | "onBlur"> {
  name: string;
  id?: string;
  onChange?: (value: string) => void; 
  onBlur?: (value: string | undefined) => void;
  options?: OptionType[];
  label?: string;
  getOptionLabel?: (option: any) => string;
  isEqualValue: (option: any | null, opt: any) => boolean;
}

const FormikAutocomplete: React.FC<FormikAutocompleteProps> = ({
  name,
  onChange: externalOnChange,
  onBlur: externalOnBlur,
  ...props
}) => {
  const [field, meta, helpers]: [
    FieldInputProps<string>,
    FieldMetaProps<string>,
    FieldHelperProps<string>
  ] = useField(name);
  const { setValue, setTouched } = helpers;

  return (
    <>
    <AutoComplete
      {...props}
      onChange={(val: OptionType | OptionType[] | null) => {
        if (externalOnChange) {
          if (val !== null) {
            externalOnChange(val.toString()); 
          }
        }
        if (typeof val === 'string' || val === null) {
          setValue(val ?? '');
        } else if (Array.isArray(val)) {
          setValue(JSON.stringify(val)); 
        } else {
          setValue(val.label); 
        }
      }}
      onBlur={() => {
        if (externalOnBlur) {
          externalOnBlur(field.value); 
        }
        setTouched(true);
      }}
      name={name}
      value={field.value}
      error={meta.touched && meta.error ? meta.error : ""}
    />
    </>
  );
};

export default memo(FormikAutocomplete);

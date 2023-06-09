import { Controller } from "react-hook-form";
import ReactSelect from "react-select";
import { find } from "lodash";

const customStyles = {
  control: (provided) => ({
    ...provided,
    minHeight: 50,
  }),
};

const customTheme = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: "#03284c",
    primary25: "#f1f6f8",
    primary50: "#cee2eb",
    primary75: "#03284c",
  },
});

const Select = ({
  label,
  name,
  control,
  defaultValue,
  options,
  placeholder,
}) => {
  return (
    <div className="mb-4">
      {label && <label className="form-label">{label}</label>}

      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <ReactSelect
            {...field}
            id={`${name}_select`}
            instanceId={`${name}_select`}
            options={options}
            value={find(options, { value: field.value })}
            theme={customTheme}
            styles={customStyles}
            placeholder={placeholder}
            onChange={(value) => field.onChange(value?.value)}
          />
        )}
      />
    </div>
  );
};

export default Select;

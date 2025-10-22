const Select = ({
  options = [],
  onChange,
  getOptionLabel,
  getOptionValue,
  getOptionIcon,
  getOptionId,
  defaultValue,
  isMulti,
  isReadOnly = false,
  placeholder,
  disabled = false,
  initialValue,
  className,
  isHidden = false,
  id,
  notTranslate = false,
  labelHidden = false,
}) => {
  return (
    <label
      className={`Select ${className} ${isHidden ? "hidden" : ""} ${
        isReadOnly ? "disabled" : ""
      }`}
      id={id}
    >
      <select
        value={initialValue ? initialValue : defaultValue}
        placeholder={placeholder}
      >
        <selectedcontent></selectedcontent>
        {() => {
          if (options.length > 0) {
            return options.map((option, index) => {
              const key = getOptionId ? getOptionId(option) : index;
              return (
                <option key={key} value={getOptionValue(option)}>
                  {getOptionLabel(option)}
                </option>
              );
            });
          }
        }}
      </select>
    </label>
  );
};

const Dropdown = (props) => {
  const { name, value, options, onChange, style } = props;
  return (
    <select style={style} name={name} value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.key + option.lable} value={option.value}>
          {option.lable}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;

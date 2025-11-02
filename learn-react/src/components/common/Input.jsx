const Input = ({ type = 'text', value, onChange, placeholder }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '8px',
      }}
    />
  );
};

export default Input;

const PhoneNumber = ({ value, onChange }) => {
  return (
    <>
      <label htmlFor="phone">Phone Number:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="e.g. +1 555 123 4567"
        value={value}
        onChange={onChange}
        required
      />
    </>
  );
};

export default PhoneNumber;

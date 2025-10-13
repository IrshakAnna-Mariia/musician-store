const InstrumentType = ({ ref }) => {
  return (
    <>
      <label htmlFor="instrument">Instrument Type:</label>
      <select id="instrument" name="instrument" ref={ref} required>
        <option value="">-- Select an instrument --</option>
        <option value="guitar">Guitar</option>
        <option value="piano">Piano</option>
        <option value="drums">Drums</option>
        <option value="violin">Violin</option>
        <option value="vocals">Vocals</option>
        <option value="dj">DJ / Production</option>
        <option value="other">Other</option>
      </select>
    </>
  );
};

export default InstrumentType;

const Question = ({ ref }) => {
  return (
    <>
      <label htmlFor="comment">Your Question or Message:</label>
      <textarea
        id="comment"
        name="comment"
        rows="5"
        placeholder="Tell us what you're looking for..."
        ref={ref}
        required
      ></textarea>
    </>
  );
};

export default Question;

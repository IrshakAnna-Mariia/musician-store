import { useRef } from "react";

const Booking = () => {
  const phoneRef = useRef();
  const instrumentRef = useRef();
  const commentRef = useRef();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const phone = phoneRef.current.value;
    const instrument = instrumentRef.current.value;
    const comment = commentRef.current.value;

    alert(
      `Thanks for your question!\n
      Your submission:\nPhone Number: ${phone} \nInstrument Type: ${instrument} \nYour Question or Message: ${comment}`
    );

    // Clean values
    phoneRef.current.value = "";
    instrumentRef.current.value = null;
    commentRef.current.value = "";
  };

  return (
    <section class="consult-form-section">
      <h2>Book a Consult</h2>
      <form onSubmit={handleFormSubmit} class="consult-form">
        <label for="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="e.g. +1 555 123 4567"
          required
          ref={phoneRef}
        />

        <label for="instrument">Instrument Type:</label>
        <select id="instrument" name="instrument" ref={instrumentRef} required>
          <option value="">-- Select an instrument --</option>
          <option value="guitar">Guitar</option>
          <option value="piano">Piano</option>
          <option value="drums">Drums</option>
          <option value="violin">Violin</option>
          <option value="vocals">Vocals</option>
          <option value="dj">DJ / Production</option>
          <option value="other">Other</option>
        </select>

        <label for="comment">Your Question or Message:</label>
        <textarea
          id="comment"
          name="comment"
          rows="5"
          placeholder="Tell us what you're looking for..."
          ref={commentRef}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Booking;

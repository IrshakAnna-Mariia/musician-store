import { useRef, useState } from "react";

import PhoneNumber from "components/PhoneNumber";
import InstrumentType from "components/InstrumentType";
import Question from "components/Question";

const Booking = () => {
  const [phone, setPhone] = useState("");
  const instrumentRef = useRef();
  const commentRef = useRef();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const instrument = instrumentRef.current.value;
    const comment = commentRef.current.value;

    alert(
      `Thanks for your question!\n
      Your submission:\nPhone Number: ${phone} \nInstrument Type: ${instrument} \nYour Question or Message: ${comment}`
    );

    // Clean values
    setPhone("");
    instrumentRef.current.value = null;
    commentRef.current.value = "";
  };

  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };

  return (
    <section className="consult-form-section">
      <h2>Book a Consult</h2>
      <form onSubmit={handleFormSubmit} className="consult-form">
        <PhoneNumber value={phone} onChange={handleChangePhone} />

        <InstrumentType ref={instrumentRef} />

        <Question ref={commentRef} />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Booking;

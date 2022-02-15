import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import { Ctx } from '../lib/ctxProvider';
export default function ContactUs() {
  const { setShouldStick, setStickyNavCoords } = useContext(Ctx);
  useEffect(() => {
    setShouldStick(true);
    setStickyNavCoords(0);
    return () => {
      setShouldStick(false);
    };
  });
  const [selectSelected, setSelectSelected] = useState(false);
  function handleSelectChange(e) {
    e.target.value === 'default'
      ? setSelectSelected(false)
      : setSelectSelected(true);
  }
  return (
    <StyledContact>
      <h2>Contact Us</h2>
      <ContactContainer>
        <ContactInfoContainer>
          <div className="contact-row">
            <i className="icon-mobile" />
            <p className="contact-info">+447 949 442844</p>
          </div>
          <div className="contact-row">
            <i className="icon-mail" />
            <p className="contact-info">hello@aboveandbeyondsolutions.co.uk</p>
          </div>
        </ContactInfoContainer>
        <ContactForm selected={selectSelected}>
          <h4>Say Hello! 👋</h4>
          <form action="">
            <input type="text" placeholder="Your Name (Required)" />
            <input type="email" placeholder="Your Email (Required)" />
            <input type="tel" placeholder="Your Telephone (Required)" />
            <select name="" id="" onChange={handleSelectChange}>
              <option value="default">How Did You Hear About Us?</option>
              <option value="">Facebook</option>
              <option value="">Instagram</option>
              <option value="">Google</option>
              <option value="">Word of Mouth</option>
              <option value="">Other</option>
            </select>
            <textarea type="text" placeholder="Your Message (Required)" />
            <button>Send</button>
          </form>
        </ContactForm>
      </ContactContainer>
    </StyledContact>
  );
}

const StyledContact = styled.div`
  padding: 6rem 0 4rem 0;
  color: black;
  min-height: 100vh;
  h2 {
    line-height: 1;
    font-weight: 500;
    padding: 4rem 5rem;
    text-align: center;
    font-size: 2.1rem;
    color: var(--pink);
  }
`;

const ContactContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: fit-content;
`;

const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 3rem;
  .contact-row {
    display: flex;
    /* flex-direction: column; */
    /* justify-content: center; */
    align-items: center;
    margin-bottom: 1rem;
    margin-right: 2rem;
    font-size: 1rem;
  }
  i {
    color: var(--pink);
    font-size: 4rem;
  }
  .icon-mobile {
    font-size: 6rem;
    margin: 0 -1.4rem;
  }
  .contact-info {
    margin-left: 1rem;
    font-weight: 300;
  }
`;

const ContactForm = styled.div`
  width: 25rem;
  h4 {
    font-size: 1.4rem;
    text-align: center;
    font-weight: 400;
    margin-bottom: 1rem;
  }
  form {
    display: flex;
    flex-direction: column;
    font-family: 'Poppins';
    input,
    select,
    textarea {
      font-family: 'Poppins';
      padding: 0.5rem;
      margin-bottom: 1rem;
      font-weight: 300;
      box-sizing: border-box;
      &:focus {
        outline: none;
        border: 2px solid var(--pink);
      }
    }
    select {
      color: ${(props) => (props.selected === false ? '#757575' : 'black')};
    }
  }
`;

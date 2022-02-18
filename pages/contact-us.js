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
        <ContactForm>
          <h4>Say Hello! 👋</h4>
          <form action="">
            <input type="text" placeholder="Your Name (Required)" />
            <input type="email" placeholder="Your Email (Required)" />
            <input type="tel" placeholder="Your Telephone (Required)" />
            <div className="select-container">
              <div className="arrow">
                <i className="icon-down-open-big" />
              </div>
              <select name="" id="">
                <option value="default">How Did You Hear About Us?</option>
                <option value="">Facebook</option>
                <option value="">Instagram</option>
                <option value="">Google</option>
                <option value="">Word of Mouth</option>
                <option value="">Other</option>
              </select>
            </div>
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
  max-width: 100vw;
  overflow: hidden;
  h2 {
    line-height: 1;
    font-weight: 500;
    padding: 4rem 5rem;
    text-align: center;
    font-size: var(--section-heading-text);
    color: var(--pink);
    @media only screen and (max-width: 415px) {
      padding: 0;
      margin-bottom: 2rem;
    }
  }
`;

const ContactContainer = styled.div`
  margin: auto 0;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0 var(--padding);
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
`;

const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 3rem;
  .contact-row {
    display: flex;
    margin-bottom: 1rem;
    margin-right: 2rem;
    font-size: 1rem;
    align-items: center;
  }
  i {
    color: var(--pink);
    font-size: 4rem;
    text-align: center;
  }
  .icon-mobile {
    font-size: 6rem;
    margin: 0 -1.4rem;
  }
  .contact-info {
    margin-left: 1rem;
    font-weight: 300;
  }
  @media only screen and (max-width: 900px) {
    margin: 0 0 2rem 0;
    i {
      color: var(--pink);
      font-size: 2rem;
    }
    .icon-mobile {
      font-size: 3rem;
      margin: 0;
    }
    .contact-row {
      font-size: 1rem;
      flex-direction: column;
      margin-right: 0rem;
    }
    .contact-info {
      margin-left: 0rem;
    }
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
      color: #757575;
      width: 100%;
      margin-bottom: 0;
    }
    option:not(:first-of-type) {
      color: black;
    }
    .select-container {
      width: 100%;
      margin-bottom: 1rem;
      height: fit-content;
      position: relative;
    }
    .arrow {
      opacity: 0;
      position: absolute;
      top: 50%;
      right: 1px;
      transform: translate(-50%, -50%);
      i {
        font-size: 0.8rem;
        color: #757575;
      }
    }
  }
  @media only screen and (max-width: 415px) {
    width: 100%;
    button {
      font-size: 1rem;
    }
    select {
      height: 2.7rem;
      -webkit-appearance: none;
      background-color: white;
      border: 1px solid #989898;
      border-radius: 0.3rem;
    }
    form {
      .arrow {
        opacity: 1;
      }
    }
  }
`;

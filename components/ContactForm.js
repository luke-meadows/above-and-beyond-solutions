import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import useForm from '../lib/useForm';
import { useState, useRef } from 'react';
export default function ContactForm() {
  const [sending, updateSending] = useState(false);
  const [sent, setSent] = useState(false);
  const initial = {
    name: '',
    email: '',
    tel: '',
    checkbox: '',
    heard: '',
    message: '',
  };
  const [outlineRed, setOutlineRed] = useState(initial);
  const { inputs, handleChange, clearForm } = useForm(initial);
  const checkboxRef = useRef();
  function checkIfRequiredInputMissing(inputs) {
    return (
      !inputs.name ||
      !inputs.email ||
      !inputs.tel ||
      !inputs.checkbox ||
      !inputs.message
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateSending(true);
    const missing = checkIfRequiredInputMissing(inputs);
    if (missing) {
      const blankState = Object.fromEntries(
        Object.entries(inputs).map(([key, value]) => [
          key,
          `${value === '' ? 'red' : ''}`,
        ])
      );
      setOutlineRed(blankState);
      updateSending(false);
      return;
    }

    emailjs
      .send(
        'service_1lrcs1r',
        'Form_hxtxe76',
        inputs,
        'user_tUEeIDH4Mdq7YlVipFLGr'
      )
      .then(
        (response) => {
          updateSending(false);
          clearForm();
          setSent(true);
          setOutlineRed({
            name: '',
            email: '',
            tel: '',
            checkbox: '',
            heard: '',
            message: '',
          });
        },
        (err) => {
          console.log('FAILED...', err);
        }
      );
  }

  return (
    <StyledContactForm>
      <div className={sent ? 'done success' : 'done'}>
        <i className="icon-ok" />
        <p>Success</p>
      </div>
      <h2>Say Hello! 👋</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          className={outlineRed.name}
          type="text"
          name="name"
          value={inputs.name}
          onChange={handleChange}
          placeholder="Your Name (Required)"
        />
        <input
          className={outlineRed.email}
          type="email"
          name="email"
          value={inputs.email}
          onChange={handleChange}
          placeholder="Your Email (Required)"
        />
        <input
          className={outlineRed.tel}
          type="tel"
          name="tel"
          value={inputs.tel}
          onChange={handleChange}
          placeholder="Your Telephone (Required)"
        />
        <div className="select-container">
          <div className="arrow">
            <i className="icon-down-open-big" />
          </div>
          <select
            name="heard"
            value={inputs.heard}
            onChange={handleChange}
            id=""
          >
            <option value="default">How Did You Hear About Us?</option>
            <option value="facebook">Facebook</option>
            <option value="instagram">Instagram</option>
            <option value="google">Google</option>
            <option value="word of">Word of Mouth</option>
            <option value="other">Other</option>
          </select>
        </div>
        <textarea
          className={outlineRed.message}
          type="text"
          name="message"
          value={inputs.message}
          onChange={handleChange}
          placeholder="Your Message (Required)"
        />
        <div className="checkbox">
          <input
            ref={checkboxRef}
            name="checkbox"
            type="checkbox"
            value={inputs.checkbox}
            checked={inputs.checkbox}
            onChange={(e) => {
              handleChange(e);
              console.log(e.target.checked);
            }}
          />
          <label className={outlineRed.checkbox} htmlFor="checkbox">
            By ticking this box, I understand and accept Above and Beyond
            Solutions&apos; privacy policy.
          </label>
        </div>
        <button disabled={sending ? true : false} type="submit">
          Send
        </button>
      </form>
    </StyledContactForm>
  );
}

const StyledContactForm = styled.div`
  width: 25rem;
  margin-top: 1rem;
  position: relative;

  .done {
    opacity: 0;
    pointer-events: none;
    background: var(--white);
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    i {
      color: var(--pink);
      font-size: 6rem;
    }
  }
  .success {
    opacity: 1;
    pointer-events: all;
  }
  .red {
    color: var(--red);
    ::-webkit-input-placeholder {
      color: var(--red);
    }
  }
  h2 {
    font-size: 1.4rem;
    text-align: center;
    font-weight: 300;
    margin-bottom: 1rem;
  }
  form {
    display: flex;
    flex-direction: column;
    input,
    select,
    textarea {
      padding: 0.5rem;
      font-family: 'Nimbus Sans', sans-serif;
      margin-bottom: 0.5rem;
      font-weight: 100;
      box-sizing: border-box;
      @media only screen and (max-width: 415px) {
        font-size: 16px;
      }
      &:focus {
        outline: none;
        border: 2px solid var(--pink);
      }
    }
    textarea {
      height: 6rem;
    }
    button[disabled] {
      filter: brightness(0.5);
    }
    .checkbox {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 0.7rem;
    }
    label[for='checkbox'] {
      margin-left: 1rem;
      margin-top: -5px;
      font-size: 0.55rem;
      color: var(--gray);
      display: block;
      font-weight: 100;
      &.red {
        color: var(--red);
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
      margin-bottom: 0.5rem;
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

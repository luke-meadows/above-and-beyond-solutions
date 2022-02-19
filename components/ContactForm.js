import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import useForm from '../lib/useForm';
export default function ContactForm() {
  const { inputs, handleChange } = useForm({
    name: '',
    email: '',
    tel: '',
    heard: '',
    message: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        inputs,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (err) => {
          console.log('FAILED...', err);
        }
      );
  }

  return (
    <StyledContactForm>
      <h4>Say Hello! 👋</h4>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={inputs.name}
          onChange={handleChange}
          placeholder="Your Name (Required)"
        />
        <input
          type="email"
          name="email"
          value={inputs.email}
          onChange={handleChange}
          placeholder="Your Email (Required)"
        />
        <input
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
            <option value="">Other</option>
          </select>
        </div>
        <textarea
          type="text"
          name="message"
          value={inputs.message}
          onChange={handleChange}
          placeholder="Your Message (Required)"
        />
        <button type="submit">Send</button>
      </form>
    </StyledContactForm>
  );
}

const StyledContactForm = styled.div`
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

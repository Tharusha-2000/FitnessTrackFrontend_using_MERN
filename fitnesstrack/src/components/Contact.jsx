import React, { useRef, useState } from "react";
import styled from "styled-components";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* Center vertically */
  background-color: white; /* Set background to white */
  height: 100vh;
  padding: 40px;
  @media (max-width: 960px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  width: 100%;
  max-width: 1200px;
  gap: 20px;
  @media (max-width: 960px) {
    flex-direction: column;
    gap: 20px; /* Space between contact form and social icons on mobile */
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media (max-width: 960px) {
    order: 2; /* Place below contact form on mobile */
  }
`;

/* Right column for the contact form */
const RightColumn = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 960px) {
    flex: none;
    margin-bottom: 20px; /* Add space between form and icons on mobile */
  }
`;

/* Social media icon styles */
const SocialIcons = styled.div`
  display: flex;
  justify-content: center; /* Center icons horizontally */
  gap: 20px;
  @media (max-width: 960px) {
    font-size: 24px; /* Adjust font size on mobile */
  }
`;

const SocialIcon = styled.a`
  font-size: 32px;
  color: #3b5998; /* Default color for Facebook */
  transition: color 0.3s;
  
  &:hover {
    color: #1d3a91; /* Darker shade on hover */
  }

  &:nth-child(2) {
    color: #e4405f; /* Instagram color */
    
    &:hover {
      color: #d82c4d; /* Darker Instagram shade on hover */
    }
  }
`;

const ContactForm = styled.form`
  width: 100%;
  max-width: 400px; /* Reduced size */
  display: flex;
  flex-direction: column;
  background-color: white; /* Changed color to white */
  border: 1px solid rgba(0, 0, 0, 0.125); /* Changed border color to light gray */
  padding: 32px;
  border-radius: 22px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 24px; /* Changed box shadow color to black */
  gap: 12px;
  margin: 0 auto;
`;

const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 10px 14px;
  margin-bottom: 12px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 10px 14px;
  margin-bottom: 12px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  border-radius: 12px;
  border: none;
  color: white;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

const Contact = () => {
  const form = useRef();
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (e) => {
    if (!isValid) {
      e.preventDefault();
      alert("Please enter a valid email address");
      return;
    }

    // e.preventDefault();
    // emailjs
    //   .sendForm(
    //     "service_l9n3zv9",
    //     "template_tbaaokr",
    //     form.current,
    //     "EiqRfyL8sSjrN4iUu"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       alert("Message Sent");
    //       form.current.reset();
    //     },
    //     (error) => {
    //       console.log(error);
    //       alert(error);
    //     }
    //   );
  };

  const handleEmailChange = (e) => {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    setIsValid(emailRegex.test(e.target.value));
  };

  return (
    <Container>
      <Wrapper>
        {/* Right column for form */}
        <RightColumn>
          <ContactForm ref={form} onSubmit={handleSubmit}>
            <ContactTitle>Contact Us</ContactTitle>
            <ContactInput
              placeholder="Your Email"
              name="from_email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Please enter a valid email address"
              required
              onChange={handleEmailChange}
            />
            <ContactInput placeholder="Your Name" name="from_name" />
            <ContactInput placeholder="Subject" name="subject" />
            <ContactInputMessage
              placeholder="Message"
              name="message"
              rows={4}
            />
            <ContactButton type="submit" value="Send" />
          </ContactForm>
        </RightColumn>

        {/* Left column for social media icons */}
        <LeftColumn>
          <SocialIcons>
            <SocialIcon href="https://www.facebook.com" target="_blank">
              <FaFacebookF />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com" target="_blank">
              <FaInstagram />
            </SocialIcon>
          </SocialIcons>
        </LeftColumn>
      </Wrapper>
    </Container>
  );
};

export default Contact;






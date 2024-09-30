import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Button, ContactContainer, ContactInfo, ErrorText, Form, IconLink, SocialIcons } from './Contact.styled';
import { Input } from './components/Input';
import { useEffect, useState } from 'react';
import { checkInput } from './helper';
import { sendFormDataByEmail } from './sendEmail';
import { SuccessAnimation } from './components/SuccessAnimation';
import 'animate.css';
import { LoadingSpinner } from './components/LoadingSpinner';

const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const servicesId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | undefined>();
  const [sendingEmail, setSendingEmail] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if(error){
      setError(undefined)
    }
  }, [name, email, message])

  const cleanForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setError(undefined)
  }

  const submit = async () => {
    setSendingEmail(true);
    checkInput(name, setError);
    checkInput(email, setError);
    checkInput(message, setError);

    if(!error && name.length > 3 && email.length > 3 && message.length > 3){
      const templateParams = {
        from_name: name,
        reply_to: email,
        message: message,
      };

      const response = await sendFormDataByEmail(
        templateParams,
        servicesId,
        templateId,
        publicKey
      );

      if(response === "SUCCESS"){
        setFormSubmitted(true);
        cleanForm();
      } else {
        setError("There was an error on the server, please try again later.")
      }
    }
  }

  return (
    <ContactContainer className="animate__animated animate__fadeIn">
      { formSubmitted && (
        <SuccessAnimation />
      )}
      { !formSubmitted && sendingEmail && (
        <LoadingSpinner />
      )}
      { !formSubmitted && !sendingEmail && (
        (
          <Form>
            <Input label='Name' value={name} onChange={setName} />
            <Input label='Email' value={email} onChange={setEmail} />
            <Input 
              label='Message' 
              value={message} 
              onChange={setMessage} 
              isTextarea={true} 
              error={!!error}
            />
            { error && (
              <ErrorText>{error}</ErrorText>
            )}
            <Button type='button' onClick={submit}>Send</Button>
          </Form>
        )
      )}

      <ContactInfo>
        <p>Email: raul.rod16124@gmail.com</p>
      </ContactInfo>

      <SocialIcons>
        <IconLink href="https://github.com/raulrod16124" target="_blank">
          <FaGithub />
        </IconLink>
        <IconLink href="https://www.linkedin.com/in/raul-rod/" target="_blank">
          <FaLinkedin />
        </IconLink>
      </SocialIcons>
    </ContactContainer>
  );
};

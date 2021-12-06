import React, { useState } from "react";
import emailjs from "emailjs-com";

//
//
//

import tw from "twin.macro";
import styled from "styled-components";
import EmailIllustrationSrc from "images/email-illustration.svg";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;
const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;
const FormContact = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`;
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`;
const Textarea = styled(Input).attrs({ as: "textarea" })`
  ${tw`h-24`}
`;
const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`;
const Actions = tw.div`flex flex-col items-center sm:flex-row justify-center lg:justify-start mt-8`;

//
//
//

const Form = () => {
  const frmContact = {
    userEmail: "",
    concernCategory: "",
    emailTitle: "",
    emailDetails: "",
  };
  const [contact, setContact] = useState(frmContact);
  const [showMessage, setShowMessage] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "default_service",
        "template_49r0khf",
        contact,
        "user_zViBhJ83UDoULNP7119Z6"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setContact(frmContact);
          setShowMessage(true);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };
  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={true}>
          <TextContent>
            <Subheading>Formulario de Contacto</Subheading>
            <Heading>Hablamos?</Heading>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Description>
            <FormContact onSubmit={handleSubmit}>
              <Input
                required
                type="text"
                value={contact.userEmail}
                name="userEmail"
                onChange={handleChange}
                placeholder="E-mail"
              />
              <Input
                value={contact.emailTitle}
                required
                type="text"
                name="emailTitle"
                onChange={handleChange}
                placeholder="Asunto"
              />
              <Textarea
                required
                name="emailDetails"
                onChange={handleChange}
                className="form-control"
                placeholder="Tú mensaje aquí"
                value={contact.emailDetails}
              />
              <SubmitButton type="submit">Enviar</SubmitButton>
              <Actions>
                {showMessage ? (
                  <>
                    <p>
                      ¡Gracias por tu correo! lo he recibido correctamente.{" "}
                      <br /> Me pondré en contacto contigo lo antes posible.
                    </p>
                  </>
                ) : (
                  ``
                )}
              </Actions>
            </FormContact>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
export default Form;

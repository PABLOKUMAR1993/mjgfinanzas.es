import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({ cards = null, heading = "Contacta Conmigo", subheading = "Métodos de Contacto", description = "Dispongo de diferentes vías para hablar. Tengo una oficina en Mota del Cuervo, otra en El Pedernoso, puedes llamarme, atiendo WhatsApp, correo electrónico, LinkedIn, Instagram y Facebook." }) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) title - the title of the card
   *  2) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      title: "Oficina de Mota del Cuervo",
      description: "Vivero de Empresas en el Pol. Ind. La Serna (Mota del Cuervo).",
      url: "https://www.google.es/maps/place/Vivero+de+Empresas+de+Mota+del+Cuervo/@39.48694,-2.8809617,17z/data=!3m1!4b1!4m5!3m4!1s0xd6844f35e59f323:0x37a43c55b802db65!8m2!3d39.4869359!4d-2.878773?shorturl=1"
    },
    { 
      title: "Oficina de El Pedernoso",
      description: "Vivero de Empresas en el Pol. Ind. (El Pedernoso).",
      url: "https://www.google.es/maps/place/16638+El+Pedernoso,+Cuenca/@39.4843989,-2.7468097,17z/data=!3m1!4b1!4m5!3m4!1s0xd68685a6c355a7f:0x2f0b4f5a410bd323!8m2!3d39.483918!4d-2.744386?shorturl=1"
    },
    { 
      title: "Teléfono / WhatsaApp",
      description: "+34 677 75 82 45.",
      url: "tel:677758245"
    },
    { 
      title: "Correo Electronico",
      description: "miriam.jimenez@bancomediolanum.es",
      url: "mailto:miriam.jimenez@bancomediolanum.es"
    },
    { 
      title: "LinkedIn",
      description: "@Miriam Jiménez García",
      url: "https://www.linkedin.com/in/miriam-jim%C3%A9nez-garc%C3%ADa-/"
    },
    { 
      title: "Facebook",
      description: "@Miriam Jméz García",
      url: "https://www.facebook.com/miriam.jimenezgarcia.52"
    },
    { 
      title: "Instagram",
      description: "@mjgfinanzas",
      url: "https://www.instagram.com/mjgfinanzas/?hl=es"
    },
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="textContainer">
                <a href={card.url} target="_blank"><span className="title">{card.title || "Fully Secure"}</span></a>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};

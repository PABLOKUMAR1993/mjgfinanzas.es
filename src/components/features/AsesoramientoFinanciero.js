import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription, SectionDescriptionPersonalizado } from "components/misc/Typography.js";

import defaultCardImage from "images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import FastIconImage from "images/fast-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
import SimpleIconImage from "images/simple-icon.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`w-full`;
const Heading = tw(SectionHeading)`w-full text-left`;
const Description = tw(SectionDescriptionPersonalizado)`w-full`;

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

export default ({
  cards = null,
  heading = "Lo importante eres tú, escuchar tus necesidades y objetivos financieros. Quiero darte la estrategia que necesitas.",
  subheading = "",
  description = (
    <>
      <p>
        Mi experiencia en el asesoramiento financiero, mi profesionalidad y una
        forma de trabajar personalizada esta disponible para TI.
      </p>
      <br />
      <h1>
        <b>
          Lo importante eres tú, escuchar tus necesidades y objetivos
          financieros. Quiero darte la estrategia que necesitas. Siempre,
          durante todo el ciclo vital y financiero.
        </b>
      </h1>
      <br />
      <p>
        Para que inviertas es importante que cuentes con un asesor financiero y
        profesional que gestione tu patrimonio de forma objetiva, segura,
        rentable y sin conflicto de interés.
      </p>
      <br />
      <p>
        <b>
          No todos los productos financieros son adecuados para todos los
          ahorradores, ni para cualquier momento del mercado.
        </b>
      </p>
      <br />
      <p>
        Existen con más o menos riesgo, con mayor o menor liquidez, corto, medio
        o largo plazo, en euros o en otras monedas, etc.
      </p>
      <br />
      <p>
        Hay que ser experto para elegir el producto, la cartera adecuada para tu
        perfil y el momento de mercado. Además de tener estrategias innovadoras
        y sencillas para minimizar los riesgos y maximizar las oportunidades.
      </p>
      <br />
      <p>
        <b>
          Importante: facilitarte tu vida y tu salud financiera, y para ello te
          ofrezco consultoría financiera online, continua.
        </b>
      </p>
      <br />
      <p>
        Mi consultoría financiera se basa en conocer a la perfección tu salud
        financiera y patrimonial y darte una herramienta muy potente que te
        ayudará, hoy y siempre. El estudio y análisis me permite presentarte una
        propuesta de inversión que se adecúe a tus circunstancias y necesidades,
        el seguimiento de la misma es continuo y eso hace que, cuando sea
        necesario, te proponga actualizaciones o cambios para que siempre tengas
        la combinación de productos óptima en cualquier situación de mercado.
      </p>
      <br />
      <p>
        Tu peligro continuo es: la inflación, los impuestos y el conflicto de
        interés.
      </p>
      <br />
      <p>
        <b>
          Un buen asesoramiento financiero debe buscar siempre la mejor
          combinación de productos o instrumentos, teniendo en cuenta su posible
          rentabilidad, su fiscalidad y los cambios que se puedan producir.
        </b>
      </p>
    </>
  ),
}) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      imageSrc: ShieldIconImage,
      title: "Secure",
      description:
        "We strictly only deal with vendors that provide top notch security.",
    },
    { imageSrc: SupportIconImage, title: "24/7 Support" },
    { imageSrc: CustomizeIconImage, title: "Customizable" },
    { imageSrc: ReliableIconImage, title: "Reliable" },
    { imageSrc: FastIconImage, title: "Fast" },
    { imageSrc: SimpleIconImage, title: "Easy" },
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <ThreeColumnContainer>
        <VerticalSpacer />
        <Subheading>{subheading}</Subheading>
        <Heading>{heading}</Heading>
        <VerticalSpacer />
        <Description>{description}</Description>
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};

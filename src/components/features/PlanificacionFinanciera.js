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
  heading = "La planificación financiera...",
  subheading = "",
  description = (
    <>
      <p>
        ...es un proceso que me permite conocer tu situación financiera para
        determinar tus propósitos y objetivos, y desarrollar las estrategias
        correctas que nos llevarán al logro de tus metas
      </p>
      <br />
      <p>
        <b>
          Iniciar un proceso de planificación financiera empieza con la toma de
          conciencia de que tienes unas necesidades y objetivos en la vida que
          quieres cubrir, y para los que requieres capital.
        </b>
      </p>
      <br />
      <p>
        <b>PONEMOS FOCON EN TU:</b>
      </p>
      <br />
      <ol>
        <li>· manejo de efectivo y presupuestos.</li>
        <li>· planes de salud.</li>
        <li>· administración de riesgos y seguros.</li>
        <li>· impuestos.</li>
        <li>· inversiones.</li>
        <li>· planificación para la jubilación.</li>
        <li>· planificación testamentaria.</li>
      </ol>
      <br />
      <p>
        El proceso de planificación financiera personal es un proceso integral.
        Trabajo en todas las áreas y siempre mantengo la visión 360 del
        conjunto.
      </p>
      <br />
      <p>
        <b>PARA ALCANZAR EL ÉXITO ES CLAVE:</b>
      </p>
      <p>
        Conocimiento y decisiones inteligentes a lo largo del proceso de
        planificación financiera.
      </p>
      <p>
        PODEMOS: incrementar las oportunidades de lograr tus objetivos trazados.
      </p>
      <p>
        La planificación financiera requiere establecer en primer lugar tus
        valores, metas y objetivos para tu vida/salud financiera personal.
      </p>
      <br />
      <p>Adapto cada plan de acción a la consecución de tus objetivos.</p>
      <br />
      <p>
        <b>¿CONOCES LA IMPORTANCIA DE UN PRESUPUESTO?</b>
      </p>
      <p>
        <b>ES INCREÍBLE TANTO QUE TÚ DEBES TENER TU PRESUPUESTO PERSONAL</b>
      </p>
      <br />
      <p>Este te ayuda a:</p>
      <p>
        conseguir el ahorro, inversión, liquidez y solvencia, con los ingresos,
        los gastos y los planes de acción propuestos teniendo como finalidad
        conseguir los objetivos financieros deseados.
      </p>
      <br />
      <p>
        <b>
          Para realizar un plan de acción, se debe elaborar una lista de todas
          las cosas que deseas alcanzar financieramente, organizándolas según tu
          prioridad.
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

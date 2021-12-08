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
  heading = "Tener un gran patrimonio...",
  subheading = "",
  description = (
    <>
      <p>
        <b>...a veces nos puede producir dolor de cabeza</b> Estoy especializada
        en la gestión patrimonial de personas físicas. Realizo un servicio
        integral, desde la recopilación de información hasta el seguimiento
        periódico de las inversiones.
      </p>
      <br />
      <p>
        Todo el proceso es fruto de una entrevista personal contigo donde
        estableceremos tus objetivos vitales, del análisis y estudio
        económico-financiero, fiscal y legal de tu situación actual que tendrá
        como resultado una planificación financiera a tu medida.
      </p>
      <br />
      <p>
        <b>¿Y PERSONAS JURÍDICAS?</b>
      </p>
      <p>
        <b>¡TAMBIÉN!</b>
      </p>
      <br />
      <p>Si eres:</p>
      <p>
        <b>
          Empresaria/o, Directiva/o, Emprendedor/a, tienes importantes ingresos
          por tu trabajo o por la venta de tu participación en tu empresa
        </b>
        , y quieres tener una mejor organización y planificación financiera
        acompañado/a de la mano de una profesional de confianza que te ayude
      </p>
      <p>
        <b>¡ESTOY DISPUESTA A TRABAJAR CONTIGO!</b>
      </p>
      <br />
      <p>
        También para un importante recibido por herencia o por la buena gestión
        de la empresa familiar,{" "}
        <b>
          este servicio te ayudará a gestionar de forma eficiente y activa tu
          patrimonio.
        </b>
      </p>
      <br />
      <p>
        Conozco una plataforma amplia de instrumentos de inversión tanto
        financieros como inmobiliarios o empresariales, dependiendo de tu perfil
        como inversor, de tus necesidades y objetivos, de tu capital disponible,
        así como del horizonte temporal de liquidez.
      </p>
      <br />
      <p>
        <b>
          Colaboro con una asesora fiscal, especialista en tributación de
          personas físicas, un bufete legal de primer nivel que trabaja desde
          hace 30 años en ayudar a sus clientes a hacer crecer su patrimonio con
          una buena planificación legal, hereditaria e inmobiliaria, y con
          varias consultoras de inversión empresarial.
        </b>
      </p>
      <br />
      <p>
        Mi nivel de exigencia y seguimiento hace que la cartera de clientes
        gestionados no pueda exceder de un determinado volumen para mantener
        altos estándares de calidad, atención y resultados.
      </p>
      <br />
      <p>
        <b>
          El 80% de mis clientes vienen referenciados por mis clientes actuales.
        </b>
      </p>
      <br />
      <p>
        <b>Este servicio incluye:</b>
      </p>
      <br />
      <ol>
        <li>
          · Las visitas con el cliente para recabar toda la información
          necesaria para el análisis de su situación financiera y patrimonial
          actual.
        </li>
        <li>· El estudio económico-financiero, fiscal y legal.</li>
        <li>
          · La planificación financiera de acuerdo a los resultados del análisis
          y del estudio y de los objetivos vitales del cliente.
        </li>
        <li>
          · Las diversas propuestas de inversión respetando los horizontes
          temporales de los objetivos vitales a cubrir.
        </li>
        <li>
          · La implementación de cada propuesta aceptada y consensuada con el
          cliente.
        </li>
        <li>
          · La gestión de las inversiones y el seguimiento periódico acordado
          con el cliente.
        </li>
      </ol>
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

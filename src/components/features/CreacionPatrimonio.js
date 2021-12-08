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
  heading = "¿Crear un patrimonio? SI.",
  subheading = "",
  description = (
    <>
      <p>
        Y significa: ahorrar para tu futuro y es una necesidad esencial si
        quieres un futuro de calidad.
      </p>
      <br />
      <p>
        <b>NO TODO ES AHORRAR.</b>
      </p>
      <br />
      <p>
        Hay que ahorrar planificando, pensando tanto en las necesidades a corto,
        como a medio y a largo plazo.
      </p>
      <br />
      <p>
        Crear un patrimonio requiere tiempo, y el objetivo final del mismo es
        dar cobertura a necesidades a medio y sobretodo largo plazo.
      </p>
      <br />
      <p>
        <b>La creación de un patrimonio te dará tranquilidad en el futuro.</b>
      </p>
      <br />
      <p>
        Toda persona capaz de generar ahorro (por pequeño que sea) debe
        invertir, ya que cuanto antes se empieza a ahorrar, más inversión se
        acumula y antes se puede contar con un patrimonio.
      </p>
      <br />
      <p>
        <b>El mejor aliado es el tiempo.</b>
      </p>
      <br />
      <p>
        SOLO ES NECESARIO tener clara la idea de que en unos años, con
        constancia en el ahorro y una inversión correcta del mismo, tendremos
        acumulado un capital y unos intereses que nos permitirán disfrutar de
        tranquilidad.
      </p>
      <br />
      <p>
        <b>
          Cada cliente, cada familia, es diferente en sus ingresos y gastos y en
          su capacidad de ahorro periódico.
        </b>
      </p>
      <br />
      <p>
        Realizo un trabajo conjunto con el cliente para determinar la cantidad
        que puede ahorrar, y con qué periodicidad (mensual, trimestral…) y, a
        partir de aquí, llevo a cabo un estudio del perfil inversor del cliente,
        del tiempo y el capital que desea conseguir.
      </p>
      <br />
      <p>
        <b>
          Para la creación de patrimonio se deben utilizar productos financieros
          que:
        </b>
      </p>
      <br />
      <ol>
        <li>· Diversifiquen en el horizonte temporal.</li>
        <li>· En el tipo de título.</li>
        <li>· En el ámbito sectorial y geográfico.</li>
        <li>
          · Por supuesto en mercados con diferente potencial de crecimiento.
        </li>
      </ol>
      <br />
      <p>
        <b>
          Trabajo con diferentes estrategias para que las inversiones realizadas
          sean siempre líquidas.
        </b>
      </p>
      <br />
      <p>
        Con la tranquilidad de poder disponer de su inversión en el momento en
        que lo necesite. Mi constante es que el cliente comparta las bondades de
        invertir periódicamente y con constancia. Mensualmente es la mejor
        manera, ya que aprovecharemos aleatoriamente todas las oportunidades de
        los mercados. En otros casos la periodicidad será trimestral.Y siempre
        trabajo el dejar remanentes sin invertir, para en los momentos en que
        los mercados están bajos poder invertir aprovechando de forma consciente
        un mejor precio.
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

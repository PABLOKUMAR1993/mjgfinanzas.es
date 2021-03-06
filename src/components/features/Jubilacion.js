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
  heading = "Te pido un favor que puede solucionar tu futuro.",
  subheading = "",
  description = (
    <>
      <p>Te pido un favor que puede solucionar tu futuro.</p>
      <br />
      <p>
        Toma consciencia de estas preguntas y responde de forma realista y
        seria:
      </p>
      <br />
      <p>
        ??Crees que vas a tener una prestaci??n de jubilaci??n adecuada al nivel de
        vida?
      </p>
      <br />
      <p>??Sabes cu??nto va a ser la cuant??a mensual?</p>
      <br />
      <p>
        Si tienes imprevistos, gastos adicionales, contratar una persona para
        ayuda a domicilio; ??tendr??s suficiente dinero?
      </p>
      <br />
      <p>
        Y si no tienes un patrimonio disponible para a??adir a tu prestaci??n ??qu??
        har??as?
      </p>
      <br />
      <p>
        Si quieres llegar a tu jubilaci??n de lujo, con la calidad que te
        mereces, trabaja hoy para ello. Muy poco a poco.
      </p>
      <br />
      <p>
        Es algo m??s que elegir un producto y esperar a que genere beneficios
        mientras acaba tu vida laboral, sino que se trata de un proceso de
        revisi??n constante.
      </p>
      <br />
      <p>
        <b>
          El an??lisis tiene que ser din??mico, y revisado asiduamente, dado que
          tu situaci??n econ??mica, familiar y personal es variable, y la cartera
          o inversi??n destinada a la jubilaci??n pueden quedarse desfasada si no
          tiene en cuenta esos factores.
        </b>
      </p>
      <br />
      <p>
        <b>
          La planificaci??n de la jubilaci??n te asegura la independencia
          financiera y el estilo de vida que quieres una vez te jubiles.
        </b>
        Mi inter??s es protegerte contra el riesgo de sobrevivir a tus recursos
        financieros, es decir, que vivas m??s a??os que el patrimonio que tengas.
      </p>
      <br />
      <p>
        El ahorro y la inversi??n para cubrir la etapa de jubilaci??n debe estar
        dentro de tu planificaci??n financiera, y mi experiencia me lleva a hacer
        hincapi?? en esta previsi??n ya que sigue siendo la gran asignatura
        pendiente de la inmensa mayor??a de personas en edad laboral.
      </p>
      <br />
      <p>
        Debes de planificarla con el fin de poder mantener tu nivel de vida, y
        afrontar los futuros gastos de vejez cuando los ingresos los veas
        disminuidos de un mes para otro de manera sustancial el d??a que te
        jubiles.
      </p>
      <br />
      <p>
        <b>
          Preparar tu jubilaci??n es asegurar tu bienestar en la tercera edad.
        </b>
      </p>
      <br />
      <p>
        Conociendo tu situaci??n actual y la situaci??n que quieres tener en tu
        jubilaci??n realizar?? la propuesta m??s adecuada para garantizarte en el
        futuro una jubilaci??n acorde a c??mo quieras vivirla, con las inversiones
        y productos financieros m??s adecuados para conseguir tu objetivo.
      </p>
      <br />
      <p>
        <b>
          {" "}
          Un asesoramiento para tu jubilaci??n, independiente y sin conflicto de
          intereses, en el que t?? eres el centro.
        </b>
      </p>
      <br />
      <p>
        Las inversiones elegidas se adaptar??n plenamente a tu situaci??n
        personal, laboral y econ??mica en cada momento con absoluta honestidad y
        flexibilidad, mediante el uso de productos adecuados, y estrategias
        innovadoras que te garanticen rentabilidad, seguridad y la m??xima
        liquidez posible.
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

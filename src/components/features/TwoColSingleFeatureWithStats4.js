import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import StatsIllustrationSrc from "images/stats-illustration.svg";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
import miriam1 from "../../images/miriam_foto_1.jpg";
import miriam2 from "../../images/miriam_foto_2.jpg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto relative`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Statistics = tw.div`flex flex-col items-center sm:block text-center md:text-left mt-4`;
const Statistic = tw.div`text-left sm:inline-block sm:mr-12 last:mr-0 mt-4`;
const Value = tw.div`font-bold text-lg sm:text-xl lg:text-2xl text-secondary-500 tracking-wide`;
const Key = tw.div`font-medium text-primary-700`;

const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-8 md:mt-10 text-sm inline-block mx-auto md:mx-0`;

const DecoratorBlob = styled(SvgDotPattern)((props) => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
]);

export default ({
  subheading = "",
  heading = <>¿Porqué ahora en Banco Mediolanum?</>,
  description = (
    <>
      <p>
        Después de escribir de forma resumida mi experiencia laboral y personal,
        ahora quiero hablaros de la profesión que desempeño hoy de la mano de{" "}
        <b>Banco Mediolanum</b>.
      </p>
      <br />
      <p>
        Estoy aquí en primer lugar porque después de trabajar de muchas cosas me
        he dado cuenta que{" "}
        <i>
          las finanzas y la protección es algo que siempre ha ido ligado a mí
        </i>
        .{" "}
        <b>
          <i>
            Siempre digo que para saber elegir y saber lo que nos gusta hay que
            hacer y probar de todo
          </i>
        </b>
        . Bien, eso hice y después supe que esta era <b>mi vocación</b>.
      </p>
      <br />
      <p>
        ¿Por qué? <b>Soy libre</b> y <b>feliz</b>. <b>Jefa de mi vida</b>. Tengo{" "}
        <b>
          <i>libertad financiera</i>
        </b>
        , decido y planifico de forma inteligente para que todo salga bien. Sin
        estrategia y sin plan al final estamos a merced de lo que la vida
        decida. Y{" "}
        <b>
          lo mejor aún es que le ofrezco <i>todo este bienestar</i> a mis
          clientes
        </b>
        . Les ayudo a su estrategia, para que a lo largo del ciclo financiero
        alcancen sus metas <b>con el mínimo esfuerzo</b>, el resto lo hará{" "}
        <b>la 8ª maravilla del mundo: el interés compuesto</b>.
      </p>
    </>
  ),
  primaryButtonText = "",
  primaryButtonUrl = "",
  imageSrc = miriam2,
  imageCss = null,
  imageContainerCss = null,
  imageDecoratorBlob = false,
  imageDecoratorBlobCss = null,
  imageInsideDiv = false,
  statistics = null,
  textOnLeft = false,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  //Change the statistics variable as you like, add or delete objects
  const defaultStatistics = [
    {
      key: "",
      value: "",
    },
    {
      key: "",
      value: "",
    },
    {
      key: "",
      value: "",
    },
  ];

  if (!statistics) statistics = defaultStatistics;

  return (
    <Container>
      <TwoColumn css={!imageInsideDiv && tw`md:items-center`}>
        <ImageColumn css={imageContainerCss}>
          {imageInsideDiv ? (
            <Image imageSrc={imageSrc} css={imageCss} />
          ) : (
            <img src={imageSrc} css={imageCss} alt="" />
          )}
          {imageDecoratorBlob && <DecoratorBlob css={imageDecoratorBlobCss} />}
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};

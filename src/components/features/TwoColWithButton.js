import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import miriam1 from "../../images/Mi_Historia.jpg";
import {ReactComponent as SvgDotPattern } from "images/dot-pattern.svg"

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)(props => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.img(props => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const DecoratorBlob = styled(SvgDotPattern)(props => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
])

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const PrimaryButton = styled(PrimaryButtonBase)(props => [
  tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`,
  props.buttonRounded && tw`rounded-full`
]);


export default ({
  subheading = "Mi Historia",
  heading = (
    <>
      Permíteme que me presente, soy <span tw="text-blue-700">Miriam.</span>
    </>
  ),
  description = (
    <>
      <p>
        Desde que entré en la Universidad de Albacete en 2011, para cursar el 
        <b> Grado de Administración y Dirección de Empresas</b>, tenía muy claro que en
        algún momento de mi vida, <b><i>emprendería</i></b>.
      </p>
      <br />
      <p>
        Analicé las circunstancias de 2014 y decidí apostar por una formación
        más focalizada. Elegí <b>Master en Comercio Internacional y sus Técnicas</b>.
        Con esta formación me incorporé al mercado laboral en el que he estado hasta hoy en día.
      </p>
    </>
  ),
  primaryButtonText = "Leer historia completa",
  primaryButtonUrl = "/Conoceme",
  imageSrc = miriam1,
  buttonRounded = true,
  imageRounded = true,
  imageBorder = false,
  imageShadow = true,
  imageCss = null,
  imageDecoratorBlob = false,
  imageDecoratorBlobCss = null,
  textOnLeft = false,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image
            css={imageCss}
            src={imageSrc}
            imageBorder={imageBorder}
            imageShadow={imageShadow}
            imageRounded={imageRounded}
          />
          {imageDecoratorBlob && <DecoratorBlob css={imageDecoratorBlobCss} />}
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Subheading>{subheading}</Subheading>
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <PrimaryButton
              buttonRounded={buttonRounded}
              as="a"
              href={primaryButtonUrl}
            >
              {primaryButtonText}
            </PrimaryButton>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};

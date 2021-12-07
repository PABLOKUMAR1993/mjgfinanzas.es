import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import tw from "twin.macro";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import { ReactComponent as QuotesLeftIcon } from "../../images/quotes-l.svg";
import { ReactComponent as QuotesRightIcon } from "../../images/quotes-r.svg";
import { ReactComponent as ArrowLeftIcon } from "../../images/arrow-left-2-icon.svg";
import { ReactComponent as ArrowRightIcon } from "../../images/arrow-right-2-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-4.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-5.svg";

//Fotos
import Carlos from "../../images/_0004_Carlos.jpg"
import Nubis from "../../images/_0003_Nubis.jpg"
import Olga from "../../images/_0002_Olga.jpg"
import Miriam from "../../images/_0000_Miriam.jpg"
import Pavlo from "../../images/_0001_Pavlo.jpg"

import "slick-carousel/slick/slick.css";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const TestimonialSliderContainer = tw.div`mt-24`;
const TestimonialSlider = styled(Slider)``;
const Testimonial = tw.div`flex! flex-col items-center md:items-stretch md:flex-row md:justify-center outline-none`;
const ImageContainer = styled.div`
  ${tw`md:mx-3 lg:mx-6 w-2/3 md:w-4/12 rounded flex items-center max-w-xs md:max-w-none`}
  img {
    ${tw`rounded`}
  }
`;
const TextContainer = tw.div`md:mx-3 lg:mx-6 md:w-6/12 py-4 flex flex-col justify-between`;
const QuoteContainer = tw.div`relative p-6 md:p-8 lg:p-10 mt-4 md:mt-0`;
const Quote = tw.blockquote`text-center md:text-left font-medium text-xl lg:text-2xl xl:text-3xl`;
const CustomerInfo = tw.div`px-5 lg:px-10 text-center md:text-left mt-4 md:mt-0`;
const CustomerName = tw.h5`font-bold text-lg lg:text-xl xl:text-2xl text-primary-500`;
const CustomerTitle = tw.p`font-medium text-sm`;

const QuotesLeft = tw(
  QuotesLeftIcon
)`w-8 h-8 lg:w-10 lg:h-10 text-primary-500 absolute top-0 left-0`;
const QuotesRight = tw(
  QuotesRightIcon
)`w-8 h-8 lg:w-10 lg:h-10 text-primary-500 absolute bottom-0 right-0`;

const SliderControlButtonContainer = styled.div`
  ${tw`absolute top-0 h-full flex items-end md:items-center z-20`}
  button {
    ${tw`text-secondary-500 hover:text-primary-500 focus:outline-none transition duration-300 transform hover:scale-125 transform -translate-y-2/3 md:translate-y-0`}
    svg {
      ${tw`w-8`}
    }
  }
`;

const NextArrow = ({ currentSlide, slideCount, ...props }) => (
  <SliderControlButtonContainer tw="right-0">
    <button {...props}>
      <ArrowRightIcon />
    </button>
  </SliderControlButtonContainer>
);
const PreviousArrow = ({ currentSlide, slideCount, ...props }) => (
  <SliderControlButtonContainer tw="left-0">
    <button {...props}>
      <ArrowLeftIcon />
    </button>
  </SliderControlButtonContainer>
);

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute w-32 top-0 left-0 -z-10 text-primary-500 opacity-25 transform -translate-x-full`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`absolute w-32 bottom-0 right-0 -z-10 text-pink-500 opacity-15 transform translate-x-2/3 translate-y-8`;

export default () => {
  const testimonials = [
    {
      imageSrc:
        Carlos,
      quote:
        "Valoro mucho la disponibilidad y el contacto rápido con el banco. Con Miriam siempre tengo contacto directo y permite resolver cualquier duda o incidencia rápidamente. Banco Mediolanum es el único banco que ofrece un servicio personalizado para cada tipo de cliente, dependiendo de sus ingresos y sus objetivos, y la ayuda del family banker es importante.",
      customerName: "Carlos Jimenez Canet",
      customerTitle: "International Business Developer | Export Manager | KAM | International sales",
      url: "https://www.linkedin.com/in/carlos-jimenez-canet-ba635594/"
    },
    {
      imageSrc:
        Nubis,
      quote:
        "Miriam es una profesional dedicada y atenta a sus clientes. Siempre disponible para ayudarte a resolver dudas y sobre todo resolver incidencias. Es importante contar con un consultor que esté dispuesto a atenderte con vocación e interés en tu crecimiento financiero.",
      customerName: "Nubis Diaz De Armas",
      customerTitle: "Export Area Manager | International Business Developer | Lawyer",
      url: "https://www.linkedin.com/in/nubis-diaz-de-armas-a484178b/"
    },
    {
      imageSrc:
        Olga,
      quote:
        "Gracias al asesoramiento de Miriam estoy tranquila con respecto a mis finanzas. Con su atención personalizada he logrado entender ciertos aspectos básicos de educación financiera, que nunca nos enseñan en el colegio u universidad. Miriam creó un plan personalizado, tras estudiar mi situación, para conseguir mis metas financieras. Ahora estoy feliz ahorrando y viendo mi dinero trabajar y no perdiendo su valor. Sé que mi yo del futuro estará aún más orgullosa de haber tomado esta decisión. Gracias.",
      customerName: "Olga Calonge",
      customerTitle: "Profesor de inglés de educación secundaria en Colegio Bilingüe",
      url: "https://www.linkedin.com/in/olga-calonge/"
    },
    {
      imageSrc:
        Miriam,
      quote:
        "Nunca me han gustado los temas financieros, pero tampoco me he interesado, hasta que gracias al asesoramiento de Miriam me ayudó a entenderlo, a poder gestionar mis ahorros poco a poco y creando una herramienta en la cual el dinero nunca está parado, si no que te genera beneficios a medio y largo plazo. Gracias por la ayuda, siempre disponible en cualquier momento.",
      customerName: "Miriam Osa Izquierdo",
      customerTitle: "Graduada en Magisterio de Educación Infantil con mención en Necesidades educativas y atención a la diversidad",
      url: "https://www.linkedin.com/in/miriam-osa-izquierdo-5b4924141/"
    },
    {
      imageSrc:
        Pavlo,
      quote:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      customerName: "Pavlo Dudnyk Petrenko",
      customerTitle: "Programador Java & JavaScript | Full Stack Developer | Desarrollador Web Back-end & Front-end | Diseño Gráfico | Fotografía | Videografía",
      url: "https://www.linkedin.com/in/pavlo-dudnyk/"
    },
  ];
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          <HeadingTitle>¡Mis Clientes Alucinantes!</HeadingTitle>
          <HeadingDescription></HeadingDescription>
        </HeadingInfoContainer>
        <TestimonialSliderContainer>
          <TestimonialSlider
            nextArrow={<NextArrow />}
            prevArrow={<PreviousArrow />}
          >
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index}>
                <ImageContainer>
                  <a href={testimonial.url} target="_blank">
                  <img
                    src={testimonial.imageSrc}
                    alt={testimonial.customerName}
                  />
                  </a>
                </ImageContainer>
                <TextContainer>
                  <QuoteContainer>
                    <QuotesLeft />
                    <Quote>{testimonial.quote}</Quote>
                    <QuotesRight />
                  </QuoteContainer>
                  <CustomerInfo>
                    <CustomerName><a href={testimonial.url} target="_blank">{testimonial.customerName}</a></CustomerName>
                    <CustomerTitle>{testimonial.customerTitle}</CustomerTitle>
                  </CustomerInfo>
                </TextContainer>
              </Testimonial>
            ))}
          </TestimonialSlider>
        </TestimonialSliderContainer>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

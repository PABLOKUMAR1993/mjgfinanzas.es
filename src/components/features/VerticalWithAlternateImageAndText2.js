import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import miriam1 from "../../images/miriam_foto_1.jpg";
import miriam2 from "../../images/miriam_foto_2.jpg";

const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-xl`;
const Actions = tw.div`flex flex-col items-center sm:flex-row justify-center lg:justify-start mt-8`;
const PrimaryButton = tw.button`font-bold px-8 lg:px-10 py-3 rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 focus:shadow-outline focus:outline-none transition duration-300`;

const Content = tw.div`mt-16`;

const Card = styled.div((props) => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row",
]);
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`,
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-sm leading-loose`;
const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

export default () => {
  const cards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2670&q=80",
      subtitle: "",
      title: "Asesoramiento Financiero",
      description: `Mi experiencia en el asesoramiento financiero, mi profesionalidad y una forma de trabajar personalizada esta disponible para TI. Lo importante eres tú, escuchar tus necesidades y objetivos financieros. Quiero darte la estrategia que necesitas. Siempre, durante todo el ciclo vital y financiero. Para que inviertas es importante que cuentes con un asesor financiero y profesional que gestione tu patrimonio de forma objetiva, segura, rentable y sin conflicto de interés.`,        
      primaryButtonText: "Leer Más",
      primaryButtonUrl: "/AsesoramientoFinanciero"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1674&q=80",
      subtitle: "",
      title: "Planificación Financiera",
      description:
        "La planificación financiera es un proceso que me permite conocer tu situación financiera para determinar tus propósitos y objetivos, y desarrollar las estrategias correctas que nos llevarán al logro de tus metas en función de tus intereses. Iniciar un proceso de planificación financiera empieza con la toma de conciencia de que tienes unas necesidades y objetivos en la vida que quieres cubrir, y para los que requieres capital.",
      primaryButtonText: "Leer Más",
      primaryButtonUrl: "/PlanificacionFinanciera",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1533939224964-aad3d425cf59?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80",
      subtitle: "",
      title: "Creación de Patrimonio",
      description:
        "Crear un patrimonio significa ahorrar para tu futuro y es una necesidad esencial si piensas en el día de mañana. Por eso hay que ahorrar planificando, pensando tanto en las necesidades a corto, como a medio y a largo plazo. Crear un patrimonio requiere tiempo, y el objetivo final del mismo es dar cobertura a necesidades a medio y sobretodo largo plazo. La creación de un patrimonio te dará tranquilidad en el futuro. Toda persona capaz de generar ahorro (por pequeño que sea) debe invertir, ya que cuanto antes se empieza a ahorrar, más inversión se acumula y antes se puede contar con un patrimonio.",
      primaryButtonText: "Leer Más",
      primaryButtonUrl: "/CreacionPatrimonio",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1473679408190-0693dd22fe6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
      subtitle: "",
      title: "Jubilación",
      description:
        "Es de gran importancia planificar financieramente tu jubilación. Es algo más que elegir un producto y esperar a que genere beneficios mientras acaba tu vida laboral, sino que se trata de un proceso de revisión constante. El análisis tiene que ser dinámico, y revisado asiduamente, dado que tu situación económica, familiar y personal es variable, y la cartera o inversión destinada a la jubilación pueden quedarse desfasada si no tiene en cuenta esos factores.",
      primaryButtonText: "Leer Más",
      primaryButtonUrl: "/Jubilacon",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
      subtitle: "",
      title: "Educación Financiera",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quidem itaque explicabo deleniti? Consequuntur, animi iure obcaecati dicta alias harum esse delectus similique, nemo pariatur tenetur. Adipisci, animi, nemo consequuntur fuga reiciendis architecto laudantium odio similique placeat ducimus magni vero esse ex libero recusandae necessitatibus repellat beatae! Aspernatur non hic earum consequatur error rem atque est. Repellat in ea, eos doloribus illum autem voluptas?.",
      primaryButtonText: "Leer Más",
      primaryButtonUrl: "/EducacionFinanciera",
    },
  ];

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>¿En que puedo Ayudarte?</HeadingTitle>
          <HeadingDescription>
            Desempeño mi profesión acorde a mis <b>valores, honestidad,
            transparencia y compromiso</b>. Velo por los intereses de mi clientes a
            través de mi conocimiento y asesoramiento.
          </HeadingDescription>
        </HeadingInfoContainer>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};

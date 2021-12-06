import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import miriam1 from "../../images/miriam_foto_1.jpg"
import miriam2 from "../../images/miriam_foto_2.jpg"

const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Content = tw.div`mt-16`;

const Card = styled.div(props => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row"
]);
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
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
        `${miriam1}`,
      subtitle: "",
      title: "Primeros Pasos",
      description:
        "Desde que entré en la Universidad de Albacete en 2011, para cursar el Grado de Administración y Dirección de Empresas, tenía muy claro que en algún momento de mi vida, emprendería. Analicé las circunstancias de 2014 y decidí apostar por una formación más focalizada. Elegí Master en Comercio Internacional y sus Técnicas. Con esta formación entré de forma seria en el mercado laboral en el que he estado hasta hoy en día.",
      url: "#"
    },

    {
      imageSrc:
      `${miriam2}`,
      subtitle: "",
      title: "Trayectoría Profesional",
      description:
        "Comencé diseñando el plan de exportación de Cerveza Artesana Gastro y continúe por una gran bodega de vinos ecológicos. Como continuaba con la mente muy puesta en el exterior; decidí ampliar conocimientos, cultura y habilidades en Liverpool, United Kingdom. Tras 8 meses de formación en idioma y empleo, decidí regresar. Con una mente mucho más abierta y alimentada de diferentes culturas cambió mi forma de ver la vida tanto en lo personal como en lo laboral. Continué en Comercio Exterior ocupando cargos de dirección de mercado en Alcampo y responsable de compras entre otros. Aun con poco tiempo libre, mi inquietud desde pequeña me ha llevado a querer ampliar conocimientos continuamente y fue cuando me matriculé en Madrid en el Master de Marketing y Comunicación Digital. Tras la pandemia mundial entré en banca, Banco Santander me dio la oportunidad de ser directora de oficina en Belmonte, Cuenca. Tras esta grata experiencia, formación, y completa exigencia, culmino gran conocimiento y me siento preparada para cumplir mi sueño.",
      url: "#"
    },

    {
      imageSrc:
        `${miriam1}`,
      subtitle: "",
      title: "¿Porqué ahora en Banco Mediolanum?",
      description:
        "Después de escribir de forma resumida mi experiencia laboral y personal, ahora quiero hablaros de la profesión que desempeño hoy de la mano de Banco Mediolanum. Estoy aquí en primer lugar porque después de trabajar de muchas cosas me he dado cuenta que las finanzas y la protección es algo que siempre ha ido ligado a mí. <Siempre digo que para saber elegir y saber lo que nos gusta hay que hacer y probar de todo>. Bien, eso hice y después supe que esta era mi vocación. ¿Por qué? Soy libre y feliz. Jefa de mi vida. Tengo libertad financiera, decido y planifico de forma inteligente par que todo salga bien. Sin estrategia y sin plan al final estamos a merced de lo que la vida decida. Y lo mejor aún es que le ofrezco todo este bienestar a mis clientes. Les ayudo a su estrategia, para que a lo largo del ciclo financiero alcancen sus metas con el mínimo esfuerzo, el resto lo hará la 8ª maravilla del mundo: el interés compuesto.",
      url: "#"
    },
  ];

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>¿Quién Soy?</HeadingTitle>
          <HeadingDescription>
            Para esta relación que estamos apunto de iniciar, es importante conocernos.
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Image imageSrc={card.imageSrc} />
              <Details>
                <Subtitle>{card.subtitle}</Subtitle>
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
                {/* <Link href={card.url}>Leer historia completa</Link> */}
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};

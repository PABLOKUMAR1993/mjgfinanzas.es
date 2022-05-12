import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as ChevronDownIcon } from "feather-icons/dist/icons/chevron-down.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-8.svg";

const Subheading = tw(SubheadingBase)`mb-4 text-center`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const Column = tw.div`flex flex-col items-center`;
const HeaderContent = tw.div``;

const PrimaryButton = tw.button`font-bold px-8 lg:px-10 py-3 rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 focus:shadow-outline focus:outline-none transition duration-300`;
const Actions = tw.div`flex flex-col items-center sm:flex-row justify-center lg:justify-start mt-8`;

const FAQSContainer = tw.dl`mt-12 max-w-4xl relative`;
const FAQ = tw.div`cursor-pointer select-none mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-800 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = motion(styled.span`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`);
const Answer = motion(
  tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`
);

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-56 w-56 opacity-15 transform translate-x-2/3 -translate-y-12 text-teal-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({
  subheading = "Mis Servicios",
  heading = "¿En qué puedo Ayudarte?",
  description = (
    <>
      <p>
        Desempeño mi profesión acorde a mis <b>valores, honestidad, transparencia y
        compromiso</b>. Velo por los intereses de mi clientes a través de mi
        conocimiento y asesoramiento.
      </p>
    </>
  ),
  faqs = [
    {
      question: "Asesoramiento Financiero",
      answer:
        "Mi experiencia en el asesoramiento financiero, mi profesionalidad y una forma de trabajar personalizada esta disponible para TI. Lo importante eres tú, escuchar tus necesidades y objetivos financieros. Quiero darte la estrategia que necesitas. Siempre, durante todo el ciclo vital y financiero. Para que inviertas es importante que cuentes con un asesor financiero y profesional que gestione tu patrimonio de forma objetiva, segura, rentable y sin conflicto de interés.",
      primaryButtonText: "Leer más",
      primaryButtonUrl: "/AsesoramientoFinanciero",
    },
    {
      question: "Creación de Patrimonio",
      answer:
        "Mi experiencia en el asesoramiento financiero, mi profesionalidad y una forma de trabajar personalizada esta disponible para TI. Lo importante eres tú, escuchar tus necesidades y objetivos financieros. Quiero darte la estrategia que necesitas. Siempre, durante todo el ciclo vital y financiero. Para que inviertas es importante que cuentes con un asesor financiero y profesional que gestione tu patrimonio de forma objetiva, segura, rentable y sin conflicto de interés.",
      primaryButtonText: "Leer más",
      primaryButtonUrl: "/CreacionPatrimonio",
    },
    {
      question: "Planificación Financiera",
      answer:
        "La planificación financiera es un proceso que me permite conocer tu situación financiera para determinar tus propósitos y objetivos, y desarrollar las estrategias correctas que nos llevarán al logro de tus metas. Iniciar un proceso de planificación financiera empieza con la toma de conciencia de que tienes unas necesidades y objetivos en la vida que quieres cubrir, y para los que requieres capital.",
      primaryButtonText: "Leer más",
      primaryButtonUrl: "/PlanificacionFinanciera",
    },
    {
      question: "Gestión Patrimonial",
      answer:
        "Tener un gran patrimonio a veces nos puede producir dolor de cabeza. Estoy especializada en la gestión patrimonial de personas físicas. Realizo un servicio integral, desde la recopilación de información hasta el seguimiento periódico de las inversiones. Todo el proceso es fruto de una entrevista personal contigo donde estableceremos tus objetivos vitales, del análisis y estudio económico-financiero, fiscal y legal de tu situación actual que tendrá como resultado una planificación financiera a tu medida.",
      primaryButtonText: "Leer más",
      primaryButtonUrl: "/GestionPatrimonial",
    },
    {
      question: "Jubilación",
      answer:
        "Te pido un favor que puede solucionar tu futuro. Toma consciencia de estas preguntas y responde de forma realista y seria: · ¿Crees que vas a tener una prestación de jubilación adecuada al nivel de vida? · ¿Sabes cuánto va a ser la cuantía mensual? · Si tienes imprevistos, gastos adicionales, contratar una persona para ayuda a domicilio. ¿Tendrás suficiente dinero? · Y si no tienes un patrimonio disponible para añadir a tu prestación ¿qué harías? · Si quieres llegar a tu jubilación de lujo, con la calidad que te mereces, trabaja hoy para ello. Muy poco a poco.",
      primaryButtonText: "Leer más",
      primaryButtonUrl: "/Jubilacion",
    },
  ],
}) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = (questionIndex) => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <Container>
      <ContentWithPaddingXl>
        <Column>
          <HeaderContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
          </HeaderContent>
          <FAQSContainer>
            {faqs.map((faq, index) => (
              <FAQ
                key={index}
                onClick={() => {
                  toggleQuestion(index);
                }}
                className="group"
              >
                <Question>
                  <QuestionText>{faq.question}</QuestionText>
                  <QuestionToggleIcon
                    variants={{
                      collapsed: { rotate: 0 },
                      open: { rotate: -180 },
                    }}
                    initial="collapsed"
                    animate={
                      activeQuestionIndex === index ? "open" : "collapsed"
                    }
                    transition={{
                      duration: 0.02,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                  >
                    <ChevronDownIcon />
                  </QuestionToggleIcon>
                </Question>
                <Answer
                  variants={{
                    open: { opacity: 1, height: "auto", marginTop: "16px" },
                    collapsed: { opacity: 0, height: 0, marginTop: "0px" },
                  }}
                  initial="collapsed"
                  animate={activeQuestionIndex === index ? "open" : "collapsed"}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  {faq.answer}
                  {/* <Actions>
                    <PrimaryButton as="a" href={faq.primaryButtonUrl}>
                      {faq.primaryButtonText}
                    </PrimaryButton>
                  </Actions> */}
                </Answer>
              </FAQ>
            ))}
          </FAQSContainer>
          <Actions>
            <PrimaryButton as="a" href="/Servicios">
              Ver Información Completa
            </PrimaryButton>
          </Actions>
        </Column>
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

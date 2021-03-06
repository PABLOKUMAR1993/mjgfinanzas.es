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
  heading = "??En qu?? puedo Ayudarte?",
  description = (
    <>
      <p>
        Desempe??o mi profesi??n acorde a mis <b>valores, honestidad, transparencia y
        compromiso</b>. Velo por los intereses de mi clientes a trav??s de mi
        conocimiento y asesoramiento.
      </p>
    </>
  ),
  faqs = [
    {
      question: "Asesoramiento Financiero",
      answer:
        "Mi experiencia en el asesoramiento financiero, mi profesionalidad y una forma de trabajar personalizada esta disponible para TI. Lo importante eres t??, escuchar tus necesidades y objetivos financieros. Quiero darte la estrategia que necesitas. Siempre, durante todo el ciclo vital y financiero. Para que inviertas es importante que cuentes con un asesor financiero y profesional que gestione tu patrimonio de forma objetiva, segura, rentable y sin conflicto de inter??s.",
      primaryButtonText: "Leer m??s",
      primaryButtonUrl: "/AsesoramientoFinanciero",
    },
    {
      question: "Creaci??n de Patrimonio",
      answer:
        "Mi experiencia en el asesoramiento financiero, mi profesionalidad y una forma de trabajar personalizada esta disponible para TI. Lo importante eres t??, escuchar tus necesidades y objetivos financieros. Quiero darte la estrategia que necesitas. Siempre, durante todo el ciclo vital y financiero. Para que inviertas es importante que cuentes con un asesor financiero y profesional que gestione tu patrimonio de forma objetiva, segura, rentable y sin conflicto de inter??s.",
      primaryButtonText: "Leer m??s",
      primaryButtonUrl: "/CreacionPatrimonio",
    },
    {
      question: "Planificaci??n Financiera",
      answer:
        "La planificaci??n financiera es un proceso que me permite conocer tu situaci??n financiera para determinar tus prop??sitos y objetivos, y desarrollar las estrategias correctas que nos llevar??n al logro de tus metas. Iniciar un proceso de planificaci??n financiera empieza con la toma de conciencia de que tienes unas necesidades y objetivos en la vida que quieres cubrir, y para los que requieres capital.",
      primaryButtonText: "Leer m??s",
      primaryButtonUrl: "/PlanificacionFinanciera",
    },
    {
      question: "Gesti??n Patrimonial",
      answer:
        "Tener un gran patrimonio a veces nos puede producir dolor de cabeza. Estoy especializada en la gesti??n patrimonial de personas f??sicas. Realizo un servicio integral, desde la recopilaci??n de informaci??n hasta el seguimiento peri??dico de las inversiones. Todo el proceso es fruto de una entrevista personal contigo donde estableceremos tus objetivos vitales, del an??lisis y estudio econ??mico-financiero, fiscal y legal de tu situaci??n actual que tendr?? como resultado una planificaci??n financiera a tu medida.",
      primaryButtonText: "Leer m??s",
      primaryButtonUrl: "/GestionPatrimonial",
    },
    {
      question: "Jubilaci??n",
      answer:
        "Te pido un favor que puede solucionar tu futuro. Toma consciencia de estas preguntas y responde de forma realista y seria: ?? ??Crees que vas a tener una prestaci??n de jubilaci??n adecuada al nivel de vida? ?? ??Sabes cu??nto va a ser la cuant??a mensual? ?? Si tienes imprevistos, gastos adicionales, contratar una persona para ayuda a domicilio. ??Tendr??s suficiente dinero? ?? Y si no tienes un patrimonio disponible para a??adir a tu prestaci??n ??qu?? har??as? ?? Si quieres llegar a tu jubilaci??n de lujo, con la calidad que te mereces, trabaja hoy para ello. Muy poco a poco.",
      primaryButtonText: "Leer m??s",
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
              Ver Informaci??n Completa
            </PrimaryButton>
          </Actions>
        </Column>
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

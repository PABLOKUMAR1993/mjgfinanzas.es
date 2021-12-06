import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase } from "components/misc/Layouts.js"
import logo from "../../images/IsoTipo_Web.svg";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as LinkedIcon } from "../../images/linkedin-icon.svg";
import { ReactComponent as InstagramIcon } from "../../images/instagram.svg";


const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`
export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
            <LogoText>Miriam Jimenez</LogoText>
          </LogoContainer>
          <LinksContainer>
            <Link href="/">Inicio</Link>
            <Link href="/Conoceme">Conoceme</Link>
            <Link href="/Servicios">Servicios</Link>
            <Link href="#">Blog</Link>
            <Link href="/Contacto">Contacto</Link>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink href="https://www.facebook.com/miriam.jimenezgarcia.52">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/miriam-jim%C3%A9nez-garc%C3%ADa-/?originalSubdomain=es">
              <LinkedIcon />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/mjgfinanzas/">
              <InstagramIcon />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            <p>&copy; Desarrollado por <a href="https://www.linkedin.com/in/pavlo-dudnyk/">Pavlo Dudnyk</a>.</p>
            <p>Fotografias demo proporcionadas por Unspalsh &amp; componentes de React por Treact.</p>
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};

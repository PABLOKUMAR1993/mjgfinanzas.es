import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";

// import Hero from "components/hero/TwoColumnWithVideo.js";
// import Hero from "components/hero/TwoColumnWithInput.js";
// import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
// import Hero from "components/hero/TwoColumnWithPrimaryBackground.js";
// import Hero from "components/hero/FullWidthWithImage.js";
// import Hero from "components/hero/BackgroundAsImage.js";
// import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";

// import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
// import Features from "components/features/ThreeColWithSideImageWithPrimaryBackground.js";
// import Features from "components/features/VerticalWithAlternateImageAndText.js";
// import Features from "components/features/DashedBorderSixFeatures";
// import MainFeature from "components/features/TwoColWithButton.js";
// import MainFeature from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
// import MainFeature from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
// import FeatureWithSteps from "components/features/TwoColWithSteps.js";
// import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";

// import Pricing from "components/pricing/ThreePlans.js";
// import Pricing from "components/pricing/ThreePlansWithHalfPrimaryBackground.js";
// import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";

// import SliderCard from "components/cards/ThreeColSlider.js";
// import TrendingCard from "components/cards/TwoTrendingPreviewCardsWithImage.js";
// import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
// import TabGrid from "components/cards/TabCardGrid.js";

// import Blog from "components/blogs/ThreeColSimpleWithImage.js";
// import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
// import Blog from "components/blogs/PopularAndRecentBlogPosts.js";
// import Blog from "components/blogs/GridWithFeaturedPost.js";

// import Testimonial from "components/testimonials/TwoColumnWithImage.js";
// import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
// import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
// import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
// import Testimonial from "components/testimonials/SimplePrimaryBackground.js";

// import FAQ from "components/faqs/SimpleWithSideImage.js";
// import FAQ from "components/faqs/SingleCol.js";
// import FAQ from "components/faqs/TwoColumnPrimaryBackground.js";

// import ContactUsForm from "components/forms/SimpleContactUs.js";
// import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
// import SubscribeNewsLetterForm from "components/forms/SimpleSubscribeNewsletter.js";
//
// import GetStarted from "components/cta/GetStarted.js";
// import GetStarted from "components/cta/GetStartedLight.js";
// import DownloadApp from "components/cta/DownloadApp.js";

// import Footer from "components/footers/SimpleFiveColumn.js";
// import Footer from "components/footers/FiveColumnWithInputForm.js";
// import Footer from "components/footers/FiveColumnWithBackground.js";
// import Footer from "components/footers/FiveColumnDark.js";
// import Footer from "components/footers/MiniCenteredFooter.js";

//Animation
import AnimationRevealPage from "helpers/AnimationRevealPage";

//Components

//Home
import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";
import AboutMe from "components/features/TwoColWithButton.js";
import Satisfaccion from "components/features/ThreeColCenteredStatsPrimaryBackground.js";
import Services from "components/faqs/SingleCol.js";
import MisOtrosYo from "components/hero/BackgroundAsImage.js";
import Testimonial from "components/testimonials/TwoColumnWithImage.js";
import GetStarted from "components/cta/GetStarted.js";
import Footer from "components/footers/MiniCenteredFooter.js";

//Conoceme
import HeroConoceme from "components/hero/HeroConoceme";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import MainFeature3 from "components/features/TwoColSingleFeatureWithStats3.js";
import MainFeature4 from "components/features/TwoColSingleFeatureWithStats4.js";

//Servicios
import HeroServicios from "components/hero/HeroServicios";
import Services2 from "components/features/VerticalWithAlternateImageAndText2.js";
import ResumenAsesoramientoFinanciero from "components/features/ServiciosResumenAsesoramientoFinanciero.js";
import ResumenCreacionPatrimonio from "components/features/ServiciosResumenCreacionPatrimonio.js";
import ResumenPlanifiacionFinanciera from "components/features/ServiciosResumenPlanificacionFinanciera.js";
import ResumenGestionPatrimonial from "components/features/ServiciosResumenGestionPatrimonial.js";
import ResumenJubilacion from "components/features/ServiciosResumenJubilacion.js";
import Hablamos from "components/cta/HablamosServicios";

//Páginas individuales de Servicios
import HeroAsesoramientoFinanciero from "components/hero/HeroAsesoramientoFinanciero";
import HeroCreacionPatrimonio from "components/hero/HeroCreacionPatrimonio";
import HeroPlanificacionFinanciera from "components/hero/HeroPlanificacionFinanciera";
import HeroGestionPatrimonial from "components/hero/HeroGestionPatrimonial";
import HeroJubilacion from "components/hero/HeroJubilacion";
import AsesoramientoFinanciero from "components/features/AsesoramientoFinanciero";
import CreacionPatrimonio from "components/features/CreacionPatrimonio";
import PlanificacionFinanciera from "components/features/PlanificacionFinanciera";
import GestionPatrimonial from "components/features/GestionPatrimonial";
import Jubilacion from "components/features/Jubilacion";

//Contacto
import HeroContacto from "components/hero/HeroContacto";
import Form from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import MainFeatureContact from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import Localizacion from "components/cards/Localizacion";

//React
import { BrowserRouter, Route } from "react-router-dom";

//Render
export default function App() {
  return (
    <BrowserRouter>
      <AnimationRevealPage>
        <Route exact path="/">
          <Hero />
          <AboutMe />
          <Satisfaccion />
          <Services />
          <MisOtrosYo />
          <Testimonial />
          <GetStarted />
        </Route>
        <Route exact path="/Conoceme">
          <HeroConoceme />
          <MainFeature2 />
          <MainFeature3 />
          <MainFeature4 />
        </Route>
        <Route exact path="/Servicios">
          <HeroServicios />
          <Services2 />
          <ResumenAsesoramientoFinanciero />
          <ResumenCreacionPatrimonio />
          <ResumenPlanifiacionFinanciera />
          <ResumenGestionPatrimonial />
          <ResumenJubilacion />
          <Hablamos />
        </Route>
        <Route exact path="/AsesoramientoFinanciero">
          <HeroAsesoramientoFinanciero />
          <AsesoramientoFinanciero />
          <Hablamos />
        </Route>
        <Route exact path="/CreacionPatrimonio">
          <HeroCreacionPatrimonio />
          <CreacionPatrimonio />
          <Hablamos />
        </Route>
        <Route exact path="/PlanificacionFinanciera">
          <HeroPlanificacionFinanciera />
          <PlanificacionFinanciera />
          <Hablamos />
        </Route>
        <Route exact path="/GestionPatrimonial">
          <HeroGestionPatrimonial />
          <GestionPatrimonial />
          <Hablamos />
        </Route>
        <Route exact path="/Jubilacion">
          <HeroJubilacion />
          <Jubilacion />
          <Hablamos />
        </Route>
        <Route exact path="/Contacto">
          <HeroContacto />
          <Form />
          <Localizacion />
        </Route>
        <Footer />
      </AnimationRevealPage>
    </BrowserRouter>
  );
}

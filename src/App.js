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
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import MainFeature3 from "components/features/TwoColSingleFeatureWithStats3.js";
import MainFeature4 from "components/features/TwoColSingleFeatureWithStats4.js";
//Servicios
import Services2 from "components/features/VerticalWithAlternateImageAndText2.js";
//Contacto
import Form from "components/forms/TwoColContactUsWithIllustrationFullForm.js";

//React
import { BrowserRouter, Route } from "react-router-dom";

//Render
export default function App() {
  return (
    <BrowserRouter>
      <AnimationRevealPage>
        <Hero />
        <Route exact path="/">
          <AboutMe />
          <Satisfaccion />
          <Services />
          <MisOtrosYo />
          <Testimonial />
          <GetStarted />
        </Route>
        <Route exact path="/Conoceme">
          <MainFeature2 />
          <MainFeature3 />
          <MainFeature4 />
        </Route>
        <Route exact path="/Servicios">
          <Services2 />
        </Route>
        <Route exact path="/AsesoramientoFinanciero">
          <MainFeature2 />
          <MainFeature3 />
        </Route>
        <Route exact path="/Contacto">
          <Form />
        </Route>
        <Footer />
      </AnimationRevealPage>
    </BrowserRouter>
  );
}

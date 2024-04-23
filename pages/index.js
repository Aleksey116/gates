import About from "../src/components/About";
import Collection from "../src/components/Collection";
import Contact from "../src/components/Contact";
import FunFacts from "../src/components/FunFacts";
import HeroSlider from "../src/components/HeroSlider";
import News from "../src/components/News";
import RoadMapSlider from "../src/components/RoadMapStep";
import SectionDivider from "../src/components/SectionDivider";
import Layout from "../src/layout/Layout";
const Index = () => {
  return (
    <Layout pageTitle={"Home"}>
      {/* Home Section */}
      <HeroSlider />
      <SectionDivider />
      {/* !Home Section */}
      {/* Fun Facts */}
      {/* !Fun Facts */}
      {/* About Section */}
      <About />
      {/* !About Section */}
      {/* Section Divider */}
      {/* !Section Divider */}
      {/* Collection Section */}
      {/* !Collection Section */}
      {/* Section Divider */}
      <SectionDivider />
      {/* !Section Divider */}
      {/* Section RoadMap */}
      <RoadMapSlider />
      {/* !Section RoadMap */}
      {/* Section Divider */}
      {/* !Section Divider */}
      {/* Section News */}
      {/* !Section News */}
      {/* Section Divider */}
      {/* !Section Divider */}
      {/* Section */}
    </Layout>
  );
};
export default Index;
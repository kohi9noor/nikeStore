import CustomerReview from "./sections/CustomerReview";
import Hero from "./sections/Hero";
import Footer from "./sections/Footer";
import PopularProducts from "./sections/PopularProducts";
import SpecialOffer from "./sections/specialOffer";
import Subscribe from "./sections/Subscribe";
import SuperQuality from "./sections/SuperQuality";
import Services from "./sections/Services";
import Nav from "./components/nav";
const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero></Hero>
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality></SuperQuality>
    </section>
    <section className="padding">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReview />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t">
      <Footer />
    </section>
  </main>
);

export default App;

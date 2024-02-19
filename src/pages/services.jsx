import Header from "../components/Header";
import NavBar from "../components/NavBar";

const services = () => {
  return (
    <div className="services">
      <Header />
      <NavBar />
      <h1>Services</h1>
      <div className="main">
        <div className="box">
          <h3>Website Development</h3>
          <p>
            Get a professionally designed and fully functional website tailored
            to your needs. From simple portfolio sites to complex web
            applications, we&apos;ve got you covered.
          </p>
        </div>
        <div className="box">
          <h3>Responsive Design</h3>
          <p>
            Ensure your website looks stunning and functions flawlessly on all
            devices. We specialize in creating responsive designs that adapt
            seamlessly to various screen sizes.
          </p>
        </div>
        <div className="box">
          <h3>Custom Solutions</h3>
          <p>
            Need a unique feature or functionality on your website? Our team can
            develop custom solutions to meet your specific requirements, helping
            you stand out from the competition.
          </p>
        </div>
        <div className="box">
          <h3>E-commerce Development</h3>
          <p>
            Launch your online store with our e-commerce development services.
            We can integrate secure payment gateways, manage product listings,
            and optimize your site for a seamless shopping experience.
          </p>
        </div>
        <div className="box">
          <h3>SEO Optimization</h3>
          <p>
            Improve your website&apos;s visibility on search engines with our
            SEO optimization services. We&apos;ll implement strategies to
            enhance your site&apos;s ranking and attract more organic traffic.
          </p>
        </div>
        <div className="box">
          <h3>Maintenance and Support</h3>
          <p>
            Keep your website running smoothly with our maintenance and support
            services. We offer regular updates, security checks, and prompt
            assistance to address any issues that may arise.
          </p>
        </div>
      </div>
    </div>
  );
};

export default services;

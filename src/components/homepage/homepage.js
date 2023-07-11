import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Slider from 'react-animated-slider';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-animated-slider/build/horizontal.css';
import {
  FaPhone, FaUser, FaStar, FaBriefcase, FaFacebook, FaLinkedin,
  FaTwitter, FaInstagram, FaCopyright, FaCalendar, FaArrowRight,
} from 'react-icons/fa';
import {
  testimonials, services, teams, banner,
} from '../projectData/projectData';
import NavigationBar from '../navigation/navigation';
import './homepage.scss';
import about from '../../about.jpg';
import logo from '../../logo.png'; // Import the logo image as a module

const HomePage = () => (
  <div className="home-page">
    <NavigationBar />
    <div className="banner">
      <Slider autoplay={6000} className="slider">
        {banner.map((item) => (
          <div
            className="banner-list"
            key={item.image}
            style={{ background: `url('${item.image}') no-repeat center center` }}
          >
            <div className="text">
              <h3>{item.moto}</h3>
              <h1>
                {item.name.split(' ').map((word, i) => (
                  <React.Fragment key={item.name}>
                    {word === 'trusted' ? (
                      <span style={{ color: 'yellow' }}>{word}</span>
                    ) : (
                      <span>{word}</span>
                    )}
                    {i !== item.name.split(' ').length - 1 && ' '}
                  </React.Fragment>
                ))}
              </h1>

              <p>{item.desc}</p>
              <div className="action-btn">
                <button id="one" type="button">Read more</button>
                <button id="two" type="button">Order Now!!</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>

    <div className="about-us">
      <img src={about} alt="about-us" />
      <div className="image-desc">
        <h4>ABOUT US</h4>
        <h3>
          We are the
          <span className="special-color"> most</span>
          {' '}
          technologically
          <span className="special-color"> efficient</span>
        </h3>
        <p>
          lorem ipsum dolor sit amet consectetur adipisicing elit.
          Magni,repellendus!adipisicing elit. Magni,repellendus!
          lorem ipsum dolor sit amet consectetur adipisicing elit.
          Magni,repellendus!adipisicing elit. Magni,repellendus!
        </p>
        <button className="explore-more" type="button">Explore more</button>
      </div>
    </div>
    <div className="some-facts">
      <div className="text-content1">
        <h3>SOME FACTS</h3>
        <h2>#1 PLACE TO MANAGE ALL OF YOUR SHIPMENTS</h2>
        <p className="desc-text">
          {' '}
          lorem ipsum dolor sit amet consectetur adipisicing elit.
          Magni,repellendus!adipisicing elit. Magni,repellendus!
          lorem ipsum dolor sit amet consectetur adipisicing elit.
          Magni,repellendus!adipisicing elit. Magni,repellendus!
          ipsum
        </p>
        <div className="call-action">
          <FaPhone className="call-icon" />
          {' '}
          <div className="call-text">
            <p>
              Call for your orders
              <br />
              +2348035344730
            </p>
          </div>
        </div>
      </div>
      <div className="text-content2">
        <div className="icon-num-desc-cont" style={{ backgroundColor: 'blue' }}>
          <div><FaStar className="icon" /></div>
          <p className="num">1234</p>
          <p className="desc">
            Customer review
          </p>
        </div>
        <div className="icon-num-desc-cont" style={{ backgroundColor: 'orange' }}>
          <div><FaUser className="icon" /></div>
          <p className="num">1234</p>
          <p className="desc">
            Happy Clients
          </p>
        </div>
        <div className="icon-num-desc-cont" style={{ backgroundColor: 'black' }}>
          <div><FaBriefcase className="icon" /></div>
          <p className="num">1234</p>
          <p className="desc">
            Completed errands
          </p>
        </div>
        <div className="icon-num-desc-cont">
          <div><FaPhone className="icon" /></div>
          <p className="num"> 1234</p>
          <p className="desc">
            Telephone support review
          </p>
        </div>
      </div>
    </div>
    <div className="services">
      <div className="services-title">
        <h3>OUR SERVICES</h3>
        <h2>Explore Our Services</h2>
      </div>
      <div className="services-con">
        {services.map((services) => (
          <div key={services.id} className="service">
            <img src={services.image} alt={services.title} />
            <h3>{services.title}</h3>
            <p>{services.desc}</p>
          </div>
        ))}
      </div>

    </div>
    <div className="teams">
      <div className="teams-title">
        <h3>OUR TEAMS</h3>
        <h2>Meet Our Efficient Staff Body</h2>
      </div>
      <div className="teams-con">
        {teams.map((team) => (
          <div key={team.id} className="team">
            <img src={team.image} alt={team.name} />
            <h3>{team.name}</h3>
            <ul className="social-con">
              {team.social.map((socialIcon) => (
                <li key={socialIcon} className="social">
                  {socialIcon}
                </li>
              ))}
            </ul>
            <p>{team.desc}</p>
          </div>
        ))}
      </div>

    </div>
    <div className="testimonials">
      <div className="testimonials-title">
        <h3>TESTIMONIALS</h3>
        <h2>What our are clients are saying</h2>
      </div>
      <div className="testimonial-con">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <div className="testimonial-img-name">
              <img src={testimonial.image} alt={testimonial.name} />
              <div>
                <h3>{testimonial.name}</h3>
                <h3>{testimonial.rating}</h3>
                <h3>{testimonial.location}</h3>
              </div>
            </div>
            <div className="desc">
              <p>{testimonial.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="blog">
      <div className="blog-title">
        <h3>LATEST STORY FROM UR BLOG</h3>
        <p>Read the Latest Article From Our Blog</p>
      </div>
      <div className="blog-content-con">
        <div className="blog-content">
          <img src="./../../bg1.jpg" alt="blog-pic" />
          <div className="date-biline">
            <FaUser />
            {' '}
            <p>John Doe</p>
            <FaCalendar />
            {' '}
            <p>01 Jan, 2023</p>
          </div>
          <h3>How we build our community</h3>
          <p className="article-desc">
            lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
            lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
          </p>
          <p className="readmore">
            READ MORE
            {' '}
            <FaArrowRight />
          </p>
        </div>
        {' '}
        <div className="blog-content">
          <img src="./../../bg1.jpg" alt="blog-pic" />
          <div className="date-biline">
            <FaUser />
            {' '}
            <p>John Doe</p>
            <FaCalendar />
            {' '}
            <p>01 Jan, 2023</p>
          </div>
          <h3>How we build our community</h3>
          <p className="article-desc">
            lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
            lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
          </p>
          <p className="readmore">
            READ MORE
            {' '}
            <FaArrowRight />
          </p>
        </div>
        {' '}
        <div className="blog-content">
          <img src="./../../bg1.jpg" alt="blog-pic" />
          <div className="date-biline">
            <FaUser />
            {' '}
            <p>John Doe</p>
            <FaCalendar />
            {' '}
            <p>01 Jan, 2023</p>
          </div>

          <h3>How we build our community</h3>
          <p className="article-desc">
            lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
            lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
          </p>
          <p className="readmore">
            READ MORE
            {' '}
            <FaArrowRight />
          </p>
        </div>
      </div>

    </div>
    <div className="footer">
      <div className="main-footer">
        <h3>
          We Undrstand the Importance Approaching Each Work
        </h3>
        <p>+2348035344730</p>
      </div>
      <div className="hr" />
      <div className="sub-footer">
        <div className="sub-footer-cols">
          <h4>COMPANY</h4>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Blog</p>
          <p>Privacy Policy</p>
        </div>
        <div className="sub-footer-cols">
          <h4>OPEN HOURS</h4>
          <p>Monday 11am -7pm</p>
          <p>Tuesday Friday 11am-8pm</p>
          <p>Sarturday 10am-6pm Policy</p>
          <p>Sunday 11am-6pm 10am-6pm Policy</p>
        </div>
        <div className="sub-footer-cols">
          <h4>OUR SERVICES HOURS</h4>
          <p>Groceries Delivery and Errands</p>
          <p>Parcel Dispatch</p>
          <p>Food Deliveries and Errands</p>
        </div>
        <div id="identity-logo" className="sub-footer-cols">
          <h4>
            {' '}
            <img src={logo} alt="logo" className="logo" style={{ width: '500px', height: '150px' }} />
          </h4>
          <p>
            We are a logistics company built to help households
            make budget, deliveries and errands easy
          </p>
          <ul className="social-icons">
            <li>
              <a href="www.linkedin.com/in/chukwuma-mosanya-346303"><FaFacebook size={30} alt="social-icon" /></a>
            </li>
            <li>
              <a href="www.angelist.com"><FaInstagram size={30} alt="social-icon" /></a>
            </li>
            <li>
              <a href="https://twitter.com/ChukwumaMosanya"><FaTwitter size={30} alt="social-icon" /></a>
            </li>
            <li>
              <a href="www.facebook.com"><FaLinkedin size={30} alt="social-icons" /></a>
            </li>
          </ul>

        </div>
      </div>
      <div className="copyright">
        Copyright
        <FaCopyright className="copyright-icon" size={30} alt="copyright" />
        2023
        {' '}
        | ROYAL FIRM LOGISTICS
      </div>
    </div>
  </div>
);

export default HomePage;

import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Slider from 'react-animated-slider';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-animated-slider/build/horizontal.css';
import {
  FaPhone, FaUser, FaStar, FaBriefcase,
} from 'react-icons/fa';
import {
  testimonials, services, teams, banner,
} from '../projectData/projectData';
import NavigationBar from '../navigation/navigation';
import './homepage.scss';
import about from '../../about.jpg';

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
        <h4>About us</h4>
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
        <p>
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
              </div>
            </div>
            <div className="desc">
              <p>{testimonial.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default HomePage;

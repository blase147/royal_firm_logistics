import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Slider from 'react-animated-slider';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-animated-slider/build/horizontal.css';
import { FaPhone } from 'react-icons/fa';
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
        <div>
          <p>
            <FaPhone className="icon" />
            Customer review
          </p>
        </div>
        <div>
          <p>
            <FaPhone className="icon" />
            Happy Clients
          </p>
        </div>
        <div>
          <p>
            <FaPhone className="icon" />
            Completed errands
          </p>
        </div>
        <div>
          <p>
            <FaPhone className="icon" />
            Telephone support review
          </p>
        </div>
      </div>
    </div>
    <div className="services">
      {services.map((service) => (
        <div key={service.id} className="service">
          <img src={service.image} alt={service.name} />
          <h3>{service.name}</h3>
          <p>{service.desc}</p>
        </div>
      ))}
    </div>
    <div className="teams">
      {teams.map((team) => (
        <div key={team.id} className="team">
          <img src={team.image} alt={team.name} />
          <h3>{team.name}</h3>
          <p>{team.desc}</p>
        </div>
      ))}
    </div>
    <div className="testimonials">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="testimonial">
          <img src={testimonial.image} alt={testimonial.name} />
          <h3>{testimonial.name}</h3>
          <p>{testimonial.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default HomePage;

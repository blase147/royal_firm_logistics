import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Slider from 'react-animated-slider';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-animated-slider/build/horizontal.css';
import {
  testimonials, services, teams, banner,
} from '../projectData/projectData';
import NavigationBar from '../navigation/navigation';
import './homepage.scss';

const HomePage = () => (
  <div className="home-page">
    <NavigationBar />
    <div className="banner">
      <Slider autoplay={3000}>
        {banner.map((item) => (
          <div
            className="banner-list"
            key={item.image}
            style={{ background: `url('${item.image}') no-repeat center center` }}
          >
            <div className="center">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <button type="button">{item.button}</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>

    <div className="about-us" />
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

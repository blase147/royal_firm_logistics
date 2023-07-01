import React from 'react';
import { testimonials, services, teams } from '../projectData/projectData';
import NavigationBar from '../navigation/navigation';

const HomePage = () => (
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //   useEffect(() => {
  //     const handleResize = () => setWindowWidth(window.innerWidth);
  //     window.addEventListener('resize', handleResize);

  //     return () => {
  //       window.removeEventListener('resize', handleResize);
  //     };
  //   }, []);

  //   return (
  <div className="home-page">
    <NavigationBar />
    <div className="banner">
      <ul>
        <li><img src="./banner1.jpg" alt="banner" /></li>
        <li><img src="./banner2.jpg" alt="banner" /></li>
        <li><img src="./banner3.jpg" alt="banner" /></li>
        <li><img src="./banner4.jpg" alt="banner" /></li>
      </ul>
    </div>

    <div className="about-us" />
    <div className="services">
      {services.map((service) => (
        <div key={service.id} className="services">
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

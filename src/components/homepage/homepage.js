import { testimonials, services, teams } from '../projectData';

 const homePage = () => {
    return (
        <div className="home-page">
            <div className="banner">
                <ul>
                    <li><img src='./banner1.jpg' alt="banner" /></li>
                    <li><img src='./banner2.jpg' alt="banner"/></li>
                    <li><img src='./banner3.jpg' alt="banner"/></li>
                    <li><img src='./banner4.jpg' alt="banner"/></li>
                </ul>
            </div>

            <div className="about-us">

            </div>
            <div className="services">
               {services.map (service => {
                    <div className="services">
                        <img src ={service.image} alt={service.name} />
                        <h3>{service.name}</h3>
                        <p>{service.desc}</p>
                        </div>
                })
            }
            </div>
            <div className="teams">
               {teams.map (team => {
                    <div className="team">
                        <img src ={team.image} alt={team.name} />
                        <h3>{team.name}</h3>
                        <p>{team.desc}</p>
                        </div>
                })
            }
            </div>
            <div className="testimonials">
               {testimonials.map (testimonial => {
                    <div className="testimonial">
                        <img src ={testimonial.image} alt={testimonial.name} />
                        <h3>{testimonial.name}</h3>
                        <p>{testimonial.desc}</p>
                        </div>
                })
            }
            </div>
        </div>
    )
};
export default homePage;

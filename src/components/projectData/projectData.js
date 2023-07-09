import {
  FaLinkedin, FaFacebook, FaStar, FaStarHalfAlt,
} from 'react-icons/fa';
// eslint-disable-next-line import/no-extraneous-dependencies
// import { v4 as uuidv4 } from 'uuid';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

export const banner = [
  {
    moto: 'Bridging the gap...',
    image: './banner2.jpg',
    name: 'We are fast reliable and trusted',
    desc: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,repellendus!adipisicing elit. Magni,repellendus!',
  },
  {
    moto: 'Bridging the gap...',
    image: './banner2.jpg',
    name: 'We are fast reliable and trusted',
    desc: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,repellendus!adipisicing elit. Magni,repellendus!',
  },
  {
    moto: 'Bridging the gap...',
    image: './banner3.jpg',
    name: 'We are fast reliable and trusted',
    desc: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,repellendus!adipisicing elit. Magni,repellendus!',
  },
  {
    moto: 'Bridging the gap...',
    image: './banner4.jpg',
    name: 'We are fast reliable and trusted',
    desc: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,repellendus!adipisicing elit. Magni,repellendus!',
  },
];

export const services = [
  {
    image: './food.jpeg',
    title: 'Food',
    desc: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,repellendus!',
  },
  {
    image: '/groceries.jpeg',
    title: 'Grocerries',
    desc: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,repellendus!',
  },
  {
    image: '/dispatch.jpg',
    title: 'Dispatch',
    desc: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,repellendus!',
  },
];
export const teams = [
  {
    image: './team1.jpeg',
    name: 'John Doe',
    desc: 'Designation',
    social: [<FaLinkedin key="linkedin" />, <FaFacebook key="facebook" />],
  },
  {
    image: './team1.jpeg',
    name: 'John Doe',
    desc: 'Designation',
    social: [<FaLinkedin key="linkedin" />, <FaFacebook key="facebook" />],
  },
  {
    image: './team1.jpeg',
    name: 'John Doe',
    desc: 'Designation',
    social: [<FaLinkedin key="linkedin" />, <FaFacebook key="facebook" />],
  },
  {
    image: './team1.jpeg',
    name: 'John Doe',
    desc: 'Designation',
    social: [<FaLinkedin key="linkedin" />, <FaFacebook key="facebook" />],
  },
];

export const RatingIcon = ({ rating }) => {
  const fullStar = <FaStar color="#ffc107" size={24} />;
  const halfStar = <FaStarHalfAlt color="#ffc107" size={24} />;
  const stars = [];

  const fullStarsCount = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStarsCount; i += 1) {
    stars.push(fullStar);
  }

  if (hasHalfStar) {
    stars.push(halfStar);
  }

  return <>{stars}</>;
};

RatingIcon.propTypes = {
  rating: PropTypes.number.isRequired,
};

export const testimonials = [
  {
    image: './testimonials1.jpg',
    name: 'John Doe',
    rating: <RatingIcon rating={4.5} />,
    desc: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,repellendus!',
  },
  {
    image: './testimonials1.jpg',
    name: 'John Doe',
    rating: <RatingIcon rating={5} />,
    desc: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,repellendus!',
  },
  {
    image: './testimonials1.jpg',
    name: 'John Doe',
    rating: <RatingIcon rating={4.5} />,
    desc: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,repellendus!',
  },
  {
    image: './testimonials1.jpg',
    name: 'John Doe',
    rating: <RatingIcon rating={4.5} />,
    desc: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,repellendus!',
  },
];

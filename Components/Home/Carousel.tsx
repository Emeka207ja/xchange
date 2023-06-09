import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Container } from '@chakra-ui/react';
import { testimonial } from './testimonialData';
import CarouselItem from './CarouselItem';

const Carousel = () => {
    const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
        slidesToScroll: 1,
            autoplay:true
		};
    return (
			<Container w={{ base: "sm", md: "md" }}>
				<Slider {...settings}>
				{
					testimonial.map(el => <CarouselItem
						content={el.content}
						key={el.id}
						name={el.name}
						from={el.from}
						to={el.to}
						img1={el.img1}
						img2={el.img2}
					/>)
					}
				</Slider>
			</Container>
		);
}

export default Carousel

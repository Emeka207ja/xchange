import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box,Container } from '@chakra-ui/react';

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
					<Box bg={"blue.400"} textAlign={"center"}>
						8
					</Box>
					<Box bg={"green.400"} textAlign={"center"}>
						9
					</Box>
					<Box bg={"red.400"} textAlign={"center"}>
						7
					</Box>
				</Slider>
			</Container>
		);
}

export default Carousel

import React from 'react'
import { Box ,HStack,Text,Heading} from '@chakra-ui/react'
import Carousel from './Carousel'
import {TiMessages} from "react-icons/ti"

const Testimonial = () => {
  return (
		<Box margin={"0.7rem"}>
			<Box mb={4}>
				<HStack>
					<Box>
						<TiMessages />
					</Box>
					<Box>
						
						<Heading fontSize={19}>Testimonials</Heading>
					</Box>
				</HStack>
			</Box>
			<Carousel />
		</Box>
	);
}

export default Testimonial

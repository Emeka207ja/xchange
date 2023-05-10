import React from 'react'
import { Box ,HStack,Text} from '@chakra-ui/react'
import Carousel from './Carousel'
import {TiMessages} from "react-icons/ti"

const Testimonial = () => {
  return (
      <Box mt={"0.7rem"}>
          <Box>
              <HStack>
                  <Box>
                      <TiMessages/>
                  </Box>
                  <Box>
                      <Text>Testimonials</Text>
                  </Box>
              </HStack>
          </Box>
        <Carousel/>  
    </Box>
  )
}

export default Testimonial

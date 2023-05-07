import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import Marquee from "react-fast-marquee";

const Marque = () => {
  return (
  
      <Marquee loop={0}>
          <Text>
             Update: We do not accept Chargeback funds or FlashCoin!!
          </Text>
      </Marquee>
  )
}

export default Marque

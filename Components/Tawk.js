import React, { useRef } from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { Box, Button } from "@chakra-ui/react";

const Tawk = () => {
  const tawkMessengerRef = useRef(null);
  
    const handleMinimize = () => {
       tawkMessengerRef.current?.minimize();
    };
   
  return (
		<Box>
			<Button onClick={handleMinimize} display={"none"}>minimize chat</Button>
			<TawkMessengerReact
				propertyId="645844b7ad80445890eba0d3"
				widgetId="1gvscorem"
				ref={tawkMessengerRef}
			/>
		</Box>
	);
}

export default Tawk

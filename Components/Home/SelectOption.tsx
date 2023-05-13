import React from 'react'



interface Props{
    name: string,
    img:string,
}

const SelectOption = ({name,img}:Props) => {
  return (
		<option value={name}>
			
			{name}
		</option>
	);
}

export default SelectOption

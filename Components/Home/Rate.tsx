import React from 'react'
import { Box, Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import { RateJson } from './RateJson';
import TableData from './TableData';

export const Rates = () => {
  return (
		<Box>
			<TableContainer>
				<Table variant="striped" colorScheme="teal">
					
					<Thead>
						<Tr>
							<Th>E-Currency</Th>
							<Th>Rates</Th>
							
						</Tr>
					</Thead>
					<Tbody>
                      {
                          RateJson?.map(el => <TableData
                              key={el.id}
                              img={el.img}
                              currency={el.currency}
                              rate1={el.rate1}
                              rate2={el.rate2} />)
                        }
					</Tbody>
					
				</Table>
			</TableContainer>
		</Box>
	);
}



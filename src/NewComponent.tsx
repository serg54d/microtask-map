import React from 'react';
import logo from './logo.svg';
import './App.css';

type topCarsType = {
	manufacturer: string
	model: string
}

export type NewComponentPropsType = {
	cars: Array<topCarsType>;
}



export const NewComponent = (props: NewComponentPropsType) => {
	const cars = props.cars;
	return (
		<ul>
			{props.cars.map((car, i) => {
				return (
					<li>
						<span>{car.manufacturer} - </span>
						<span>{car.model}</span>
					</li>
				)
			})}
		</ul>
	);
}



import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import {Colors} from '../../constants/colors';
import {FontSize, Padding, Margin} from '../../constants/utility'

const Heading = props => {

	const text = () => {
		switch (props.lvl) {
			case 1:
				return <Text style={{...styles.b1, ...props.style}}>{props.text}</Text>
			case 2:
				return <Text style={{...styles.b2, ...props.style}}>{props.text}</Text>
			case 3:
				return <Text style={{...styles.b3, ...props.style}}>{props.text}</Text>
			case 4:
				return <Text style={{...styles.b4, ...props.style}}>{props.text}</Text>
			default:
				break;
		}
	}

	return (
		<View style={{...props.containerStyle}}>
			{ text() }
		</View>
	)
}

const styles = StyleSheet.create({
	b1: { fontFamily: 'nunito-regular', fontSize: FontSize.s, color: Colors.black, marginVertical: Margin.s },
	b2: { fontFamily: 'nunito-light', fontSize: FontSize.xs, color: Colors.black, marginVertical: Margin.m, letterSpacing: 1 },
	b3: { fontFamily: 'nunito-regular', fontSize: FontSize.xs, color: Colors.black, marginVertical: Margin.s, textTransform: "uppercase" },
	b4: { fontFamily: 'major-regular', fontSize: FontSize.m, color: Colors.black,marginVertical: Margin.m, letterSpacing: -2, textTransform:"uppercase" }
})

export default Heading
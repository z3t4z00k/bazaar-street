import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import Body from '../Typo/Body'
import Button from '../Button/Button'

import { Colors } from '../../constants/colors'
import { Margin, Padding } from '../../constants/utility'

const Product = props => {

	return (
		<View style={{ ...styles.container }}>
			<View style={{ ...styles.imageContainer }} onPress={() => { props.onOpenHandler() }}><Image source={{ uri: props.imageUrl }} style={{ ...styles.image }} /></View>
			<View style={{ ...styles.detailsContainer }}>
				<Body lvl={1} text={props.name} style={{ marginVertical: 0 }} />
				<Body lvl={4} text={"₹" + props.price} style={{ backgroundColor: Colors.secondary, paddingHorizontal: Padding.s }} />
			</View>

			{props.editable
				?
				<View style={{ ...styles.buttonContainer }}>
					<TouchableOpacity onPress={() => { props.onEditHandler() }}>
						<Button lvl={1} text="Edit" />
					</TouchableOpacity>
					<TouchableOpacity onPress={() => { props.onDeleteHandler() }}>
						<Button lvl={2} text="Delete" />
					</TouchableOpacity>
				</View>
				:
				<View style={{ ...styles.buttonContainer }}>
					<TouchableOpacity onPress={() => { props.onAddHandler() }}>
						<Button lvl={1} text="Add to cart" />
					</TouchableOpacity>
					<TouchableOpacity onPress={() => { props.onOpenHandler() }}>
						<Button lvl={2} text="View Details" />
					</TouchableOpacity>
				</View>
			}
		</View>
	)
}

const styles = StyleSheet.create({
	container: { flex: 1, justifyContent: "center", elevation: 4, shadowColor: Colors.black, shadowOpacity: 0.25, shadowOffset: { width: 0, height: 4 }, shadowRadius: 8, margin: Margin.l, backgroundColor: Colors.whiteLight, borderRadius: 8, overflow: "hidden" },
	imageContainer: { width: "100%", alignItems: "center" },
	image: { width: "100%", height: 300 },
	detailsContainer: { flex: 1, width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: Padding.xl, marginVertical: Margin.m },
	buttonContainer: { flex: 1, width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: Padding.xl, marginBottom: Margin.l },
})

export default Product
import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Avatar({ name }) {
	return (
		<View style={{ width: '100%', alignItems: 'center' }}>
			<Image style={{ width: 150, height: 150 }} source={require('../assets/images/profile.png')} />
			<Text style={{ fontSize: 21, textTransform: 'capitalize', fontWeight: 600, marginTop: 10 }}>{name}</Text>
		</View>
	);
}

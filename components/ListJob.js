import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ListJob({ setJob }) {
	return (
		<View style={{ width: '100%', alignItems: 'center' }}>
			<TouchableOpacity style={{ ...styles.skill, backgroundColor: '#F9322C', marginTop: 40 }} onPress={() => setJob('laravel')}>
				<Text style={{ fontSize: 18, alignSelf: 'center', color: '#FFFFFF', fontWeight: 500 }}>Laravel</Text>
			</TouchableOpacity>
			<TouchableOpacity style={{ ...styles.skill, backgroundColor: '#0EA5E9' }} onPress={() => setJob('tailwindcss')}>
				<Text style={{ fontSize: 18, alignSelf: 'center', color: '#FFFFFF', fontWeight: 500 }}>Tailwindcss</Text>
			</TouchableOpacity>
			<TouchableOpacity style={{ ...styles.skill, backgroundColor: '#5ED3F3' }} onPress={() => setJob('reactjs')}>
				<Text style={{ fontSize: 18, alignSelf: 'center', color: '#FFFFFF', fontWeight: 500 }}>Reactjs</Text>
			</TouchableOpacity>
			<TouchableOpacity style={{ ...styles.skill, backgroundColor: '#FFFFFF' }} onPress={() => setJob('expressjs')}>
				<Text style={{ fontSize: 18, alignSelf: 'center', color: '#000000', fontWeight: 500 }}>Expressjs</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	skill: {
		width: '80%',
		paddingHorizontal: 15,
		paddingVertical: 5,
		marginBottom: 10,
		borderWidth: 3,
		borderRadius: 100,
	},
});

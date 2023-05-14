import { StatusBar } from 'expo-status-bar';
import { Image, Linking, StyleSheet, Text, View } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<Image style={{ width: 150, height: 150 }} source={require('./assets/images/profile.png')} />
			<Text style={{ fontSize: 21, textTransform: 'capitalize', fontWeight: 600, marginTop: 10 }}>ricky damar saputra</Text>
			<Text style={{ fontSize: 32, textTransform: 'capitalize', fontWeight: 300 }}>fullstack developer</Text>
			<View style={{ ...styles.skill, backgroundColor: '#F9322C', marginTop: 40 }}>
				<Text style={{ fontSize: 18, alignSelf: 'center', color: '#FFFFFF', fontWeight: 500 }}>Laravel</Text>
			</View>
			<View style={{ ...styles.skill, backgroundColor: '#0EA5E9' }}>
				<Text style={{ fontSize: 18, alignSelf: 'center', color: '#FFFFFF', fontWeight: 500 }}>Tailwindcss</Text>
			</View>
			<View style={{ ...styles.skill, backgroundColor: '#5ED3F3' }}>
				<Text style={{ fontSize: 18, alignSelf: 'center', color: '#FFFFFF', fontWeight: 500 }}>Reactjs</Text>
			</View>
			<View style={{ ...styles.skill, backgroundColor: '#FFFFFF' }}>
				<Text style={{ fontSize: 18, alignSelf: 'center', color: '#000000', fontWeight: 500 }}>Expressjs</Text>
			</View>
			<Text onPress={() => Linking.openURL('https://rickydamar.vercel.app')} style={{ fontSize: 12, marginTop: 5 }}>
				rickydamar.vercel.app
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	skill: {
		width: '80%',
		paddingHorizontal: 15,
		paddingVertical: 5,
		marginBottom: 10,
		borderWidth: 3,
		borderRadius: 100,
	},
});

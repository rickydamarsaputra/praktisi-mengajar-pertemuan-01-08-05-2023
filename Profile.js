import { useState } from 'react';
import { Linking, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Avatar from './components/Avatar';
import ListJob from './components/ListJob';

export default function App() {
	const [job, setJob] = useState('developer');
	const [hide, setHide] = useState(true);

	return (
		<View style={styles.container}>
			<Avatar name="ricky damar saputra" />
			{hide ? <Text style={{ fontSize: 32, textTransform: 'capitalize', fontWeight: 300 }}>fullstack {job}</Text> : null}
			<ListJob setJob={setJob} />
			<TouchableOpacity style={{ ...styles.skill, backgroundColor: '#FFFFFF', width: '50%', marginTop: 50 }} onPress={() => setHide(!hide)}>
				<Text style={{ fontSize: 18, alignSelf: 'center', color: '#000000', fontWeight: 500 }}>Hide Job</Text>
			</TouchableOpacity>
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
});

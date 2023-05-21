import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function App() {
	const [makanan, setMakanan] = useState([
		{
			nama: 'nasi goreng',
			harga: 10000,
		},
		{
			nama: 'lontong balap',
			harga: 8000,
		},
		{
			nama: 'geprek jodher kadani',
			harga: 15000,
		},
		{
			nama: 'mie gacoan',
			harga: 11000,
		},
		{
			nama: 'nasi goreng',
			harga: 10000,
		},
		{
			nama: 'lontong balap',
			harga: 8000,
		},
	]);

	const totalHarga = makanan.reduce((accumulator, currentValue) => {
		return accumulator + currentValue.harga;
	}, 0);

	return (
		<View style={{ padding: 20 }}>
			<Text>Daftar Makanan map</Text>
			<ScrollView>
				{makanan.map((makan, index) => (
					<Text key={index}>
						{makan.nama} harga: {makan.harga}
					</Text>
				))}
			</ScrollView>

			<Text style={{ marginTop: 20 }}>Daftar Makanan filter</Text>
			<ScrollView>
				{makanan
					.filter((makan) => {
						return makan.harga > 8000;
					})
					.map((makan, index) => (
						<Text key={index}>
							{makan.nama} harga: {makan.harga}
						</Text>
					))}
			</ScrollView>

			<Text style={{ marginTop: 20 }}>Total Harga Makanan: Rp. {totalHarga}</Text>
		</View>
	);
}

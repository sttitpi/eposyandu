import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Komponen untuk formulir Wali Balita
const FormBalita = () => (
  <View style={styles.scene}>
    <Text style={styles.title}>Data Diri Ibu</Text>
    <TextInput style={styles.input} placeholder="NIK Ibu" placeholderTextColor="#000" />
    <TextInput style={styles.input} placeholder="Nama Ibu" placeholderTextColor="#000" />
    <TextInput style={styles.input} placeholder="Jenis Kelamin Ibu" placeholderTextColor="#000" />
    <TextInput style={styles.input} placeholder="Tempat Lahir" placeholderTextColor="#000" />
    <TextInput style={styles.input} placeholder="Tanggal Lahir" placeholderTextColor="#000" />
    <TextInput style={styles.input} placeholder="Alamat KTP" placeholderTextColor="#000" />
    <TextInput style={styles.input} placeholder="Kelurahan KTP" placeholderTextColor="#000" />
    <TextInput style={styles.input} placeholder="Kecamatan KTP" placeholderTextColor="#000" />
    <TextInput style={styles.input} placeholder="Kota KTP" placeholderTextColor="#000" />
    <TextInput style={styles.input} placeholder="Provinsi KTP" placeholderTextColor="#000" />
    <TextInput style={styles.input} placeholder="Alamat Domisili Ibu" placeholderTextColor="#000" />
  </View>
);

// Komponen untuk formulir Wali / Lansia
const FormLansia = () => (
  <View style={styles.scene}>
    <Text style={styles.title}>Data Diri Wali/Lansia</Text>
    <TextInput style={styles.input} placeholder="NIK Wali/Lansia" placeholderTextColor="#000" />
    <TextInput style={styles.input} placeholder="Nama Wali/Lansia" placeholderTextColor="#000" />
    <TextInput style={styles.input} placeholder="Jenis Kelamin Wali/Lansia" placeholderTextColor="#000" />
    <TextInput style={styles.input} placeholder="Tempat Lahir" placeholderTextColor="#000" />
    <TextInput style={styles.input} placeholder="Tanggal Lahir" placeholderTextColor="#000" />
    <TextInput style={styles.input} placeholder="Alamat KTP" placeholderTextColor="#000" />
    <TextInput style={styles.input} placeholder="Kelurahan KTP" placeholderTextColor="#000" />
    <TextInput style={styles.input} placeholder="Kecamatan KTP" placeholderTextColor="#000" />
    <TextInput style={styles.input} placeholder="Kota KTP" placeholderTextColor="#000" />
    <TextInput style={styles.input} placeholder="Provinsi KTP" placeholderTextColor="#000" />
    <TextInput style={styles.input} placeholder="Alamat Domisili Wali/Lansia" placeholderTextColor="#000" />
  </View>
);

const Tab = createMaterialTopTabNavigator();

const FormulirScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
        tabBarStyle: { backgroundColor: '#008EB3' },
        tabBarIndicatorStyle: { backgroundColor: '#fff' },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#ddd',
      }}
    >
      <Tab.Screen name="Wali Balita" component={FormBalita} />
      <Tab.Screen name="Wali / Lansia" component={FormLansia} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#008EB3',
  },
  input: {
    backgroundColor: '#DFE4EB',
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    color: '#000',
  },
});

export default FormulirScreen;

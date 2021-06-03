import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';

export default function Procrastinate() {
  return (
    <Header 
        title = "Procrastinating Now?" 
        subtitle="If yes, why?"
    />
  );
}

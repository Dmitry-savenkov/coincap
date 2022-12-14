// Lib
import React from 'react';
import { ScrollView, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Components
import ChangePortfolio from '../components/Portfolio/ChangePortfolio';
import PortfolioList from '../components/Portfolio/PortfolioList';
import Title from '../components/Title/Title';

const Portfolio = () => {
  return (
    <ScrollView style={[styles.container]} showsVerticalScrollIndicator={false}>
      <SafeAreaView>
        <Title title="Portfolio" />
        <ChangePortfolio />
        <PortfolioList />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});

export default Portfolio;

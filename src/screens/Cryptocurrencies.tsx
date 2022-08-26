// Lib
import React, { useState } from 'react';
import { SafeAreaView, FlatList } from 'react-native';

//Components
import Loader from '../components/Loader/Loader';
import CryptocurrenciesList from '../components/Cryptocurrencies/CryptocurrenciesListItem';

// Hooks
import useCryptocurrencies from '../hooks/useCryptocurrencies';

// Types
import { CryptocurrensiesNavigationProps } from '../types/navigation';

const Cryptocurrencies = ({ navigation }: CryptocurrensiesNavigationProps) => {
  const [offset, setOffset] = useState(0);

  const { loading, data } = useCryptocurrencies(offset);

  const loadMore = () => {
    if (!loading) {
      setOffset((offset) => offset + 10);
    }
  };

  return (
    <SafeAreaView>
      {data.length ? (
        <FlatList
          data={data}
          keyExtractor={(item: { id: string }, index: number) => item.id + index.toString()}
          onEndReached={loadMore}
          onEndReachedThreshold={0.1}
          renderItem={({ item }) => <CryptocurrenciesList item={item} navigation={navigation} />}
        />
      ) : (
        <Loader />
      )}
    </SafeAreaView>
  );
};

export default Cryptocurrencies;

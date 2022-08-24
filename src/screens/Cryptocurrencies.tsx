// Lib
import React, { useState } from 'react';
import { SafeAreaView, FlatList } from 'react-native';

//Components
import Loader from '../components/Loader';
import CryptocurrenciesList from '../components/CryptocurrenciesList';

// Hooks
import useCryptocurrenciesRequest from '../hooks/useCryptocurrenciesRequest';

// Types
import { CryptocurrensiesNavigationProps } from '../types/navigation';

const Cryptocurrencies = ({ navigation }: CryptocurrensiesNavigationProps) => {
  const [offset, setOffset] = useState(0);

  const { loading, data } = useCryptocurrenciesRequest(offset);

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

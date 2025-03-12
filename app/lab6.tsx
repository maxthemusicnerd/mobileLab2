import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { getGames } from '../lib/supabase_crud';

export default function App() {
  const [games, setGames] = useState<{ id: number; game: string }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedGames = await getGames();
      setGames(fetchedGames);
    };
    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Game List</Text>
      <FlatList
        data={games}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 18, marginBottom: 5 }}>{item.game}</Text>
        )}/>
    </View>
  );
}

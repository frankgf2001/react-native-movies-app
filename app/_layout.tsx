import { View, Text } from 'react-native'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import '../global.css';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


// Create a client
const queryClient = new QueryClient()

const RootLayout = () => {
  return (
    // Provide the client to your App
    <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        <Stack 
          screenOptions={{
            headerShown: false
          }}
        />
      </QueryClientProvider>
    </GestureHandlerRootView>
  )
}

export default RootLayout
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


// Create a client
const queryClient = new QueryClient()

const RootLayout = () => {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Stack 
        screenOptions={{
          headerShown: false
        }}
      />
    </QueryClientProvider>
  )
}

export default RootLayout
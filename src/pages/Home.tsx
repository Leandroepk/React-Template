import { useCounter } from '@/contexts/counter';
import { Box, Button, Heading, Text } from '@chakra-ui/react';

export const HomePage = () => {
  const { count, inc } = useCounter();

  return (
    <Box p="4">
      <Heading>Bienvenido</Heading>
      <Text>Esta es la página de inicio.</Text>
      <Text>Contador: {count}</Text>
      <Button onClick={inc}>Incrementar</Button>
    </Box>
  );
};

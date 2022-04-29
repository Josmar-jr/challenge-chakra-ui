import { HStack, Text } from "@chakra-ui/react";
import { Characteristic } from "./characteristic";

export function Characteristics() {
  return (
    <HStack
      spacing={["8", "16", "32"]}
      py="24"
      px="4"
      mx="auto"
      flexWrap="wrap"
      justify="center"
    >
      <Characteristic icon="cocktail" text="vida nortuna" />
      <Characteristic icon="surf" text="praia" />
      <Characteristic icon="building" text="moderno" />
      <Characteristic icon="museum" text="clássico" />
      <Characteristic icon="earth" text="e mais..." />
    </HStack>
  );
}

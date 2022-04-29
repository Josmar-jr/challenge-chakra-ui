import { VStack, Heading, Wrap } from "@chakra-ui/layout";

import { City } from "./City";

export function CitiesContainer() {
  return (
    <VStack maxW="1160px" spacing="10" px="4" mx="auto" align="left">
      <Heading as="h2" fontSize={["24px", "32px", "36px"]} fontWeight="medium">
        Cidades +100
      </Heading>
      <Wrap w="full" spacing="8" justify={["center", "left"]}>
        {[0, 0, 0, 0, 0].map((city, index) => (
          <City key={Math.random() * index} />
        ))}
      </Wrap>
    </VStack>
  );
}

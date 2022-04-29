/* eslint-disable react/jsx-key */
import { Grid, Text } from "@chakra-ui/layout";

import { Infos } from "./infos";

const continent = {
  description:
    "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
  countries: 50,
  languages: 50,
  cities: 24,
  cities_list: "Natal, São Paulo, Dubai, Nova York",
};

export function AboutContinent() {
  return (
    <Grid
      templateColumns={["1fr", "1fr", "1fr 1fr", "1.2fr 1fr"]}
      gap={[5, 10, 16, 20]}
      my={["8", "20"]}
      maxW="1160px"
      px="4"
      mx="auto"
    >
      <Text
        fontSize={["lg", "xl", "xl", "2xl"]}
        color="gray.700"
        textAlign="justify"
      >
        {continent.description}
      </Text>
      <Infos continent={continent} />
    </Grid>
  );
}

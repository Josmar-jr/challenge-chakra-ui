import { Flex } from "@chakra-ui/layout";
import { AboutContinent } from "../../components/AboutContinent";
import { Header } from "../../components/Header";
import { HeroContinent } from "../../components/HeroContinent";
import { CitiesContainer } from "../../components/CitiesContainer";

export default function Continent() {
  return (
    <Flex direction="column">
      <Header />
      <HeroContinent />
      <AboutContinent />
      <CitiesContainer />
    </Flex>
  );
}

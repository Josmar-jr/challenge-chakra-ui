import { Flex, Heading } from "@chakra-ui/react";
import { BannerHero } from "../components/BannerHero";
import { Characteristics } from "../components/Characteristics";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Slider } from "../components/Slider";

export default function Home() {
  return (
    <Flex minH="100vh" w="full" direction="column">
      <Header />
      <BannerHero />
      <Characteristics />
      <Separator />
      <Heading fontWeight="normal" textAlign="center" my={["5", "14"]}>
        Vamos nessa? <br /> Então escolha seu continente
      </Heading>
      <Slider />
    </Flex>
  );
}

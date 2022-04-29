import { Image } from "@chakra-ui/image";
import { Flex, Heading } from "@chakra-ui/layout";

export function HeroContinent() {
  return (
    <Flex
      background="url('/europa.png')"
      backgroundPosition="center center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      justifyContent={["center", "flex-start"]}
      alignItems={["center", "flex-end"]}
      h={["50vh", "60vh", "68vh"]}
      pb={["6", "8", "16"]}
      pl={["8", "12", "28"]}
    >
      <Heading
        color="white"
        fontWeight="500"
        fontSize={["36px", "44px", "48px"]}
      >
        Europa
      </Heading>
    </Flex>
  );
}

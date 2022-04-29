import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";

export function BannerHero() {
  return (
    <Flex
      w="full"
      h={["163px", "250px", "250px", "335px"]}
      bgImage="url('background.png')"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        justify={["center", "space-between"]}
        align="center"
        w="full"
        maxW="1280px"
        mx="auto"
        px={["4", "8"]}
      >
        <Box maxW="540px">
          <Heading
            color="gray.100"
            fontWeight="medium"
            fontSize={["xl", "2l", "2xl", "3xl", "4xl"]}
            lineHeight="shorter"
          >
            5 continentes, <br /> infinitas possibilidades.
          </Heading>
          <Text color="gray.200" fontSize={["0.8rem", "1rem", "xl"]} mt="4">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        <Box maxW="430px" pl="2">
          <Image
            src="/Airplane.svg"
            alt="Avião sobrevoando as nuvens"
            w="full"
            display={["none", "block", "block"]}
            transform="translate3d(0, 50px, 0)"
          />
        </Box>
      </Flex>
    </Flex>
  );
}

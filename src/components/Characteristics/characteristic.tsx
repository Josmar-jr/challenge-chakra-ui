import { Image } from "@chakra-ui/image";
import { Text, Flex } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";

type CharacteristicProps = {
  icon: string;
  text: string;
};

export function Characteristic({ icon, text }: CharacteristicProps) {
  const isMobile = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex direction={["row", "row", "column"]} align="center" justify="center">
      {isMobile ? (
        <Image src={`/icons/${icon}.svg`} alt={text} w="85px" h="85px" />
      ) : (
        <Text color="yellow.500">•</Text>
      )}
      <Text fontWeight="bold" mt={["0", "0", "6"]} ml={["2", "2", "0"]}>
        {text}
      </Text>
    </Flex>
  );
}

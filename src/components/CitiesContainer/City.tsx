import { Box, Flex, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import { Image } from "@chakra-ui/image";

export function City() {
  return (
    <Box>
      <Image src="/Foto.png" alt="Foto da cidade" w="full" />
      <Flex
        p="4"
        border="1px solid"
        borderTop="none"
        borderColor="yellow.500"
        justify="space-between"
        align="center"
      >
        <Box>
          <Text>Londres</Text>
          <Text fontSize="small" color="gray.400">
            Reino Unido
          </Text>
        </Box>
        <Avatar src="/franch.png" size="xs" />
      </Flex>
    </Box>
  );
}

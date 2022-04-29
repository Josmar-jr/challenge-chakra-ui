import { useRouter } from "next/router";
import NextLink from "next/link";
import { Grid, Image, Link, Icon } from "@chakra-ui/react";
import { RiArrowLeftSLine } from "react-icons/ri";

export function Header() {
  const { asPath } = useRouter();
  const notHomePage = asPath !== "/";

  return (
    <Grid
      as="header"
      w="full"
      templateColumns="repeat(3, 1fr)"
      justifyContent="center"
      mx="auto"
      alignContent="center"
      p="4"
    >
      {notHomePage && (
        <NextLink href="/">
          <Link>
            <Icon as={RiArrowLeftSLine} fontSize={[20, 40]} justifySelf="flex-start" />
          </Link>
        </NextLink>
      )}
      <Image
        src="/Logo.svg"
        alt="Logo WorldTrips"
        gridColumn="2"
        justifySelf="center"
      />
    </Grid>
  );
}

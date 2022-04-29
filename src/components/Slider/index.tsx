import Link from "next/link";

import { Flex, Heading, Text } from "@chakra-ui/layout";
import SwiperCore, {
  Pagination,
  Navigation,
  A11y,
  SwiperOptions,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y]);

export function Slider() {
  const params: SwiperOptions = {
    slidesPerView: 1,
    pagination: { clickable: true },
    autoplay: {
      delay: 4000,
    },
    grabCursor: true,
    loop: true,
  };

  return (
    <Flex
      w="full"
      maxW="1220px"
      mx="auto"
      mb={["5", "10"]}
      h={["250px", "450px"]}
    >
      <Swiper {...params} navigation>
        <SwiperSlide>
          <Flex
            w="full"
            h="full"
            align="center"
            justify="center"
            bgImage="url('/continent.png')"
            color="white"
            textAlign="center"
          >
            <Link href="/continent/europe">
              <a>
                <Heading fontSize={["3xl", "4xl", "5xl"]}>Europa</Heading>
                <Text mt={["2", "4"]} ontSize={["0.8rem", "1xl", "2xl"]}>
                  O continente mais antigo.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w="full"
            h="full"
            align="center"
            justify="center"
            bgImage="url('/continent.png')"
            color="white"
            textAlign="center"
          >
            <Link href="/continent/europe">
              <a>
                <Heading fontSize={["3xl", "4xl", "5xl"]}>America</Heading>
                <Text mt={["2", "4"]} ontSize={["0.8rem", "1xl", "2xl"]}>
                  O continente mais antigo.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}

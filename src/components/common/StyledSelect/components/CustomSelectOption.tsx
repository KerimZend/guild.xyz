import {
  Center,
  Flex,
  Image,
  SkeletonCircle,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"

const CustomSelectOption = ({
  data,
  isDisabled,
  innerProps,
  isFocused,
}): JSX.Element => {
  /**
   * Removing the mouse event handlers because those are really bad for performance
   * and a simple CSS hover is enough for us. Source:
   * https://github.com/JedWatson/react-select/issues/3128
   */
  const { onMouseMove, onMouseOver, ...filteredInnerProps } = innerProps

  const focusedBg = useColorModeValue("blackAlpha.100", "gray.600")

  if (isDisabled) return null

  return (
    <Flex
      px={4}
      py={2}
      width="full"
      alignItems={"center"}
      cursor="pointer"
      transition="0.2s ease"
      bgColor={isFocused ? focusedBg : undefined}
      _hover={{ bgColor: focusedBg }}
      title={data.label}
      {...filteredInnerProps}
    >
      {data.img && (
        <Center boxSize={5} mr="2" flexShrink={0}>
          <Image
            w="full"
            h="full"
            {...(!data.img.includes(".svg") && {
              objectFit: "cover",
              rounded: "full",
            })}
            src={data.img}
            alt={data.label}
            fallback={<SkeletonCircle w="full" h="full" />}
          />
        </Center>
      )}
      <Text fontWeight="semibold" as="span" isTruncated>
        {data.label}
      </Text>
      {data.details && (
        <Text
          as="span"
          colorScheme="gray"
          ml="auto"
          pl={1}
          width="max-content"
          minW="max-content"
          fontSize="sm"
          fontWeight="semibold"
          isTruncated
        >
          {data.details}
        </Text>
      )}
    </Flex>
  )
}

export default CustomSelectOption
import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, ChatIcon, StarIcon } from '@chakra-ui/icons'

import Section from '../components/section'
import Paragraph from '../components/paragraph'

const Page = () => {
  return (
    <Container>
      <Box display={{ md: 'flex' }} my={15}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Vitor Hugo Nakai
          </Heading>
          <p>Javascript & Typescript Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/umiko.gif"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1} my={5}>
        <Heading as="h1" variant="section-title" mb={4}>
          Work
        </Heading>

        <Paragraph mb={4}>
          Vitor is a FullStack Developer passionate about the web and mobile
          development. He has experience with projects using JavaScript /
          Typescript, NodeJS, ReactJS, and React Native. Currently, he is based
          in Pederneiras , working in his own projects.
        </Paragraph>

        <Box align="left" my={4}>
          <a href="https://github.com/vhnakai">
            <Button rightIcon={<StarIcon />} colorScheme="teal">
              My Github
            </Button>
          </a>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h1" variant="section-title" mb={4}>
          What doing Vitor recently?
        </Heading>

        <Paragraph mb={4}>
          He's been working on full-time job as Developer in JN Moura. But
          recently he started to stream at night on Twitch, playing League of
          legends and New Word.
        </Paragraph>

        <Box align="left" my={4}>
          <a href="https://twitch.tv/vhnakai">
            <Button rightIcon={<ChatIcon />} colorScheme="teal">
              My Twitch
            </Button>
          </a>
        </Box>
      </Section>
    </Container>
  )
}

export default Page

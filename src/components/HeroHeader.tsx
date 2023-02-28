import {
  ActionIcon,
  Group,
  Title,
  Center,
  Space,
  Text,
  Paper
} from "@mantine/core";
import {
  BrandUpwork,
  BrandLinkedin,
  BrandGithub,
  SquareLetterR
} from "tabler-icons-react";

export default function HeroHeader() {
  return (
    <Paper shadow="xl" radius="lg" p="xl" withBorder>
      <Center>
        <Title color={"#A5D8FF"} ta="center">
          Gage Van Kuilenburg
        </Title>
      </Center>
      <Space h="xs" />
      <Text ta="center" size="md" color="dimmed">
        Software Developer
      </Text>
      <Space h="md" />
      <Center>
        <Text ta="center" size="md" color="white">
          I am a passionate learner and creator and this fuels my technical
          ability as a software developer. My project experience primarily
          revolves around ReactJS, NodeJS, MantineUI, JavaScript, and
          TypeScript. I graduated with a BASc in Software Development from
          Valencia College and am based in Orlando, FL. Below are links to my
          Upwork, LinkedIn, Github, Resume, and Email.
        </Text>
      </Center>
      <Space h="md" />
      <Group spacing={5} position="center" noWrap>
        <ActionIcon
          color="blue"
          variant="light"
          component="a"
          href="https://www.upwork.com/freelancers/~012c5697e7fc2669c1?viewMode=1"
          target="_blank"
          size="lg"
        >
          <BrandUpwork size={44} stroke-width={1.5} />
        </ActionIcon>
        <ActionIcon
          color="blue"
          variant="light"
          component="a"
          href="https://www.linkedin.com/in/gage-v-b5a04319a/"
          target="_blank"
          size="lg"
        >
          <BrandLinkedin size={44} stroke-width={1.5} />
        </ActionIcon>
        <ActionIcon
          color="blue"
          variant="light"
          component="a"
          href="http://github.com/GageVanK"
          target="_blank"
          size="lg"
        >
          <BrandGithub size={44} stroke-width={1.5} />
        </ActionIcon>
        <ActionIcon
          color="blue"
          variant="light"
          component="a"
          href="https://docs.google.com/document/d/1yOuf8jlh9Tmfhb16067chdS2rv0yRGhX1jOVTZqDj_w/edit?usp=sharing"
          target="_blank"
          size="lg"
        >
          <SquareLetterR size={44} stroke-width={1.5} />
        </ActionIcon>
      </Group>
      <Space h="md" />
      <Text align="center" color="dimmed" size="sm">
        gagevank155@gmail.com
      </Text>
    </Paper>
  );
}

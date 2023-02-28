import {
  Paper,
  Accordion,
  Text,
  Space,
  Group,
  ActionIcon,
  Card,
  Button,
  UnstyledButton
} from "@mantine/core";
import {
  WaveSine,
  LetterC,
  DeviceGamepad,
  Diamond,
  BrandGithub
} from "tabler-icons-react";
import { useScrollIntoView } from "@mantine/hooks";

export default function ProjectAccordion() {
  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView();
  return (
    <Paper shadow="xl" radius="lg" p="xl" withBorder>
      <Text color={"#A5D8FF"} ta="center" fz="xl" fw={700}>
        Projects
      </Text>
      <Space h="xl" />
      <Accordion
        ref={scrollableRef}
        variant="separated"
        radius="lg"
        defaultValue="customization"
      >
        <Accordion.Item align="center" value="Waves">
          <UnstyledButton
            onClick={() => scrollIntoView({ alignment: "center" })}
          >
            <Accordion.Control>
              <Group>
                <WaveSine size={22} strokeWidth={2} color={"#A5D8FF"} />

                <Text fw={500}>Waves</Text>
              </Group>
            </Accordion.Control>
          </UnstyledButton>

          <Accordion.Panel>
            A React Web App built on the Decentralized-Social (DeSo) Blockchain.
            Twitch meets Twitter. Allowing Twitch creators an easier path to
            monetization and content ownership. Users can sign-up for an account
            on the Deso-Blockchain, post on-chain, Stream via OBS or Streamlabs.
            Future functionality will allows users to tip, comment, like, and
            repost content on the deso-blockchain. Direct in-app Wallet Access
            coming soon.
            <Space h="md" />
            <Card radius="md" withBorder>
              <Group position="center">
                <Button
                  target="_blank"
                  component="a"
                  href="https://waves-v1.netlify.app/"
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan" }}
                >
                  Visit Waves
                </Button>
                <ActionIcon
                  target="_blank"
                  color="blue"
                  variant="light"
                  component="a"
                  href="https://github.com/GageVanK/Social-App-Starter-Pack"
                  size="lg"
                >
                  <BrandGithub size={22} stroke-width={1.5} />
                </ActionIcon>
              </Group>

              <Text size="sm" color="dimmed" mt="sm">
                ReactJS • NodeJS • TypeScript • DeSo API SDK • Netlify •
                MantineUI • Recoil • LivePeer
              </Text>
            </Card>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item align="center" value="Combat Collective">
          <UnstyledButton
            onClick={() => scrollIntoView({ alignment: "center" })}
          >
            <Accordion.Control>
              <Group>
                <LetterC size={22} strokeWidth={2} color={"#A5D8FF"} />

                <Text fw={500}>Combat Collective</Text>
              </Group>
            </Accordion.Control>
          </UnstyledButton>
          <Accordion.Panel>
            A Decentralized Social Network built to empower Martial Artists and
            allow them to connect with their fans. Fundraise through
            Social-Tips, Creator-Coins, and NFTs. NFTs can be Instructionals,
            Highlights, Photos, etc. Any Secondary sales of NFTs will payout
            Royalties to the original creator.
            <Space h="md" />
            <Card radius="md" withBorder>
              <Group position="center">
                <Button
                  target="_blank"
                  component="a"
                  href="https://combat-collective.netlify.app/"
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan" }}
                >
                  Visit Combat Collective
                </Button>
                <ActionIcon
                  color="blue"
                  target="_blank"
                  variant="light"
                  component="a"
                  href="https://github.com/GageVanK/Combat-Collective-DeSo-Beta"
                  size="lg"
                >
                  <BrandGithub size={22} stroke-width={1.5} />
                </ActionIcon>
              </Group>

              <Text size="sm" color="dimmed" mt="sm">
                Angular • Tailwind • TypeScript • DeSo APIs • Netlify
              </Text>
            </Card>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item align="center" value="Typing Game">
          <UnstyledButton
            onClick={() => scrollIntoView({ alignment: "center" })}
          >
            <Accordion.Control>
              <Group>
                <DeviceGamepad size={22} strokeWidth={2} color={"#A5D8FF"} />

                <Text fw={500}>Typing Game</Text>
              </Group>
            </Accordion.Control>
          </UnstyledButton>
          <Accordion.Panel>
            Reaction Typing Game to see how many characters you can type in a
            20-second interval
            <Space h="md" />
            <Card radius="md" withBorder>
              <Group position="center">
                <Button
                  target="_blank"
                  component="a"
                  href="https://gages-typing-game.netlify.app/"
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan" }}
                >
                  Visit Typing Game
                </Button>
                <ActionIcon
                  target="_blank"
                  color="blue"
                  variant="light"
                  component="a"
                  href="https://github.com/GageVanK/Typing-Game-v2"
                  size="lg"
                >
                  <BrandGithub size={22} stroke-width={1.5} />
                </ActionIcon>
              </Group>

              <Text size="sm" color="dimmed" mt="sm">
                ReactJS • NodeJS • TypeScript • Netlify • Styled-Components •
                MantineUI
              </Text>
            </Card>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item align="center" value="Company Website">
          <UnstyledButton
            onClick={() => scrollIntoView({ alignment: "center" })}
          >
            <Accordion.Control group="apart">
              <Group>
                <Diamond size={22} strokeWidth={2} color={"#A5D8FF"} />

                <Text ref={targetRef} fw={500}>
                  Company Website
                </Text>
              </Group>
            </Accordion.Control>
          </UnstyledButton>

          <Accordion.Panel>
            An updated, more responsive react web app of Luxury Brand Holdings
            Company Website.
            <Space h="md" />
            <Card radius="md" withBorder>
              <Group position="center">
                <Group>
                  <Button
                    component="a"
                    size="xs"
                    target="_blank"
                    href="https://csb-il7ex2.netlify.app/"
                    variant="gradient"
                    gradient={{ from: "indigo", to: "cyan" }}
                  >
                    New Website
                  </Button>
                  <Text fs="italic" color="white">
                    vs
                  </Text>
                  <Button
                    size="xs"
                    target="_blank"
                    component="a"
                    href="http://www.luxurybrandholdings.com/"
                    variant="gradient"
                    gradient={{ from: "cyan", to: "indigo" }}
                  >
                    Old Website
                  </Button>
                </Group>
                <ActionIcon
                  target="_blank"
                  color="blue"
                  variant="light"
                  component="a"
                  href="https://github.com/GageVanK/website-mockup-2"
                  size="lg"
                >
                  <BrandGithub size={22} stroke-width={1.5} />
                </ActionIcon>
              </Group>
              <Space h="xs" />

              <Text size="sm" color="dimmed" mt="sm">
                ReactJS • NodeJS • TypeScript • Netlify • Styled-Components •
                MantineUI
              </Text>
            </Card>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Paper>
  );
}

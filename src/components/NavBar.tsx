import {
  createStyles,
  Header,
  Group,
  ActionIcon,
  Container
} from "@mantine/core";

import {
  BrandUpwork,
  BrandLinkedin,
  BrandGithub,
  HexagonLetterG,
  HexagonLetterV,
  HexagonLetterK,
  SquareLetterR
} from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 56,

    [theme.fn.smallerThan("sm")]: {
      justifyContent: "flex-start"
    }
  },

  links: {
    width: 260,

    [theme.fn.smallerThan("sm")]: {
      display: "none"
    }
  },

  social: {
    width: 260,

    [theme.fn.smallerThan("sm")]: {
      width: "auto",
      marginLeft: "auto",
      display: "none"
    }
  }
}));

export default function NavBar() {
  const { classes } = useStyles();

  return (
    <>
      <Header height={56} mb={22}>
        <Container className={classes.inner}>
          <Group position="center">
            <HexagonLetterG color={"#A5D8FF"} size={44} stroke-width={1.5} />
            <HexagonLetterV color={"#A5D8FF"} size={44} stroke-width={1.5} />
            <HexagonLetterK color={"#A5D8FF"} size={44} stroke-width={1.5} />
          </Group>
          <Group spacing={5} className={classes.social} position="right" noWrap>
            <ActionIcon
              color="blue"
              variant="light"
              component="a"
              target="_blank"
              href="https://www.upwork.com/freelancers/~012c5697e7fc2669c1?viewMode=1"
              size="lg"
            >
              <BrandUpwork size={44} stroke-width={1.5} />
            </ActionIcon>
            <ActionIcon
              color="blue"
              variant="light"
              component="a"
              target="_blank"
              href="https://www.linkedin.com/in/gage-v-b5a04319a/"
              size="lg"
            >
              <BrandLinkedin size={44} stroke-width={1.5} />
            </ActionIcon>
            <ActionIcon
              color="blue"
              variant="light"
              component="a"
              target="_blank"
              href="http://github.com/GageVanK"
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
        </Container>
      </Header>
    </>
  );
}

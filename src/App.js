import "./styles.css";
import NavBar from "./components/NavBar";
import HeroHeader from "./components/HeroHeader";
import { StyledPageContainer } from "./components/StyledPageContainer";
import ProjectAccordion from "./components/ProjectAccordion";
import { Space } from "@mantine/core";
import { MantineProvider } from "@mantine/core";

export default function App() {
  return (
    <MantineProvider
      theme={{ colorScheme: "dark" }}
      withGlobalStyles
      withNormalizeCSS
    >
      <>
        <NavBar />
        <StyledPageContainer>
          <HeroHeader />
          <Space h="xl" />
          <ProjectAccordion />
        </StyledPageContainer>
      </>
    </MantineProvider>
  );
}

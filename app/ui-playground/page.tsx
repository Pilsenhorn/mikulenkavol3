import Container from "../components/Container";
import Section from "../components/Section";
import Button from "../components/ui/Button";
import { Input, Textarea } from "../components/ui/Input";
import Glass from "../components/ui/Glass";
import { H1, H2, Body } from "../components/ui/Typography";
import Carousel from "../components/ui/Carousel";
import GlassCardCarousel from "../components/ui/GlassCardCarousel";

export default function Playground() {
  return (
    <Section full={false}>
      <Container>
        <H1>UI Playground</H1>
        <Body>Zde testuješ všechny komponenty.</Body>

        <div className="mt-12 grid gap-8">

          <H2>Buttons</H2>
          <div className="flex gap-4 flex-wrap">
            <Button>Primary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>

          <H2>Inputs</H2>
          <Input placeholder="Tvůj input…" />
          <Textarea placeholder="Tvůj textarea…" />

          <H2>Carousel</H2>
          <Carousel>
            <GlassCardCarousel>Card 1</GlassCardCarousel>
            <GlassCardCarousel>Card 2</GlassCardCarousel>
            <GlassCardCarousel>Card 3</GlassCardCarousel>
            <GlassCardCarousel>Card 4</GlassCardCarousel>
            <GlassCardCarousel>Card 5</GlassCardCarousel>
          </Carousel>

          <H2>Glass</H2>
          <Glass>Glass panel example</Glass>

        </div>
      </Container>
    </Section>
  );
}

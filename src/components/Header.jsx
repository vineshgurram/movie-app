import Container from "./Container";

export default function Header({ className }) {
  return (
    <header className={className}>
      <Container>
        <h1 className="app-name">🎬 Movie<span>Flix</span></h1>
      </Container>
    </header>
  );
}

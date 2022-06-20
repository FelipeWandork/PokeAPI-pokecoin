import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <img src="../../assets/logo.svg" alt="Logo Pokemon" />
          <nav>
            <a>Home</a>
            <a>Posts</a>
          </nav>
      </Content>
    </Container>
  )
}
import { Body } from "./components/Body";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <GlobalStyle />
    </div>
  );
}
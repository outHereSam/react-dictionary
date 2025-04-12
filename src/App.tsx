import { ThemeProvider } from "./contexts/ThemeContext";
import { FontProvider } from "./contexts/FontContext";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";

function App() {
  return (
    <ThemeProvider>
      <FontProvider>
        <main>
          <Header />
          <SearchInput />
        </main>
      </FontProvider>
    </ThemeProvider>
  );
}

export default App;

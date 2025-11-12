import Banner from "./components/Banner";
import Link from "./components/Link";

function App() {
  return (
    <>
      <Banner src="/Banner.png" alt="Banner Image" />;
      <Link
        href="https://www.itau.com.br/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Acesse o Itaú
      </Link>
    </>
  );
}

export default App;

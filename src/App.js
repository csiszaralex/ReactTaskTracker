import Header from "./components/Header";

const App = () => {
  const name = "Alex";
  const felk = true;

  return (
    <div className="container">
      <Header title="Hello React!"/>
      <h2>
        Hello {name}
        {felk ? "!" : ""}
      </h2>
    </div>
  );
};

export default App;

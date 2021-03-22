function App() {
  const name = "Alex";
  const felk = true;

  return (
    <div className="container">
      <h1>Hello From React</h1>
      <h2>
        Hello {name}
        {felk ? "!" : ""}
      </h2>
    </div>
  );
}

export default App;

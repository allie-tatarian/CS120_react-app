import './App.css';

function PageTitle(props)
{
  return <h1 id="main">{props.children}</h1>
}

function App() {
  return (
    <>
    <PageTitle>My React App Demo</PageTitle>
    </>
  );
}

export default App;

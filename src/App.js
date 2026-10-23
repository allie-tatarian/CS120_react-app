import './App.css';

// The array holding the colors. The easiest way for me to make the background colors work was to use it for inline styling.
// To make the inline styling work, the style attributes needed to be nested inside of another attribute.
var MyColors = [
  {
    number: 1,
    divStyle: {
      backgroundColor: "#945548",
    },
  },
  {
    number: 2,
    divStyle: {
      backgroundColor: "#619448",
    },    
  },
  {
    number: 3,
    divStyle: {
      backgroundColor: "#488794",
    },    
  },
  {
    number: 4,
    divStyle: {
      backgroundColor: "#486194",
    },
  },
  {
    number: 5,
    divStyle: {
      backgroundColor: "#7B4894",
    },
  },
  {
    number: 6,
    divStyle: {
      backgroundColor: "#944861",
    },
  },
  {
    number: 7,
    divStyle: {
      backgroundColor: "#947B48",
    },
  },
  {
    number: 8,
    divStyle: {
      backgroundColor: "#664226",
    },
  },
  {
    number: 9,
    divStyle: {
      backgroundColor: "#879448",
    },
  },
];

  // This makes each block. The first line makes the onClick alert to give the number when clicked.
  // The second line returns the actual number block, which is a div with class "block", the onClick listener, and the inline style with the background color.
  function Block(props) {
    const speak = (number, e) => alert(number)
    return <div className="block" onClick={(e) => speak(props.number, e)} style={props.style}>{props.number}</div>
  } 

  // This function takes all of the blocks and puts them together.
  // First, we iterate over the colorArray with map. It returns the function Block using divStyle and number from the array.
  // Then, it makes a div with class "container" to put the listItems into a grid.
  function ColorGrid(props) {
    const listItems = props.colorArray.map((element) => {
            return <Block style={element.divStyle} number ={element.number} />;
        });
        return <div className="container">{listItems}</div>
    return 
  }

  // This just adds the title - it wasn't needed for this assignment but I kept it from the class demo.
  function PageTitle(props)
{
  return <h1 id="main">{props.children}</h1>
}

// Finally, the app function builds the page, by first running PageTitle to make the h1,
// then running ColorGrid using MyColors to build the grid.
function App() {
  return (
    <>
    <PageTitle>My React App Demo</PageTitle>
    <div><ColorGrid colorArray = {MyColors} /></div>
    </>
  );
}

export default App;

//notes on deploying:
//Update on GitHub
//Deploy on render - dashboard.render.com - can be manual or automatic
// Go to dashboard -> project -> service name -> manual deploy
//URL found on "deploys" side tab on Render
//site URL is cs120-react-app.onrender.com
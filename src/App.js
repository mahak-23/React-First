import Header from "./components/header.jsx";
import Footer from "./components/Footer.jsx";
import Notes from "./components/notes.jsx";

const react = require("react");

function App(){
  return (
 <div>
   <Header />
   <Notes />
   <Notes />
   <Notes />
   <Notes />
   <Notes />

   <Footer/>
  </div>
  );
}


export default App;
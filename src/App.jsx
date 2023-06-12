import { Campus } from "./component/Campus";
import { Course } from "./component/Course";
import { Facilities } from "./component/Facilities";
import { Header } from "./component/Header";


function App() {
  return (
    <div className="app">
   
      <Header />
      
      <Course />

      <Campus />

      <Facilities />
    </div>
  );
}

export default App;

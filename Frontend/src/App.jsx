import { Routes, Route } from "react-router-dom";
import { ContactList } from "./components/ContactList";
import { Form } from "./components/Form";
import { IsCreatingOrModifing } from "./components/IsCreatingOrModifing";

function App() {
  return (
    <div className="App">
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <br />
            <Routes>
              <Route path="/" element={<IsCreatingOrModifing />} />
              <Route path="/:id" element={<IsCreatingOrModifing />} />
            </Routes>
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <br />
            <Routes>
              <Route path="/" element={<Form />} />
              <Route path="/:id" element={<Form />} />
            </Routes>
          </div>
          <div className="col">
            <Routes>
              <Route path="/" element={<ContactList />} />
              <Route path="/:id" element={<ContactList />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

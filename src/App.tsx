import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import FirstProject from "./pages/FirstProject";
import { LanguageProvider } from './context/LanguageContextType'; // Import the provider
import Project from "./pages/Project";

function App() {

  // Simulate loading delay


  return (
    <div className="wrapper"> 
        <LanguageProvider>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/first" element={<Project />} />
          </Routes>
        </LanguageProvider>
    </div>
  );
}

export default App;

import { ThemeProvider, styled } from "styled-components";
import { lightTheme } from "./utils/Themes";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Authentication from "./pages/Authentication";
import { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import Tutorial from "./components/Tutorial";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;

function App() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <ThemeProvider theme={lightTheme}>
    <BrowserRouter>
      <Container>
        {currentUser && <Navbar currentUser={currentUser} />}
        <Routes>
          <Route path="/" element={currentUser ? <Dashboard /> : <Authentication />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/tutorials" element={<Tutorial/>} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/" element={<Authentication />} />
        </Routes>
      </Container>
    </BrowserRouter>
  </ThemeProvider>
  );
}

export default App;

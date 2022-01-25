import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import Header from "./Header.js";
import Searchbar from "./Searchbar.js";
import User from "./User.js";

const LightTheme = {
  pageBackground: "#F2F2F2",
  titleColor: "#222731",
  toggleColor: "#F2F2F2",
  toggleTextColor: "#4B6A9B",
  toggleIconColor: "#697C9A",
  toggleHoverColor: "#222731",
  searchBgColor: "#FEFEFE",
  boxShadow: "0 16px 30px -10px rgba(70, 96, 187, 0.2)",
  inputColor: "#1E2A47",
  sectionBgColor: "#FEFEFE",
  sectionBoxShadow: "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)",
  userNameColor: "#2B3442",
  userDateColor: "#697C9A",
  userBioColor: "#4B6A9B",
  userStatsBgColor: "#F6F8FF",
  statsCategoryColor: "#4B6A9B",
  statsFiguresColor: "#2B3442",
  svgFill: "#4b6a9b",
  linkH4: "#4B6A9B",
};

const DarkTheme = {
  pageBackground: "#141D2F",
  titleColor: "#FFFFFF",
  toggleColor: "#141D2F",
  toggleTextColor: "#FFFFFF",
  toggleIconColor: "#FFF",
  toggleHoverColor: "#90A4D4",
  searchBgColor: "#1E2A47",
  boxShadow: "none",
  inputColor: "#FFFFFF",
  inputBgColor: "#1E2A47",
  sectionBgColor: "#1E2A47",
  sectionBoxShadow: "none",
  userNameColor: "#FFFFFF",
  userDateColor: "#FFFFFF",
  userBioColor: "#FFFFFF",
  userStatsBgColor: "#141D2F",
  statsCategoryColor: "#FFFFFF",
  statsFiguresColor: "#FFFFFF",
  svgFill: "#FFFFFF",
  linkH4: "#FFFFFF",
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

const Main = styled.div`
  height: 100vh;
  width: 100%;
  padding: 30px 0px;
  background-color: ${(props) => props.theme.pageBackground};
  transition: all 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function App() {
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState([]);
  const [apiUrl, setApiUrl] = useState("https://api.github.com/users/octocat"); //on page load display octocat data
  const [username, setUsername] = useState("");

  //useEffect calls fectData function on load to ensure that octocat profile is the 1st user that loads

  const fetchData = async () => {
    try {
      const res = await fetch(apiUrl);
      const result = await res.json();
      setUser(result);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchData();
  });

  function handleChange(event) {
    setUsername(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setApiUrl(`https://api.github.com/users/${username}`);
  }

  return (
    <ThemeProvider theme={themes[theme]}>
      <Main>
        <Header theme={theme} setTheme={setTheme} />
        <Searchbar
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          theme={theme}
          setTheme={setTheme}
        />

        <User user={user} theme={theme} setTheme={setTheme} />
      </Main>
    </ThemeProvider>
  );
}

export default App;




import React from "react";
import styled from "styled-components";

const Form = styled.form`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.searchBgColor};
  margin: 36px 0px 16px 0px;
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: 15px;
  padding: 0px 7px 0px 16px;
  width: 80%;
  @media (min-width: 1280px) {
    width: 50%;
  }
`;

const Input = styled.input`
  outline: none;
  text-align: center;
  border: none;
  color: ${(props) => props.theme.inputColor};
  background-color: ${(props) => props.theme.inputBgColor};
  font-size: 1.125rem;
  line-height: 25px;
  flex-grow: 1;
  min-width: 0;
  height: 25px;
  font-family: "Space Mono";
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 25px;
`;

const Button = styled.input`
  height: 46px;
  width: 84px;
  font-family: "Space Mono";
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  background-color: #0079ff;
  cursor: pointer;
`;

function Searchbar({ handleSubmit, handleChange }) {
  const searchIcon = (
    <svg height="24" width="25" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z"
        fill="#0079ff"
      />
    </svg>
  );

  return (
    <Form onSubmit={handleSubmit}>
      {searchIcon}
      <Input
        type="text"
        placeholder="Search GitHub username..."
        onChange={handleChange}
      />

      <Button type="submit" value="Search" />
    </Form>
  );
}

export default Searchbar;

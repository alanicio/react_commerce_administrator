import styled from "@emotion/styled";


export const Navbar = styled.header`
  background-color: red;
  display: flex;
  padding: 1rem 2rem;
`;

export const NavDropdown = styled.div`
  margin-right: 2rem;
  button {
    background-color: transparent;
    padding: 1rem 1rem;
    color: white;
    border: none;
    font-weight: bold;
    cursor: pointer;
  }

  ul {
    position: absolute;
    display:none;
    background-color: white;
    list-style-type:none;
    padding: 0;
    margin: 0;
    margin-top: -10px;
    margin-left: 1rem;
    z-index:1;
    border-radius: 8px;
    border: 1px gray solid;
  }

  li {
    border-radius: 4px;
    padding: 1rem;
    &:hover {
      background-color: black;
      color: white;
      cursor: pointer;
    }
  }

  &:hover ul, ul:hover ul {
    display: block;
  }

  a {
    color: inherit; 
    text-decoration: inherit;
  }
`;
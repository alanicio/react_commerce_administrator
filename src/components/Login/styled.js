import styled from "@emotion/styled";

export const Background = styled.div`
  background-color: #d8f1f1;
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const Card = styled.div`
  background-color: white;
  padding: 2rem 2rem;
  margin: auto;
  border-radius: 12px;

  -webkit-box-shadow: 0px 0px 5px 1px rgba(255,255,255,1);
-moz-box-shadow: 0px 0px 5px 1px rgba(255,255,255,1);
box-shadow: 0px 0px 5px 1px rgba(255,255,255,1);
`;

export const FormRow = styled.div`
  display: block;
  padding-bottom: 1rem;

  label {
    display: ${ ({ type }) => (type === "text" ? "block" : null) };
    padding-top: 2rem;
    padding-bottom: ${ ({ type }) => (type=== "text" ? "1rem" : null) };
  }
`;

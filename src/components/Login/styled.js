import styled from "@emotion/styled";


export const Background = styled.div`
  background-color: red;
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const Card = styled.div`
  background-color: white;
  padding: 2rem 2rem;
  margin: auto;
  border-radius: 12px;
`;

export const FormRow = styled.form`
  display: block;
  padding-bottom: 1rem;

  label {
    display: ${ ({type}) => type==="text" ? "block" : null };
  }
`;
import styled from "@emotion/styled";

export const Row = styled.div`
  display: block;
  padding: 1rem 1rem;

  div {
    display: inline-block;
    padding: 1rem;
  }

  label {
    margin-right: 1rem;
  }

  input {
    margin-right: 1rem;
  }

  textarea {
    vertical-align: top;
  }

  @media(max-width: 980px) {
    width: 400px;
    padding: 0;
  }

  @media(max-width: 400px) {
    width: 300px;
    padding: 0;

  }
`;

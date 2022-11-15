import styled from "styled-components";

const TitleStyle = styled.div`
  h1 {
    font-size: 28px;
    color: #6d6d6d;
  }
`;
const HeaderContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;
  margin-bottom: 20px;
`;
const ButtonStyle = styled.div`
  .green {
    padding: 6px 35px;
    background-color: #10b981;
    border: 1px solid #10b981;
    border-radius: 6px;
    color: white;
  }
  .red {
    padding: 6px 35px;
    background-color: #f9504e;
    border: 1px solid #f9504e;
    border-radius: 6px;
    color: white;
  }
  .green:hover {
    border: 1px solid #10b981;
    background-color: white;
    color: #10b981;
  }
  .red:hover {
    border: 1px solid #f9504e;
    background-color: white;
    color: #f9504e;
  }
  .disabled {
    border-radius: 6px;
    background-color: #dddddd;
    /* background-color: rgba(0, 0, 0, 0.4); */

    border: 1px solid gray;
    color: black;
    padding: 6px 35px;
  }
  .disabled:hover {
    border-radius: 6px;
    background-color: rgba(0, 0, 0, 0.1);
    border: 1px solid gray;
    color: white;
    padding: 6px 35px;
  }
`;

export { TitleStyle, ButtonStyle, HeaderContainerStyle };

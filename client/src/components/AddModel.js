import React from "react";
import styled from "styled-components";
import { Button, Form, Input, InputNumber } from "antd";
import { useState } from "react";
import { ButtonStyle } from "../utils/styles/TitleStyle";
import BasicModal from "./BasicModal";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const AddModel = ({
  isModalOpen,
  onFinish,
  setIsModalOpen,
  id,
  name,
  handelDelete,
}) => {
  const [file, setFile] = useState({});

  return (
    <div>
      <BasicModal
        cancel={true}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      >
        <BodyCon>
          <form>
            <div>
              <input
                type={"file"}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <ButtonStyle className="buttons">
              <button
                onClick={(e) => {
                  e.preventDefault();

                  setIsModalOpen(false);
                }}
                style={{ margin: 10 }}
                className="red"
              >
                Cancel
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onFinish(file);
                }}
                style={{ margin: 10 }}
                className="green"
              >
                Add
              </button>
            </ButtonStyle>
          </form>
        </BodyCon>
      </BasicModal>
    </div>
  );
};

const BodyCon = styled.div`
  display: flex;

  text-align: center;
  form {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: flex-start; */
    .row {
      display: flex;
    }
    .lb {
      align-self: center;

      width: 25%;
      /* padding: 5px; */
      /* margin: 5px; */
    }
    textarea {
      align-self: center;
      width: 75%;
    }

    .buttons {
      display: flex;
      justify-content: end;
    }
  }
`;

const TextInput = styled.input`
  width: 75%;
  padding: 5px;
  border: 1px solid gray;
`;
export default AddModel;

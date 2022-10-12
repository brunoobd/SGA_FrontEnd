import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
  width: 100w;
  height: 100w;

  position: fixed;
  inset: 0;

  background: rgba(0, 0, 0, 0.4);
`;

export const Content = styled(Dialog.Content)`
  width: 750px;
  padding: 3.75rem 4.688rem;

  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  //Hackerzinho para centralizar
  position: fixed;
  top: 50%;
  left: 50%;

  border-radius: 20px;
  background: ${(props) => props.theme["white"]};
  transform: translate(-50%, -50%);
  box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.1);
`;

export const ModalHeader = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-weight: 800;
    font-size: 40px;
    background: linear-gradient(
      90deg,
      #0f62ab -2.99%,
      #0031b0 -2.98%,
      #25b5e9 99.8%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const HeaderButtons = styled.div`
  button {
    background: none;
    border: none;
    margin-left: 20px;
  }

  svg {
    cursor: pointer;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  button {
    font-weight: 600;
    width: 280px;
    height: 85px;

    font-size: 20px;
    font-weight: 800;
    border-radius: 8px;
    background-color: #ffffff;
    color: #868686;

    border: none;
    box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.1);
    opacity: 0.6;
  }
`;

export const InputContent = styled.div`
  display: flex;
  justify-content: space-between;

  &:nth-child(3) {
    flex-direction: column;
    gap: 0.625rem;

    label {
      font-weight: 800;
      font-size: 1.25rem;
      color: ${(props) => props.theme["gray-700"]};
    }

    input {
      height: 5.313rem;
      padding: 1.25rem;

      border: none;
      box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.1);
      border-radius: 8px;

      font-weight: 800;
      font-size: 1.1rem;
      color: ${(props) => props.theme["gray-700"]};

      &:disabled {
        background-color: #efefef;
        &::placeholder {
          color: rgba(109, 109, 109, 0.5);
        }
      }
    }
  }
`;

export const InputIndividual = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 0.625rem;

  label {
    font-weight: 800;
    font-size: 1.25rem;
    color: ${(props) => props.theme["gray-700"]};
  }

  input {
    height: 5.313rem;
    padding: 1.25rem;

    border: none;
    box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    font-weight: 800;
    font-size: 1.1rem;
    color: ${(props) => props.theme["gray-700"]};

    &:disabled {
      color: rgba(109, 109, 109, 0.5);
      background-color: #efefef;
    }
  }
`;

export const FinalButton = styled.div`
  width: 100%;
  button {
    width: 100%;
    height: 4.688rem;

    border: none;
    border-radius: 10px;
    background-color: ${(props) => props.theme["blue-500"]};

    color: ${(props) => props.theme["white"]};
    font-size: 1.25rem;
    font-weight: bold;
  }
`;
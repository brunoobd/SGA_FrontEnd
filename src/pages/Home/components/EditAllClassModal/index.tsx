import * as Dialog from "@radix-ui/react-dialog";
import { Plus, X } from "phosphor-react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ObjectsContext } from "../../../../Contexts/ObjectsContext";
import {
  CloseButton,
  ContainerButtonCreate,
  Content,
  InputContainer,
  InputContent,
  InputContentDupo,
  Overlay,
} from "./style";

export function EditAllClassModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <form>
          <CloseButton>
            <X />
          </CloseButton>

          <Dialog.Title>Editar Aulas</Dialog.Title>

          <InputContainer>
            <InputContentDupo>
              <div>
                <label>Data Inicio</label>
                <input type="date" placeholder="" />
              </div>
              <div>
                <label>Data Final</label>
                <input type="date" placeholder="" />
              </div>
            </InputContentDupo>

            <InputContent>
              <label>Selecione o Professor</label>
              <select placeholder="Selecione o Professor">
                <option >Selecione o Professor</option>
              </select>
            </InputContent>

            <InputContent>
              <label>Selecione o Ambiente</label>
              <select placeholder="Selecione o Ambiente">
                <option>Selecione o Ambiente</option>
              </select>
            </InputContent>

          </InputContainer>
          <ContainerButtonCreate>
            <button>Editar</button>
          </ContainerButtonCreate>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
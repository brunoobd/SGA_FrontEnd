import * as Dialog from "@radix-ui/react-dialog";
import { NotePencil, X } from "phosphor-react";
import React, { useContext, useState } from "react";
import { ObjectsContext } from "../../../../Contexts/ObjectsContext";
import {
  CheckContainer,
  CheckContent,
  CheckIndividual,
  Content,
  FinalButton,
  HeaderButtons,
  InputContainer,
  InputContent,
  InputIndividual,
  ModalHeader,
  Overlay,
} from "./style";

export function NewVacation() {
  const { teachers } = useContext(ObjectsContext);
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <ModalHeader>
          <Dialog.Title>Férias</Dialog.Title>
          <HeaderButtons>
            <Dialog.Close>
              <X size={50} weight="light" />
            </Dialog.Close>
          </HeaderButtons>
        </ModalHeader>
        <InputContainer>
          <InputContent>
            <InputIndividual>
              <label>Data de início</label>
              <input type="date" placeholder="dd/MM/yyyy" />
            </InputIndividual>
            <InputIndividual>
              <label>Data de fim</label>
              <input type="date" placeholder="dd/MM/yyyy" />
            </InputIndividual>
          </InputContent>
          <InputContent>
            <h1>Professores</h1>
            <hr />
            <CheckIndividual>
              <input type={"checkbox"} />
              <label>Selecionar Todos</label>
            </CheckIndividual>
            {
            teachers.map((teacher) => {
              if (teachers.length > 0) {

              }
              return(
                <h1>teste</h1>
              )
            })}
            {/* <CheckContainer>
              <CheckContent>
                <CheckIndividual>
                  <input type={"checkbox"} />
                  <label>André</label>
                </CheckIndividual>
                <CheckIndividual>
                  <input type={"checkbox"} />
                  <label>Antonio</label>
                </CheckIndividual>
                <CheckIndividual>
                  <input type={"checkbox"} />
                  <label>Beatriz</label>
                </CheckIndividual>
                <CheckIndividual>
                  <input type={"checkbox"} />
                  <label>Bruna</label>
                </CheckIndividual>
                <CheckIndividual>
                  <input type={"checkbox"} />
                  <label>Bruno</label>
                </CheckIndividual>
              </CheckContent>
              <CheckContent>
                <CheckIndividual>
                  <input type={"checkbox"} />
                  <label>André</label>
                </CheckIndividual>
                <CheckIndividual>
                  <input type={"checkbox"} />
                  <label>Antonio</label>
                </CheckIndividual>
                <CheckIndividual>
                  <input type={"checkbox"} />
                  <label>Beatriz</label>
                </CheckIndividual>
                <CheckIndividual>
                  <input type={"checkbox"} />
                  <label>Bruna</label>
                </CheckIndividual>
                <CheckIndividual>
                  <input type={"checkbox"} />
                  <label>Bruno</label>
                </CheckIndividual>
              </CheckContent>
              <CheckContent>
                <CheckIndividual>
                  <input type={"checkbox"} />
                  <label>André</label>
                </CheckIndividual>
                <CheckIndividual>
                  <input type={"checkbox"} />
                  <label>Antonio</label>
                </CheckIndividual>
                <CheckIndividual>
                  <input type={"checkbox"} />
                  <label>Beatriz</label>
                </CheckIndividual>
                <CheckIndividual>
                  <input type={"checkbox"} />
                  <label>Bruna</label>
                </CheckIndividual>
                <CheckIndividual>
                  <input type={"checkbox"} />
                  <label>Bruno</label>
                </CheckIndividual>
              </CheckContent>
              <CheckContent>
                <CheckIndividual>
                  <input type={"checkbox"} />
                  <label>André</label>
                </CheckIndividual>
                <CheckIndividual>
                  <input type={"checkbox"} />
                  <label>Antonio</label>
                </CheckIndividual>
                <CheckIndividual>
                  <input type={"checkbox"} />
                  <label>Beatriz</label>
                </CheckIndividual>
                <CheckIndividual>
                  <input type={"checkbox"} />
                  <label>Bruna</label>
                </CheckIndividual>
                <CheckIndividual>
                  <input type={"checkbox"} />
                  <label>Bruno</label>
                </CheckIndividual>
              </CheckContent>
              <CheckContent>
                <CheckIndividual>
                  <input type={"checkbox"} />
                  <label>André</label>
                </CheckIndividual>
                <CheckIndividual>
                  <input type={"checkbox"} />
                  <label>Antonio</label>
                </CheckIndividual>
                <CheckIndividual>
                  <input type={"checkbox"} />
                  <label>Beatriz</label>
                </CheckIndividual>
                <CheckIndividual>
                  <input type={"checkbox"} />
                  <label>Bruna</label>
                </CheckIndividual>
                <CheckIndividual>
                  <input type={"checkbox"} />
                  <label>Bruno</label>
                </CheckIndividual>
              </CheckContent>
            </CheckContainer> */}
          </InputContent>
        </InputContainer>
        <FinalButton>
          <button>Criar</button>
        </FinalButton>
      </Content>
    </Dialog.Portal>
  );
}

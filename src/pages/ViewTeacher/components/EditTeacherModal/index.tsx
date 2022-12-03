import * as Dialog from "@radix-ui/react-dialog";
import { NotePencil, Plus, Star, Trash, Upload, Watch, X } from "phosphor-react";
import { ChangeEvent, useEffect, useState } from "react";
import { string, z } from "zod";
import { useForm, useFieldArray, FormProvider } from "react-hook-form";
import {
  ButtonNewCompetencia,
  Content,
  FinalButton,
  HeaderButtons,
  InputContainer,
  InputContent,
  InputFile,
  InputFileContent,
  InputIndividual,
  InputScroll,
  ModalHeader,
  NivelStars,
  Overlay,
  TeacherPhotoInput,
} from "./style";
import {
  ObjectsContext,
  TeacherProps,
} from "../../../../contexts/ObjectsContext";
import { API } from "../../../../lib/axios";
import { StarsSection } from "../../../Teacher/components/NewTeacherModal/components/StarsSection";
import { zodResolver } from "@hookform/resolvers/zod";
import { teacherInput } from "../../../Teacher/components/NewTeacherModal";


export type TeacherType = z.infer<typeof teacherInput>;

interface EdiTeacherModalProps {
  teacherItem: TeacherProps;
  teacherUpdate: (data: TeacherProps) => void
  removeFoto: () => void
  closeModal: () => void
}

interface CurricularUnit {
  id: number;
  nome: string;
  horas: string;
}


export function EditTeacherModal({ teacherItem, teacherUpdate, removeFoto, closeModal }: EdiTeacherModalProps) {
  const [unidadeCurricular, setUnidadeCurricular] = useState<CurricularUnit[]>(
    []
  );
  const [editable, setEditable] = useState(false);
  const teacherForm = useForm<TeacherType>({
    resolver: zodResolver(teacherInput),
    defaultValues: {
      competencia: [
        {
          nivel: 1,
          unidadeCurricular: {
            nome: "",
          },
        },
      ],
    },
  });
  const { register, reset, handleSubmit, control, watch, formState: { errors }, setValue } = teacherForm

  const [foto, setFoto] = useState(teacherItem.foto)

  console.log(errors)
  async function handleGetUnidadeCurricular() {
    const response = await API.get("/unidade");
    if (response.status == 200) {
      setUnidadeCurricular(response.data);
    }
  }

  useEffect(() => {
    handleGetUnidadeCurricular();
  }, []);

  const { fields, append, remove } = useFieldArray({
    name: "competencia",
    control,
    rules: {
      required: "O curso deve ter pelo menos uma unidade curricular",
    },
  });

  const uploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    const base64 = await convertBase64(file);
    setValue("foto", String(base64));
   
    console.log(String(base64).length);
  };

  function convertBase64(file: Blob) {
    return new Promise((resolve, reject) => {
      const fileRender = new FileReader();
      fileRender.readAsDataURL(file);

      fileRender.onload = function () {
        resolve(fileRender.result);
      };

      fileRender.onerror = function (error) {
        reject(error);
      };
    });
  }


  return (
    <Dialog.Portal>
      <Overlay />
      <Content onCloseAutoFocus={() => setEditable(false)}>
        <ModalHeader>
          <Dialog.Title>
            {!editable ? "Professor" : "Editar professor"}
          </Dialog.Title>
          <HeaderButtons>
            {!editable && (
              <button onClick={() => setEditable(true)}>
                <NotePencil size={50} weight="light" />
              </button>
            )}
            <Dialog.Close>
              <X size={50} weight="light" />
            </Dialog.Close>
          </HeaderButtons>
        </ModalHeader>
        <form onSubmit={handleSubmit(teacherUpdate)}>
          <input type="hidden" defaultValue={teacherItem.id} {...register("id", { valueAsNumber: true })} />
          <InputScroll>
            <InputContainer>
              <InputContent disabled={"on"}>
                <label>Nome</label>
                <input
                  type="text"
                  placeholder="Digite o nome do professor"
                  required
                  defaultValue={teacherItem.nome}
                  {...register("nome")}
                  readOnly={!editable}
                />
                {/* {errors.nome && <p>{errors.nome.message}</p>} */}
              </InputContent>
              <InputContent disabled={"on"}>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Digite o email do professor"
                  required
                  defaultValue={teacherItem.email}
                  {...register("email")}
                  readOnly={!editable}
                />
                {/* {errors.email && <p>{errors.email.message}</p>} */}
              </InputContent>
              <InputContent disabled={"on"}>
                <InputIndividual>
                  <label>Carga horária semanal</label>
                  <input
                    type="number"
                    placeholder="Digite as horas"
                    required
                    defaultValue={teacherItem.cargaSemanal}
                    {...register("cargaSemanal", { valueAsNumber: true })}
                    readOnly={!editable}
                  />
                </InputIndividual>
                {
                  foto != undefined || teacherItem.foto ?
                    <InputIndividual>
                      <label>Foto</label>
                      <TeacherPhotoInput>
                        <img src={teacherItem.foto ? teacherItem.foto : foto} alt="" />
                        <p>Foto de perfil <br /> {teacherItem.nome}</p>
                        {
                          editable && <Trash size={30} onClick={() => {
                            removeFoto()
                          }} />
                        }

                      </TeacherPhotoInput>
                    </InputIndividual> :
                    <InputIndividual>
                      <label>Foto</label>
                      <InputFile disabled={!editable ? "disabled" : "on"}>
                        <InputFileContent
                          style={
                            !editable
                              ? { backgroundColor: "#efefef" }
                              : { backgroundColor: "transparent" }
                          }
                        >
                          <span
                            style={
                              !editable
                                ? { color: "rgba(109, 109, 109, 0.5)" }
                                : { color: "#6D6D6D" }
                            }
                          >
                          </span>
                          <div
                            style={
                              !editable ? { opacity: "30%" } : { opacity: "100%" }
                            }
                          >
                            <Upload size={40} weight="light" />
                          </div>
                        </InputFileContent>
                        <input
                          type="file"
                          id="file"

                          accept="image/*"

                          // required

                          onChange={uploadImage}
                        />
                      </InputFile>
                    </InputIndividual>
                }
              </InputContent>

              {fields.map((field, index) => {
                return (
                  <InputContent disabled={"on"} key={field.id}>
                    <InputIndividual>
                      <label>Competência</label>
                      <select
                        {...register(
                          `competencia.${index}.unidadeCurricular.id`,
                          { valueAsNumber: true, required: true }
                        )}
                        defaultValue={teacherItem?.competencia[index]?.unidadeCurricular?.nome}
                        required
                      >
                        {unidadeCurricular.map((value, index) => {
                          return (
                            <option
                              key={value.id}
                              value={value.id}
                            >
                              {value.nome}
                            </option>
                          );
                        })}
                      </select>

                      {errors.competencia && (
                        <p>
                          {
                            errors.competencia[index]?.unidadeCurricular?.id
                              ?.message
                          }
                        </p>
                      )}
                    </InputIndividual>
                    <InputIndividual>
                      <header>
                        <label>Nível</label>
                        {index !== 0 && (
                          <Trash size={24} onClick={() => remove(index)} />
                        )}
                      </header>
                      <FormProvider {...teacherForm}>
                        <StarsSection index={index} />
                      </FormProvider>
                    </InputIndividual>
                  </InputContent>
                );

              })}

              <ButtonNewCompetencia
                onClick={() => {
                  append({
                    nivel: 1,
                    unidadeCurricular: {
                      nome: "",
                      id: 0,
                    },

                  });
                }}
                type="button"
              >
                <Plus size={32} />
                <p>Adicionar competência</p>
              </ButtonNewCompetencia>



              {editable && (
                <FinalButton>
                  <button>Salvar</button>
                </FinalButton>
              )}

            </InputContainer>
          </InputScroll>
        </form>
      </Content>
    </Dialog.Portal>
  );
}

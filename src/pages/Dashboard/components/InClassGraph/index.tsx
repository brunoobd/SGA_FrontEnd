import { useEffect, useState } from "react";
import { PlaceProps, TeacherProps } from "../../../../Contexts/ObjectsContext";
import { API } from "../../../../lib/axios";
import { TeacherCard } from "../TeacherCard";
import { InClassContainer, InclassTeacherCards } from "./style";

export interface InclassTeacherProps {
  professor: TeacherProps,
  ambiente: PlaceProps,
  emAula: boolean,
}

export function InClassGraph() {
  const [teacherInClass, setTeacherInClass] = useState<InclassTeacherProps[]>([])

  async function fetchTeachersInClass() {
    const res = await API.get("/professor/professorDisp/");
    setTeacherInClass(res.data);
  }

  useEffect(() => {
    fetchTeachersInClass()
  },[])

    return (
        <InClassContainer>
            <h3>Em aula</h3>
          <InclassTeacherCards>
            {
              teacherInClass.map((teacher) => {
                return(
                  <TeacherCard key={teacher.professor.id} ambiente={teacher.ambiente} emAula={teacher.emAula} professor={teacher.professor} />
                )
              })
            }
          </InclassTeacherCards>
        </InClassContainer>
    )
}
import { COURSE_STACK, TCourse, TEstudent } from "./types"

export const courses: TCourse[] = [
    {
        id: "c001",
        name: "React",
        lessons: 12,
        stack: COURSE_STACK.FRONT
    },
    {
        id: "c002",
        name: "Styled Components",
        lessons: 4,
        stack: COURSE_STACK.FRONT
    },
    {
        id: "c003",
        name: "Express",
        lessons: 5,
        stack: COURSE_STACK.BACK
    }
]

export const students: TEstudent [] =[
    {
    id:"e001",
    name:"Adriana",
    age:27

    },
    {
        id:"e0012",
        name:"Akira",
        age:27
    
        },


]

import express, { Request, Response } from 'express'
import cors from 'cors'
import { courses,students } from './database'
import { Agent, request } from 'http'
import { TCourse } from './types'
import { TEstudent } from './types'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong!')
})
///Tipando os parâmetros 
app.get('/courses',(req: Request, res:Response) => {
res.status(200).send(courses)
})


// Agora faremos um endpoint que faz uma consulta por todos os cursos cadastrados e os filtra baseado em uma query params.

//A query irá se chamar q (abreviação de query) e será utilizada para gerar um resultado case insensitive.

app.get('/courses/search', (req:Request, res:Response) =>{
const  q = req.query.q as string 

const result = courses.filter((course) => {
return course.name.toLocaleLowerCase().includes(q.toLocaleLowerCase())
})

res.status(200).send(result)
})


//terceiro endpoint 

app.post('/courses',(req: Request, res:Response) => {
    const {id,name,lessons,stack} = req.body as TCourse
    
  
    const newCourse = {
        id:id,
        name:name,
        lessons: lessons,
        stack: stack
    }

    courses.push(newCourse)

    res.status(201). send("curso registrado com sucesso")
})



//// exercicio de fixação 
///lista de estudantes 

app.get('/students', (req:Request, res:Response) => {
    res.status(200).send(students)
})



    

/// busca por nome estudante
app.get('/students/search', ( req:Request, res:Response) => {
    const query = req.query.q as string
    
    const buscaNome =students.filter((student) => {
        return student.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    } )

    res.status(200).send(buscaNome) 
})


/// adicionar um novo aluno




app.post('/students', (req: Request, res: Response) => {

    const {id, name, age} = req.body as TEstudent

    const newStudent = {
        id,
        name,
        age
    }

    students.push(newStudent)

    res.status(200).send("Estudante registrado com sucesso!")
})
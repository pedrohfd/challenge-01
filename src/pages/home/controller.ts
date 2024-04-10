import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { v4 as uuid } from 'uuid'

const createTaskSchema = z.object({
  id: z.string().nullable().default(null),
  description: z.string(),
  isDone: z.boolean().nullable().default(false),
})

type CreateTaskType = z.infer<typeof createTaskSchema>

export const useHomeController = () => {
  const [tasks, setTasks] = useState<CreateTaskType[]>([])

  const { control, handleSubmit, setValue } = useForm<CreateTaskType>({
    resolver: zodResolver(createTaskSchema),
  })

  const handleCreateTask = (task: CreateTaskType) => {
    setTasks((prevState) => [
      ...prevState,
      { id: uuid(), description: task.description, isDone: task.isDone },
    ])

    setValue('id', '')
    setValue('description', '')
  }

  const handleCompleteTask = (id: string) => {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task,
      ),
    )
  }

  const handleDeleteTask = (id: string) => {
    setTasks((prevState) => prevState.filter((task) => task.id !== id))
  }

  return {
    tasks,
    handleCreateTask,
    control,
    handleSubmit,
    handleDeleteTask,
    handleCompleteTask,
  }
}

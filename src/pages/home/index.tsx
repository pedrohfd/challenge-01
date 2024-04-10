import { ClipboardIcon } from '@/assets/icons/clipboard'
import logoImage from '@/assets/logo.svg'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { Checkbox } from '@/components/checkbox'
import { useHomeController } from './controller'
import { Controller } from 'react-hook-form'
import { TrashIcon } from '@/assets/icons/trash'

export const Home = () => {
  const { tasks, handleCreateTask, control, handleSubmit, handleDeleteTask } =
    useHomeController()

  return (
    <main className="h-screen bg-gray-600">
      <header className="flex items-center justify-center bg-gray-700 pb-20 pt-[4.5rem]">
        <img src={logoImage} alt="logo" />
      </header>

      <div className="-mt-7 px-80">
        <form
          className="flex items-center justify-between gap-2"
          onSubmit={handleSubmit(handleCreateTask)}
        >
          <Controller
            name="description"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input value={value} onChange={onChange} />
            )}
          />

          <Button type="submit" />
        </form>

        <section className="mt-16 flex items-center justify-between">
          <span className="flex items-center gap-2">
            <p className="font-inter text-sm font-bold text-blue-500">
              Tarefas criadas
            </p>
            <p className="flex w-[1.57rem] items-center justify-center rounded-full bg-gray-400 px-2 py-0.5 font-inter text-xs font-bold text-gray-200">
              0
            </p>
          </span>

          <span className="flex items-center gap-2">
            <p className="font-inter text-sm font-bold text-violet-500">
              Concluídas
            </p>
            <p className="flex w-[1.57rem] items-center justify-center rounded-full bg-gray-400 px-2 py-0.5 font-inter text-xs font-bold text-gray-200">
              0
            </p>
          </span>
        </section>

        <section
          data-tasks={tasks.length === 0}
          className="mt-6 flex flex-col items-center justify-center gap-4 rounded-lg border-gray-400 data-[tasks=true]:border-t"
        >
          {tasks.length === 0 && (
            <>
              <ClipboardIcon className="mt-16" />

              <span className="flex flex-col items-center justify-center font-inter text-base text-gray-300">
                <p className="font-bold">
                  Você ainda não tem tarefas cadastradas
                </p>
                <p className="font-normal">
                  Crie tarefas e organize seus itens a fazer
                </p>
              </span>
            </>
          )}

          {tasks.length > 0 &&
            tasks.map((task) => (
              <div
                key={task.id}
                className="flex w-full items-center justify-between gap-3 rounded-lg border border-gray-400 bg-gray-500 p-4 font-inter text-sm font-normal text-gray-100 shadow-md "
              >
                <span className="flex items-center gap-3">
                  <Checkbox id={task.id?.toString()} />
                  <label htmlFor={task.id?.toString()}>
                    {task.description}
                  </label>
                </span>

                <button onClick={() => handleDeleteTask(String(task.id))}>
                  <TrashIcon />
                </button>
              </div>
            ))}
        </section>
      </div>
    </main>
  )
}

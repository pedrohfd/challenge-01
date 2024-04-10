import { PlusIcon } from '@/assets/icons/plus'

export const Button = (props: React.ComponentProps<'button'>) => {
  return (
    <button
      className="flex items-center justify-between gap-2 rounded-lg bg-blue-600 p-4 font-inter text-sm font-bold text-gray-100 transition-colors hover:bg-blue-500"
      {...props}
    >
      Criar <PlusIcon />
    </button>
  )
}

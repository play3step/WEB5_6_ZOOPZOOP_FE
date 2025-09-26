import { Button } from '@/shared/ui/shadcn/button'

interface SearchButtonProps {
  onClick: () => void
  disabled?: boolean
  children: React.ReactNode
}

export const SearchButton = ({
  onClick,
  disabled = false,
  children
}: SearchButtonProps) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className="w-full py-3 text-sm bg-green-normal hover:bg-green-normal-hover text-white transition-all shadow-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed">
      {children}
    </Button>
  )
}

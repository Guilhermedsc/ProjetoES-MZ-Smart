type CardProps = React.HTMLAttributes<HTMLDivElement>

export default function Card({ children, className, ...props }: CardProps) {
  const useClassName = "rounded border border-gray-light shadow cursor-pointer p-4 duration-300 "
    + "hover:bg-green-dark hover:-translate-y-1 "
    + className

  return (
    <div className={useClassName} {...props}>
      {children}
    </div>
  )
}
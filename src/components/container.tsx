import clsx from "clsx"

const Container = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <main className={clsx("flex w-full gap-4 max-w-[var(--breakpoint-2xl)] flex-col py-4 px-4 sm:px-8 mx-auto", className)}>
      {children}
    </main>
  )
}

export default Container

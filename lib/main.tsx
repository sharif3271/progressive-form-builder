import { FC, HTMLAttributes } from "react"
import { FormContextProvider } from "./context"
import './styles/index.scss'


export const ProFormBuilder: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <FormContextProvider>
      <div className={`pfb-main-container ${className ?? ''}`} {...props}></div>
    </FormContextProvider>
  )
}
import { FC, HTMLAttributes } from "react";
import { FormContextProvider } from "./context";
import { AddSection, Header, QuestionSet } from "./components";
import "./styles/index.scss";
import { UpdateExternal, UpdateExternalProps } from "./update"

type ProFormBuilderProps = HTMLAttributes<HTMLDivElement> & UpdateExternalProps

export const ProFormBuilder: FC<ProFormBuilderProps> = ({
  className,
  initialValue,
  onChangeValue,
  ...props
}) => {
  return (
    <FormContextProvider>
      <UpdateExternal
        initialValue={initialValue}
        onChangeValue={onChangeValue}
      />
      <div className={`pfb-main-container ${className ?? ""}`} {...props}>
        <Header />
        <QuestionSet />
        <AddSection />
      </div>
    </FormContextProvider>
  );
};

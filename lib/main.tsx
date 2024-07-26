import { FC, HTMLAttributes } from "react";
import { FormContextProvider } from "./context";
import { AddSection, Header, QuestionSet } from "./components";
import "./styles/index.scss";
import { UpdateExternal, UpdateExternalProps } from "./update";

export * from './types/form.type'

type ProFormBuilderProps = HTMLAttributes<HTMLDivElement> & UpdateExternalProps

export const ProFormBuilder: FC<ProFormBuilderProps> = ({
  className,
  initialValue,
  onChangeValue,
  isView,
  ...props
}) => {
  return (
    <FormContextProvider>
      <UpdateExternal
        initialValue={initialValue}
        onChangeValue={onChangeValue}
        isView={isView}
      />
      <div className={`pfb-main-container ${className ?? ""}`} {...props}>
        <Header />
        <QuestionSet />
        {!isView && <AddSection />}
      </div>
    </FormContextProvider>
  );
};

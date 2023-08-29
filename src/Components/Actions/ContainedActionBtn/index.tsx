import { FC, ReactNode } from "react";

interface ContainedActionBtnType {
  className: string;
  children: ReactNode;
  containBtnType: "button" | "submit" | "reset";
  handleClick: () => void;
  isDisabled: boolean;
  btnStyle: {};
  containBtnLabel: string;
}

const ContainedActionBtn: FC<ContainedActionBtnType> = (props) => {
  const {
    className,
    children,
    containBtnType,
    handleClick,
    isDisabled = true,
    btnStyle,
    containBtnLabel,
  } = props;

  const classes =
    "bg-stone-700 border-2 border-stone-900 text-stone-50 py-2 px-3.5 rounded hover:bg-stone-950 hover:border-stone-950 transition-all duration-500 transform active:scale-[0.99] active:duration-200 dark:bg-stone-700 dark:hover:bg-stone-800" +
    className;
  return (
    <button
      className={classes}
      type={containBtnType}
      onClick={handleClick}
      disabled={!isDisabled}
      style={{ ...btnStyle }}
      aria-label={containBtnLabel}
    >
      {children}
    </button>
  );
};

export default ContainedActionBtn;

import { FC, ReactNode } from "react";

interface OutlinedActionBtnType {
  className: string;
  children: ReactNode;
  outlineBtnType: "button" | "submit" | "reset";
  handleClick: () => void;
  outlineBtnLabel: string;
}

const OutlinedActionBtn: FC<OutlinedActionBtnType> = (props) => {
  const { className, children, outlineBtnType, handleClick, outlineBtnLabel } =
    props;
  const classes =
    className +
    " px-3 py-2 rounded border-2 transition-all duration-500 hover:text-stone-50 hover:border-stone-900 hover:bg-stone-900 transform active:scale-[0.99] active:duration-200 dark:hover:border-stone-50 dark:hover:bg-stone-700";
  return (
    <button
      className={classes}
      type={outlineBtnType}
      onClick={handleClick}
      aria-label={outlineBtnLabel}
    >
      {children}
    </button>
  );
};

export default OutlinedActionBtn;

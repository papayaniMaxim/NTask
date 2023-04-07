import { ReactNode } from "react";
import classes from "./PopUpLayout.module.css"
type PopUpLayoutProps = {
  children: ReactNode;
  onClose: () => void;
};

function PopUpLayout({ children, onClose }: PopUpLayoutProps) {
  return (
    <div className={classes.background} onClick={onClose}>
      <div className={classes.container}>
        {children}
        
      </div>
    </div>
  );
}

export default PopUpLayout;

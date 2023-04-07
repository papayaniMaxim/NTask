import { ReactNode } from "react";
import classes from "./PagesLayout.module.css";

interface Props {
  children: ReactNode;
}

function PagesLayout({ children }: Props) {
  return <section className={classes.container}>{children}</section>;
}

export default PagesLayout;

import React, { ReactElement, ReactNode } from "react";
import { TableCell } from "@react-md/table";

import styles from "./TableCellList.module.scss";

interface Props {
  children: ReactNode;
}

const TableCellList = ({ children }: Props): ReactElement | null => (
  <TableCell>
    <ul className={styles.list}>{children}</ul>
  </TableCell>
);

export default TableCellList;

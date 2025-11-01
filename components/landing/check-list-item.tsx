import { ReactNode } from "react";
import { CheckIcon } from "./icons";

interface CheckListItemProps {
  children: ReactNode;
}

export function CheckListItem({ children }: CheckListItemProps) {
  return (
    <li className="flex gap-x-3">
      <CheckIcon />
      {children}
    </li>
  );
}

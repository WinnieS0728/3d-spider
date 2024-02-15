import { HTMLAttributes } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { LuMouse } from "react-icons/lu";

export function Check(props: HTMLAttributes<SVGAElement>) {
  return <FaCircleCheck {...props} />;
}

export function Mouse({ ...props }: HTMLAttributes<SVGAElement>) {
  return <LuMouse {...props} />;
}

import { cn } from '../utils/cn';


type Props = {
    children: React.ReactNode;
    className?: string
}

export default function Container(props: Props) {
  return (
    <div
    className={cn("grid grid-cols-1 max-w-[300px] mx-auto sm:max-w-[560px] sm:grid-cols-2 sm:justify-between justify-items-center desktop-wide:max-w-desktop desktop-wide:grid-cols-4 2xl:max-w-[1450px] 2xl:gap-x-80 gap-5",
        props.className)}
    >
        {props.children}
    </div>
  )
}
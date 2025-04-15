import { cn } from '../utils/cn';


type Props = {
    children: React.ReactNode;
    className?: string
}

export default function Container(props: Props) {
  return (
    <div
    className={cn("mt-5 flex flex-wrap  justify-center transition-all sm:justify-between md:gap-y-10 gap-5",
        props.className)}
    >
        {props.children}
    </div>
  )
}
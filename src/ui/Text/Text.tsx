import clsx from "clsx";

type Props = {
    children? : string | string[] | number,
    className? : string
};

const Text = ({children = "none txt",className}: Props) => {
    return <p className={clsx(
        "dark:text-slate-300",
        className
    )}>{children}</p>
};

export default Text;
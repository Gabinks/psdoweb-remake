export default function CustomButton({text}: {text: string}) {
    return <button className={"bg-yellow px-4 py-1 rounded-lg border border-black border-opacity-60 hover:bg-yellow-hover transition-colors"}>{text}</button>
}
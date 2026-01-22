import './buttons.css'

type ButtonProps = {
    text: string
}

export function Button({ text }: ButtonProps) {
    return(
        <button className='button'>{text}</button>
    )
}
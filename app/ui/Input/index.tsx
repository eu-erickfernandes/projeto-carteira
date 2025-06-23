type InputProps = React.InputHTMLAttributes<HTMLElement>

export default function Input({ ...rest }: InputProps){
    return (
        <input type="text"  { ...rest } />
    );
}
const Button = (props) => {
    const { btnName = props.children,onClick,marked,style } =props;return (
    <button onClick={onClick} disabled={marked} className={style}>{btnName }</button>
    )
    }
    export default Button;
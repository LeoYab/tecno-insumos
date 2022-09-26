
const Button = ({ children, className="dropdown-item", type}) => {

    return (

        <button className={className} type={type}>

            {children}

        </button>

    )
}

export default Button;
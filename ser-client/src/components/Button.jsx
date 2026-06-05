import { Link } from 'react-router-dom';

const variantClasses = {
    primary: 'bg-red-600 text-white hover:bg-red-700',
    secondary: 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300',
    outline: 'bg-transparent text-red-600 hover:bg-red-50 border-2 border-red-600',
};

const Button = ({
    children,
    to,
    type = 'button',
    variant = 'secondary',
    className = '',
}) => {
    const classes = [
        'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold uppercase tracking-wide transition-all duration-200',
        variantClasses[variant] ?? variantClasses.secondary,
        className,
    ]
        .join(' ')
        .trim();

    if (to) {
        return (
            <Link to={to} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={classes}>
            {children}
        </button>
    );
};

export default Button;
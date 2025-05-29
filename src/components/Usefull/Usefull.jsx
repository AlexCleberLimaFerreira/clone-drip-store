import { Link } from 'react-router-dom';

export const Usefull = ({margin , color, textDecoration , to , value, target }) => {
    return (
        <p style={{margin: margin}}>
        <Link
        style={{
            margin: margin, 
            color: color,
             textDecoration: textDecoration
            }}
        to={to} 
        target={target}
        >{value}</Link>
        </p>
    );
}
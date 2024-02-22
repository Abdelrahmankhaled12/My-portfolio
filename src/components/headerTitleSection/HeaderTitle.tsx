import './style.scss';

interface HeaderTitleProps {
    title: string;
    span: string;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({ title, span }) => {
    return (
        <h1 className='headerTitle'>
            {title}
            <span>{span}</span>
        </h1>
    );
}

export default HeaderTitle;

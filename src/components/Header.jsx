import { Link } from 'react-router-dom';

import Button from "../ui/Button";

const Header = ({ toggleTheme }) => {
    return (
        <header className="px-10 py-5">
            <nav className="container mx-auto flex place-items-center justify-between">
                <Link to="/" className="text-4xl m-4 font-bold text-primary">بیت‌پین</Link>
                <Button onClick={toggleTheme}>
                    تغییر تم
                </Button>
            </nav>
        </header>
    )
}

export default Header
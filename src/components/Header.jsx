import { Link } from 'react-router-dom';

import Button from "../ui/Button";

const Header = ({ toggleTheme }) => {
    return (
        <header className="p-4">
            <nav className="container mx-auto flex place-items-center justify-between">
                <Link to="/" className="text-2xl font-bold">بیت‌پین</Link>
                <Button onClick={toggleTheme}>
                    تغییر تم
                </Button>
            </nav>
        </header>
    )
}

export default Header
import { Link } from 'react-router-dom';

import Button from "../ui/Button";

const Header = ({ toggleTheme }) => {
    return (
        <header className="p-4">
            <nav className="container mx-auto flex justify-between">
                <Link to="/" className="text-2xl font-bold">Bitpin Market</Link>
                <Button onClick={toggleTheme}>
                    Toggle Theme
                </Button>
            </nav>
        </header>
    )
}

export default Header
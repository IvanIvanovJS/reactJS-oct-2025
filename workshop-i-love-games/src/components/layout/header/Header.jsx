import { Link } from "react-router";


export default function Header({
    user,
    logout
}) {

    return (
        <header>

            <nav>
                <Link className="home" to="/"> <img src="/images/logo.png" alt="logo" /> </Link>
                <Link to="/games">Catalog</Link>

                {user ?
                    <div id="user">
                        <Link to="/games/add-game">Add Game</Link>
                        <Link to="/" onClick={logout}>Logout</Link>
                    </div>
                    :
                    <div id="guest">
                        <Link to="/auth/login">Login</Link>
                        <Link to="/auth/register">Register</Link>
                    </div>
                }


            </nav>
        </header>
    )
}
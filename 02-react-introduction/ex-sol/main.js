function Header() {
    return (
        <header>
            <h1>
                Hello im the header
            </h1>
        </header>
    )
}

function Login() {
    return (
        <form>
            <input type="email" placeholder="email" name="email" />
            <input type="password" placeholder="password" name="password" />
            <button>Login</button>
        </form>
    )
}

function Footer() {
    return (
        <footer>
            <h1>
                Hello im the footer
            </h1>
        </footer>
    )
}

function LoginPage() {
    return (
        <div className="container">
            <Header />

            <Login />

            <Footer />
        </div>
    )
}

ReactDOM.render(<LoginPage />, document.getElementById('root'));
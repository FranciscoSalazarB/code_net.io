import "@/styles/module/loginForm.css"

export function LoginForm() {
    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" placeholder="Username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <ButtonNeon texto="Submit" />
            </form>
        </div>
    )
}

function ButtonNeon(promp: { texto: string }) {
    return (
        <button className="neonBtn">
            <span />
            <span />
            <span />
            <span />
            {promp.texto}
        </button>
    )
}


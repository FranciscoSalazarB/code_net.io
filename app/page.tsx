import "@/styles/layout/login.css"
import "@/styles/animations/fadeIn.css"
import "@/styles/animations/delays.css"

import { LoginForm } from "@/components/loginForm";

export default function Login() {
  return (
    <main className="main">
      <div className="mainCard">
        <div className="mainHead">
          <h1 className="mainHeaderLogin">CodeNet.io</h1>
          <h2 className="mainSubHeader fadeInUp delay1s">share your way of thinking</h2>
        </div>
        <div>
          <LoginForm />
        </div>
      </div>
    </main>
  )
}

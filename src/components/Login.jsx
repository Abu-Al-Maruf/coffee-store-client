import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    loginUser(email, password)
      .then((res) => {
        console.log(res.user);
        alert("Login success");

        const lastSignInTime = res.user?.metadata?.lastSignInTime;
        const user = { email, lastLoginTime: lastSignInTime };

        fetch("https://coffee-store-server-alpha-jade.vercel.app/users", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
        .then(res => res.json())
        .then(data => console.log(data))
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-slate-200">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
        <h1 className="text-xl font-bold">Login now!</h1>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <p href="#" className="label-text-alt link link-hover">
                Don&apos;t have an account?{" "}
                <Link className="text-blue-700" to={"/signup"}>
                  SignUp
                </Link>
              </p>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

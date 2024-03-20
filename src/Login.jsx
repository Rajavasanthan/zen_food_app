import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div>
        <Link to={"/"}>
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRswdUbs9MsNYswfhyags8RvHpAWHS0VjrcEuBbv6v1xg&s"
            }
            alt=""
          />
        </Link>
        <h1 className="text-center">Login</h1>
        <form>
          <input type="text" placeholder="Username" className="form-control" />
          <input
            type="text"
            placeholder="Pasword"
            className="form-control mt-2"
          />
          {/* <input type="submit" className="mt-2 btn btn-primary" /> */}
          <Link to={"/portal/list-hotel"} className="mt-2 btn btn-primary">Login</Link>
        </form>
        <span>
          Dont have account? <Link to={"/register"}>Register here</Link>
        </span>
      </div>
    </div>
  );
}

export default Login;

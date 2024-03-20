import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div>
        <Link to={"/"}><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRswdUbs9MsNYswfhyags8RvHpAWHS0VjrcEuBbv6v1xg&s"} alt="" /></Link>
        <h1 className="text-center">Register</h1>
        <form>
          <input type="text" placeholder="Name" className="form-control" />
          <input type="text" placeholder="Email" className="form-control" />
          <input type="text" placeholder="Phone" className="form-control" />
          <input
            type="text"
            placeholder="Pasword"
            className="form-control mt-2"
          />
          <input
            type="text"
            placeholder="Re Type Pasword"
            className="form-control mt-2"
          />
          <input type="submit" className="mt-2 btn btn-primary" />
        </form>
        <span>Already have account? <Link to={"/login"}>Login</Link> </span>
      </div>
    </div>
  );
}

export default Register;

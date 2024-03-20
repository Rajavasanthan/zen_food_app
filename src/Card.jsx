import { Link } from "react-router-dom"

function Card({img,id}) {
  return (
    <div className="col-lg-4">
    <div className="card" style={{ width: "26rem" }}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up
          the bulk of the cards content.
        </p>
        <Link to={`/hotel/${id}`} className="btn btn-primary">
          View Hotel
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Card
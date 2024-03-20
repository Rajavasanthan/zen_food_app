import Card from "./Card"
import Navbar from "./Navbar"

function Home() {
  return (
    <>
    <Navbar/>
    <div className="container my-5">
      <div className="row">
        <div className="p-5 text-center bg-body-tertiary rounded-3">
          <h1 className="text-body-emphasis">Zen Canteen</h1>
          <p className="col-lg-8 mx-auto fs-5 text-muted">
            Your go-to food delivery app for a world of culinary delights.
            With a diverse menu from local eateries to popular chains,
            ordering is effortless.
          </p>
          <div className="d-inline-flex gap-2 mb-5">
            <input
              className="form-control input-xl me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <Card
          img={
            "https://www.themealdb.com/images/media/meals/ebvuir1699013665.jpg"
          } id={1}
        />
        <Card
          img={
            "https://www.themealdb.com/images/media/meals/7n8su21699013057.jpg"
          } id={2}
        />
        <Card
          img={
            "https://www.themealdb.com/images/media/meals/60oc3k1699009846.jpg"
          } id={3}
        />
      </div>
    </div>
  </>
  )
}

export default Home
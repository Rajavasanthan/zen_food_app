import Fooditem from "./Fooditem";
import Navbar from "./Navbar";

function Hotel() {
  return (
    <>
    <Navbar/>
      <div className="p-5 text-center bg-body-tertiary bg-image text-white">
        <div className="container py-5">
          <h1 className="text-white">Restraunt Name</h1>
          <p className="col-lg-8 mx-auto lead">
            This takes the basic jumbotron above and makes its background
            edge-to-edge with a <code>.container</code> inside to align content.
            Similar to above, its been recreated with built-in grid and utility
            classes.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <h1>Hotel Name</h1>
          <h4>Location - Ratting 5</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit odio
            quam consequuntur voluptatum doloremque ad veniam, aliquid dolores
            veritatis cumque accusantium eum? Corrupti molestiae laboriosam
            minus nemo provident atque! Asperiores!
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <Fooditem />
              <Fooditem />
              <Fooditem />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <Fooditem />
              <Fooditem />
              <Fooditem />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hotel;

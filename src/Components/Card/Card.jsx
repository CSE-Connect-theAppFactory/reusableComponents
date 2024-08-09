import "./Card.scss";

function Card() {
  return (
    <div className="card">
      <img
        className="card-image"
        src="https://cdn.pixabay.com/photo/2017/06/27/22/21/banana-2449019_1280.jpg"
        alt=" a picture of a banana"
      ></img>
      <h2 className="card-title">Banana</h2>
      <p>Yellow</p>
    </div>
  );
}
export default Card;

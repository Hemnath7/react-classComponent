function Card(props) {
  return (
    <div className="card">
      <h3>{props.Name}</h3>
      <p>{props.Email}</p>
      <small>{props.Mobile}</small>
    </div>
  );
}

export default Card;

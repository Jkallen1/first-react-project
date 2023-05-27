function Carousel(props) {
    return (
      <div className="card">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <img src={props.image} className="card-img-top" alt={props.title} />
      </div>
    );
  }
  
  export default Carousel;
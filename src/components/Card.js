import Button from "./Button";

export default function Card({test}) {
    return (
        <div>
      <div style={{backgroundColor: test.color}}  className="card">
        <div className="card__body">
          <img src={test.image} className="card__image" />
          <h2 className="card__title">{test.title}</h2>
          <p className="card__description">{test.desc}</p>
        </div>
        <Button text="Check course" color={test.btnColor}/>
      </div>
      </div>
    );
  }
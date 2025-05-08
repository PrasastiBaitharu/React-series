function Cards({ img, name, year, rating, genre, summary, starring }) {
  return (
    <>
      <img src={img} width={"50%"} height={"50%"} />
      <h1>Name of the Movie : {name}</h1>
      <h3>Year of release : {year}</h3>
      <h3>Rating : {rating}</h3>
      <h3>Genre : {genre}</h3>
      <h3>Summary : {summary}</h3>
      <h3>Starring : {starring}</h3>
    </>
  );
}

export default Cards;

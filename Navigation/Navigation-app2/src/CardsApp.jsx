import Cards from "./components/cards/Cards";
import jawan from "./assets/jawan.webp";
import happyNewYear from "./assets/happyNewYear.webp";
function CardsApp() {
  const arrMovie = [
    {
      img: jawan,
      name: "Jawan: Extended Cut",
      year: 2023,
      rating: "A",
      genre: "Action",
      summary:
        "A prison warden recruits inmates to commit outrageous crimes that shed light on corruption and injustice — and that lead him to an unexpected reunion.",
      starring: "Shah Rukh Khan, Nayanthara, and Vijay Sethupathi",
    },
    {
      img: happyNewYear,
      name: "Happy New Year",
      year: 2014,
      rating: "U/A 13+",
      genre: "Comedy",
      summary:
        "A revenge-seeking diamond thief gathers a ragtag crew to infiltrate a Dubai hotel hosting a dance contest. But first they have to learn how to dance.",
      starring: " Shah Rukh Khan, Deepika Padukone, and Abhishek Bachchan",
    }
  ];

  return (
    <>
      {arrMovie.map((item) => {
        return (
          <Cards
            img={item.img}
            name={item.name}
            year={item.year}
            rating={item.rating}
            genre={item.genre}
            summary={item.summary}
            starring={item.starring}
          />
        );
      })}
      
    </>
  );
}

export default CardsApp;

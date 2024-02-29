import HouseItem from "./components/HouseItem";
import styles from "./page.module.scss";

export default async function Home() {
  const res = await fetch(`${process.env.API_URL}/houses`);
  const houses = await res.json();

  return (
    <>
      <div className={styles.homePage}>
        <ul className={styles.houseList}>
          {houses.map((house: any) => {
            return (
              <HouseItem
                key={house.id}
                name={house.name}
                animal={house.animal}
                founder={house.founder}
                colorString={house.houseColours}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

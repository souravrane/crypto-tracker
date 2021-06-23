import styles from "./Coins.module.css";
const Coins = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  id,
}) => {
  return (
    <div className={styles.coin_container}>
      <div className={styles.coin_row}>
        <div className={styles.coin}>
          <img src={image} alt={name} className={styles.coin_img} />
          <h1 className={styles.coin_h1}>{name}</h1>
          <p className={styles.coin_symbol}>{symbol}</p>
        </div>
        <div className={styles.coin_data}>
          <p className={styles.coin_price}>${price}</p>
          <p className={styles.coin_volume}>${volume.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Coins;

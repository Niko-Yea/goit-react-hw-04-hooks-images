import styles from './styles.module.scss'

const Button = ({ onClick }) => {
  return (
    <button className={styles.Button} onClick={onClick} type='button'>Load More</button>
  );
}

export default Button;
import styles from './styles.module.scss'

const Searchbar = ({children}) => {
  return (
    <header className={styles.Searchbar}>{ children }</header>
  );
}

export default Searchbar;
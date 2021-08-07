import styles from './styles.module.scss';

const ImageGalleryItem = ({ item, showModal, getLargeImg }) => {
  return (
    <li className={styles.ImageGalleryItem} onClick={() => {
      showModal()
      getLargeImg(item.largeImageURL)
    }}>
      <img src={item.webformatURL} alt={item.tags} className={styles.ImageGalleryItemImage} />
    </li>
  );
}

export default ImageGalleryItem;
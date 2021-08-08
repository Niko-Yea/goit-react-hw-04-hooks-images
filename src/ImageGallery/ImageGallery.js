import React, { useState, useEffect } from 'react';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import Button from '../Button/Button';
import ApiService from '../apiService';
import styles from './styles.module.scss'

const apiService = new ApiService();

const ImageGallery = ({children, searchQuery, items, setItems}) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchQuery === '') return;
    apiService.resetPage();
    setItems([]);
    fetchImg();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery])

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }, [items])

  const fetchImg = async function () {
    apiService.query = searchQuery;
    setIsLoading(true);
    const response = await apiService.fetchImg();
    setItems(prevState => [...prevState, ...response.hits]);
    setIsLoading(false);
  }

  const onButtonClick = () => {
    apiService.incrementPage()
    fetchImg();
  }

  return (
    <>
      <ul className={styles.ImageGallery}>
        {children}
      </ul>

      {isLoading && (
        <Loader type="ThreeDots" color="#3f51b5" height={40} width={40} className={styles.loader}/>
      )}

      {((items.length === 0 || items.length <12 || isLoading) ? '' : <Button onClick={onButtonClick} />)}
    </>
  );
}

export default ImageGallery;

import React, { Component } from 'react';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import Button from '../Button/Button';
import ApiService from '../apiService';
import styles from './styles.module.scss'

const apiService = new ApiService();

class ImageGallery extends Component {
  state = {
    apiResponse: [],
    isLoading: false
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.searchQuery;
    const nextQuery = this.props.searchQuery;

    apiService.query = nextQuery;

    if (prevQuery !== nextQuery) {
      this.setState({
        apiResponse: []
      })
      apiService.resetPage()
      this.fetchImg()
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  async fetchImg() {
    this.setState({ isLoading: true })
    const response = await apiService.fetchImg();

    this.setState(prevState => {
      const items = [...prevState.apiResponse, ...response.hits]
      return {apiResponse: items}
    })
    this.props.apiResponse(this.state.apiResponse)
    this.setState({ isLoading: false })
  }

  onButtonClick = () => {
    apiService.incrementPage()
    this.fetchImg()
  }

  render() {
    const { isLoading } = this.state;
    const isEmpty = this.state.apiResponse.length;
    return (
      <>
        <ul className={styles.ImageGallery}>
          {this.props.children}
        </ul>

        {isLoading && (
          <Loader type="ThreeDots" color="#3f51b5" height={40} width={40} className={styles.loader}/>
        )}

        {((isEmpty === 0 || isLoading) ? '' : <Button onClick={this.onButtonClick} />)}
      </>
    );
  }
}

export default ImageGallery;
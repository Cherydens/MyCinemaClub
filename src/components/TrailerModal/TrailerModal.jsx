import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { fetchMovieVideosById } from 'services/movieApiService';

import Loader from 'components/Loader/Loader';
import TrailerModalRejected from 'components/TrailerModalRejected/TrailerModalRejected';
import Player from 'components/Player/Player';

import {
  TrailerModalContainer,
  TrailerModalOverlay,
} from './TrailerModal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function TrailerModal({ id, onClose }) {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const onKeyDown = e => {
      e.code === 'Escape' && onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    getRandomTrailer(id);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const getRandomTrailer = async id => {
    setStatus('pending');
    try {
      const { results } = await fetchMovieVideosById(id);
      const filteredTrailers = results.filter(({ type }) => type === 'Trailer');
      if (!filteredTrailers.length) {
        setStatus('rejected');
        return;
      }
      const url =
        'https://www.youtube-nocookie.com/embed/' +
        filteredTrailers[
          Math.round(Math.random() * (filteredTrailers.length - 1))
        ].key;

      setUrl(url);
      console.log(url);
      setStatus('resolved');
    } catch (error) {
      console.error(error.message);
      setStatus('rejected');
    }
  };

  const onBackdropClick = e => {
    e.currentTarget === e.target && onClose();
  };

  return createPortal(
    <TrailerModalOverlay onClick={onBackdropClick}>
      <TrailerModalContainer>
        {status === 'pending' && <Loader />}
        {status === 'resolved' && <Player url={url} />}
        {status === 'rejected' && (
          <TrailerModalRejected onClose={this.props.onClose} />
        )}
      </TrailerModalContainer>
    </TrailerModalOverlay>,
    modalRoot
  );
}

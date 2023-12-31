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
    async function getRandomTrailer(id) {
      setStatus('pending');
      try {
        const { results } = await fetchMovieVideosById(id);
        console.log(results);
        const filteredTrailers = results.filter(
          ({ type }) => type === 'Trailer'
        );
        if (filteredTrailers.length === 0) {
          setStatus('rejected');
          return;
        }
        const url =
          'https://www.youtube-nocookie.com/embed/' +
          filteredTrailers[
            Math.round(Math.random() * (filteredTrailers.length - 1))
          ].key;
        setUrl(url);
        setStatus('resolved');
      } catch (error) {
        console.error(error.message);
        setStatus('rejected');
      }
    }

    function onKeyDown(e) {
      e.code === 'Escape' && onClose();
    }

    getRandomTrailer(id);
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [id, onClose]);

  const onBackdropClick = e => {
    e.currentTarget === e.target && onClose();
  };

  return createPortal(
    <TrailerModalOverlay onClick={onBackdropClick}>
      <TrailerModalContainer>
        {status === 'pending' && <Loader />}
        {status === 'resolved' && <Player url={url} />}
        {status === 'rejected' && <TrailerModalRejected onClose={onClose} />}
      </TrailerModalContainer>
    </TrailerModalOverlay>,
    modalRoot
  );
}

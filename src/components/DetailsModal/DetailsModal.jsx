import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { fetchMovieById } from 'services/movieApiService';

import Loader from 'components/Loader/Loader';
import {
  DetailsModalContainer,
  DetailsModalOverlay,
} from './DetailsModal.styled';
import DetailsModalResolved from 'components/DetailsModalResolved/DetailsModalResolved';

const modalRoot = document.querySelector('#modal-root');
export default function DetailsModal({ id, onClose }) {
  const [movie, setMovie] = useState({});
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    async function getMovieDetails(id) {
      setStatus('pending');
      try {
        const movie = await fetchMovieById(id);
        // console.log(movie);

        if (!movie) {
          setStatus('rejected');
          return;
        }

        setMovie(movie);
        setStatus('resolved');
      } catch (error) {
        console.error(error.message);
        setStatus('rejected');
      }
    }

    function onKeyDown(e) {
      e.code === 'Escape' && onClose();
    }

    getMovieDetails(id);
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [id, onClose]);

  const onBackdropClick = e => {
    e.currentTarget === e.target && onClose();
  };

  return createPortal(
    <DetailsModalOverlay onClick={onBackdropClick}>
      <DetailsModalContainer>
        {status === 'pending' && <Loader />}
        {status === 'resolved' && (
          <DetailsModalResolved onClose={onClose} movie={movie} />
        )}
        {/* {status === 'rejected' && <TrailerModalRejected onClose={onClose} />} */}
      </DetailsModalContainer>
    </DetailsModalOverlay>,
    modalRoot
  );
}

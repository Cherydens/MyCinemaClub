import { AiOutlineClose } from 'react-icons/ai';

import {
  ModalBtnClose,
  TrailerModalRejectedContainer,
  TrailerModalRejectedText,
} from './TrailerModalRejected.styled';

const TrailerModalRejected = ({ onClose }) => {
  return (
    <TrailerModalRejectedContainer>
      <ModalBtnClose type="button" onClick={onClose}>
        <AiOutlineClose />
      </ModalBtnClose>
      <TrailerModalRejectedText>
        OOPS...
        <br />
        We are very sorry!
        <br />
        But we couldn’t find the trailer.
      </TrailerModalRejectedText>
    </TrailerModalRejectedContainer>
  );
};

export default TrailerModalRejected;

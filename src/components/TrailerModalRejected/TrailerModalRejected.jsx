import closeIcon from '../../images/close-outline.svg';

const TrailerModalRejected = ({ onClose }) => {
  return (
    <div>
      <button type="button" onClick={onClose}>
        <svg width="16" height="16">
          <use href={closeIcon}></use>
        </svg>
      </button>
      <p>
        OOPS...
        <br />
        We are very sorry!
        <br />
        But we couldn’t find the trailer.
      </p>
    </div>
  );
};

export default TrailerModalRejected;

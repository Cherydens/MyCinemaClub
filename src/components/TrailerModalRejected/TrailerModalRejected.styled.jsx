import styled from '@emotion/styled';

import bcgImg from '../../images/trailer-rej.png';
export const TrailerModalRejectedContainer = styled.div`
  background-image: url(${bcgImg});
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-position: right bottom;
`;

export const ModalBtnClose = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 16px;
  height: 16px;
  top: 20px;
  right: 20px;
  padding: 0;
  color: #f8f8f8;
  background: none;
  border: none;
  transition: color var(--transition-dur-and-func);
`;

export const TrailerModalRejectedText = styled.p`
  position: absolute;
  top: 150px;
  left: 50px;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  color: #fff;
`;

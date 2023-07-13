import styled from '@emotion/styled';

export const DetailsModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(83deg, #0e0e0e 0%, rgba(14, 14, 14, 0) 100%);
  z-index: 1200;
`;

export const DetailsModalContainer = styled.div`
  position: relative;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  width: 100%;
  height: 100%;
  max-width: 846px;
  max-height: 598px;
  border-radius: 20px;
  background: #111;
  box-shadow: 1px 1px 14px 4px rgba(255, 107, 8, 0.42);
  overflow: hidden;
`;

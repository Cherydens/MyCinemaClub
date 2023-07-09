import styled from '@emotion/styled';
import ReactPlayer from 'react-player';

export const PlayerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  /* padding-top: 56.25%; */
`;

export const StyledPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;

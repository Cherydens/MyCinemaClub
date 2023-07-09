import { Component } from 'react';
import { PlayerWrapper, StyledPlayer } from './Player.styled';
import Loader from 'components/Loader/Loader';

class Player extends Component {
  state = {
    isVideoLoaded: false,
  };
  render() {
    const { isVideoLoaded } = this.state;
    const { url } = this.props;
    const showLoader = url && !isVideoLoaded;
    const PlayerWidth = isVideoLoaded ? '100%' : '0';
    const PlayerHeight = isVideoLoaded ? '100%' : '0';

    return (
      <PlayerWrapper>
        {showLoader && <Loader />}
        {url && (
          <StyledPlayer
            url={url}
            width={PlayerWidth}
            height={PlayerHeight}
            onReady={() => this.setState({ isVideoLoaded: true })}
            controls
          />
        )}
      </PlayerWrapper>
    );
  }
}

export default Player;

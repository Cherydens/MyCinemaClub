import { ThreeDots } from 'react-loader-spinner';

const Loader = () => (
  <ThreeDots
    height="80"
    width="80"
    radius="9"
    color="#ffffff"
    ariaLabel="three-dots-loading"
    wrapperStyle={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }}
    wrapperClassName=""
    visible={true}
  />
);

export default Loader;

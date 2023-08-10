import { RotatingLines } from 'react-loader-spinner';
import { WrapperLoader } from './LoaderSpinner.styled';

export const LoaderSpinner = () => {
  return (
    <WrapperLoader>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </WrapperLoader>
  );
};

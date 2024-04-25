import Svg, { Path } from 'react-native-svg';

export function Message(props) {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      style={props.style}
      viewBox='0 0 256 256'
    >
      <Path
        fill='currentColor'
        d='M132 24A100.11 100.11 0 0 0 32 124v84a16 16 0 0 0 16 16h84a100 100 0 0 0 0-200m32 128H96a8 8 0 0 1 0-16h68a8 8 0 0 1 0 16m0-32H96a8 8 0 0 1 0-16h68a8 8 0 0 1 0 16'
      ></Path>
    </Svg>
  );
}

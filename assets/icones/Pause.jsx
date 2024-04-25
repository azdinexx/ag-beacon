import Svg, { Path } from 'react-native-svg';

export function Pause(props) {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      style={props.style}
      viewBox='0 0 24 24'
    >
      <Path fill='currentColor' d='M14 19V5h4v14zm-8 0V5h4v14z'></Path>
    </Svg>
  );
}

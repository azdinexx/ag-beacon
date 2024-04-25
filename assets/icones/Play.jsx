import Svg, { Path } from 'react-native-svg';

export function PlaySVG(props) {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      style={props.style}
      viewBox='0 0 24 24'
    >
      <Path
        fill='currentColor'
        d='M8 17.175V6.825q0-.425.3-.713t.7-.287q.125 0 .263.037t.262.113l8.15 5.175q.225.15.338.375t.112.475t-.112.475t-.338.375l-8.15 5.175q-.125.075-.262.113T9 18.175q-.4 0-.7-.288t-.3-.712'
      ></Path>
    </Svg>
  );
}

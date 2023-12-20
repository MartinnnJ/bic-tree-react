import StraightLine from '@assets/line-straight.svg';
import StraightRightLine from '@assets/line-straight-right.svg';
import RightLine from '@assets/line-right.svg';
import styles from './TrackLines.module.scss';

export default function TrackLines({ idLength, isLast }) {
  const elementsCount = idLength - 1;
  const imgElements = [];

  for (let i = 0; i < elementsCount; i++) {
    if (i === 0) {
      const lineType = isLast ? RightLine : StraightRightLine;
      imgElements.push(<img key={i} src={lineType} alt="track-line" />);
      continue;
    }
    imgElements.unshift(<img key={i} src={StraightLine} alt="track-line" />);
  }

  return (
    <div className={styles.container}>
      {imgElements}
    </div>
  )
}
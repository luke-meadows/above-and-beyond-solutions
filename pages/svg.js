import Image from 'next/image';
import lukesSVG from '../svgs/LukesSvg.svg';
import footersvg from '../svgs/Email Footer 2.svg';
import newsvg from '../svgs/Above and beyond email footer 1.svg';

export default function svg() {
  return (
    <div style={{ marginTop: '12rem' }}>
      <Image src={lukesSVG} /> <span>My SVG</span>
      <Image src={footersvg} />
      <Image src={newsvg} />
      <Image src={newsvg2} />
      <span>SVG in folder </span>
    </div>
  );
}

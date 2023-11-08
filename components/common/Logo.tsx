import Image from 'next/image';

type LogoProps = {
  url: string;
  height?: number;
  width?: number;
  alt?: string;
};

const Logo: React.FC<LogoProps> = ({ url, height = 30, width = 30, alt = 'MCIT Logo' }) => {
  return (
    <Image
      height={height}
      width={width}
      title='MCIT Logo'
      className='h-full w-full object-cover'
      src={url}
      alt={alt}
    />
  );
};

export default Logo;

import { TEXTS } from '@/constants/text';
import { getPosterPath } from '@/utils/getPosterPath';
import Image from 'next/image';

interface BannerProps {
  backdrop: string | null;
  title: string | null;
}
const Banner = ({ backdrop, title }: BannerProps) => {
  return (
    <section
      role="banner"
      className="relative flex w-full pt-[60%] after:absolute after:bottom-0 after:left-0 after:h-full after:w-full after:bg-gradient-to-t after:from-background after:to-transparent md:pt-[40%] lg:pt-[30%]"
    >
      {backdrop && <MainBackdrop path={backdrop} title={title} />}
    </section>
  );
};

const MainBackdrop = ({
  path,
  title,
}: {
  path: string;
  title: string | null;
}) => {
  const backdrop = getPosterPath(path);
  return (
    <Image
      src={backdrop}
      alt={title || TEXTS.MAIN_BANNER_ALT}
      fill
      priority
      className="absolute inset-0 -z-10 object-cover"
    />
  );
};

export default Banner;

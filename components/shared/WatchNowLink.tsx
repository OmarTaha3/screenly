import PlayIcon from '@/public/icons/PlayIcon';
import { ROUTES } from '@/routes';
import Link from 'next/link';

interface WatchMovieLinkProps {
  id: number;
}
const WatchNowLink = ({ id }: WatchMovieLinkProps) => {
  return (
    <Link href={ROUTES.MOVIE_DETAILS(id)} className="mainLink">
      <PlayIcon /> Watch now
    </Link>
  );
};

export default WatchNowLink;

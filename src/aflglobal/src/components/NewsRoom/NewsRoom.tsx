import Subtitle from 'src/core/atoms/Typography/Subtitile';
import { NewsRoomProps, mockNewRoomProps } from './NewsRoom.types';
import CTA from 'src/core/atoms/CTA/CTA';
import classes from './NewsRoom.module.scss';
import NewsCard from 'src/core/molecules/NewsCard/NewsCard';
import useSearch from 'src/hooks/search/useSearch';
import useSearchQueryPayload from 'src/hooks/search/useSearchQueryPayload';
import { NewsCardProps } from 'src/core/molecules/NewsCard/NewsCard.types';

const NewsRoom = () => {
  const props: NewsRoomProps = mockNewRoomProps;

  const searchPayload = useSearchQueryPayload();
  const { data: newsResult } = useSearch<NewsCardProps>(searchPayload);

  const newsItems = newsResult?.widgets[0].content;

  return (
    <div className={`container ${classes.newsRoomContainer}`}>
      <Subtitle field={props?.fields?.Title} />
      <div className={classes.newsItems}>
        {(newsItems || []).map((item) => (
          <NewsCard key={item.id} {...item} />
        ))}
      </div>
      <CTA link={props?.fields?.CTA} bg />
    </div>
  );
};

export default NewsRoom;

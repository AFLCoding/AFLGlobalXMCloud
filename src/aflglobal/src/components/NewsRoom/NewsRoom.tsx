import { NewsRoomProps, mockNewRoomProps } from './NewsRoom.types';
import Cta from 'src/core/atoms/CTA/CTA';
import classes from './NewsRoom.module.scss';
import NewsCard from 'src/core/molecules/NewsCard/NewsCard';
import useSearch from 'src/hooks/search/useSearch';
import useSearchQueryPayload from 'src/hooks/search/useSearchQueryPayload';
import { NewsCardProps } from 'src/core/molecules/NewsCard/NewsCard.types';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';

const NewsRoom = () => {
  const props: NewsRoomProps = mockNewRoomProps;

  const searchPayload = useSearchQueryPayload();
  const { data: newsResult } = useSearch<NewsCardProps>(searchPayload);

  const newsItems = newsResult?.widgets[0].content;

  return (
    <div className={`container ${classes.newsRoomWrapper}`}>
      <div className={classes.newsRoomContainer}>
        {props?.fields?.Title && (
          <Text tag="h4" field={props?.fields?.Title} className={classes.title} />
        )}
        <div className={classes.newsItems}>
          {(newsItems || []).map((item) => (
            <NewsCard key={item.id} {...item} />
          ))}
        </div>
        <Cta link={props?.fields?.CTA} bg className={classes.btn} />
      </div>
    </div>
  );
};

export default NewsRoom;

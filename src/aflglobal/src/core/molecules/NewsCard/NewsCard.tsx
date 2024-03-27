import { NewsCardProps } from './NewsCard.types';
import classes from './NewsCard.module.scss';

const NewsCard = (props: NewsCardProps) => {
  return (
    <div className={classes.newsCard} style={{ backgroundImage: `url(${props.image_url})` }}>
      <div className={classes.titleItemDetail}>
        <p className={classes.date}>{props.content_published_date}</p>
        <div className="row">
          <h3 className={`col-sm-9 ${classes.title}`}>{props.name}</h3>
          <div className={`col-sm-3 m-auto`}>
            <a href={props.url} className={classes.newsLink}>
              {props.type}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

import { NewsCardProps } from './NewsCard.types';
import classes from './NewsCard.module.scss';
import Cta from 'src/core/atoms/CTA/CTASecondary';
import Link from 'next/link';

const NewsCard = (props: NewsCardProps) => {
  return (
    <div className={classes.newsCard}>
      <Link
        href="/"
        className={classes.newsImage}
        style={{ backgroundImage: `url(${props.image_url})` }}
      />
      <div className={classes.titleItemDetail}>
        <p className={classes.date}>{props.content_published_date}</p>
        <div className={`d-md-flex ${classes.titleWrapper}`}>
          <h3 className={`col-sm-9 ${classes.title}`}>{props.name}</h3>
          <div className="col-sm-3 m-auto mb-md-0 me-md-0 mb-lg-auto">
            <Cta href={props.url} label={props.type} className={classes.cta} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

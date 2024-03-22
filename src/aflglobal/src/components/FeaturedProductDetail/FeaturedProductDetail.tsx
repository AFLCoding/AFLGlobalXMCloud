import CTA from 'src/core/atoms/CTA/CTA';
import {
  FeaturedProductDetailProps,
  mockPropsFeaturedProductDetail,
} from './FeaturedProductDetail.types';
import { Text, Image } from '@sitecore-jss/sitecore-jss-nextjs';
import classes from './FeaturedProductDetail.module.scss';

const FeaturedProductDetail = () => {
  const props: FeaturedProductDetailProps = mockPropsFeaturedProductDetail;
  return (
    <div className="container px-4">
      <div className="row col-md-12 gy-4">
        <div className="col-md-6 text-center">
          <Image field={props?.fields?.Image} className={classes.productImage} />
        </div>
        <div className={`col-md-6 ${classes.productDetails}`}>
          <Text tag="h2" field={props?.fields?.Title} className={classes.productTitle} />
          <Text tag="p" field={props?.fields?.Description} className={classes.productDescription} />
          <CTA link={props?.fields?.Link} bg />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductDetail;

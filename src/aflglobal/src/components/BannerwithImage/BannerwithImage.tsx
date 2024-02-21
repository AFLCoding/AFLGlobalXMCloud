import { Text, Field } from '@sitecore-jss/sitecore-jss-nextjs';


type BannerWithImageProps = {
  fields: {
    BackgroundImage: Field<string>,
    Title: Field<string>  
  };
}

const BannerWithImage = (props: BannerWithImageProps): JSX.Element => (
  
  <div>
   <Text field={props.fields.Title}/>
  </div>
);

export default BannerWithImage;
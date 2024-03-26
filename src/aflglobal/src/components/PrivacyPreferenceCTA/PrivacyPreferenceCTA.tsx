import { RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import {
  PrivacyPreferenceCTAProps,
  mockPrivacyPreferenceCTAProps,
} from './PrivacyPreferenceCTA.types';

const PrivacyPreferenceCTA = () => {
  const props: PrivacyPreferenceCTAProps = mockPrivacyPreferenceCTAProps;
  return <RichText field={props.fields.OneTrustScript} />;
};

export default PrivacyPreferenceCTA;

import { RichTextField } from '@sitecore-jss/sitecore-jss-nextjs';

export type PrivacyPreferenceCTAProps = {
  fields: {
    OneTrustScript: RichTextField;
  };
};

// TODO: Remove after integrating with actual props
export const mockPrivacyPreferenceCTAProps = {
  fields: {
    OneTrustScript: {
      value: `
      <!-- OneTrust Cookies Consent Notice start for www.aflglobal.com -->
      <script src="https://cdn.cookielaw.org/consent/92cc0c03-bb53-46eb-a0dd-7f622948654f/otSDKStub.js"  type="text/javascript" charset="UTF-8" data-domain-script="92cc0c03-bb53-46eb-a0dd-7f622948654f" ></script>
      <script type="text/javascript">
        function OptanonWrapper() { }
      </script>
      <!-- OneTrust Cookies Consent Notice end for www.aflglobal.com -->
      `,
    },
  },
};

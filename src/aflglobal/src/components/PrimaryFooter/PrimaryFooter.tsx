import React from 'react';
import Link from 'next/link';
import footerData from './utils';
import { RichText } from '@sitecore-jss/sitecore-jss-nextjs';

const PrimaryFooter = () => {
  const block = 'primary-footer';
  const primaryFooterData =
    footerData.sitecore.route.placeholders['headless-footer'][0].placeholders['sxa-footer'][0]
      .fields.data?.datasource.children.results;
  const primaryFooterSocialIcon =
    footerData.sitecore.route.placeholders['headless-footer'][0].placeholders['sxa-footer'][1]
      .fields.Text;
  return (
    <div className={`container-fluid ${block}`}>
      <div className={`footer row mx-auto ${block}__width`}>
        {/* Footer items is getting render */}
        {primaryFooterData?.map((item) => {
          return (
            <div
              key={item.LinkTitle.jsonValue.value.id}
              className={`col ${block}__list d-flex flex-column`}
            >
              <h3
                className={`${block}__heading ${
                  item.LinkTitle.jsonValue.value.text.length > 1
                    ? ''
                    : `${block}__heading-empty flex-grow-1`
                }`}
              >
                {item.LinkTitle.jsonValue.value.href && (
                  <Link
                    className={`text-uppercase fw-bold ${block}__heading-link ${block}__link`}
                    href={item.LinkTitle.jsonValue.value.href}
                  >
                    {item.LinkTitle.jsonValue.value.text}
                  </Link>
                )}
              </h3>
              <div className="flex-grow-1">
                {/* From here the menu item is getting render */}
                {item.children.results.map((menuItems) => {
                  const submenuItems = menuItems.field.link.value;
                  return (
                    <>
                      {submenuItems.href && (
                        <div key={submenuItems.id}>
                          <Link
                            className={`${block}__content d-none d-md-block ${block}__link`}
                            href={submenuItems.href}
                          >
                            {submenuItems.text}
                          </Link>
                        </div>
                      )}
                    </>
                  );
                })}
              </div>
            </div>
          );
        })}

        <div className="col primary-footer__list"></div>
        <div className={`d-md-block col ${block}__list`}>
          <RichText className={`${block}__social-icon`} field={primaryFooterSocialIcon} />
        </div>
      </div>
    </div>
  );
};

export default PrimaryFooter;

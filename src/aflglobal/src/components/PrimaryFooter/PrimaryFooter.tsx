import React from 'react';
import Link from 'next/link';
import footerData from './utils';

const PrimaryFooter = () => {
  const block = 'primary-footer';
  const primaryFooterData = footerData.data.datasource.children.results;

  return (
    <div className={`container-fluid ${block}`}>
      <div className={`footer row mx-auto ${block}__width`}>
        {primaryFooterData?.map((item, index) => {
          return (
            <div key={index} className={`col ${block}__list`}>
              <h3 className={`${block}__heading`}>
                <Link className="text-uppercase fw-bold" href={item.LinkTitle.jsonValue.value.href}>
                  {item.LinkTitle.jsonValue.value.text}
                </Link>
              </h3>
              {item.children.results.map((menuItems) => {
                const submenuItems = menuItems.field.link.value;
                return (
                  <div key={submenuItems.id}>
                    <Link
                      className={`${block}__content d-none d-md-block`}
                      href={submenuItems.href}
                    >
                      {submenuItems.text}
                    </Link>
                  </div>
                );
              })}
            </div>
          );
        })}

        <div className="col primary-footer__list"></div>
        <div className="d-none d-md-block col primary-footer__list"></div>
      </div>
    </div>
  );
};

export default PrimaryFooter;

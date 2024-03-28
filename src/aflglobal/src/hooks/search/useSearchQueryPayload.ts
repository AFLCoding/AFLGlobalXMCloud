import { useEffect, useState } from 'react';
import { SearchQueryPayload } from './search.types';

const useSearchQueryPayload = () => {
  const [payload, setPayload] = useState<SearchQueryPayload>();

  const defaultPayload: SearchQueryPayload = {
    widget: {
      items: [
        {
          rfk_id: 'rfkid_7',
          entity: 'content',
          search: {
            limit: 6,
            offset: 0,
            sort: {
              value: [
                {
                  name: 'published_date',
                  order: 'desc',
                },
              ],
            },
          },
          sources: ['dev_news_v1'],
        },
      ],
    },
    context: {
      locale: {
        country: 'us',
        language: 'en',
      },
    },
  };

  useEffect(() => {
    setPayload(defaultPayload);
  }, []);

  return payload;
};

export default useSearchQueryPayload;

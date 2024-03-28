import { AxiosDataFetcher } from '@sitecore-jss/sitecore-jss-nextjs';
import { UseQueryResult, useQuery } from 'react-query';
import { GRAPH_QL_ENDPOINT } from 'src/utils/contants';
import { SearchQueryPayload, SearchResponse } from './search.types';

const useSearch = <T>(queryPayload?: SearchQueryPayload): UseQueryResult<SearchResponse<T>> => {
  return useQuery({
    queryKey: [JSON.stringify(queryPayload)],
    enabled: Boolean(queryPayload),
    // queryFn: async () => {
    //   (await new AxiosDataFetcher().post(GRAPH_QL_ENDPOINT as string, queryPayload)) as T;
    // },
    queryFn: () => {
      return {
        widgets: [
          {
            rfk_id: 'rfkid_7',
            type: 'content_grid',
            used_in: 'page',
            entity: 'content',
            content: [
              {
                content_category: 'news',
                content_published_date: '1 February 2024',
                description:
                  'With its unique folding design, Switchblade helps to minimize the space requirements for storage, reduces transportation costs, and enables faster installation.',
                id: '753a8f7bc377d346ef6d03990a8491cc18bc72720b2b2afff16d49a6',
                image_url:
                  'https://www.altudo.co/-/media/project/altudo/altudo/image-collection/blog-thumnail/16-best-practices-in-sitecore-search.png?h=318&iar=0&w=650&sc_lang=en&hash=CE1CF1EF2D6973BD4E1950C150019BB2',
                name: 'AFL Expands FTTH Portfolio with Introduction of Switchblade™ Collapsible Fiber Containment Vaults',
                source_id: '971598',
                type: 'news',
                url: 'https://www.aflglobal.com/en/apac/Company/Company-Profile/News/2022/AFL-Expands-FTTH-Portfolio-with-Introduction-of-Switchblade-Collapsible-Fiber-Containment-Vaults',
              },
              {
                content_category: 'news',
                content_published_date: '1 February 2024',
                description:
                  'AFL is exhibiting in booth #915 with new products such as the Fujikura 41S+ and Apex® splice closure, presenting at a masterclass and conference session, plus providing a demo in What’s New What’s It Do. r.',
                id: 'a3f4400eb3a353a347191df6e5bbfedbd2f0e447c618ce9b5739ecdb',
                image_url:
                  'https://www.altudo.co/-/media/project/altudo/altudo/image-collection/blog-thumnail/16-best-practices-in-sitecore-search.png?h=318&iar=0&w=650&sc_lang=en&hash=CE1CF1EF2D6973BD4E1950C150019BB2',
                name: 'AFL Exhibiting at BICSI Winter in Orlando, Hosting Two Conference Sessions',
                source_id: '971598',
                type: 'news',
                url: 'https://www.aflglobal.com/en/apac/Company/Company-Profile/News/2022/AFL-Exhibiting-at-BICSI-Winter-in-Orlando-Hosting-Two-Conference-Sessions',
              },
              {
                content_category: 'news',
                content_published_date: '1 February 2024',
                description:
                  'Products being showcased include the LAZERMaster® glass shaping and splicing system, the Fujikura CT+ LDF cleavers and 500°C metal-coated specialty optical fiber.',
                id: '023fe46d67c4f72a8a1c5f75e5e47bc4d84fa053aef17dd3f3bbb7ff',
                image_url:
                  'https://www.altudo.co/-/media/project/altudo/altudo/image-collection/blog-thumnail/16-best-practices-in-sitecore-search.png?h=318&iar=0&w=650&sc_lang=en&hash=CE1CF1EF2D6973BD4E1950C150019BB2',
                name: 'AFL Exhibiting at SPIE BiOS/Photonics West | Showcasing Glass Processing and Fiber Technology',
                source_id: '971598',
                type: 'news',
                url: 'https://www.aflglobal.com/en/apac/Company/Company-Profile/News/2022/AFL-Exhibiting-at-SPIE-BiOS-Photonics-West-Showcasing-Glass-Processing-and-Fiber-Technology',
              },
              {
                content_category: 'news',
                content_published_date: '1 February 2024',
                description:
                  'The grant will enable STEM students facing a financial crisis to continue their education, graduate and enter the workforce to fill essential jobs in the Upstate of South Carolina.',
                id: 'c25fa7cacd70cf2ee6f4130262f5bc4e8d2fcb785cfcf1a3f2bd23f9',
                image_url:
                  'https://www.altudo.co/-/media/project/altudo/altudo/image-collection/blog-thumnail/16-best-practices-in-sitecore-search.png?h=318&iar=0&w=650&sc_lang=en&hash=CE1CF1EF2D6973BD4E1950C150019BB2',
                name: 'AFL Awards $10,000 Grant to Greenville Tech Foundation, Supports Student Emergency Needs',
                source_id: '971598',
                type: 'news',
                url: 'https://www.aflglobal.com/en/apac/Company/Company-Profile/News/2022/AFL-Awards-10000-Grant-to-Greenville-Tech-Foundation-Supports-Student-Emergency-Needs',
              },
              {
                content_category: 'news',
                content_published_date: '1 February 2024',
                description:
                  'Made possible by AFL’s Community Outreach Program, the organization’s programs align with AFL’s three focus areas including STEM Education, Youth Development and a new focus area called LEAP.',
                id: 'f56b15537d703cb59f8f4ac8cf2042f6ca1eff4df3cd44372cdd4fc0',
                image_url:
                  'https://www.altudo.co/-/media/project/altudo/altudo/image-collection/blog-thumnail/16-best-practices-in-sitecore-search.png?h=318&iar=0&w=650&sc_lang=en&hash=CE1CF1EF2D6973BD4E1950C150019BB2',
                name: 'AFL Awards $50K+ Grants to 10 Upstate SC Organizations',
                source_id: '971598',
                type: 'news',
                url: 'https://www.aflglobal.com/en/apac/Company/Company-Profile/News/2022/AFL-Awards-50K-Grants-to-10-Upstate-SC-Organizations',
              },
              {
                content_category: 'news',
                content_published_date: '1 February 2024',
                description:
                  'AFL recognizes the importance of keeping first responders connected and wants to apply its expertise where it matters most.',
                id: '726768d84a5dcd2aa098142879a9f1d517a069815e4deef2b2eba40e',
                image_url:
                  'https://www.altudo.co/-/media/project/altudo/altudo/image-collection/blog-thumnail/16-best-practices-in-sitecore-search.png?h=318&iar=0&w=650&sc_lang=en&hash=CE1CF1EF2D6973BD4E1950C150019BB2',
                name: 'AFL Enterprise | Wireless Services Applies Expertise in Public Safety Market',
                source_id: '971598',
                type: 'news',
                url: 'https://www.aflglobal.com/en/apac/Company/Company-Profile/News/2022/AFL-Enterprise-Wireless-Services-Applies-Expertise-in-Public-Safety-Market',
              },
            ],
            total_item: 15,
            limit: 6,
            offset: 0,
          },
        ],
        dt: 26,
        ts: 1711294708254,
      };
    },
  });
};

export default useSearch;

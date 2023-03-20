import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';
import Page from './collections/Page';
import Media from './collections/Media';
import CaseStudy from './collections/CaseStudy';
import Services from './collections/Services';
import Menu from './globals/Menu';

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [
    Page,
    CaseStudy,
    Services,
    Media,
  ],
  globals: [
    Menu,
  ],
});


import { defineStaticConfig } from "tinacms";

const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineStaticConfig({
  branch,
  clientId: "82e22a7f-b99f-4479-8c6d-7593f2a83ad0", 
  token: "efb70c9f48b04dc26d7a2d04129d389e7983b467", 
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Announcements",
        path: "content/announcements",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            label: 'Date',
            name: 'date',
            type: 'datetime',
            ui: {
              dateFormat: 'YYYY MM DD',
              timeFormat: "hh:mm A",
            }
          },
          {
            label: "Author",
            name: "author",
            type: "string",
            list: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
          },
          {
            type: "image",
            name: "customPagePreviewImageURL",
            label: "Thumbnail/Page Preview",
          },
          {
            type: "boolean",
            name: "enableComments",
            label: "Comments",
          },
          {
            type: "boolean",
            name: "sitemapExclude",
            label: "Exclude from Sitemap",
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured?",
          },
        ],
      },
      {
        name: "blog",
        label: "Blog",
        path: "content/Blog",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            label: 'Date',
            name: 'date',
            type: 'datetime',
            ui: {
              dateFormat: 'YYYY MM DD',
              timeFormat: "hh:mm A",
            }
          },
          {
            label: "Author",
            name: "author",
            type: "string",
            list: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "image",
            name: "customPagePreviewImageURL",
            label: "Thumbnail/Page Preview",
          },
          {
            type: "boolean",
            name: "enableComments",
            label: "Comments",
          },
          {
            type: "boolean",
            name: "sitemapExclude",
            label: "Exclude from Sitemap",
          },
        ],
      },
      {
        name: "season_download",
        label: "Season Download",
        path: "content/season-download",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            label: 'Date',
            name: 'date',
            type: 'datetime',
            ui: {
              dateFormat: 'YYYY MM DD',
              timeFormat: "hh:mm A",
            }
          },
          {
            label: "Author",
            name: "author",
            type: "string",
            list: true,
          },
          {
            type: "string",
            name: "permalink",
            label: "Permalink",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
          },
          {
            type: "image",
            name: "customPagePreviewImageURL",
            label: "Thumbnail/Page Preview",
          },
          {
            type: "boolean",
            name: "enableComments",
            label: "Comments",
          },
          {
            type: "boolean",
            name: "sitemapExclude",
            label: "Exclude from Sitemap",
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured?",
          },
        ],
      },
      {
        name: "ban",
        label: "Member Ban Notice",
        path: "content/ban",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            label: 'Date',
            name: 'date',
            type: 'datetime',
            ui: {
              dateFormat: 'YYYY MM DD',
              timeFormat: "hh:mm A",
            }
          },
          {
            label: "Author",
            name: "author",
            type: "string",
            list: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
          },
          {
            type: "image",
            name: "customPagePreviewImageURL",
            label: "Thumbnail/Page Preview",
          },
          {
            type: "boolean",
            name: "enableComments",
            label: "Comments",
          },
          {
            type: "boolean",
            name: "sitemapExclude",
            label: "Exclude from Sitemap",
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured?",
          },
        ],
      },
      {
        name: "rules",
        label: "Rules",
        path: "content/rules",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            label: 'Date',
            name: 'date',
            type: 'datetime',
            ui: {
              dateFormat: 'YYYY MM DD',
              timeFormat: "hh:mm A",
            }
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
          },
        ],
      },
    ],
  },
});


import { defineStaticConfig } from "tinacms";

const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineStaticConfig({
  branch: "main",
  clientId: "256cfe44-43db-45eb-9f62-395d5ce0fae0", 
  token: "1ea2b43efa7c85f0c6401c414ca14509372ffdc9", 
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

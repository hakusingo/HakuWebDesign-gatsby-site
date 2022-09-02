module.exports = {
  siteMetadata: {
    defaultTitle: `HakuWebデザイン`,
    defaultDescription: `HakuWebデザインは沖縄県うるま市にて活動するデザインやアプリケーションを作成する事務所です。ウェブサイト制作、ウェブアプリケーション作成、ポスター・パンフレット・名刺などのDTP印刷、システム構築などを承っています。`,
    defaultImage: "src/images/hakusingoImage.jpg",
    siteUrl: `https://haku-design.net//`,
    lang: `ja`,
    author: `@hakusingo`,
    locale: `ja_JP`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://wp.haku-design.net/graphql`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `HakuWebデザイン`,
        short_name: `HakuWebDesign`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#000`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://haku-design.net/`,
        sitemap: `https://haku-design.net//sitemap.xml`,
        policy: [{ userAgent: `*`, allow: `/` }]
      },
    },
  ],
}

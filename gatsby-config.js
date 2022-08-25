module.exports = {
  siteMetadata: {
    title: `HakuWebデザイン`,
    description: `HakuWebデザインは沖縄県うるま市にて活動するデザインやアプリケーションを作成する事務所です。ウェブサイト制作、ウェブアプリケーション作成、ポスター・パンフレット・名刺などのDTP印刷、システム構築などを承っています。`,
    author: `@hakusingo`,
    siteUrl: `https://hakusingo.com/`,
  },
  plugins: [
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}

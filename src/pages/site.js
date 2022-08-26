import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import MenuSite from "../images/menu-site.svg"
import GatsbyLogo from "../images/logo-gatsby.svg"
import Seo from "../components/seo"

const Site = () => {
  return (
    <Layout>
      <Seo 
        title="サイト作成"
        description="HakuWebDesignでは、お客様のご要望に答えるウェブサイトを作成することができます。"
      />
      <main>
        <section id="hero" className="hero h-[220px] sm:h-[300px] lg:h-[400px] w-[100%] relative">
          <figure className="w-full h-full">
            {/* <img className="h-full object-cover mx-auto" src="./images/menu-site.svg" alt="ヒーローイメージ(desktopPC))" /> */}
            <img src={MenuSite} alt="デスクトップPC" className="h-full object-cover mx-auto" />
            <div id="bd-filter" className="backdrop-blur-[1px] bg-white/30 absolute top-0 left-0 bottom-0 right-0 z-10" />
          </figure>
          <div className="absolute z-20 top-0 left-0 right-0 bottom-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-[51%] -translate-y-[49%] w-[90%] h-[200px] border-2 border-white max-w-[540px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-[49%] -translate-y-[51%] w-[90%] h-[200px] border-2 border-gray-400 max-w-[540px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
              <div className="text-black text-center">
                <h2 className="pacifico text-[24px] inline-block lg:text-[38px]">
                  Haku Web Design
                  <span className="border border-b-[1px] border-black block w-[85%]" />
                  <span className="border border-b-[1px] border-black block w-[85%] ml-[1rem] mt-1" />
                </h2>
                <h3 className="mt-[1rem]">ウェブサイト制作・運営</h3>
              </div>
            </div>
          </div>
        </section>
        <section id="explain-text" className="px-[2rem] my-[4rem] max-w-[850px] mx-auto">
          <p className="indent-4 mt-4">
            <span>
              Hakuウェブデザインでは、お客様のご要望・ご予算に合わせたウェブサイトを作成・運営致します。
            </span>
          </p>
          <p className="indent-4 mt-4">
            <span>
              また、SEOやMEOなどのご相談もお伺いさせて頂き、効率のよいサイトの運営のお力添えをさせていただきます。
            </span>
          </p>
          <p className="indent-4 mt-4">
            <span>
              サイトのデザインから、写真、ロゴ、イラストまで、お客様のお好みとトレンドや、お客様のニーズに合わせるよう、お手伝いさせていただきます。
            </span>
          </p>
          <p className="indent-4 mt-4">
            <span>
              大人気のCMSであるWordPressでのサイト運営から、近年のトレンドである高速で読み込みのできるGatsbyJSをしようしたヘッドレスCMSでの運用もご対応できます。
            </span>
          </p>
          <p className="indent-4 mt-4">
            <span>
              ウェブライティングの経験もございますので、ブログや記事執筆のお手伝いもさせていただきます。
            </span>
          </p>
        </section>
        <section>
          <div className="my-container">
            <div className="flex justify-between max-w-[600px] mx-auto mb-[4rem]">
              {/* <img className="w-[45%]" src="./images/logo-word-press.png" alt="ワードプレスロゴ" /> */}
              <StaticImage
                src="../images/logo-word-press.png"
                alt="word-press-logo"
                className="w-[45%]"
              />
              <img className="w-[45%]" src={GatsbyLogo} alt="gatsbyJSロゴ" />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Site

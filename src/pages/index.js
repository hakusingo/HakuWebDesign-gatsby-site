import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import MenuSite from "../images/menu-site.svg"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <Seo 
        title="Home"
        description="HakuWebデザインは沖縄県うるま市にて活動するデザインやアプリケーションを作成する事務所です。ウェブサイト制作、ウェブアプリケーション作成、ポスター・パンフレット・名刺などのDTP印刷、システム構築などを承っています。GatsbyJsで高速サイトを作成が得意です。"
      />
      <main>
        <section className="hero h-[calc(100vh-60px)] w-[100%] relative lg:h-[calc(100vh-78px)]">
          <figure className="absolute top-0 left-0 right-0 bottom-0 flex justify-center">
            {/* <img className="h-full w-full object-cover object-[45%] max-w-[1380px] mx-auto" src="./images/hero.jpg" alt="ヒーローイメージ(沖縄の海)" /> */}
            <StaticImage
              className="h-full w-full object-cover object-[45%] max-w-[1380px] mx-auto"
              src="../images/hero.jpg"
              alt="沖縄の海"
              placeholder="blurred"
              formats={["AUTO", "WEBP", "AVIF"]}
              loading="eager"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0">
              <div className="w-full h-full bg-[#B29797] mix-blend-multiply max-w-[1380px] mx-auto" />
            </div>
          </figure>
          <div className="absolute top-0 left-0 right-0 bottom-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-[51%] -translate-y-[49%] w-[90%] h-[457px] border-2 border-white max-w-[540px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-[49%] -translate-y-[51%] w-[90%] h-[457px] border-2 border-gray-400 max-w-[540px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
              <div className="text-white text-center">
                <h2 className="pacifico text-[24px] inline-block lg:text-[38px]">
                  Haku Web Design
                  <span className="border border-b-[1px] border-white block w-[85%]" />
                  <span className="border border-b-[1px] border-white block w-[85%] ml-[1rem] mt-1" />
                </h2>
                <ul className="text-[18px] whitespace-nowrap">
                  <li className="mt-[1.5rem] text-[18px] lg:text-[22px]">
                    <p>ウェブサイト制作・運営</p>
                  </li>
                  <li className="mt-[1rem] text-[18px] lg:text-[22px]">
                    <p>DTP<br /><span className="text-[14px] text-[300]">(パンフレット・チラシ・名刺 etc)</span></p>
                  </li>
                  <li className="mt-[1rem] text-[18px] lg:text-[22px]">
                    ウェブアプリ開発
                  </li>
                  <li className="mt-[1rem] text-[18px] lg:text-[22px]">
                    システム構築
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="menus">
          <div className="my-container md:grid md:grid-cols-2">
            <div className="h-auto w-full border-2 my-[4rem] rounded-[5px] max-w-[380px] mx-auto">
              <div className="h-[200px]">
                <figure className="bg-[#f2f2f2]">
                  <img className="h-[200px] w-full" src={MenuSite} alt="PC" />
                  {/* <StaticImage
                    class="max-h-[200px] w-full"
                    src="../images/menu-site.svg"
                    alt="pc"
                  /> */}
                </figure>
              </div>
              <div className="pl-[1rem] pr-[1rem]">
                <h3 className="mt-[1rem] mb-[1rem] text-[18px]">ウェブサイト制作・運営</h3>
                <p>お客様のご希望に答えるウェブサイト、運営方法をご提案・構築致します。</p>
                <button className="bg-black text-white rounded-[5px] my-[1rem]">
                  <Link to={`/site/`} className="pacifico px-[2rem] py-[.4rem] inline-block">About Site</Link>
                </button>
              </div>
            </div>
            <div className="h-auto w-full border-2 my-[4rem] rounded-[5px] max-w-[380px] mx-auto overflow-hidden">
              <div className="h-[200px]">
                <figure className="bg-[#f2f2f2]">
                  {/* <img className="max-h-[200px] w-full" src="./images/menu-dtp.jpg" alt="books" /> */}
                  <StaticImage
                    class="h-[200px] w-full"
                    src="../images/menu-dtp.jpg"
                    alt="pc"
                    placeholder="blurred"
                    formats={["AUTO", "WEBP", "AVIF"]}
                  />
                </figure>
              </div>
              <div className="pl-[1rem] pr-[1rem]">
                <h3 className="mt-[1rem] mb-[1rem] text-[18px]">DTP<span>(パンフレット・チラシ・名刺 etc)</span></h3>
                <p>パンフレット・チラシ・名刺・Tシャツなどの作成・相談を承っております。</p>
                <button className="bg-black text-white rounded-[5px] my-[1rem]">
                  <Link to={`/dtp/`} className="pacifico px-[2rem] py-[.4rem] inline-block">About DTP</Link>
                </button>
              </div>
            </div>
            <div className="h-auto w-full border-2 my-[4rem] rounded-[5px] max-w-[380px] mx-auto overflow-hidden">
              <div className="h-[200px]">
                <figure className="bg-[#f2f2f2]">
                  {/* <img className="max-h-[200px] w-full" src="./images/menu-app.jpg" alt="PC" /> */}
                  <StaticImage
                    class="h-[200px] w-full"
                    src="../images/menu-app.jpg"
                    alt="pc"
                    placeholder="blurred"
                    formats={["AUTO", "WEBP", "AVIF"]}
                  />
                </figure>
              </div>
              <div className="pl-[1rem] pr-[1rem]">
                <h3 className="mt-[1rem] mb-[1rem] text-[18px]">ウェブアプリ開発</h3>
                <p>パソコンやスマートフォンからご利用できる、ウェブアプリケーションの開発を行います。</p>
                <button className="bg-black text-white rounded-[5px] my-[1rem]">
                  <Link to={`/app/`} title="アプリケーション開発について" className="pacifico px-[2rem] py-[.4rem] inline-block">About App</Link>
                </button>
              </div>
            </div>
            <div className="h-auto w-full border-2 my-[4rem] rounded-[5px] max-w-[380px] mx-auto overflow-hidden">
              <div className="h-[200px]">
                <figure className="bg-[#f2f2f2]">
                  {/* <img className="max-h-[200px] w-full" src="./images/menu-system.png" alt="config" /> */}
                  <StaticImage
                    class="h-[200px] w-full"
                    src="../images/menu-system.png"
                    alt="pc"
                  />
                </figure>
              </div>
              <div className="pl-[1rem] pr-[1rem]">
                <h3 className="mt-[1rem] mb-[1rem] text-[18px]">システム構築</h3>
                <p>お客様のご希望のシステム構築・運用を致します。</p>
                <button className="bg-black text-white rounded-[5px] my-[1rem]">
                  <Link to={`/system/`} className="pacifico px-[2rem] py-[.4rem] inline-block" href>About System</Link>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage

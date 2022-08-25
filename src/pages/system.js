import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import GSLogo from "../images/logo-gs.svg"
import ExcelLogo from "../images/logo-excel.svg"
// import Seo from "../components/seo"

const System = () => {
  return (
    <Layout>
      <main>
        <section id="hero" className="hero h-[220px] sm:h-[300px] lg:h-[400px] w-[100%] relative">
          <figure className="w-full h-full">
            {/* <img className="h-full w-full object-cover mx-auto" src="../images/menu-system.png" alt="ヒーローイメージ(config))" /> */}
            <StaticImage
              className="h-full w-full object-cover mx-auto"
              src="../images/menu-system.png"
              alt="システムロゴ"
            />
            <div id="bd-filter" className="backdrop-blur-[3px] backdrop-brightness-100 bg-white/30 absolute top-0 left-0 bottom-0 right-0 z-10" />
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
                <h3 className="mt-[1rem]">
                  システム開発
                </h3>
              </div>
            </div>
          </div>
        </section>
        <section id="explain-text" className="px-[2rem] my-[4rem] max-w-[850px] mx-auto">
          <p className="indent-4 mt-4">
            <span>
              Hakuウェブデザインでは、お客様のご要望・ご予算に合わせたウェブアプリケーションを作成致します。
            </span>
          </p>
          <p className="indent-4 mt-4">
            <span>
              どのようなシステムのアプリケーションを作成したいのか、事前に詳しくきかせて頂きご要望・ご予算に合わせて構築いたします。
            </span>
          </p>
          <p className="indent-4 mt-4">
            <span>
              パソコンやスマートフォンから、どちらでもお使いいただけるアプリケーションの構築も可能です。
            </span>
          </p>
        </section>
        <section>
          <div className="my-container">
            <div className="md:flex justify-between max-w-[600px] mx-auto mb-[4rem]">
              <img className="w-[45%] mx-auto md:mx-0" src={GSLogo} alt="スプレッドシートロゴ" />
              <img className="w-[45%] mx-auto md:mx-0" src={ExcelLogo} alt="エクセルロゴ" />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default System

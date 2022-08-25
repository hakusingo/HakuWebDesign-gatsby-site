import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import LaravelLogo from "../images/logo-laravel.svg"
import ReactLogo from "../images/logo-react.svg"
// import Seo from "../components/seo"

const ContactMe = () => {
  return (
    <Layout>
      <main>
        <section id="hero" className="hero h-[220px] sm:h-[300px] lg:h-[400px] w-[100%] relative">
          <figure className="w-full h-full">
            {/* <img className="h-full w-full object-cover mx-auto" src="./images/contact-hero.jpg" alt="ヒーローイメージ(テーブルの上のスマホ、メガネ))" /> */}
            <StaticImage
              src="../images/contact-hero.jpg"
              alt="テーブル上のスマホ"
              className="h-full w-full object-cover mx-auto"
              placeholder="blurred"
              formats={["AUTO", "WEBP", "AVIF"]}
            />
            <div id="bd-filter" className="backdrop-blur-[3px] backdrop-brightness-150 bg-white/30 absolute top-0 left-0 bottom-0 right-0 z-10" />
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
                  お問い合わせ
                </h3>
              </div>
            </div>
          </div>
        </section>
        <section id="explain-text" className="px-[2rem] my-[4rem] max-w-[850px] mx-auto">
          <p className="indent-4 mt-4">
            <span>
              Hakuウェブデザインでは、お客様のご要望・ご予算に合わせたサイト制作・ウェブアプリケーション開発・出版物作成を致します。
            </span>
          </p>
          <p className="indent-4 mt-4">
            <span>
              お作りする作品のお話を詳しく聞かせていただいた上で、お見積もり・納期などお答えさせて頂いてます。
            </span>
          </p>
          <p className="indent-4 mt-4">
            <span>
              また、お近くにお住まいの方でしたら、対面でのご相談も受け付けています。お客様と一緒にいい作品を生み出したいと考えております。
            </span>
          </p>
          <p className="indent-4 mt-4">
            <span>
              ご連絡お問い合わせはE-mail、LINE、インスタラムにてお願いたしますm(_ _)m
            </span>
          </p>
        </section>
        <section className="contact-section">
          <div className="px-[1rem] mx-auto max-w-[800px]">
            <div className="flex justify-center">
              <h3 className="bg-black text-white text-[24px] pacifico inline-block py-[.3rem] px-[1.4rem]">
                E-mail
              </h3>
            </div>
            <div id="form" className="px-[2rem]">
              <form action="/api/send" onSubmit={onSubmit} method="POST">
                <div>
                  <label htmlFor="formName">
                    お名前
                  </label>
                  <input id="formName" value={value['formName'] || ``} type="text" />
                </div>
                <div>
                  <label htmlFor="formmail">
                    メールドレス
                  </label>
                  <input value={value['formEmail'] || ``}  id="formmail" type="email" />
                </div>
                <div>
                  <label htmlFor="formTextarea">
                    お問い合わせ内容
                  </label>
                  <textarea id="formTextarea" value={value['formTextarea'] || ``} name cols={30} rows={10} placeholder="こちらにお問い合わせ内容をお願いします。2~３日以内に折り返しご連絡致します。" defaultValue={""} />
                </div>
                <div className="flex justify-end">
                  <button className="bg-black text-white inline-block px-[1.2rem] py-[.2rem] rounded-[5px]">送信</button>
                </div>
              </form>
            </div>
            <div>
              <div className="flex justify-center mt-[3rem]">
                <h3 className="bg-black text-white text-[24px] pacifico inline-block py-[.3rem] px-[1.4rem]">
                  LINE
                </h3>
              </div>
              <div className="pacifico text-[24px] text-center my-[3rem]">
                ID@kurikett
              </div>
              <button className="flex justify-center w-full">
                <a href="https://line.me/ti/p/R799lrcnJF" className="mx-auto text-[18px] inline-block py-[.5rem] px-[2rem] border-4 border-black rounded-[5px]">
                  ライン友達追加ボタン
                </a>
              </button>
            </div>
            <div>
              <div className="flex justify-center mt-[4rem]">
                <h3 className="bg-black text-white text-[24px] pacifico inline-block py-[.3rem] px-[1.4rem]">
                  Instagram
                </h3>
              </div>
              <div className="pacifico text-[24px] text-center my-[3rem]">
                @hakusingo
              </div>
              <button className="flex justify-center w-full">
                <a href="https://www.instagram.com/hakusingo/" className="mx-auto text-[18px] inline-block py-[.5rem] px-[2rem] border-4 border-black rounded-[5px]">
                  インスタグラムへ
                </a>
              </button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default ContactMe

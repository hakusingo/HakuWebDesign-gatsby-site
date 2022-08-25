import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Contact = () => {
  return (
    <section className="contact-me mt-[40px]">
      <div className="my-container">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="pacifico text-[24px] inline-block">Contact Me
            <span className="border border-b-[1px] border-black block w-[85%] -mt-1" />
            <span className="border border-b-[1px] border-black block w-[85%] ml-[1rem] mt-[.1rem]" />
          </h2>
        </div>
        <div className="my-[3rem] max-w-[1000px] md:flex justify-between flex-row-reverse mx-auto">
          <div className="md:w-[45%]">
            <div>
              <figure className="w-[calc(100%-32px)] h-auto mx-auto relative md:-mt-[3rem]">
                {/* <img className="relative z-20" src="images/contact-me.jpg" alt="beach" /> */}
                <StaticImage
                  src="../images/contact-me.jpg"
                  className="relative z-20"
                  alt="desktopPC"
                  placeholder="blurred"
                  formats={["AUTO", "WEBP", "AVIF"]}
                  // layout="fullWidth"
                  // styled={{ height: "100%" }}
                />
                <div className="border-2 border-black h-full w-full absolute -top-2 -left-2 z-20" />
                <div className="border-2 h-full w-full absolute top-2 left-2 z-10" />
              </figure>
            </div>
          </div>
          <div className="mt-[3rem] md:w-[50%] md:mt-0">
            <p className="px-[1rem] indent-4">
              Hakuウェブデザインは、沖縄県うるま市にあるウェブ屋さんです。ウェブサイトの作成、ウェブアプリケーションの作成や印刷物（パンフレット、チラシ、名刺、小冊子など、システム構築などお困りの事がありましたら、お気軽にコンタクトください。
            </p>
            <p className="px-[1rem] mt-[1rem] indent-4">
              詳しくはメールやチャット、対面またはZOOM等にて、お話を聞かせていただきます。
            </p>
          </div>
        </div>
        <div className="my-[3rem] md:flex md:max-w-[1000px] justify-center mx-auto">
          <div className="order-2 md:flex-1">
            <figure className="flex justify-center">
              {/* <img className="h-[220px] w-[220px] rounded-full object-cover" src="images/contact-haku.jpg" alt="" /> */}
              <StaticImage
                src="../images/contact-haku.jpg"
                className="h-[220px] w-[220px] rounded-full object-cover"
                alt="hakusingo-pic"
                placeholder="blurred"
                formats={["AUTO", "WEBP", "AVIF"]}
                quality={90}
              />
            </figure>
          </div>
          <div className="my-[3rem] md:my-0 order-1 md:flex-1">
            <dl>
              <dt>Name</dt>
              <dd>Tomari Singo</dd>
            </dl>
            <dl>
              <dt>Address</dt>
              <dd>
                Taba,Uruma,Okinawa<br />
                904-2213 Japan
              </dd>
            </dl>
            <dl>
              <dt>E-mail</dt>
              <dd>hakusingo@gmail.com</dd>
            </dl>
            <dl>
              <dt>Twitter</dt>
              <dd>@hakusingo</dd>
            </dl>
            <dl>
              <dt>Skill</dt>
              <dd>
                HTML,CSS,JavaScript,PHP<br />
                Ai,Ps,XD,GS<br />
                ウェブライティング,SEO
              </dd>
            </dl>
            <button className="bg-black text-white rounded-[5px] my-[1rem]">
              <Link to="/contact-me/" className="pacifico px-[2rem] py-[.4rem] inline-block">Contact Me</Link>
            </button>
          </div>
          <div className="order-3 md:flex-1">
            <p className="px-[1rem] mt-[1rem] indent-4">
              沖縄県うるま市具志川生まれ、具志川育ち。バスケットボール、読書、散歩、音楽（何でも聞く）PCいじり、プログラミングが大好きの1983年生まれ。
            </p>
            <p className="px-[1rem] mt-[1rem] indent-4">
              ２０代のころ東京（新小岩・吉祥寺)に10年ほど住む、飲食店スタッフ・バーテンダー、お寺で働いた後に地元のウェブ系の会社で働く。
            </p>
            <p className="px-[1rem] mt-[1rem] indent-4">
              2022年より独立。ウェブサイト制作やアプリ開発・ウェブライティングなどITの知識を生かして、地元でお困りの方の手助けをするウェブ屋さん。
            </p>
            <div className="flex justify-center">
              <button className="bg-black text-white rounded-[5px] my-[2rem]">
                <Link to="/" className="pacifico px-[2rem] py-[.4rem] inline-block">ブログへ</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
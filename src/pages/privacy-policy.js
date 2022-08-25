import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
// import Seo from "../components/seo"

const PrivacyPolicy = () => {
  return (
    <Layout>
      <main>
        <section id="hero" className="hero h-[220px] sm:h-[300px] lg:h-[400px] w-[100%] relative overflow-x-hidden">
          <figure className="w-full h-full">
            {/* <img className="h-full w-full object-cover mx-auto" src="./images/privacy-policy.png" alt="ヒーローイメージ(テーブルの上のスマホ、メガネ))" /> */}
            <StaticImage
              src="../images/privacy-policy.png"
              class="h-full w-full object-cover mx-auto"
              alt="DeskTopPC"
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
                  プライバシーポリシー
                </h3>
              </div>
            </div>
          </div>
        </section>
        <section id="explain-text" className="px-[2rem] my-[4rem] max-w-[850px] mx-auto">
          <p className="indent-4 mt-4">
            <span>
              基本方針
            </span>
          </p>
          <p className="indent-4 mt-4">
            <span>
              当サイトは、個人情報の重要性を認識し、個人情報を保護することが社会的責務であると考え、個人情報に関する法令を遵守し、当サイトで取り扱う個人情報の取得、利用、管理を適正に行います。
            </span>
          </p>
          <p className="indent-4 mt-4">
            <span>
              適用範囲
            </span>
          </p>
          <p className="indent-4 mt-4">
            <span>
              本プライバシーポリシーは、お客様の個人情報もしくはそれに準ずる情報を取り扱う際に、当サイトが遵守する方針を示したものです。
            </span>
          </p>
          <p className="indent-4 mt-4">
            <span>
              個人情報の利用目的
            </span>
          </p>
          <p className="indent-4 mt-4">
            <span>
              当サイトは、お客様からご提供いただく情報を以下の目的の範囲内において利用します。
            </span>
          </p>
          <p className="indent-4 mt-4">
            <span>
              ご本人確認のため,お問い合わせ、コメント等の確認・回答のため、メールマガジン・DM・各種お知らせ等の配信・送付のため、サービスの提供・改善・開発・マーケティングのため、お客さまの承諾・申込みに基づく、提携事業者・団体等への個人情報の提供のため、利用規約等で禁じている行為などの調査のため、その他個別に承諾いただいた目的。
            </span>
          </p>
          <p className="indent-4 mt-4">
            <span>
              個人情報の管理
            </span>
          </p>
          <p className="indent-4 mt-4">
            <span>
              当サイトは、個人情報の正確性及び安全確保のために、セキュリティ対策を徹底し、個人情報の漏洩、改ざん、不正アクセスなどの危険については、必要かつ適切なレベルの安全対策を実施します。
            </span>
          </p>
          <p className="indent-4 mt-4">
            <span>
              当サイトは、第三者に重要な情報を読み取られたり、改ざんされたりすることを防ぐために、SSLによる暗号化を使用しております。
            </span>
          </p>
          <p className="indent-4 mt-4">
            <span>
              個人情報の第三者提供
            </span>
          </p>
          <p className="indent-4 mt-4">
            <span>
              当サイトは、以下を含む正当な理由がある場合を除き、個人情報を第三者に提供することはありません。
            </span>
          </p>
          <p className="indent-4 mt-4">
            <span>
              ご本人の同意がある場合法令に基づく場合人の生命・身体・財産の保護に必要な場合公衆衛生・児童の健全育成に必要な場合国の機関等の法令の定める事務への協力の場合（税務調査、統計調査等）
            </span>
          </p>
          <p className="indent-4 mt-4">
            <span>
              当サイトでは、利用目的の達成に必要な範囲内において、他の事業者へ個人情報を委託することがあります。
            </span>
          </p>
          <p className="indent-4 mt-4">
            <span>
              開示、訂正、利用停止等のお申し出があった場合には、所定の方法に基づき対応致します。具体的な方法については、個別にご案内しますので、お問い合わせください。
            </span>
          </p>
          <p className="indent-4 mt-4">
            <span>
              Cookie（クッキー）
            </span>
          </p>
          <p className="indent-4 mt-4">
            <span>
              Cookie（クッキー）は、利用者のサイト閲覧履歴を、利用者のコンピュータに保存しておく仕組みです。
            </span>
          </p>
          <p className="indent-4 mt-4">
            <span>
              利用者はCookie（クッキー）を無効にすることで収集を拒否することができますので、お使いのブラウザの設定をご確認ください。ただし、Cookie（クッキー）を拒否した場合、当サイトのいくつかのサービス・機能が正しく動作しない場合があります。
            </span>
          </p>
          <p className="indent-4 mt-4">
            <span>
              アクセス解析
            </span>
          </p>
          <p className="indent-4 mt-4">
            <span>
              当サイトでは、サイトの分析と改善のためにGoogleが提供している「Google アナリティクス」を利用しています。
            </span>
          </p>
          <p className="indent-4 mt-4">
            <span>
              このサービスは、トラフィックデータの収集のためにCookie（クッキー）を使用しています。トラフィックデータは匿名で収集されており、個人を特定するものではありません。
            </span>
          </p>
          <p className="indent-4 mt-4">
            <span>
              Cookie（クッキー）を無効にする詳細は、https://policies.google.com/technologies/ads?gl=jp をご覧ください。
            </span>
          </p>
          <p className="indent-4 mt-4">
            <span>
              著作権・肖像権
            </span>
          </p>
          <p className="indent-4 mt-4">
            <span>
              当サイトで掲載しているすべてのコンテンツ（文章、画像、動画、音声、ファイル等）の著作権・肖像権等は当サイト所有者または各権利所有者が保有し、許可なく無断利用（転載、複製、譲渡、二次利用等）することを禁止します。また、コンテンツの内容を変形・変更・加筆修正することも一切認めておりません。
            </span>
          </p>
          <p className="indent-4 mt-4">
            <span>
              各権利所有者におかれましては、万一掲載内容に問題がございましたら、ご本人様よりお問い合わせください。迅速に対応いたします。
            </span>
          </p>
          <p className="indent-4 mt-4">
            <span>
              リンク
            </span>
          </p>
          <p className="indent-4 mt-4">
            <span>
              当サイトは原則リンクフリーです。リンクを行う場合の許可や連絡は不要です。引用する際は、引用元の明記と該当ページへのリンクをお願いします。
            </span>
          </p>
        </section>
      </main>
    </Layout>
  )
}

export default PrivacyPolicy

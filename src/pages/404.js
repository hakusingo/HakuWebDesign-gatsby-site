import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

const NotFound = () => {
  return (
    <Layout>
      <Seo
        title="404NotFound"
        description="ページが見つかりませんでした。"
      />
      <div className="my-container text-center text-[24px] py-[3rem]"> 
        <h1>404: Not Found</h1>
        <p className="py-[2rem]">お探しのページは見つかりませんでした。</p>
        <Link to={`/`} className="bg-black text-white inline-block px-[1.4rem] py-[.5rem] rounded-[5px]">ホームへ戻る</Link>
      </div>
    </Layout>
  )
}

export default NotFound

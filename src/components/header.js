import * as React from "react"
import { Link } from "gatsby"

const Header = () => {
  const navOpen = () => {
    const navButton = document.getElementById("navButton")
    const navigation = document.getElementById("navigation")
    navButton.classList.toggle("navOpen")
    navigation.classList.toggle("-translate-x-[100%]")
  }

  return (
    <>
      <header className="bg-black text-white h-[60px] flex items-center overflow-x-hidden lg:h-[78px] sticky top-0 z-40">
        <div className="my-container flex justify-between items-center h-[100%]">
          <h1 className="font-medium text-[22px] lg:text-[42px]">
            <Link to="/">
            HakuWebデザイン
            </Link>
          </h1>
          <div className="hidden xl:block">
            <ul className="flex">
              <li className="mr-[1rem]">
                <Link to="/">
                ホーム
                </Link>
              </li>
              <li className="mr-[1rem]">
                <Link to="/site/">
                ウェブサイト制作・運営
                </Link>
              </li>
              <li className="mr-[1rem] flex items-center">
                <Link to="/dtp/">
                DTP
                </Link>
              </li>
              <li className="mr-[1rem]">
                <Link to="/app/">
                ウェブアプリ開発
                </Link>
              </li>
              <li className="mr-[1rem]">
                <Link to="/system/">
                システム構築
                </Link>
              </li>
              <li>
                <Link to="/contact-me/">
                コンタクト
                </Link>
              </li>
            </ul>
          </div>
          <div onClick={navOpen} id="navButton" className="h-[100%] xl:hidden">
            <span className="block w-[16px] h-[2px] bg-white ml-auto transition duration-300 ease-in-out" />
            <span className="block w-[30px] h-[2px] bg-white mt-[10px] mb-[10px] ml-auto transition duration-300 ease-in-out" />
            <span className="block w-[24px] h-[2px] bg-white ml-auto transition duration-300 ease-in-out" />
          </div>
        </div>
      </header>
      <nav id="navigation" className="fixed z-40 top-0 left-0 h-[100%] w-[85%] bg-white opacity-[94%] -translate-x-[100%] transition duration-300 ease-in-out">
        <div className="text-black">
          <ul className="mt-[4rem] ml-[2rem] text-[22px] font-medium lg:ml-[4rem]">
            <li className="mb-[1.6rem]">
              <Link to="/">
              ホーム
              </Link>
            </li> 
            <li className="mb-[1.6rem]">
              <Link to="/site/">
              ウェブサイト制作・運営
              </Link>
            </li>
            <li className="mb-[1.6rem] flex items-center">
              <Link to="/dtp/">
              DTP<span className="text-[12px] block">(パンフレット・チラシ・名刺 etc)</span>
              </Link>
            </li>
            <li className="mb-[1.6rem]">
              <Link to="/app/">
              ウェブアプリ開発
              </Link>
            </li>
            <li className="mb-[1.6rem]">
              <Link to="/system/">
              システム構築
              </Link>
            </li>
            <li className="mb-[1.6rem]">
              <Link to="/contact-me/">
              コンタクト
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy/">
              プライバシーポリシー
              </Link>
            </li>
          </ul>
          <div className="pacifico mt-[4rem] ml-[2rem] text-[2rem] lg:ml-[4rem]">
            <Link to="/">
            Haku Web Design
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}


export default Header
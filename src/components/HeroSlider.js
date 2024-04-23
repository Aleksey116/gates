import React, { useEffect, useState } from "react"
import UserDataFetcher from "/src/components/UserDataFetcher"

const UserDataComponent = ({ apiUrl }) => {
  const [displayName, setDisplayName] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl)
        if (!response.ok) {
          throw new Error("Failed to fetch user data")
        }
        const userData = await response.json()
        const userDisplayName = userData.result.user.displayName
        setDisplayName(userDisplayName)
      } catch (error) {
        console.error("Error fetching user data:", error)
      }
    }

    fetchData()
  }, [apiUrl]) // Dependency array includes apiUrl to re-fetch data when it changes

  return (
    <div>
      <h2>User Display Name:</h2>
      <p>{displayName}</p>
    </div>
  )
}

const HeroSlider = () => {
  const [isClicked, setIsClicked] = useState(false)

  const handleAnchorClick = () => {
    setIsClicked(true)
  }

  useEffect(() => {
    const fn_cs_slider = document.querySelectorAll(".fn_cs_slider")
    fn_cs_slider.forEach((element) => {
      let sliderTop = element.getElementsByClassName("slider_top")[0],
        sliderBottom = element.getElementsByClassName("slider_content"),
        activeIndex = 1,
        speed = 21999999999

      let myInterval = setInterval(function () {
        activeIndex++
        activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex)
      }, speed)
      const prev = document.querySelector(".slider_nav .prev"),
        next = document.querySelector(".slider_nav .next"),
        li = element.getElementsByTagName("li")
      prev.addEventListener("click", function (e) {
        e.preventDefault()
        clearInterval(myInterval)
        activeIndex--
        activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex)
        myInterval = setInterval(function () {
          activeIndex++
          activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex)
        }, speed)
        return false
      })
      next.addEventListener("click", (e) => {
        e.preventDefault()
        clearInterval(myInterval)
        activeIndex++
        activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex)
        myInterval = setInterval(function () {
          activeIndex--
          activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex)
        }, speed)
        return false
      })
      for (let i = 0; i < li.length; i++) {
        const liElement = li[i]
        const getClass = liElement.getAttribute("class")
        if (getClass === "next") {
          activeIndex++
        } else if (getClass === "prev") {
          activeIndex--
        } else {
          return false
        }
        clearInterval(myInterval)
        activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex)
        myInterval = setInterval(function () {
          activeIndex++
          activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex)
        }, speed)
        return false
      }
    })
  }, [])

  const sliderDo = (sliderTop, sliderBottom, activeIndex) => {
    var topLength = sliderTop.getElementsByTagName("li").length
    if (activeIndex > topLength) {
      activeIndex -= topLength
    }
    var indexPrev = activeIndex - 1
    var indexPrev2 = activeIndex - 2
    var indexNext = activeIndex + 1
    var indexNext2 = activeIndex + 2
    if (indexPrev > topLength) {
      indexPrev -= topLength
    }
    if (indexPrev2 > topLength) {
      indexPrev2 -= topLength
    }
    if (indexNext > topLength) {
      indexNext -= topLength
    }
    if (indexNext2 > topLength) {
      indexNext2 -= topLength
    }
    if (indexPrev < 1) {
      indexPrev += topLength
    }
    if (indexPrev2 < 1) {
      indexPrev2 += topLength
    }
    if (activeIndex < 1) {
      activeIndex += topLength
    }
    if (indexNext < 1) {
      indexNext += topLength
    }
    if (indexNext2 < 1) {
      indexNext2 += topLength
    }
    let li = sliderTop.getElementsByTagName("li")
    for (let i = 0; i < li.length; i++) {
      const element = li[i]
      element.classList.remove("prev", "prev2", "active", "next", "next2")
      // element.setAttribute(`data-index${indexNext}`);
    }
    sliderTop
      .querySelector('li[data-index="' + indexPrev2 + '"]')
      ?.classList.add("prev2")
    sliderTop
      .querySelector('li[data-index="' + indexPrev + '"]')
      ?.classList.add("prev")
    sliderTop
      .querySelector('li[data-index="' + activeIndex + '"]')
      ?.classList.add("active")
    sliderTop
      .querySelector('li[data-index="' + indexNext + '"]')
      ?.classList.add("next")
    sliderTop
      .querySelector('li[data-index="' + indexNext2 + '"]')
      ?.classList.add("next2")
    return activeIndex
  }

  return (
    <section id="home">
      <div className="container">
        <p
          className="fn__maintitle big"
          data-text="Your GATE to WEB3"
          data-align="center"
        >
          your GATE TO WEB3
        </p>
        {/* Slider */}
        <div className="fn_cs_slider" data-responsive="on">
          <div className="slider_top">
            <img src="/img/1x1.jpg" alt="" />
            <ul>
              <li className="prev" data-index={1}>
                <div className="item">
                <img src="/img/1x1.jpg" alt="" />
                  <a
                    className="popup-youtube metaportal_fn_videobutton"
                    href="Req"
                    onClick={handleAnchorClick}
                  >
                    <img src="/svg/lock.svg" alt="" className="fn__svg" />
                  </a>
                  <div className="item_in">
                    <div className="img" data-bg-img="/img/slider/1.png" />
                  </div>
                </div>
              </li>
              <li className="active" data-index={2}>
                <div className="item">
                <img src="/img/1x1.jpg" alt="" />
                  <a
                    className="popup-youtube metaportal_fn_videobutton"
                    href="Req"
                    onClick={handleAnchorClick}
                  >
                    <img src="/svg/lock.svg" alt="" className="fn__svg" />
                  </a>
                  <div className="item_in">
                    <div className="img" data-bg-img="/img/slider/2.png" />
                  </div>
                </div>
              </li>
              <li className="next" data-index={3}>
                <div className="item">
                <img src="/img/1x1.jpg" alt="" />
                  <a
                    className="popup-youtube metaportal_fn_videobutton"
                    href="Req"
                    onClick={handleAnchorClick}
                  >
                    <img src="/svg/lock.svg" alt="" className="fn__svg" />
                  </a>
                  <div className="item_in">
                    <div className="img" data-bg-img="/img/slider/3.png" />
                  </div>

                  {/* {isClicked && (
                    <UserDataFetcher />
                
                  )} */}
                </div>
              </li>
              <li className="next2" data-index={4}>
                <div className="item">
                  <img src="/img/1x1.jpg" alt="" />
                  <a
                    className="popup-youtube metaportal_fn_videobutton"
                    href="Req"
                    onClick={handleAnchorClick}
                  >
                    <img src="/svg/lock.svg" alt="" className="fn__svg" />
                  </a>

                  <div className="item_in">
                    <div className="img" data-bg-img="/img/slider/4.png" />
                  </div>

                  {/* {isClicked && (
                    <UserDataFetcher />
                
                  )} */}
                </div>
              </li>
              <li data-index={5}>
                <div className="item">
                <img src="/img/1x1.jpg" alt="" />
                  <a
                    className="popup-youtube metaportal_fn_videobutton"
                    href="Req"
                    onClick={handleAnchorClick}
                  >
                    <img src="/svg/lock.svg" alt="" className="fn__svg" />
                  </a>
                  <div className="item_in">
                    <div className="img" data-bg-img="/img/slider/5.png" />
                  </div>
                </div>
              </li>
              <li data-index={6}>
                <div className="item">
                <img src="/img/1x1.jpg" alt="" />
                  <a
                    className="popup-youtube metaportal_fn_videobutton"
                    href="Req"
                    onClick={handleAnchorClick}
                  >
                    <img src="/svg/lock.svg" alt="" className="fn__svg" />
                  </a>
                  <div className="item_in">
                    <div className="img" data-bg-img="/img/slider/6.png" />
                  </div>
                </div>
              </li>
              <li className="prev2" data-index={7}>
                <div className="item">
                <img src="/img/1x1.jpg" alt="" />
                  <a
                    className="popup-youtube metaportal_fn_videobutton"
                    href="Req"
                    onClick={handleAnchorClick}
                  >
                    <img src="/svg/lock.svg" alt="" className="fn__svg" />
                  </a>
                  <div className="item_in">
                    <div className="img" data-bg-img="/img/slider/7.png" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="slider_nav">
            <a href="#" className="prev">
              <span className="circle" />
              <span className="icon">
                <img src="/svg/down.svg" alt="" className="fn__svg" />
              </span>
              <span className="circle" />
            </a>
            <a href="#" className="next">
              <span className="circle" />
              <span className="icon">
                <img src="/svg/down.svg" alt="" className="fn__svg" />
              </span>
              <span className="circle" />
            </a>
          </div>
        </div>
        {/* !Slider */}
        {/* Description */}
        <div className="fn_cs_desc">
          <h1>Learn how to unlock GATEs.</h1>
          <p>Tap a locked GATE to see the requirements for unlock.</p>
          <a
            href="https://warpcast.com/rskagy.eth/0x5acbbd99"
            className="metaportal_fn_button"
            target="_blank"
            rel="noreferrer"
          >
            <span>Provide Feedback</span>
          </a>
        </div>
        {/* !Description */}
      </div>
    </section>
  )
}

const CombinedComponent = () => {
  return (
    <>
      <HeroSlider />
      <UserDataFetcher />
    </>
  )
}

export default HeroSlider
import React, { Fragment, useEffect, useState } from "react"
import useClickOutside from "../../useClickOutside"
import UserDataFetcher from "/src/components/UserDataFetcher"

const ReqPopup_ = ({ close, videoID }) => {
  let domNode = useClickOutside(() => {
    close(false)
  })
  return (
    <Fragment>
      <div className="mfp-bg mfp-ready" onClick={() => close(false)}></div>
      <div
        className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
        tabIndex={-1}
        style={{ overflow: "hidden auto" }}
      >
        <div className="mfp-container mfp-s-ready mfp-iframe-holder">
          <div className="mfp-content mfp-req-content" ref={domNode}>
            <div>
              <button
                title="Close (Esc)"
                type="button"
                className="mfp-close"
                onClick={() => close()}
              >
                ×
              </button>
              <div className="mfp-reqs-out">
                <div className="mfp-reqs-in">
                  <UserDataFetcher />
                </div>
              </div>
            </div>
          </div>
          <div className="mfp-preloader">Loading...</div>
        </div>
      </div>
    </Fragment>
  )
}

const ReqPopup = () => {
  const [video, setVideo] = useState(false)
  const [videoValue, setVideoValue] = useState(null)
  useEffect(() => {
    setTimeout(() => {
      const a = document.querySelectorAll("a")
      a.forEach((a) => {
        if (a.href.includes("Req")) {
          a.addEventListener("click", (e) => {
            e.preventDefault()
            setVideoValue(a.href)
            setVideo(true)
          })
        }
      })
    }, 1500)
  }, [])
  return (
    <Fragment>
      {video && <ReqPopup_ close={() => setVideo(false)} videoID={videoValue} />}
    </Fragment>
  )
}

export default ReqPopup

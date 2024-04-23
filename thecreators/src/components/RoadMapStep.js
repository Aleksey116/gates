import { Swiper, SwiperSlide } from "swiper/react";
import { roadMapProps } from "../sliderProps";
const RoadMapSlider = () => {
  return (
    <section id="roadmap">
      <div className="container">
        <h3
          className="fn__maintitle big"
          data-text="RoadMap"
          data-align="center"
        >
          RoadMap
        </h3>
        <div className="fn_cs_roadmap">
          <div className="step_holder">
            <div className="step_in" />
          </div>
          <div className="slider_holder">
            <Swiper {...roadMapProps} className="swiper-container">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">MVP</span>
                    <div className="item_in">
                      <p className="date">April 21, 2024</p>
                      <h3 className="title">Deploy on Degen Week Launch</h3>
                      <p className="desc">
                      The Creators are honored to be among the invitees to Deploy on Degen Week, a a 1-week virtual program to accelerate developers building integrations, games, events, and new exciting experiences in the Degen ecosystem.

Unlock GATEs through puzzles, secrets, and community engagement, and gain access to alpha, experimental products, and collab drops with both well-known and newly discovered creators.  We hope you enjoy our MVP launch, and explore as much as you can to see what you can unlock.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">ALPHA</span>
                    <div className="item_in">
                      <p className="date">Q2 2024</p>
                      <h3 className="title">Gate Creator Program, Onchain Summer, Exclusive Drops</h3>
                      <p className="desc">
                      We are targeting midyear release for a massive expansion of our platform. We are currently working with developers and creators who we believe have contributed the most to Ethereum, Base, Degen, and all ONCHAIN CREATOR ecosystems, to curate exclusive Drops that your 👁️ & SOUL will unlock. Climb to the top of the leaderboard by finding as many Secrets as you can, proving your onchain hunting skills.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">BETA</span>
                    <div className="item_in">
                      <p className="date">Q4 2024</p>
                      <h3 className="title">Open GATE Ecosystem, Leaderboard Competitions, Airdrop Seasons Begin</h3>
                      <p className="desc">
                      The GATEs you see before you are the atomic unit of cross-metaverse experiences. Our platform expansion will continue with the Open GATE Ecosystem, where we provide tools and pluggable infrastructure for Creators to own a GATE and to build their own immersive experiences, all ONCHAIN. We will begin our Airdrop Seasons, with :EYE:, SOUL and GATES leaderboards. 
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RoadMapSlider;

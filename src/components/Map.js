import React from "react";
import map from "../assets/map.svg";

import "../../node_modules/photoswipe/dist/photoswipe.css";
import "../../node_modules/photoswipe/dist/default-skin/default-skin.css";
import PhotoSwipe from "photoswipe";
import PhotoSwipeUI_Default from "photoswipe/dist/photoswipe-ui-default";

export class Map extends React.Component {
  constructor(props) {
    super(props);
    this.openMapModal = this.openMapModal.bind(this);
  }

  openMapModal() {
    const pswpElement = document.querySelectorAll(".pswp")[0];
    const items = [{ src: `${map}`, w: 1110, h: 1320 }];
    const mapModal = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items);
    mapModal.init();
  }

  render() {
    return (
      <div>
        <div className="map-modal">
          <div className="pswp" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="pswp__bg"></div>
            <div className="pswp__scroll-wrap">
              <div className="pswp__container">
                <div className="pswp__item"></div>
                <div className="pswp__item"></div>
                <div className="pswp__item"></div>
              </div>
              {/* // Default (PhotoSwipeUI_Default) interface on top of sliding area.
          Can be changed. */}
              <div className="pswp__ui pswp__ui--hidden">
                <div className="pswp__top-bar">
                  <div className="pswp__counter"></div>
                  <button
                    className="pswp__button pswp__button--close"
                    title="Close (Esc)"
                  ></button>
                  <button
                    className="pswp__button pswp__button--zoom"
                    title="Zoom in/out"
                  ></button>
                  <div className="pswp__preloader">
                    <div className="pswp__preloader__icn">
                      <div className="pswp__preloader__cut">
                        <div className="pswp__preloader__donut"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                  <div className="pswp__share-tooltip"></div>
                </div>

                <button
                  className="pswp__button pswp__button--arrow--left"
                  title="Previous (arrow left)"
                ></button>

                <button
                  className="pswp__button pswp__button--arrow--right"
                  title="Next (arrow right)"
                ></button>

                <div className="pswp__caption">
                  <div className="pswp__caption__center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {this.props.animating && (
          <svg
            className="fab-arrow"
            width="221"
            height="242"
            viewBox="0 0 221 242"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M208.653 176.898L208.367 181.389L212.545 174.639L208.653 176.898ZM186.244 138.288L190.112 135.988L182.352 140.547L186.244 138.288ZM209.171 176.839L212.291 180.082L214.863 177.607L213.039 174.538L209.171 176.839ZM212.545 174.639L190.136 136.029L182.352 140.547L204.761 179.157L212.545 174.639ZM182.376 140.588L205.303 179.139L213.039 174.538L190.112 135.988L182.376 140.588ZM206.051 173.596L172.735 205.646L178.975 212.132L212.291 180.082L206.051 173.596ZM1.54402 64.1133C31.1096 141.187 120.89 175.828 208.367 181.389L208.938 172.407C122.416 166.907 37.5389 132.819 9.94698 60.8899L1.54402 64.1133Z"
              fill="#CD0000"
            />
          </svg>
        )}

        <div
          onClick={this.openMapModal}
          className={!this.props.animating ? "fab" : "fab animating"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
        </div>
      </div>
    );
  }
}

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
            width="166"
            height="166"
            viewBox="0 0 166 166"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M159 166C162.866 166 166 162.866 166 159V96C166 92.134 162.866 89 159 89C155.134 89 152 92.134 152 96V152H96C92.134 152 89 155.134 89 159C89 162.866 92.134 166 96 166H159ZM0.0502526 9.94975L154.05 163.95L163.95 154.05L9.94975 0.0502526L0.0502526 9.94975Z"
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

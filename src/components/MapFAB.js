import React from "react";

export class MapFAB extends React.Component {
  render() {
    return (
      <div>
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
          onClick={this.props.toggleMap}
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

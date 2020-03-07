import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-content">
        <footer className="footer-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                <ul className="ul-list-items">
                  <li className="li-list-items">
                    <h5 className="title-widget">giới thiệu</h5>
                    <ul className="list-items">
                      <li>
                        <a >
                          <i className="fa fa-angle-double-right"></i>về chúng
                          tôi
                        </a>
                      </li>
                      <li>
                        <a >
                          <i className="fa fa-angle-double-right"></i>Thỏa thuận
                          sử dụng
                        </a>
                      </li>
                      <li>
                        <a >
                          <i className="fa fa-angle-double-right"></i>chính sách
                          bảo mật
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                <ul className="ul-list-items">
                  <li className="li-list-items">
                    <h5 className="title-widget">góc điện ảnh</h5>
                    <ul className="list-items">
                      <li>
                        <a >
                          <i className="fa fa-angle-double-right"></i>thể loại phim
                        </a>
                      </li>
                      <li>
                        <a >
                          <i className="fa fa-angle-double-right"></i>bình luận phim
                        </a>
                      </li>
                      <li>
                        <a >
                          <i className="fa fa-angle-double-right"></i>blog điện ảnh
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                <ul className="ul-list-items">
                  <li className="li-list-items">
                    <h5 className="title-widget">hỗ trợ</h5>
                    <ul className="list-items">
                      <li>
                        <a >
                          <i className="fa fa-angle-double-right"></i>góp ý
                        </a>
                      </li>
                      <li>
                        <a >
                          <i className="fa fa-angle-double-right"></i>sale &#38; services
                        </a>
                      </li>
                      <li>
                        <a >
                          <i className="fa fa-angle-double-right"></i> rạp / giá vé
                          bảo mật
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                <ul className="ul-list-items">
                  <li className="li-list-items">
                    <h5 className="title-widget">kết nối cinema</h5>
                    <ul className="list-items">
                      <li>
                        <a ><img src="https://img.icons8.com/color/48/000000/facebook-circled.png"/> </a>
                        <a ><img src="https://img.icons8.com/bubbles/50/000000/youtube.png"/></a>
                        <a ><img src="https://img.icons8.com/cute-clipart/64/000000/instagram-new.png"/></a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
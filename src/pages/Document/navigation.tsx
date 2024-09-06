import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("");
  // const navigate = useNavigate();

  // const user_id = localStorage.getItem("user_id");
  // const handleBack = () => {
  //   const componentType = user_id ? "user" : "admin";
  //   setTimeout(() => {
  //     navigate("/dashboard", { state: { componentType } });
  //   }, 3000);
  // };

  const handleClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <nav className="navigation">
      {/* <button className="cyber-button" onClick={handleBack}>
        Quay lại trang
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button> */}
      <ul>
        <li>
          <Link
            to="section1"
            smooth={true}
            duration={500}
            onClick={() => handleClick("section1")}
            className={activeSection === "section1" ? "active" : ""}
          >
            I. Đăng Ký Và Đăng Nhập
          </Link>
          <ul>
            <li>
              <Link
                to="section1-1"
                smooth={true}
                duration={500}
                onClick={() => handleClick("section1-1")}
                className={activeSection === "section1-1" ? "active" : ""}
              >
                1. Đăng nhập
              </Link>
            </li>
            <li>
              <Link
                to="section1-2"
                smooth={true}
                duration={500}
                onClick={() => handleClick("section1-2")}
                className={activeSection === "section1-2" ? "active" : ""}
              >
                2. Đăng ký
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link
            to="section2"
            smooth={true}
            duration={500}
            onClick={() => handleClick("section2")}
            className={activeSection === "section2" ? "active" : ""}
          >
            II. Đổi mật khẩu và quên mật khẩu
          </Link>
          <ul>
            <li>
              <Link
                to="section2-1"
                smooth={true}
                duration={500}
                onClick={() => handleClick("section2-1")}
                className={activeSection === "section2-1" ? "active" : ""}
              >
                1. Đổi mật khẩu
              </Link>
            </li>
            <li>
              <Link
                to="section2-2"
                smooth={true}
                duration={500}
                onClick={() => handleClick("section2-2")}
                className={activeSection === "section2-2" ? "active" : ""}
              >
                2. Quên mật khẩu
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link
            to="section3"
            smooth={true}
            duration={500}
            onClick={() => handleClick("section3")}
            className={activeSection === "section3" ? "active" : ""}
          >
            III. Giải Nén Và Cài Đặt Môi Trường
          </Link>
          <ul>
            <li>
              <Link
                to="section3-1"
                smooth={true}
                duration={500}
                onClick={() => handleClick("section3-1")}
                className={activeSection === "section3-1" ? "active" : ""}
              >
                1. Giải nén file phần mềm đã được cung cấp
              </Link>
            </li>
            <li>
              <Link
                to="section3-2"
                smooth={true}
                duration={500}
                onClick={() => handleClick("section3-2")}
                className={activeSection === "section3-2" ? "active" : ""}
              >
                2. Cài đặt môi trường
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link
            to="section4"
            smooth={true}
            duration={500}
            onClick={() => handleClick("section4")}
            className={activeSection === "section4" ? "active" : ""}
          >
            IV. Khởi Động Phần Mềm
          </Link>
          <ul>
            <li>
              <Link
                to="section4-1"
                smooth={true}
                duration={500}
                onClick={() => handleClick("section4-1")}
                className={activeSection === "section4-1" ? "active" : ""}
              >
                1. Cài đặt phần mềm
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link
            to="section5"
            smooth={true}
            duration={500}
            onClick={() => handleClick("section5")}
            className={activeSection === "section5" ? "active" : ""}
          >
            V. Đăng Nhập Vào Phần Mềm
          </Link>
          <ul>
            <li>
              <Link
                to="section5-1"
                smooth={true}
                duration={500}
                onClick={() => handleClick("section5-1")}
                className={activeSection === "section5-1" ? "active" : ""}
              >
                1. Xác thực tài khoản
              </Link>
            </li>
            <li>
              <Link
                to="section5-2"
                smooth={true}
                duration={500}
                onClick={() => handleClick("section5-2")}
                className={activeSection === "section5-2" ? "active" : ""}
              >
                2. Đăng nhập tài khoản
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link
            to="section6"
            smooth={true}
            duration={500}
            onClick={() => handleClick("section6")}
            className={activeSection === "section6" ? "active" : ""}
          >
            VI. Thiết Lập Cấu Hình Tương Tác
          </Link>
          <ul>
            <li>
              <Link
                to="section6-1"
                smooth={true}
                duration={500}
                onClick={() => handleClick("section6-1")}
                className={activeSection === "section6-1" ? "active" : ""}
              >
                1. Cấu hình LD Player
              </Link>
            </li>
            <li>
              <Link
                to="section6-2"
                smooth={true}
                duration={500}
                onClick={() => handleClick("section6-2")}
                className={activeSection === "section6-2" ? "active" : ""}
              >
                2. Cài đặt Facebook cho LD Player
              </Link>
            </li>
            <li>
              <Link
                to="section6-3"
                smooth={true}
                duration={500}
                onClick={() => handleClick("section6-3")}
                className={activeSection === "section6-3" ? "active" : ""}
              >
                3. Nhập tài khoản cho phần mềm
              </Link>
            </li>
            <li>
              <Link
                to="section6-4"
                smooth={true}
                duration={500}
                onClick={() => handleClick("section6-4")}
                className={activeSection === "section6-4" ? "active" : ""}
              >
                4. Tạo Folder ảnh cho tài khoản
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link
            to="section7"
            smooth={true}
            duration={500}
            onClick={() => handleClick("section7")}
            className={activeSection === "section7" ? "active" : ""}
          >
            VII. Các Chức Năng
          </Link>
          <ul>
            <li>
              <Link
                to="section7-1"
                smooth={true}
                duration={500}
                onClick={() => handleClick("section7-1")}
                className={activeSection === "section7-1" ? "active" : ""}
              >
                1. Tương tác cá nhân
              </Link>
            </li>
            <li>
              <Link
                to="section7-2"
                smooth={true}
                duration={500}
                onClick={() => handleClick("section7-2")}
                className={activeSection === "section7-2" ? "active" : ""}
              >
                2. Tương tác bài viết
              </Link>
            </li>
            <li>
              <Link
                to="section7-3"
                smooth={true}
                duration={500}
                onClick={() => handleClick("section7-3")}
                className={activeSection === "section7-3" ? "active" : ""}
              >
                3. Chức năng bạn bè
              </Link>
            </li>
            <li>
              <Link
                to="section7-4"
                smooth={true}
                duration={500}
                onClick={() => handleClick("section7-4")}
                className={activeSection === "section7-4" ? "active" : ""}
              >
                4. Chức năng Seeding
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link
            to="section8"
            smooth={true}
            duration={500}
            onClick={() => handleClick("section8")}
            className={activeSection === "section8" ? "active" : ""}
          >
            VIII. Chạy Kịch Bản Tương Tác Trên Phần Mềm
          </Link>
          <ul>
            <li>
              <Link
                to="section8-1"
                smooth={true}
                duration={500}
                onClick={() => handleClick("section8-1")}
                className={activeSection === "section8-1" ? "active" : ""}
              >
                1. Tạo kịch bản và thêm các hành động
              </Link>
              <ul>
                <li>
                  <Link
                    to="section8-1-1"
                    smooth={true}
                    duration={500}
                    onClick={() => handleClick("section8-1-1")}
                    className={activeSection === "section8-1-1" ? "active" : ""}
                  >
                    1.1. Tạo kịch bản
                  </Link>
                </li>
                <li>
                  <Link
                    to="section8-1-2"
                    smooth={true}
                    duration={500}
                    onClick={() => handleClick("section8-1-2")}
                    className={activeSection === "section8-1-2" ? "active" : ""}
                  >
                    1.2. Thêm hành động cho kịch bản
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="section8-2"
                smooth={true}
                duration={500}
                onClick={() => handleClick("section8-2")}
                className={activeSection === "section8-2" ? "active" : ""}
              >
                2. Chạy kịch bản
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link
            to="section9"
            smooth={true}
            duration={500}
            onClick={() => handleClick("section9")}
            className={activeSection === "section9" ? "active" : ""}
          >
            IX. Xuất Báo Cáo Trên Phần Mềm
          </Link>
          <ul>
            <li>
              <Link
                to="section9-1"
                smooth={true}
                duration={500}
                onClick={() => handleClick("section9-1")}
                className={activeSection === "section9-1" ? "active" : ""}
              >
                1. Báo cáo
              </Link>
            </li>
            <li>
              <Link
                to="section9-2"
                smooth={true}
                duration={500}
                onClick={() => handleClick("section9-2")}
                className={activeSection === "section9-2" ? "active" : ""}
              >
                2. Báo cáo tương tác
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

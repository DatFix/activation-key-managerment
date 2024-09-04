import "./document.css";
import { Link } from "react-router-dom";
import Navigation from './navigation'
import Image1 from "../../assets/image_doc/image1.png";
import Image2 from "../../assets/image_doc/image2.png";
import Image3 from "../../assets/image_doc/image3.png";
import Image4 from "../../assets/image_doc/image4.png";
import Image5 from "../../assets/image_doc/image5.png";
import Image6 from "../../assets/image_doc/image6.png";
import Image7 from "../../assets/image_doc/image7.png";
import Image8 from "../../assets/image_doc/image8.png";
import Image9 from "../../assets/image_doc/image9.png";
import Image10 from "../../assets/image_doc/image10.png";
import Image11 from "../../assets/image_doc/image11.png";
import Image12 from "../../assets/image_doc/image12.png";
import Image13 from "../../assets/image_doc/image13.png";
import Image14 from "../../assets/image_doc/image14.png";
import Image15 from "../../assets/image_doc/image15.png";
import Image16 from "../../assets/image_doc/image16.png";
import Image17 from "../../assets/image_doc/image17.png";
import Image18 from "../../assets/image_doc/image18.png";
import Image19 from "../../assets/image_doc/image19.png";
import Image20 from "../../assets/image_doc/image20.png";
import Image21 from "../../assets/image_doc/image21.png";
import Image22 from "../../assets/image_doc/image22.png";
import Image23 from "../../assets/image_doc/image23.png";
import Image24 from "../../assets/image_doc/image24.png";
import Image25 from "../../assets/image_doc/image25.png";
import Image26 from "../../assets/image_doc/image26.png";
import Image27 from "../../assets/image_doc/image27.png";
import Image28 from "../../assets/image_doc/image28.png";
import Image29 from "../../assets/image_doc/image29.png";
import Image30 from "../../assets/image_doc/image30.png";
import Image31 from "../../assets/image_doc/image31.png";
import Image32 from "../../assets/image_doc/image32.png";
import Image33 from "../../assets/image_doc/image33.png";
import Image34 from "../../assets/image_doc/image34.png";
import Image35 from "../../assets/image_doc/image35.png";
import Image36 from "../../assets/image_doc/image36.png";
import Image37 from "../../assets/image_doc/image37.png";
import Image38 from "../../assets/image_doc/image38.png";
import Image39 from "../../assets/image_doc/image39.png";
import Image40 from "../../assets/image_doc/image40.png";
import Image41 from "../../assets/image_doc/image41.png";
import Image42 from "../../assets/image_doc/image42.png";
import Image43 from "../../assets/image_doc/image43.png";
import Image44 from "../../assets/image_doc/image44.png";
import Image45 from "../../assets/image_doc/image45.png";
import Image46 from "../../assets/image_doc/image46.png";
import Image47 from "../../assets/image_doc/image47.png";
import Image48 from "../../assets/image_doc/image48.png";
import Image49 from "../../assets/image_doc/image49.png";
import Image50 from "../../assets/image_doc/image50.png";
import Image51 from "../../assets/image_doc/image51.png";
import Image52 from "../../assets/image_doc/image52.png";
import Image53 from "../../assets/image_doc/image53.png";
import Image54 from "../../assets/image_doc/image54.png";
import Image55 from "../../assets/image_doc/image55.png";
import Image56 from "../../assets/image_doc/image56.png";
import Image57 from "../../assets/image_doc/image57.png";
import Image58 from "../../assets/image_doc/image58.png";
import Image59 from "../../assets/image_doc/image59.png";



const Document = () => {
  return (
    <div className="document-container">
        <div>
        <Navigation />
        </div>
        <div className="document">
        <h1>HƯỚNG DẪN SỬ DỤNG PHẦN MỀM TỰ ĐỘNG HOÁ MẠNG XÃ HỘI</h1>
        <section id="section1">
          <h2>I. Đăng Ký Tài Khoản Cho Phần Mềm</h2>

          <h3 id="section1-1">1. Truy cập đường dẫn</h3>
          <p>
            - Truy cập đường link:{" "}
            <Link
              to="https://sm2a.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://sm2a.vercel.app/
            </Link>{" "}
            để vào trang đăng nhập hoặc đăng ký tài khoản
          </p>

          <img src={Image1} alt="Trang đăng nhập" />
          <h5>Hình 1 Trang đăng nhập</h5>

          <img src={Image2} alt="Trang đăng ký" />
          <h5>Hình 2 Trang đăng ký</h5>

          <h3 id="section1-2">2. Đăng ký/ đăng nhập tài khoản</h3>
          <p>
            - Đăng nhập tài khoản nếu đã có hoặc đăng ký tài khoản nếu chưa có
            để hướng đến trang Người dùng. Nếu đăng ký lần đầu tiên và đăng nhập
            thì mặc định tài khoản sẽ chưa được kích hoạt. Người dùng có thể lấy
            được mã kích hoạt sau khi đăng nhập thành công hoặc lấy mã từ địa
            chỉ email đã đăng ký tài khoản.
          </p>

          <img src={Image3} alt="Trang người dùng" />
          <h5>Hình 3 Trang người dùng</h5>
        </section>

        <section id="section2">
          <h2>II. Giải Nén Và Cài Đặt Môi Trường</h2>

          <h3 id="section2-1">1. Giải nén file phần mềm đã được cung cấp</h3>
          <img src={Image4} alt="Giải nén phần mềm" />
          <h5>Hình 4 Giải nén phần mềm</h5>

          <h3 id="section2-2">2. Cài đặt môi trường</h3>
          <p>
          -	Sau khi giải nén xong phần mềm vào thư mục đã giải nén và mở thư mục SETUP_ENV.
          </p>

          <img src={Image5} alt="Chạy file setup để cài đặt môi trường" />

          <p>- Chạy file SM2A-SETUP-ENV1.exe </p>
          <img src={Image6} alt="Chạy file setup để cài đặt môi trường" />
          <h5>Hình 6 Chạy file SM2A-SETUP-ENV1.exe</h5>

          <p>- Chạy tiếp file SM2A-SETUP-ENV2.exe  </p>
          <img src={Image7} alt="Chạy tiếp file SM2A-SETUP-ENV2.exe " />
          <h5>Hình 7 Chạy tiếp file SM2A-SETUP-ENV2.exe</h5>

          <p>- Cài đặt Android Studio:  </p>
          <img src={Image8} alt="Cài đặt Android Studio" />
          <h5>Hình 8 Cài đặt Android Studio</h5>
        </section>

        <section id="section3">
          <h2>III. Khởi Động Phần Mềm</h2>

          <h3 id="section3-1">1. Cài đặt phần mềm</h3>
          <p>
            - Sau khi cài đặt xong môi trường, tiến hành mở phần mềm{" "}
            <b style={{ color: "aquamarine" }}>SM2A</b>. Người dùng nên cài đặt phần mềm theo đường dẫn mặc định bên dưới.
          </p>

          <img src={Image9} alt="Cài đặt phần mềm" />
          <h5>Hình 9 Cài đặt phần mềm</h5>

          <p>- Tạo shortcut trên desktop (nếu muốn)</p>

          <img src={Image10} alt="Tạo shortcut trên desktop" />
          <h5>Hình 10 Tạo shortcut trên desktop</h5>

          <p>- Nhấn "Install" để cài đặt phần mềm</p>

          <img src={Image11} alt="Nhấn Install" />
          <h5>Hình 11 Nhấn Install để cài đặt phần mềm</h5>

          <p>- Nhấn "Finish" để hoàn tất quá trình cài đặt phần mềm</p>

          <img src={Image12} alt="Nhấn Finish để hoàn tất cài đặt" />
          <h5>Hình 12 Nhấn Finish để hoàn tất cài đặt phần mềm</h5>
        </section>

        <section id="section4">
          <h2>IV. Đăng Nhập Vào Phần Mềm</h2>

          <h3 id="section4-1">1. Xác thực tài khoản</h3>
          <p>
            - Nếu người dùng đăng nhập lần đầu tiên thì phần mềm sẽ yêu cầu nhập
            vào mã kích hoạt để kích hoạt phần mềm. Người dùng phải nhập vào
            email đã đăng ký tài khoản và mã kích hoạt được cung cấp trên trang
            người dùng hoặc lấy mã từ email đã đăng ký tài khoản.
          </p>

          <img src={Image13} alt="Kích hoạt phần mềm" />
          <h5>Hình 13 Kích hoạt phần mềm</h5>

          <h3 id="section4-2">2. Đăng nhập tài khoản</h3>
          <p>
            - Sau khi khích hoạt thành công sẽ được chuyển hướng đến trang đăng
            nhập, tại đây người dùng phải nhập vào tài khoản đã đăng ký. *Lưu ý:
            1 tài khoản chỉ được sử dụng trên 1 thiết bị.
          </p>

          <img src={Image14} alt="Đăng nhập tài khoản" />
          <h5>Hình 14 Đăng nhập tài khoản</h5>

          <img src={Image15} alt="Giao diện phần mềm" />
          <h5>Hình 15 Giao diện phần mềm</h5>
        </section>

        <section id="section5">
          <h2>V. Thiết Lập Cấu Hình Tương Tác</h2>

          <h3 id="section5-1">1. Cấu hình LD Player</h3>
          <p>- Mở LDMultiPlayer và đổi tên thiết bị thành Root</p>

          <img src={Image16} alt="Đổi tên thiết bị LDPlayer" />
          <h5>Hình 16 Đổi tên thiết bị LDPlayer</h5>

          <p>- Mở LDPlayer để cấu hình máy</p>

          <img src={Image17} alt="Cấu hình LDPlayer" />
          <h5>Hình 17 Cấu hình LDPlayer</h5>

          <img src={Image18} alt="Cấu hình LDPlayer" />
          <h5>Hình 18 Cấu hình LDPlayer</h5>

          <h3 id="section5-2">2. Cài đặt Facebook cho LD Player</h3>
          <p>
            - Vào System App hoặc thanh "Search Games" để tải và cài đặt ứng
            dụng Facebook
          </p>

          <img src={Image19} alt="Cài đặt Facebook" />
          <h5>Hình 19 Cài đặt Facebook</h5>

          <img src={Image20} alt="Cài đặt Facebook" />
          <h5>Hình 20 Cài đặt Facebook</h5>

          <h3 id="section5-3">3. Nhập tài khoản cho phần mềm</h3>
          <p>
            - Nhấn vào mục “Nhập tài khoản” ở phần mềm để có thể nhập tự động số lượng lớn tài khoản bằng cách nhấn vào “Nhập File” theo định dạng mà người dùng mong muốn, sau đó nhấn nút nhập dữ liệu
          </p>

          <img src={Image21} alt="Nhập tài khoản cho phần mềm" />
          <h5>Hình 21 Nhập tài khoản cho phần mềm</h5>
        </section>

        <section id="section6">
          <h2>VI. Các Chức Năng</h2>

          <h3 id="section6-1">Tương tác trong phần mềm được chia thành 4 loại chính:</h3>
          <h4>Tương tác cá nhân</h4>
          <h4>Tương tác bài viết</h4>
          <h4>Chức năng bạn bè</h4>
          <h4>Chức năng Seeding</h4>

          <h3 id="section6-1">1. Tương tác cá nhân</h3>
          <h4>Xem Reels:</h4>
          <p>
            - Thời gian xem: thời gian xem và tương tác video đó ngẫu nhiên
            trong khoảng mà người dùng nhập vào. Vd: nhập vào 5 – 7s thì thời
            gian xem ngẫu nhiên có thể là 1 – 5s, 1 – 6s, 1 – 7s ngẫu nhiên trên
            1 bài viết
          </p>
          <p>
            - Số lần cuộn: là số lần cuộn video. Vd: chọn số lần cuộn là 3 thì
            video reels sẽ được cuộn 3 lần
          </p>
          <p>
            - Tỉ lệ: là tỉ lệ bày tỏ cảm xúc (like, love, care,…) ngẫu nhiên.
          </p>
          <p>
            - Bày tỏ cảm xúc: người dùng có thể lựa chọn cảm xúc muốn được thả
            vào reels
          </p>
          <p>
            - Comment: nếu người dùng chọn tính năng này thì cần điền vào form
            phía dưới để có thể comment vào video reels
          </p>

          <img src={Image22} alt="Tính năng xem Reels" />
          <h5>Hình 22 Tính năng xem Reels</h5>

          <h4>Xem Story:</h4>
          <p>
            - Thời gian xem: thời gian xem và tương tác Story đó ngẫu nhiên
            trong khoảng mà người dùng nhập vào. Vd: nhập vào 5 – 7s thì thời
            gian xem ngẫu nhiên có thể là 1 – 5s, 1 – 6s, 1 – 7s ngẫu nhiên trên
            1 bài viết
          </p>
          <p>
            - Số lần cuộn: là số lần cuộn video. Vd: chọn số lần cuộn là 3 thì
            story sẽ được lướt 3 lần
          </p>
          <p>
            - Tỉ lệ: là tỉ lệ bày tỏ cảm xúc (like, love, care,…) ngẫu nhiên.
          </p>
          <p>
            - Bày tỏ cảm xúc: người dùng có thể lựa chọn cảm xúc muốn được thả
            vào story
          </p>
          <p>
            - Comment: nếu người dùng chọn tính năng này thì cần điền vào form
            phía dưới để có thể comment vào story.
          </p>

          <img src={Image23} alt="Tính năng xem Story" />
          <h5>Hình 23 Tính năng xem Story</h5>

          <h4>Xem Watch:</h4>
          <p>
            - Thời gian xem: thời gian xem và tương tác video watch đó ngẫu
            nhiên trong khoảng mà người dùng nhập vào. Vd: nhập vào 5 – 7s thì
            thời gian xem ngẫu nhiên có thể là 1 – 5s, 1 – 6s, 1 – 7s ngẫu nhiên
            trên 1 bài viết
          </p>
          <p>
            - Số lần cuộn: là số lần cuộn video. Vd: chọn số lần cuộn là 3 thì
            video watch sẽ được cuôn 3 lần
          </p>
          <p>
            - Tỉ lệ: là tỉ lệ bày tỏ cảm xúc (like, love, care,…) ngẫu nhiên.
          </p>
          <p>
            - Bày tỏ cảm xúc: người dùng có thể lựa chọn cảm xúc muốn được thả
            vào watch
          </p>
          <p>
            - Comment: nếu người dùng chọn tính năng này thì cần điền vào form
            phía dưới để có thể comment vào video watch.
          </p>

          <img src={Image24} alt="Tính năng xem Watch" />
          <h5>Hình 24 Tính năng xem Watch</h5>

          <h4>Đăng Story:</h4>
          <p>
            - Lưu ý: ở các chức năng có sử dụng hình ảnh, người dùng phải tạo
            thư mục tên Girl với đường dẫn như sau:{" "}
            <b style={{ color: "aquamarine" }}>
              \Documents\XuanZhi9\Pictures\Girl
            </b>{" "}
            để có thể đăng được ảnh.
          </p>
          <p>- Ở mục Folder nhấn </p>
          <img src={Image25} alt="Tính năng đăng Story" />
          <h5>Hình 25 Tính năng đăng Story</h5>

          <h4>Đăng Status:</h4>
          <p>
            - Lưu ý: ở các chức năng có sử dụng hình ảnh, người dùng phải tạo
            thư mục tên Girl với đường dẫn như sau:{" "}
            <b style={{ color: "aquamarine" }}>
              \Documents\XuanZhi9\Pictures\Girl
            </b>{" "}
            để có thể đăng được ảnh.
          </p>
          <p>
            - Ở mục Folder nhấn vào "Browse" để chọn thư mục chứa hình ảnh muốn
            đăng.
          </p>
          <p>- Ở mục Folder nhấn vào và chọn folder Girl đã tạo</p>
          <p>- Nội dung: là nội dung người dùng muốn đăng trên Status</p>
          <p>- Số lượng ảnh: là số ảnh người dùng muốn đăng trên Status</p>

          <img src={Image26} alt="Tính năng đăng Status" />
          <h5>Hình 26 Tính năng đăng Status</h5>

          <h4>Đọc thông báo:</h4>
          <p>- Số lượng: là số lượng thông báo người dùng muốn đọc.</p>

          <img src={Image27} alt="Tính năng đăng Reels" />
          <h5>Hình 27 Đọc thông báo</h5>

          <h3>2. Tương tác bài viết</h3>

          <h4>Tương tác bài viết nhóm:</h4>
          <p>
            - Lưu ý: Tài khoản chạy tương tác phải đảm bảo đã tham gia vào group
            được chỉ định chạy tương tác.
          </p>
          <p>
            - Số bài viết: là số lượng bài viết người dùng muốn tương tác trong
            nhóm.
          </p>
          <p>
            - Thời gian xem: thời gian xem và tương tác bài viết đó ngẫu nhiên
            trong khoảng mà người dùng nhập vào. Ví dụ: nhập vào 5 – 7s thì thời
            gian xem ngẫu nhiên có thể là 1 – 5s, 1 – 6s, 1 – 7s ngẫu nhiên trên
            1 bài viết.
          </p>
          <p>
            - Tỉ lệ: là tỉ lệ bày tỏ cảm xúc (like, love, care,…) ngẫu nhiên.
          </p>
          <p>
            - Bày tỏ cảm xúc: người dùng có thể lựa chọn cảm xúc muốn được thả
            vào bài viết nhóm.
          </p>
          <p>
            - Comment: nếu người dùng chọn tính năng này thì cần điền vào form
            phía dưới để có thể comment vào bài viết.
          </p>
          <p>
            - Share Wall: nếu chọn tính năng này bài viết người dùng tương tác
            sẽ được chia sẻ về tường.
          </p>

          <img src={Image28} alt="Tính năng tương tác bài viết nhóm" />
          <h5>Hình 28 Tính năng tương tác bài viết nhóm</h5>

          <h4>Tương tác bài viết bạn bè:</h4>
          <p>
            - Số bài viết: là số lượng bài viết người dùng muốn tương tác bài
            viết bạn bè.
          </p>
          <p>- Thời gian xem: là thời gian xem và tương tác 1 bài viết.</p>
          <p>
            - Tỉ lệ: là tỉ lệ bày tỏ cảm xúc (like, love, care,…) ngẫu nhiên.
          </p>
          <p>
            - Bày tỏ cảm xúc: người dùng có thể lựa chọn cảm xúc muốn được thả
            vào bài viết bạn bè.
          </p>
          <p>
            - Comment: nếu người dùng chọn tính năng này thì cần điền vào form
            phía dưới để có thể comment vào bài viết.
          </p>
          <p>
            - Share Wall: nếu chọn tính năng này bài viết người dùng tương tác
            sẽ được chia sẻ về tường.
          </p>

          <img src={Image29} alt="Tính năng tương tác bài viết bạn bè" />
          <h5>Hình 29 Tính năng tương tác bài viết bạn bè</h5>

          <h4>Tương tác bài viết Fanpage:</h4>
          <p>
            - Link: là đường dẫn đến page để tương tác các bài viết trong đó. Ví
            dụ:{" "}
            <Link to="https://www.facebook.com/profile.php?id=100071568535116">
              https://www.facebook.com/profile.php?id=100071568535116
            </Link>
          </p>
          <p>
            - Lưu ý: link đường dẫn đến page phải chứa ID để tránh việc không
            tương tác được.
          </p>
          <p>
            - Số bài viết: là số lượng bài viết người dùng muốn tương tác trên
            page.
          </p>
          <p>
            - Thời gian xem: thời gian xem và tương tác bài viết đó ngẫu nhiên
            trong khoảng mà người dùng nhập vào. Ví dụ: nhập vào 5 – 7s thì thời
            gian xem ngẫu nhiên có thể là 1 – 5s, 1 – 6s, 1 – 7s ngẫu nhiên trên
            1 bài viết.
          </p>
          <p>
            - Tỉ lệ: là tỉ lệ bày tỏ cảm xúc (like, love, care,…) ngẫu nhiên.
          </p>
          <p>
            - Bày tỏ cảm xúc: người dùng có thể lựa chọn cảm xúc muốn được thả
            vào bài viết trên page.
          </p>
          <p>
            - Comment: nếu người dùng chọn tính năng này thì cần điền vào form
            phía dưới để có thể comment vào bài viết.
          </p>
          <p>
            - Share Wall: nếu chọn tính năng này bài viết người dùng tương tác
            sẽ được chia sẻ về tường.
          </p>

          <img src={Image30} alt="Tương tác bài viết trên fanpage" />
          <h5>Hình 30 Tương tác bài viết trên fanpage</h5>

          <h4>Tương tác bài viết trên Newsfeed:</h4>
          <p>
            - Số bài viết: là số lượng bài viết người dùng muốn tương tác trên
            Newsfeed.
          </p>
          <p>- Thời gian xem: là thời gian xem và tương tác 1 bài viết.</p>
          <p>
            - Tỉ lệ: là tỉ lệ bày tỏ cảm xúc (like, love, care,…) ngẫu nhiên.
          </p>
          <p>
            - Bày tỏ cảm xúc: người dùng có thể lựa chọn cảm xúc muốn được thả
            vào bài viết trên Newsfeed.
          </p>
          <p>
            - Comment: nếu người dùng chọn tính năng này thì cần điền vào form
            phía dưới để có thể comment vào bài viết.
          </p>
          <p>
            - Share Wall: nếu chọn tính năng này bài viết người dùng tương tác
            sẽ được chia sẻ về tường.
          </p>

          <img src={Image31} alt="Tính năng tương tác bài viết trên Newsfeed" />
          <h5>Hình 31 Tính năng tương tác bài viết trên Newsfeed</h5>

          <h3>3. Chức năng bạn bè</h3>

          <h4>Huỷ kết bạn:</h4>
          <p>
            - Số lượng bạn: là số lượng người dùng muốn huỷ kết bạn trong danh
            sách UID.
          </p>
          <p>
            - Thời gian chờ: là khoảng thời gian giữa hai lần huỷ kết bạn với
            nhau.
          </p>
          <p>- Danh sách UID: là danh sách người dùng muốn huỷ kết bạn.</p>

          <img src={Image32} alt="Chức năng huỷ kết bạn" />
          <h5>Hình 32 Chức năng huỷ kết bạn</h5>

          <h4>Xác nhận bạn bè:</h4>
          <p>
            - Số lượng bạn: là số lượng bạn bè người dùng muốn chấp nhận lời mời
            kết bạn.
          </p>

          <img src={Image33} alt="Tính năng xác nhận kết bạn" />
          <h5>Hình 33 Tính năng xác nhận kết bạn</h5>

          <h4>Kết bạn theo danh sách ID:</h4>
          <p>
            - Danh sách ID: là danh sách các UID (tài khoản Facebook) người dùng
            muốn kết bạn.
          </p>

          <img src={Image34} alt="Tính năng kết bạn theo danh sách ID" />
          <h5>Hình 34 Tính năng kết bạn theo danh sách ID</h5>

          <h4>Kết bạn theo từ khoá:</h4>
          <p>- Số lượng bạn: là số lượng người dùng muốn kết bạn.</p>
          <p>
            - Từ khoá: là tên của tài khoản Facebook mà người dùng muốn kết bạn.
            vd: Hoàng Kim
          </p>

          <img src={Image35} alt="Tính năng kết bạn theo từ khoá" />
          <h5>Hình 35 Tính năng kết bạn theo từ khoá</h5>

          <h4>Kết bạn thành viên trong nhóm:</h4>
          <p>
            - Lưu ý: Tài khoản chạy tương tác phải đảm bảo đã tham gia vào group
            được chỉ định chạy tương tác.
          </p>
          <p>
            - Số lượng bạn: là số lượng tài khoản người dùng muốn kết bạn trong
            nhóm theo đường dẫn.
          </p>
          <p>- Link: là đường dẫn mà người dùng muốn kết bạn trong nhóm đấy.</p>
          <p>
            - Lưu ý: link nhóm cần phải có id để tránh các trường hợp không
            tương tác được.
          </p>

          <img
            src={Image36}
            alt="Tính năng kết bạn với thành viên trong nhóm"
          />
          <h5>Hình 36 Tính năng kết bạn với thành viên trong nhóm</h5>

          <h4>Kết bạn với bạn bè của bạn bè của bạn:</h4>
          <p>- Số lượng bạn: là số lượng bạn bè mà người dùng muốn kết bạn.</p>
          <p>
            - Link: là đường dẫn mà người dùng muốn cho tài khoản tương tác kết
            bạn với các tài khoản trong link tài khoản nhập vào.
          </p>
          <p>
            - Lưu ý: link tài khoản cần phải chứa ID để tránh các trường hợp
            tương tác không thành công.
          </p>

          <img
            src={Image37}
            alt="Tính năng kết bạn với bạn bè của bạn bè của bạn"
          />
          <h5>Hình 37 Tính năng kết bạn với bạn bè của bạn bè của bạn</h5>

          <h4>Tham gia nhóm theo từ khoá:</h4>
          <p>- Số lượng: là số lượng nhóm mà người dùng muốn tham gia.</p>
          <p>- Từ khoá: từ khoá nhóm mà người dùng muốn tham gia vào.</p>

          <img src={Image38} alt="Tính năng tham gia nhóm theo từ khoá" />
          <h5>Hình 38 Tính năng tham gia nhóm theo từ khoá</h5>

          <h4>Tham gia nhóm theo gợi ý:</h4>
          <p>
            - Số lượng nhóm: là số lượng nhóm mà người dùng muốn tham gia vào
            theo đề xuất, gọi ý.
          </p>

          <img src={Image39} alt="Tính năng tham gia nhóm theo gợi ý" />
          <h5>Hình 39 Tính năng tham gia nhóm theo gợi ý</h5>

          <h3>4. Chức năng Seeding</h3>

          <h4>4.1. Chia sẻ:</h4>
          <p>
            - Lưu ý: Tài khoản chạy tương tác phải đảm bảo đã tham gia vào group
            được chỉ định chạy tương tác.
          </p>
          <p>
            - Link bài cần share: là đường dẫn copy từ bài viết trong nhóm,
            page.
          </p>
          <p>
            - Nội dung: là nội dung mà người dùng muốn viết liên quan đến bài
            viết cần chia sẻ.
          </p>

          <img src={Image40} alt="Tính năng chia sẻ bài viết" />
          <h5>Hình 40 Tính năng chia sẻ bài viết</h5>

          <h4>4.2. Theo dõi:</h4>
          <p>
            - Nhập danh sách link: là danh sách link các page người dùng muốn
            theo dõi.
          </p>
          <p>
            - Lưu ý: Link phải chứa ID để tránh các trường hợp tương tác lỗi.
          </p>

          <img
            src={Image41}
            alt="Tính năng theo dõi Page theo danh sách link"
          />
          <h5>Hình 41 Tính năng theo dõi Page theo danh sách link</h5>

          <h4>4.3. Đánh giá Page:</h4>
          <p>- Link page: đường dẫn đến page mà người dùng muốn đánh giá.</p>

          <img src={Image42} alt="Tính năng đánh giá page" />
          <h5>Hình 42 Tính năng đánh giá page</h5>

          <h4>4.4. Tương tác livestream:</h4>
          <p>
            - Link livestream: là đường dẫn đến video livestream mà người dùng
            muốn tương tác.
          </p>
          <p>- Thời gian xem: là thời gian xem và tương tác livestream.</p>
          <p>
            - Bày tỏ cảm xúc: người dùng có thể chọn các cảm xúc (like, love,
            care,…) ngẫu nhiên để tương tác với livestream.
          </p>
          <p>
            - Commnet: là nội dung bình luận sẽ được gửi trong video livestream
            đó.
          </p>

          <img src={Image43} alt="Tính năng tương tác Livestream" />
          <h5>Hình 43 Tính năng tương tác Livestream</h5>

          <h4>4.5. Mời bạn like Page:</h4>
          <p>
            - Số lượng bạn: là số lượng bạn ngẫu nhiên trong khoảng giới hạn mà
            người dùng đặt. Ví dụ: 3 – 5 bạn.
          </p>
          <p>
            - Link page: là đường dẫn đến page người dùng muốn mời bạn bè like.
          </p>
          <p>
            - Lưu ý: Link page phải có ID để tránh các trường hợp xảy ra lỗi
            trong quá trình tương tác.
          </p>

          <img src={Image44} alt="Tính năng mời bạn bè like page" />
          <h5>Hình 44 Tính năng mời bạn bè like page</h5>

          <h4>4.6. Tương tác bài viết chỉ định:</h4>
          <p>
            - Xem bài viết: thời gian xem và tương tác bài viết đó ngẫu nhiên
            trong khoảng mà người dùng nhập vào. Ví dụ: nhập vào 5 – 7s thì thời
            gian xem ngẫu nhiên có thể là 1 – 5s, 1 – 6s, 1 – 7s ngẫu nhiên trên
            1 bài viết.
          </p>
          <p>
            - Bày tỏ cảm xúc: người dùng có thể chọn các cảm xúc (like, love,
            care,...) để tương tác ngẫu nhiên trên bài viết.
          </p>
          <p>
            - Link bài viết: là đường dẫn đến bài viết mà người dùng nhập vào để
            tương tác.
          </p>
          <p>
            - Bình luận văn bản: là nội dung sẽ được đăng trong phần Comment của
            bài viết.
          </p>
          <p>
            - Bình luận ảnh: người dùng có thể nhấn vào bình luận ảnh nếu muốn
            bình luận bằng hình ảnh.
          </p>
          <p>
            - Lưu ý: Folder ảnh phải được chọn phải có tên là "Girl" và nằm
            trong đường dẫn: \Documents\XuanZhi9\Pictures\Girl. Nếu chưa có
            folder "Girl" thì phải tạo với đường dẫn như trên.
          </p>

          <img src={Image45} alt="Tính năng tương tác bài viết theo chỉ định" />
          <h5>Hình 45 Tính năng tương tác bài viết theo chỉ định</h5>

          <h4>4.7. Tương tác bài viết theo từ khoá:</h4>
          <p>
            - Số lượng bài: là số lượng bài viết người dùng muốn tương tác dựa
            vào từ khoá tìm kiếm.
          </p>
          <p>- Tỉ lệ: là tỉ lệ thả cảm xúc ngẫu nhiên giữa các bài viết.</p>
          <p>
            - Nhập từ khoá: là từ khoá mà người dùng nhập vào thanh tìm kiếm và
            tìm các bài viết trong phần post.
          </p>
          <p>
            - Xem bài viết: là thời gian xem và tương tác bài viết đó ngẫu nhiên
            trong khoảng mà người dùng nhập vào. Ví dụ: nhập vào 5 – 7s thì thời
            gian xem ngẫu nhiên có thể là 1 – 5s, 1 – 6s, 1 – 7s ngẫu nhiên trên
            1 bài viết.
          </p>
          <p>
            - Bày tỏ cảm xúc: là cảm xúc (like, love, care,…) sẽ được thả ngẫu
            nhiên theo lựa chọn của người dùng.
          </p>
          <p>
            - Bình luận văn bản: bình luận sẽ được vào phần comment của bài
            viết.
          </p>

          <img src={Image46} alt="Tính năng tương tác bài viết theo từ khoá" />
          <h5>Hình 46 Tính năng tương tác bài viết theo từ khoá</h5>

          <h4>4.8. Đăng bài:</h4>
          <p>
            - Folder: Folder ảnh phải được chọn phải có tên là "Girl" và nằm
            trong đường dẫn: \Documents\XuanZhi9\Pictures\Girl. Nếu chưa có
            folder "Girl" thì phải tạo với đường dẫn như trên.
          </p>
          <p>- Link nhóm: là link nhóm mà người dùng muốn đăng bài viết lên.</p>
          <p>
            - Nội dung: là nội dung mà người dùng muốn viết để đăng lên nhóm.
          </p>
          <p>
            - Đăng bài ẩn danh: người dùng có thể click chọn để dùng chức năng
            đăng bài ẩn danh.
          </p>
          <p>
            - Số lượng ảnh: là số lượng ảnh mà người dùng muốn đăng cùng bài
            viết. Hình ảnh sẽ được lấy từ Folder Girl.
          </p>

          <img src={Image47} alt="Tính năng đăng bài" />
          <h5>Hình 47 Tính năng đăng bài</h5>
        </section>

        <section id="section7">
          <h2>VII. Chạy Kịch Bản Tương Tác Trên Phần Mềm</h2>

          <h3>1. Tạo kịch bản và thêm các hành động</h3>

          <h4>1.1. Tạo kịch bản:</h4>
          <p>
            - Bước 1: Nhấn chọn vào mục <strong>Cài đặt tương tác</strong> ở
            giao diện chính của phần mềm.
          </p>
          <p>
            - Bước 2: Ở trang <strong>Quản lý kịch bản</strong>, nhấn chuột phải
            vào vùng trống của <strong>Danh sách kịch bản</strong> và chọn{" "}
            <strong>Thêm kịch bản</strong>.
          </p>

          <img src={Image48} alt="Tạo kịch bản" />
          <h5>Hình 48 Tạo kịch bản</h5>

          <p>
            - Bước 3: Nhập vào tên kịch bản và nhấn nút <strong>Tạo</strong>.
          </p>

          <img src={Image49} alt="Nhập tên kịch bản" />
          <h5>Hình 49 Tạo kịch bản</h5>

          <h4>1.2. Thêm hành động cho kịch bản:</h4>
          <p>
            - Bước 1: Tại trang <strong>Quản lý kịch bản</strong>, người dùng
            nhấn chuột vào kịch bản vừa tạo và tiếp tục nhấn chuột phải, sau đó
            chọn <strong>Thêm hành động</strong> ở{" "}
            <strong>Các danh sách hành động</strong>.
          </p>

          <img src={Image50} alt="Thêm hành động cho kịch bản" />
          <h5>Hình 50 Thêm hành động cho kịch bản</h5>

          <img src={Image51} alt="Thêm kịch bản cho hành động" />
          <h5>Hình 51 Thêm kịch bản cho hành động</h5>

          <p>
            - Bước 2: Sau khi tab <strong>Action</strong> hiện ra, người dùng
            chọn thêm một hay nhiều hành động và cấu hình từng hành động đã được
            hướng dẫn ở mục <strong>VI Các chức năng</strong>.
          </p>

          <img src={Image52} alt="Thêm hành động thành công cho kịch bản" />
          <h5>Hình 52 Thêm hành động thành công cho kịch bản</h5>

          <h3>2. Chạy kịch bản</h3>
          <p>
            - Bước 1: Ở mục <strong>Quản lý mạng xã hội</strong>, chọn option{" "}
            <strong>Facebook</strong>.
          </p>

          <img src={Image53} alt="Nhấn chọn Facebook" />
          <h5>Hình 53 Nhấn chọn Facebook</h5>

          <p>
            - Bước 2: Chọn số lượng tài khoản chạy tương tác. Nếu chạy nhiều tài
            khoản, cần giữ <strong>Shift</strong> hoặc <strong>Ctrl</strong> và
            nhấn vào các tài khoản cần chạy tương tác.
          </p>

          <img src={Image54} alt="Chọn số lượng tài khoản cần tương tác" />
          <h5>Hình 54 Chọn số lượng tài khoản cần tương tác</h5>

          <p>
            - Bước 3: Chọn vào kịch bản chứa các hành động đã tạo và nhấn{" "}
            <strong>Chạy tương tác</strong>.
          </p>

          <img src={Image55} alt="Chọn kịch bản tương ứng và khởi chạy" />
          <h5>Hình 55 Chọn kịch bản tương ứng và khởi chạy</h5>

          <p>
            - Bước 4: Sau khi đã chạy xong kịch bản, để chạy kịch bản khác,
            người dùng cần nhấn nút <strong>Ngừng tương tác</strong> để bắt đầu
            kịch bản khác.
          </p>

          <img
            src={Image56}
            alt="Nhấn ngừng tương tác để bắt đầu một kịch bản khác"
          />
          <h5>Hình 56 Nhấn ngừng tương tác để bắt đầu một kịch bản khác</h5>
        </section>

        <section id="section8">
          <h2>VIII. Xuất Báo Cáo Trên Phần Mềm</h2>
          <img src={Image57} alt="Báo cáo và báo cáo tương tác" />
          <h5>Hình 57 Báo cáo và báo cáo tương tác</h5>

          <h3>1. Báo cáo</h3>
          <p>
            - Khi nhấn vào Báo cáo, người dùng sẽ nhận được 1 file excel trên
            desktop với thông tin của các tài khoản và thời gian lần cuối tương
            tác.
          </p>

          <img
            src={Image58}
            alt="Thông tin và thời gian lần cuối tương tác của tài khoản"
          />
          <h5>Hình 58 Thông tin và thời gian lần cuối tương tác của tài khoản</h5>

          <h3>2. Báo cáo tương tác</h3>
          <p>
            - Khi người dùng nhấn vào Báo cáo tương tác, người dùng sẽ nhận được
            1 file excel trên desktop với thông tin chi tiết về các hành động,
            kịch bản đã chạy tương tác bao gồm: Facebook Uid (id tài khoản
            Facebook), Nội dung mô tả (tên của hành động đã chạy trong kịch
            bản), Link đã comment (đường dẫn của các hành động có liên quan đến
            link), lần cuối tương tác (thời gian tương tác hành động trong kịch
            bản lần cuối)
          </p>

          <img src={Image59} alt="Báo cáo chi tiết của các kịch bản đã chạy" />
          <h5>Hình 59 Báo cáo chi tiết của các kịch bản đã chạy</h5>
        </section>
        </div>
    </div>
  );
};

export default Document;

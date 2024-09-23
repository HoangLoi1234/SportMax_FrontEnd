import React, { useState } from 'react';
import './CSS/Support.css';
import '../Components/Responsive/Responsive.css';
import blog_01 from '../Components/Assets/blog_01.png';
import blog_02 from '../Components/Assets/blog_02.png';
import blog_02_1 from '../Components/Assets/blog_02_1.png';
import blog_02_2 from '../Components/Assets/blog_02_2.png';
import blog_02_3 from '../Components/Assets/blog_02_3.png';
import blog_03 from '../Components/Assets/blog_03.png';
import blog_04 from '../Components/Assets/blog_04.png';
import blog_04_1 from '../Components/Assets/blog_04_1.png';

export const Support = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State để quản lý mở rộng nội dung
  const [isExpanded_2, setIsExpanded_2] = useState(false);
  const [isExpanded_3, setIsExpanded_3] = useState(false);
  const [isExpanded_4, setIsExpanded_4] = useState(false);

  const handleToggleContent = () => {
    setIsExpanded(!isExpanded); // Đảo ngược trạng thái khi bấm nút
  };
  const handleToggleContent_2 = () => {
    setIsExpanded_2(!isExpanded_2);
  };
  const handleToggleContent_3 = () => {
    setIsExpanded_3(!isExpanded_3);
  };
  const handleToggleContent_4 = () => {
    setIsExpanded_4(!isExpanded_4);
  };

  return (
    <div className="grid wide support-wrap-all">
      <div className="row">
        <div className="support-info__header col l-12 m-12 c-12">
          <h2>HỖ TRỢ KHÁCH HÀNG</h2>
          <hr/>
        </div>

        {/* support-01 */}
        <div className="row support-wrap">
          <div className={`support-img col c-12 ${isExpanded ? 'l-12 m-12' : 'l-6 m-6'}`}>
            <img className='col l-12 m-12 c-12' src={blog_01} alt="" />
          </div>
          <div className={`support-content col l-6 c-12 ${isExpanded ? 'l-12 m-12 support-content-tablet' : 'l-6 m-6'}`}>
            <h2 className="support-header">BLACK FRIDAY - TẬN HƯỞNG MUA SẮM CỰC ĐÃ DÀNH RIÊNG CHO DÂN THỂ HÌNH</h2>
            <div className="support-time">
              <p className="support__time-post">Th 7 21/11/2020</p>
              <p className="support__time-read">1 phút đọc</p>
            </div>
            <div className={`support-desc col l-12 m-12 c-12 ${isExpanded ? '' : 'support__limit-row'}`}>
              <p>SportMax trân trọng giới thiệu chương trình SALE Black Friday cực đã, tín đồ thể hình không thể bỏ qua.</p>
              <ol>
                <li>Xem ngay loạt sản phẩm FLASH SALE đồng giá 89K: Áo giữ nhiệt thời trang, siêu ấm, co giãn 4 chiều cho mùa tập luyện Thu - Đông</li>
                <li>Xem ngay loạt quần JOGGER siêu ngầu: Nỉ êm ái, co giãn 4 chiều, khoá túi tiện lợi và rất nhiều kiểu dáng</li>
              </ol>
              <p>Đặc biệt, với các mẫu hàng mới, gymer mua càng nhiều số tiền được giảm càng lớn.</p>
              <ul>
                <li>Mua 1 sản phẩm giảm 11%</li>
                <li>Mua 2 sản phẩm giảm 22%</li>
                <li>Mua 3 sản phẩm giảm 33%</li>
              </ul>
              <p>Có áp dụng với CTKH thân thiết, nâng mức giảm tối đa của một sản phẩm có thể lên tới 77%.</p>
            </div>
            <button className='support-view-more' onClick={handleToggleContent}>
              {isExpanded ? 'Thu gọn' : 'Xem thêm'}
            </button>
          </div>
        </div>
        
        {/* support-02 */}
        <div className="row support-wrap">
          <div className={`support-img col c-12 ${isExpanded_2 ? 'l-12 m-12' : 'l-6 m-6'}`}>
            <img className='col l-12 m-12 c-12' src={blog_02} alt="" />
          </div>
          <div className={`support-content col l-6 c-12 ${isExpanded_2 ? 'l-12 m-12 support-content-tablet' : 'l-6 m-6'}`}>
            <h2 className="support-header">BLACK FRIDAY - TẬN HƯỞNG MUA SẮM CỰC ĐÃ DÀNH RIÊNG CHO DÂN THỂ HÌNH</h2>
            <div className="support-time">
              <p className="support__time-post">Th 7 21/11/2020</p>
              <p className="support__time-read">1 phút đọc</p>
            </div>
            <div className={`support-desc col l-12 m-12 c-12 ${isExpanded_2 ? '' : 'support__limit-row'}`}>
              <h3>Hạt óc chó nguồn gốc từ đâu? Giá trị dinh dưỡng của hạt óc chó</h3>
              <p>Nhiều báo cáo khoa học cho thấy hạt óc chó mang rất nhiều giá trị dinh dưỡng có giá trị cho sức khoẻ con người. Hiện nay, thị trường đã xuất hiện nhiều loại sản phẩm chiết xuất từ hạt óc chó được rất nhiều người tin dùng. Vậy loại hạt này có nguồn gốc từ đâu, giá trị dinh dưỡng của nó là gì? Hãy cùng SportMax tìm hiểu qua bài viết dưới đây nhé.</p>

    <h3>1. Nguồn gốc của cây óc chó</h3>
    <p>Hạt óc chó được thu hoạch từ cây óc chó, hay còn được gọi là cây hồ đào, cây lạc tây. Loài cây này có nguồn gốc từ vùng Địa Trung Hải và được người dân Trung Á phát triển, phổ biến ở Châu Á. Cây óc chó du nhập về Việt Nam chỉ trong thời gần đây, khi những công dụng và giá trị của nó được phổ biến trên toàn thế giới. Hiện tại, chúng ta có thể thấy cây óc chó được trồng nhiều ở các vùng núi, trung du phía Bắc, điển hình như ở Cao Bằng, Tuyên Quang, Hà Giang, Lào Cai.</p>

    <h3>2. Công dụng của cây óc chó</h3>
    <p>Óc chó là một loài cây quý, với nhiều bộ phận được sử dụng trong nhiều trường hợp khác nhau, giúp cho sức khoẻ trở nên tốt hơn.</p>

    <h4>2.1. Chống Oxy hoá</h4>
    <p>Quả óc chó chứa nhiều chất chống oxy hoá như vitamin C, polyphenol giúp dọn dẹp nguồn cơn các gốc tự do trong cơ thể. Chúng ta đã biết về gốc tự do – một trong những tác nhân làm tổn thương tế bào và hệ thống van tim.</p>

    <h4>2.2. Hạ mỡ máu</h4>
    <p>Theo nhiều nghiên cứu đã được chứng minh, lá cây óc chó có tác dụng làm giảm nồng độ triglycerid, cholesterol toàn phần và làm tăng nồng độ HDL trong máu, nhờ đó giúp giảm nguy cơ xơ vữa động mạch cho người có tiền sử tim mạch.</p>

    <img className='col l-12 m-12 c-12' src={blog_02_1} alt="" />

    <h4>2.3. Giá trị dinh dưỡng từ quả óc chó</h4>
    <p>Quả óc chó mang đến tác dụng tuyệt vời cải thiện sức khoẻ não bộ, ngăn ngừa bệnh tim và nhất là giảm thiểu ung thư. Được cấu thành từ 65% chất béo lợi và 15% protein, quả óc chó có lượng carbs thấp, hầu hết trong đó bao gồm chất xơ. Cụ thể, trong 30gram óc chó có chứa hàm lượng các chất dinh dưỡng sau:</p>

    <ul>
        <li>Calo: 185</li>
        <li>Nước: 4%</li>
        <li>Protein: 4,3 gram</li>
        <li>Carbs: 3.9 gram</li>
        <li>Đường: 0.7 gram</li>
        <li>Chất xơ: 1.9 gram</li>
        <li>Chất béo: 18.5 gram</li>
    </ul>

    <p>Dù sở hữu tới 65% chất béo theo trọng lượng, nhưng các nghiên cứu chỉ ra rằng hàm lượng chất béo có trong quả óc chó không làm tăng nguy cơ béo phì nếu sử dụng chúng để thay thế cho các thực phẩm khác trong chế độ ăn uống. Chứa rất nhiều axit béo omega-6 – chất béo không bão hoà đa cực tốt cho sức khoẻ, người bình thường có thể sử dụng quả óc chó để dùng hàng ngày. Hơn thế nữa, quả óc chó cũng chứa tỷ lệ cao của axit alpha-linolenic chất béo omega-3 lành mạnh, loại chất này đặc biệt có lợi cho sức khoẻ của tim, nó cũng là tiền chất của các axit béo omega-3 chuỗi dài EPA và DHA, liên quan đến nhiều lợi ích sức khoẻ.</p>

    <h3>3. Quả óc chó mang đến nhiều Vitamin và khoáng chất</h3>
    <p>Vitamin và khoáng chất luôn là một thước đo để định hình một thực phẩm có được gọi là tốt, là nhiều chất dinh dưỡng hay không. Một số loại hạt, quả chứa nhiều vitamin, khoáng chất đặc thù nhưng cũng có một số loại hoa quả mang trong mình rất nhiều giá trị dinh dưỡng. Quả óc chó là một ví dụ.</p>

    <p>Quả óc chó cung cấp các loại vitamin và khoáng chất:</p>
    <ul>
        <li>Đồng</li>
        <li>Axit folic</li>
        <li>Photpho</li>
        <li>Vitamin B6</li>
        <li>Manga</li>
        <li>Vitamin E: So với các loại hạt khác, quả óc chó chứa hàm lượng cao một dạng vitamin E đặc biệt có tên gọi là gamma-tocopherol</li>
    </ul>

    <p>Trước khi được công nhận và sử dụng rộng rãi trên thế giới, hàng loạt nghiên cứu từ các trường đại học danh tiếng đã chỉ ra quả óc chó đứng thứ hai về hàm lượng chất chống oxy hoá tổng số hơn 1113 loại thực phẩm thường được sử dụng tại Hoa Kỳ.</p>

    <p>Một số hợp chất thực vật đáng chú ý trong quả óc chó có thể kể đến:</p>
    <ul>
        <li><strong>Axit ellagic:</strong> Chất chống oxy hóa này được tìm thấy với số lượng cao trong quả óc chó, cùng với các hợp chất liên quan khác như ellagitannin. Axit ellagic có thể làm giảm nguy cơ mắc bệnh tim và ung thư. Quả óc chó có hoạt tính chống oxy hóa cao hơn bất kỳ loại hạt thông thường nào khác. Hoạt động này đến từ vitamin E, melatonin và các hợp chất thực vật gọi là polyphenol, đặc biệt cao trong da của quả óc chó.</li>
        <li><strong>Catechin:</strong> Catechin là một chất chống oxy hóa flavonoid có thể có nhiều lợi ích sức khỏe khác nhau, bao gồm thúc đẩy sức khỏe của tim.</li>
        <li><strong>Melatonin:</strong> Neurohormone này giúp điều chỉnh đồng hồ cơ thể. Nó cũng là một chất chống oxy hóa mạnh mẽ có thể làm giảm nguy cơ mắc bệnh tim.</li>
        <li><strong>Axit phytic:</strong> Axit phytic, hay phytate, là một chất chống oxy hóa có lợi, mặc dù nó có thể làm giảm sự hấp thu sắt và kẽm từ cùng một bữa ăn.</li>
    </ul>

    <img className='col l-12 m-12 c-12' src={blog_02_2} alt="" />

    <h3>4. Tác động tích cực của quả óc chó đến đời sống sức khoẻ</h3>
    <p>Với quá nhiều giá trị dinh dưỡng, quả óc chó thường được liên kết với một số lợi ích sức khoẻ. Đó là giảm thiểu khả năng mắc bệnh tim và ung thư, cải thiện sức khoẻ và chức năng của vùng não bộ.</p>

    <h4>Cải thiện sức khoẻ tim mạch</h4>
    <p>Vấn đề tim mạch thường được sử dụng cho tình trạng liên quan đến tim và các mạch máu. Bệnh lý về tim thường hay xảy ra khi các thực phẩm nhiều chất béo, dầu mỡ thường xuyên bị lạm dụng. Trong nhiều trường hợp, nguy cơ mắc bệnh tim có thể được giảm bớt bằng thói quen lối sống lành mạnh, tiếp nhận vừa đủ những thực phẩm có nguy cơ gây nhiều loại bệnh lý, thay thế bằng các thực phẩm giàu dinh dưỡng và khoẻ mạnh hơn như quả óc chó.</p>

    <img className='col l-12 m-12 c-12' src={blog_02_3} alt="" />

    <h4>Ngăn ngừa ung thư</h4>
    <p>Ung thư trải qua bao nhiêu năm vẫn là căn bệnh nan y và không có một phương pháp đặc trị hữu hiệu. Sở hữu một lối sống lành mạnh, tiêu thụ những thực phẩm lành tính là một trong những việc làm giảm nguy cơ phát triển của một số loại ung thư. Quả óc chó là một nguồn thực phẩm chứa các hợp chất thực vật có lợi, chúng có thể là một phần hiệu quả của chế độ ăn phòng ngừa ung thư. Hơn thế nữa, trong quả óc chó có chứa một số thành phần hoạt tính sinh học có thể có đặc tính chống ung thư, như là Phytosterol, gamma-tocopherol, axit béo omega-3, axit ellagic và các</p>
            </div>
            <button className='support-view-more' onClick={handleToggleContent_2}>
              {isExpanded_2 ? 'Thu gọn' : 'Xem thêm'}
            </button>
          </div>
        </div>

        {/* support-03 */}
        <div className="row support-wrap">
          <div className={`support-img col c-12 ${isExpanded_3 ? 'l-12 m-12' : 'l-6 m-6'}`}>
            <img className='col l-12 m-12 c-12' src={blog_03} alt="" />
          </div>
          <div className={`support-content col l-6 c-12 ${isExpanded_3 ? 'l-12 m-12 support-content-tablet' : 'l-6 m-6'}`}>
            <h2 className="support-header">HƯỚNG DẪN SĂN SALE CHƯƠNG TRÌNH ƯU ĐÃI ĐẶC QUYỀN CHO MEMBER VÀ FAN CỨNG</h2>
            <div className="support-time">
              <p className="support__time-post">Th 7 21/03/2020
              </p>
              <p className="support__time-read">1 phút đọc</p>
            </div>
            <div className={`support-desc col l-12 m-12 c-12 ${isExpanded_3 ? '' : 'support__limit-row'}`}>
              <p>Thời điểm "vàng" cho mùa tập body, săn cơ bắp đã đến. SportMax ưu đãi GIẢM TOÀN BỘ SẢN PHẨM 20%. Tất cả hàng mới, hàng hè và sản phẩm trang phục thường ngày đều nằm trong danh sách.</p>
              <p>Theo đó, khách hàng được hưởng ưu đãi khi sử dụng mã code "DACQUYEN20" trong thời gian thanh toán. Chương trình áp dụng cho cả việc mua sắm trực tiếp tại cửa hàng hoặc online.</p>
              <p>Đây là chương trình SALE đặc quyền, thế nên khách hàng sử dụng mã Code mới được quyền giảm giá. Chương trình bắt đầu từ hôm nay cho đến hết ngày 25/3. Hãy dành quyền lợi ngay hôm nay.</p>
            </div>
            <button className='support-view-more' onClick={handleToggleContent_3}>
              {isExpanded_3 ? 'Thu gọn' : 'Xem thêm'}
            </button>
          </div>
        </div>
       
       {/* support-04 */}
       <div className="row support-wrap">
          <div className={`support-img col c-12 ${isExpanded_4 ? 'l-12 m-12' : 'l-6 m-6'}`}>
            <img className='col l-12 m-12 c-12' src={blog_04} alt="" />
          </div>
          <div className={`support-content col l-6 c-12 ${isExpanded_4 ? 'l-12 m-12 support-content-tablet' : 'l-6 m-6'}`}>
            <h2 className="support-header">CẢNH BÁO LỪA ĐẢO: GỬI TỚI TOÀN BỘ KHÁCH HÀNG GYMMAX</h2>
            <div className="support-time">
              <p className="support__time-post">Th 7 21/03/2020
              </p>
              <p className="support__time-read">1 phút đọc</p>
            </div>
            <div className={`support-desc col l-12 m-12 c-12 ${isExpanded_4 ? '' : 'support__limit-row'}`}>
              <p className='support-desc-bold'>Thời gian vừa qua, đã có một số đối tượng xấu lợi dụng thương hiệu GYMMAX để trục lợi, với thủ đoạn tinh vi mà quý khách hàng cần biết.</p>
              <p>Lần theo dấu vết, các đối tượng xấu chủ yếu sử dụng phương pháp lợi dụng lòng tin, sự uy tín của thương hiệu để trục lợi. Cụ thể, diễn biến hành vi như sau:</p>
              <ol>
                <li>Kẻ xấu gọi điện thoại đến khách hàng</li>
                <li>Thông báo chương trình:"Chuyển tiền 139k và sẽ nhận lại 1500k". Khách hàng buộc phải chuyển tiền trước.</li>
                <li>KH nếu chuyển tiền xong kẻ xấu sẽ tự động chặn số, xoá số và không bao giờ liên lạc lại.</li>
              </ol>
              <p>Như vậy, GYMMAX xin đính chính:</p>
              <p className='support-desc-italic'>"GYMMAX không và sẽ không bao giờ có chương trình yêu cầu khách hàng chuyển tiền trước. Vậy nên quý khách hàng hãy trở nên thông thái, nói KHÔNG với các động thái có hành vi lừa đảo, và hãy báo ngay cho GYMMAX để chúng tôi có phương án xử lý thích hợp."</p>
              <img className='col l-12 m-12 c-12' src={blog_04_1} alt="" />
              <p className='support-center support-desc-italic'>***Cảnh giác trước các số điện thoại lạ và hành vi lừa đảo yêu cầu chuyển tiền.***</p>
              <p>Cám ơn quý khách hàng đã đồng hành cùng GYMMAX trong thời gian vừa qua. Các sản phẩm vụ Hè đã về. Quý khách có thể truy cập và mua sản phẩm tại đây.</p>
            </div>
            <button className='support-view-more' onClick={handleToggleContent_4}>
              {isExpanded_4 ? 'Thu gọn' : 'Xem thêm'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;

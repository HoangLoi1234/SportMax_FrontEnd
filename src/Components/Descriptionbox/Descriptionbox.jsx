import React from 'react'
import '../RelatedProducts/RelatedProducts.css'
import './Descriptionbox.css'

export const Descriptionbox = () => {
  return (
    <div className="grid wide">
      <div className="row">
        <div className='descriptionbox col l-12 m-12 c-12'>
          <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
              Description
            </div>
            <div className="descriptionbox-nav-box fade">
              Reviews (122)
            </div>
          </div>
          <div className="descriptionbox-description">
            <p>
            Chính sách đổi trả: Tất cả các sản phẩm của chúng tôi đều được đổi trả một đổi một trong vòng hai tuần. Nếu có bất kỳ vấn đề gì về chất lượng, anh em có thể liên hệ với chúng tôi qua thư cảm ơn hoặc nhắn tin trực tiếp cho Shop. Chúng tôi cam kết giải quyết mọi vấn đề một cách nhanh chóng và hiệu quả.
            <p>
            Chính sách bảo hành: Tuỳ vào thời gian sử dụng sản phẩm và chi tiết lỗi sản phẩm, chúng tôi sẽ có phương án hỗ trợ bảo hành tương ứng.
            </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Descriptionbox;

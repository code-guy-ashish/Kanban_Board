import "./CardInfo.css";
import Modal from "../../Modal/Modal"
const CardInfo = (props) => {
  return (
    <Modal onClose={() => props.onClose()}>
      <div className="cardinfo">
        <div className="cardtitle">
          {props.title}
        </div>
        <div className="card_desc">
          {props.descr}
        </div>
        <div className="card_time">
          {props.date}
        </div>
      </div>
    </Modal>
  )
}

export default CardInfo

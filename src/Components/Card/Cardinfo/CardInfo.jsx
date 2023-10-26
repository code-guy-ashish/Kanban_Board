import "./CardInfo.css";
import Modal from "../../Modal/Modal"
import { useState } from "react";


const CardInfo = (props) => {
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(props.title);
  const [desc, setDesc] = useState(props.descr);



  return (
    <Modal onClose={() => props.onClose()}>
      {
        edit ? (
          <form
            className="edit_formcc"
            onSubmit={(event) => {
              event.preventDefault();
              setEdit(false);
              if (props.editcard) props.editcard(props.cardId, props.boardId, title, desc)
            }}>

            <input className="inputcc" type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea className="custom-scroll textareacc"
              rows={10} 
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <button className="buttoncc" type="submit">Submit</button>

          </form>)
          : (
            <div className="cardinfocc">
              <div className="cardtitlecc">
                <span className="titlecc">
                  {props.title}
                </span>
                <span className="datecc">
                  {props.date}
                </span>
              </div>
              <div className="custom-scroll card_desc_infoplatecc">
                {props.descr}
              </div>
              <button className="buttoncc" onClick={() => setEdit(true)}>Edit</button>
            </div>)
      }
    </Modal>
  )
}

export default CardInfo

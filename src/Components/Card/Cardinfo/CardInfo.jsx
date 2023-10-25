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
            className="edit_form"
            onSubmit={(event) => {
              event.preventDefault();
              setEdit(false);
              if (props.editcard) props.editcard(props.cardId, props.boardId, title, desc)
            }}>

            <input type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input type="textArea"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <button type="submit">Submit</button>

          </form>)
          : (
            <div className="cardinfo">
              <div className="cardtitle">
                {props.title}
                <span>
                  {props.date}
                </span>
              </div>
              <div className="card_desc">
                {props.descr}
              </div>
              <button onClick={() => setEdit(true)}>Edit</button>
            </div>)
      }
    </Modal>
  )
}

export default CardInfo

import { AlignJustify, Clock, Trash2 } from "react-feather";
import "./Card.css"
import Tag from "../Tags/Tag";
import CardInfo from "./Cardinfo/CardInfo";
import { useState } from "react";

const Card = (props) => {

  const [showModal, setShowModal] = useState(false);
  return (

    <div data-testid="cardid"
      id={props.card.id}
      draggable>
      {showModal && <CardInfo
        onClose={() => setShowModal(false)}
        title={props.card.title}
        descr={props.card.real_desc}
        date={props.card.date}
        label={props.card.labels.join(",")}
        cardId={props.card?.id}
        boardId={props.boardId}
        editcard={props.editcard}
      />}
      <div className="card" draggable

        onDragEnd={(e) => {
          e.target.classList.remove("is-dragging");
          props.handleDragEnd(props.card?.id, props.boardId)
        }
        }

        onDragEnter={(e) => {
          props.handleDragEnter(props.card?.id, props.boardId)
        }
        }


        onDragStart={(e) => {

          if (window.innerWidth > 500) {
            document.getElementById(props.card?.id).style.opacity = "0";
            e.target.classList.add("is-dragging")
          }
        }}

        onClick={() => setShowModal(true)}
      >

        <div className="card_top">
          <div className="card_top_labels">
            {
              props.card?.labels?.map((item, index) => {
                return <Tag
                  key={index}
                  text={item}
                  color={props.card?.label_colors[index]}
                />
              })

            }
          </div>
          {
            window.innerWidth < 500 ?
              <AlignJustify className="show_hidden" /> : ""

          }
          <Trash2 className="trash" onClick={() => props.removeCard(props.card?.id, props.boardId)} />
        </div>
        <div
          className="card_info_wrap"

          onTouchStart={(e) => {
            e.currentTarget.parentElement.classList.add("is-dragging")
            e.currentTarget.parentElement.style.opacity = 0;

            // console.log("You are inside Touch Start");
            // console.log("Touch Start Event: ", e.currentTarget.parentElement);
          }}


          onTouchEnd={(e) => {
            e.currentTarget.parentElement.classList.remove("is-dragging");
            e.currentTarget.parentElement.style.opacity = 1;
            // console.log("cancelable", e.cancelable);
            if (e.cancelable) e.preventDefault();
            // console.log("You are inside Touch End");
            // console.log("Touch End Event: ", e.changedTouches[0]);

            let x = e.changedTouches[0].clientX;
            let y = e.changedTouches[0].clientY;

            props.touchend(props.card?.id, props.boardId, x, y);
          }}
        >
          <div className="card_title">
            {props.card?.title}
          </div>
          <div className="card_desc">
            {props.card?.desc}
          </div>
          <div className="card_footer">
            {
              props.card?.date && (<p><Clock /> <span className="card_date">{props.card?.date}</span></p>)
            }
            {
              <span className="timestamp">{props.card?.t_stamp}</span>
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default Card

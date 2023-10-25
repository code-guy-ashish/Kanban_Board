import { X } from "react-feather"
import "./Tag.css"

const Tag = (props) => {
    return (
        <div className="tag" style={{ backgroundColor: props.color }}>
            {props.text}
            {props.close && <X onClick={props.onClose?props.onClose():""} />}
        </div>
    )
}

export default Tag

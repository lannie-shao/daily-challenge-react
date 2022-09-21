import './colorRender.css';

const Color = ({hex,name}) => {
  return (
    <div className="color-square" style={{backgroundColor:hex}}>
     <h3>{name}</h3>
    </div>
  )
}

export default Color
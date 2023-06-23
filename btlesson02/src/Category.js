const Category = (props) => {
    return (
   <div>
    <input className="input" type="radio" value="" id="html" />
       {/* {props.nameButton} */}
       <label> {props.name} </label>
   </div>
    )
}
export default Category;
import PropTypes from 'prop-types'
 import Button from './Button'

const Header = ({title}) => {
    
const onClick =(e)=>{
    console.log('Click')
}

    return (
        <header className="header">
           <h1 style={{color:'red'}} > {title} </h1> 
   
   <Button color="green" text="Add" onClick={onClick}/>
  
        </header>
    )
}
Header.defaultProps={
    title:'Task Tracker'
}
Header.propTypes={
    title:PropTypes.string
}
export default Header

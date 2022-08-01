import Button from './Button'

const Header = ({title, onShow, showAdd}) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button title={showAdd ? 'Close Form' : 'Add Task'} 
        color={showAdd ? 'red' : 'green'}
        onClick={onShow}/>
      
      {/*  Below These are just extra examples 

        <Button title="Remove" color="red"/>
        <Button title="Edit"/>
        */}
    </header>
  )
}

export default Header
import Logo from '../Logo/Logo';
import './Header.css';

export default function Header() {
 return (
    <header id='header'>

      <div className='box-header'>
      <Logo src={'../../../public/Logo.svg'} cor={'#c92061'}/>
      </div>

    </header>
 ) 
}
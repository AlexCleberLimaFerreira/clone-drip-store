import { Usefull } from '../Usefull/Usefull';
import {Logo} from '../Logo/Logo';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { ShopCart } from '../ShopCart/ShopCart';
import { Nav } from '../Nav/Nav';
import './Header.css';

export const Header = () => {
  return(
    <header id="header">
      <div className='box-header'>
        <div className='box-header-children'>
          <Logo margin={'.5rem 0 0 .25rem'}/>

          <Input 
          type={'text'}
          placeholder={'Pesquisar Produtos...'}
          margin={'0 3rem 0 1.688rem'}
          width={'30.938rem'}
          height={'3.75rem'}
          src={'../../../public.search.svg'}/>

        <Usefull
        value={'Cadastre-se'}
        margin={'1.2rem 0 0 0'}
        color={'#474747'}
        href={'#'}
        textDecoration={'underline'}/>

        <Nav
          position={'absolute'}
          top={'8.375rem'}
          gap={'2rem'}
          width={'26.438rem'}
          height={'1.813rem'}
        >
           <li>
            <Usefull 
            value={'Início'}
            color={'#474747'}
            to={'/'}
            />
            </li>

            <li>
            <Usefull 
            value={'Produtos'}
            color={'#474747'}
            to={'/produtos'}
            />
            </li>

            <li>
            <Usefull 
            value={'Categorias'}
            color={'#474747'}
            to={'/pedidos'}
            />
            </li>

            <li>
            <Usefull 
            value={'Meus Produtos'}
            color={'#474747'}
            to={'/ofertas'}
            />
            </li>


          
         </Nav>
        </div>


        <Button
          width={'7.125rem'}
          height={'2.5rem'}
          margin={'2.75rem 0 0 1.875rem'}
        >Entrar</Button>
        <ShopCart value={2}/>
      </div>
    </header>
  );
}



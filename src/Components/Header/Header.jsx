import Logo from '../../Assets/logo_header_01.svg'
import '../Header/header.css'

function Header() {

  return (
    <header className='main-header'>
      
      <div className='header-div align-items-center'>
        <div className='logo-div col-auto'>
          <img className='logo-header align-self-start' src={Logo} alt="Logo" />
        </div>
        <ul className='list-div'>
          <li className='list1'>
            <a href="/"><span>MODELS</span></a>
            <div className="list-dropdown">
              <ul >
                <li><a href="/">REVUELTO</a></li>
                <li><a href="/">HURACÁN</a></li>
                <li><a href="/">URUS</a></li>
                <li><a href="/">LIMITED SERIES</a></li>
                <li><a href="/">CONCEPT</a></li>
              </ul>
            </div>
          </li>
          <li className='list2'>
            <a href='/'><span>BEYOND</span></a>
          </li>
          <li className='list3'>
            <a href="/"><span>OWNERSHIP</span></a>
            <div className="list-dropdown">
              <ul>
                <li><a href="/">CONNECTIVITY</a></li>
                <li><a href="/">CUSTOMER APP</a></li>
                <li><a href="/">MOBILITY PROGRAM</a></li>
                <li><a href="/">CLASSICS</a></li>
                <li><a href="/">SERVICE</a></li>
                <li><a href="/">RECALL CAMPAIGN</a></li>
              </ul>
            </div>
          </li>
          <li className='list4'>
            <a href="/"><span>MOTORSPORT</span></a>
            <div className="list-dropdown">
              <ul>
                <li><a href="/">HYPERCAR/GTP</a></li>
                <li><a href="/">SUPER TROFEO</a></li>
                <li><a href="/">GT3</a></li>
                <li><a href="/">MOTORSPORT MODELS</a></li>
                <li><a href="/">DRIVERS</a></li>
                <li><a href="/">MOTORSPORT NEWS</a></li>
                <li><a href="/">EXPERIENCE</a></li>
                <li><a href="/">ESPORTS</a></li>
              </ul>
            </div>
          </li>
        </ul>
        <ul className='list-div list-div-right right'>
          <li className='list1'>
            <a href="/"><span>DEALERSHIPS</span></a>
          </li>
          <li className='list2'>
            <a href="/"><span>MUSEUM</span></a>
          </li>
          <li className='list3'>
            <a href="/"><span>STORE</span></a>
          </li>
        </ul>
        <div className='header-button d-flex right align-items-center col-auto'>
          <button><i className="bi bi-chat-left message"></i></button>
          <button><i className="bi bi-search search"></i></button>
          <button><i className="bi bi-list list"></i></button>
        </div>
      </div>
    </header>
  )
}

export default Header

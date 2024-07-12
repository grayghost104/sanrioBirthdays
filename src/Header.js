import {Link} from 'react-router-dom'


function Header(){
    return(
        <div>
            <img src="https://www.musubi-jp.com/blog/wp-content/uploads/2023/06/db0ada6079c47bd95a52efea0d1ac4d3.png" alt="Happy Sanrio Picnic"/>           <Link to="/allsanrio"> ✨All Sanrio Characters✨ </Link> 
            <Link to='/holiday'>🦃🎃Holiday Sanrio☃️🐰</Link>
            <Link to="/b-daytwin">🎂👯Birthday Sanrio Twin!👯🎂</Link>
            <Link to="/popularity">🌟Popular to least!🌟</Link>
        </div>
    )

}

export default Header
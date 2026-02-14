import KMTLogo from '/Emblem_of_the_Kuomintang.png';
import './App.css';
import Sidebar from './Sidebar';

function Homepage(){

    return(

        <div className="container">
        <Sidebar/>
        <div style={{flex:"5"}}>
        <img src={KMTLogo} className='KMT-emblem'></img>
         <div style={{fontSize:'10vw', textAlign:'center'}}> I love communists </div>
         </div>
        </div>
    )
}

export default Homepage
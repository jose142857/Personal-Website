import React from "react";
import myAvatar from  '../../assets/images/myAvatar.jpg';
import "./home.scss";
import Sidebar from "../menuSidebar/sidebar";

class Home extends React.Component {

    render() {
        return (
            

                <div className="home_container">
                    <div className="desc">
                        <h1>Nguyen Van <br/> Thi </h1>
                        <p>UI designer, Web developer <br/> and travel enthusiast</p>
                    </div>
                    <div className="avatar">
                    <img className="avatar_img" src={myAvatar} alt="This is My Avatar"/>
                    </div>

                </div>

                
           



            
        )
    }


}
export default Home;
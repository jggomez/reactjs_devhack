import React, {Component} from 'react';

class Header extends Component{


    render(){

        const {styles, title, subTitle} = this.props;
        
        return(
            <div style={styles}>
                <h2>{title}</h2>
                <h3>{subTitle}</h3>
            </div>
        );
    }

}

export default Header;
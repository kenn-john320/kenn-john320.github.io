import * as React from 'react'

interface IProps {

}

const NavigationBar: React.FC<IProps> = ({

}) => {
    return(
    <div className="navWrapper">
        <div className="navContent">
            <h1>NavigationBar</h1>
            <div className="navOptions">
                <a>Home</a>
                <a>About Me</a>
                <a>Projects</a>
                <a>Contact</a>
            </div>
        </div>
    </div>
    )
}

export default NavigationBar
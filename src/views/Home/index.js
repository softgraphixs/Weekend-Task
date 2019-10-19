import React, { Component } from 'react'
import '../../assets/styles/HomeStyle.scss'
import logos from '../../assets/images/Android-app-course.jpg'
class HomePage extends Component {
    render() {
        
        return (
            <div className='wrapper'>
            <header className='header'>
                <div className='logo-box'>
                <img src={logos} alt='Logo' className='logo'/>
                </div>

                <div className='text-box'>
                <h1 className="heading-primary">
                    <span className="heading-primary-main">Sol_Tech</span>
                    <span className="heading-primary-sub">we collaborate Tech ideas</span>
                </h1>
                </div>
            </header>
            </div>
        ) 
    }
}
export default HomePage
import * as React from 'react'
import './TitleSection.module.scss'

const TitleSection: React.FC = () => {

    return (
        <section className={`TitleSection}`}>
            <div className="title-container">
                <div className='title-content'>
                    <div>
                        <h1 className='intro-title'>
                            Hello! 
                            My name is Kennedy Johnson
                        </h1>
                        <h2>
                            Software Engineer
                        </h2>
                    </div>
                </div>
            </div>


        </section>

        // <div>
        //     This is the Title Page
        //     {/* <TitleSection>


        //     </TitleSection> */}
        // </div>
    )
}
    

export default TitleSection
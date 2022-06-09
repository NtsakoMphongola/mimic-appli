import React from 'react';
import './App.css';

const list = new Array(15).fill(1).map((_, index) => index + 1);
const Arrow = new Array = ({text, className }) => {
    return <div className={className}></div>;
};
class Nav extends React.Component{
    render(){
        return(
            <div className='Head'>
                <div className='Filters'>
                    Filters
                </div>
                <div className='categories'>
                    <ScrollContainer className="pn-ProductNav">
                        <div className='pn-Product_Contents'>
                            {list.map(el => (
                                <a href='google.com' className='pnProductNav_Link'>
                                    <div className='inner' key={el}>
                                        Chairs
                                    </div>
                                </a>
                            ))}
                        </div>
                    </ScrollContainer>
                </div>
            </div>
        );
    }
}

export default Nav;
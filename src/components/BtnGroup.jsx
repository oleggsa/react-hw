import React, { useState } from 'react';

const BtnGroup = () => {
    const [leftBtn, changeLeftBtn] = useState(false);
    const [rightBtn, changeRightBtn] = useState(false);

    function changeActive (item) {
        if (item.target.className.includes('left')) {
            changeLeftBtn(true)
            changeRightBtn(false)
        }
        if (item.target.className.includes('right')) {
            changeLeftBtn(false)
            changeRightBtn(true)
        }
    }
    return (
        <div>
            <div className="btn-group" role="group" onClick={changeActive}>
                <button type="button" className={`btn btn-secondary left ${leftBtn ? 'active' : ''}`}>
                    Left
                </button>
                <button type="button" className={`btn btn-secondary right ${rightBtn ? 'active' : ''}`}>
                    Right
                </button>
            </div>
        </div>
    )
};

export default BtnGroup;
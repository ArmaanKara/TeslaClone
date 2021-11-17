import React from 'react'
import styled from 'styled-components'

function Section({title, description, backgroundImg, leftBtnText, rightBtnText }) {
    return (
        <Wrap bgImage={backgroundImg}>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            <Buttons>                
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>
                    { rightBtnText &&              
                        <RightButton>
                            {rightBtnText}
                        </RightButton>
                    }
                </ButtonGroup>
                <DownArrow src={"/images/down-arrow.svg"}/>
            </Buttons>
        </Wrap>
    )
}

export default Section;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url('/images/model-s.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between; //vertical alignment because we switched flexdirection to column
    align-items: center; //horizontal alignment now because we swithce flex direction. usually its vertical
    background-image: ${props => `url("/images/${props.bgImage}")`};
`
const ItemText=styled.div`
    padding-top: 15vh;
    text-align:center;
`

const Buttons = styled.div`
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 40px;

    @media only screen and (max-width: 650px) {
        flex-direction: column;
    }
    
`
const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    /* background-color: #313238; */
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin:13px;
    
`

const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.75;
    color:rgba(23,26,32,0.8);
`

const DownArrow = styled.img`
    height: 40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden; //use because down arrow has overflow from animation//
`

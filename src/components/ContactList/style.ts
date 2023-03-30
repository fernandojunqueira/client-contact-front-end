import styled from "styled-components";

export const StyledList = styled.ul`
    background-color: var(--color-grey-3);
    border-radius: 4px;

    max-height: 49vh;
    overflow-y: auto;   

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 16px;

    padding: 23px;
    margin-top: 15px;

    @media (width < 768px){
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
    }
`
export const StyledCard = styled.li`
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    width: 30%;

    padding: 12px 25px;
    border-radius: 4px;

    background-color: var(--color-grey-4);
    
    @media (width < 768px){
        width: 100%;
        flex-direction:row;

        div > p:nth-child(2){
            text-align: right;
        }

        }
    @media (width < 486px){
        div {
            display: none;
        }
        

        }

    &:hover{
        background-color: var(--color-grey-1)
    }
    img{
        cursor: pointer;
    }
    img:hover{
        transform: scaleY(1.1);
    }

    div{

        img{
            width: 13px;
            height: 12px;
        }
    }
`
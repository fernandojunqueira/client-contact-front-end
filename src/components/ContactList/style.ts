import styled from "styled-components";

export const StyledList = styled.ul`
    background-color: var(--color-grey-3);
    border-radius: 4px;

    max-height: 49vh;
    overflow-y: auto;   

    display: flex;
    flex-direction: column;
    gap: 16px;

    padding: 23px;
    margin-top: 15px;
`
export const StyledCard = styled.li`
    display: flex;
    justify-content: space-between;

    padding: 12px 25px;
    border-radius: 4px;

    background-color: var(--color-grey-4);

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
        display: flex;
        align-items: center;
        gap: 26px;

        img{
            width: 13px;
            height: 12px;
        }
    }
`
import styled from 'styled-components';

export const GroupSideBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 50px 5px;
`;

export const CircleGroup = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 200px;
    background-color: yellow;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5% 0;
`;

export const CircleGroupShadow = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 200px;
    position: absolute;
    background: linear-gradient(
      rgba(0, 0, 0, 0.3), 
      rgba(0, 0, 0, 0.3)
    );
`;

export const CircleGroupText = styled.p`
    margin: 0;
`;

import styled from 'styled-components';

export const Container = styled.section`
  background-color: var(--darkblue-4);
`;

export const ContainerRecentProyects = styled.div`
`;

export const ContainerAllProyects = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubtitleContainer = styled.div`
  border-bottom: 1px solid var(--white-1);
  padding: 66px 0px 0px 14px;
  margin: 0px 92px;
`;

export const SubtitleContainer2 = styled.div`
  border-bottom: 1px solid var(--white-1);
  padding: 0px 0px 0px 14px;
  margin: 0px 92px;
`;

export const SubtitleText = styled.h3`
  font-size: 20px;
  color: var(--white-1);
  padding-bottom: 13px;
`;

export const RecentCards = styled.div`
  display: flex;
  gap: 45px;
  padding: 60px 205px 46px;
`;

export const ContainerRecentCards = styled.div`
  width: 264.54px;
  height: 213px;
  border: 1px solid var(--white-3);
  background-color: var(--darkblue-2);
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  border-radius: 7px;
  .showSubMenu {
    display: block;
  }
  .SubMenuContainer {
    display: none;
  }
`;

export const MenuOptionsContainer = styled.div`
    display: flex;
    gap: 3px;
    flex-direction: column;
    margin-left: 234px;
    padding-top: 16px;
    position: relative;
    cursor: pointer;
`;

export const Squares = styled.div`
  padding-top: 3px;
  width: 6px;
  height: 6px;
  border: 1px solid var(--white-3);
`;

export const IconContainer = styled.span`
    display: flex;
    align-items: center;
    padding: 0px 95px 19px;
    flex-direction: column;
    .iconify {
        font-size: 90px;
        color: var(--darkblue-1);
    }
`;

export const StateProyectDisable = styled.div`
  border-radius: 50%;
  background-color: var(--red-1);
  width: 17px;
  height: 17px;
  display: flex;
`;

export const StateProyectEnable = styled.div`
  border-radius: 50%;
  background-color: var(--green-1);
  width: 17px;
  height: 17px;
`;

export const UserBallContent = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 3px;
  align-items: center;
`;

export const UserBallPrincipal = styled.div`
  border-radius: 50%;
  background-color: var(--orange-3);
  color: var(--white-1);
  padding: 4px 6.07px;
`;

export const UserBallSecondary = styled.div`
  border-radius: 50%;
  border: 1px solid var(--orange-2);
  color: var(--orange-2);
  padding: 4px 6.07px;
`;

export const TextRecentCard = styled.p`
  font-size: 13px;
  font-weight: bold;
  color: var(--dark-2);
  background-color: var(--white-3);
  padding: 19px 8px;
  border-radius: 0px 0px 5px 5px;
  display: flex;
  gap: 7px;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerAllCards = styled.div`
  background-color: var(--darkblue-4);
  padding: 46px 203px 92px 164px;
  display: flex;
  flex-direction: column;
  gap: 21px;
  .AllshowSubMenu {
    display: block;
  }
  .AllSubMenuContainer {
    display: none;
  }
`;

export const AllCards = styled.div`
  border: 1px solid var(--white-1-50);
  border-radius: 6px;
  display: flex;
`;

export const DisableStateAllCard = styled.div`
  background-color: var(--red-1);
  padding: 13px 16px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const EnableStateAllCard = styled.div`
  background-color: var(--green-1);
  padding: 13px 16px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const AlertStateAllCard = styled.div`
  background-color: var(--yellow-1);
  padding: 13px 16px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const AllIconContainer = styled.span`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 9px 10px 9px 27px;
    .iconify {
        font-size: 46px;
        color: var(--white-1);
    }
`;

export const AllCardText = styled.h4`
  font-weight: bold;
  color: var(--white-1);
  font-size: 20px;
  align-self: center;
`;

export const DateContent = styled.div`
  align-self: center;
  display: flex;
  flex-direction: row;
  font-weight: bold;
  color: var(--white-1);
  font-size: 18px;
  align-items: center;
  gap: 18px;
`;

export const DateDiv = styled.div`
  font-weight: bold;
  color: var(--white-1);
  font-size: 15px;
  align-self: center;
  background-color: var(--white-1-50);
  border-radius: 6px;
  padding: 8px 13px;
  width: 181px;
`;

export const MenuOptionsAllContainer = styled.div`
    display: flex;
    gap: 3px;
    flex-direction: column;
    align-self: flex-end;
    padding: 20px 33px 20px 45px; 
    cursor: pointer;
`;

export const EndAllContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
`;
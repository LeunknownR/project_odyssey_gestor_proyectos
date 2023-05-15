import { AlertStateAllCard, AllCardText, AllCards, AllIconContainer, Container, ContainerAllCards, 
    ContainerAllProyects, ContainerRecentCards, ContainerRecentProyects, DateContent, DateDiv, 
    DisableStateAllCard, EnableStateAllCard, EndAllContainer, IconContainer, MenuOptionsAllContainer, 
    MenuOptionsContainer, RecentCards, Squares, StateProyectDisable, StateProyectEnable, SubtitleContainer, 
    SubtitleContainer2, SubtitleText, TextRecentCard, UserBallContent, UserBallPrincipal, UserBallSecondary } from "./styles";
import {AllSubMenuContainer, SubMenuContainer, SubMenuOptionEdit, SubMenuOptionEliminate} from "./submenustyles";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from 'react';



const Alexis = () => {
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [showAllSubMenu, setShowAllSubMenu] = useState(false);
    const handleMenuClick = () => {
        setShowSubMenu(!showSubMenu);
        };
    const handleAllMenuClick = () => {
        setShowAllSubMenu(!showAllSubMenu);
        };
    return (
        <Container>
            <ContainerRecentProyects>
                <SubtitleContainer>
                    <SubtitleText>Proyectos recientes</SubtitleText>
                </SubtitleContainer>
                <RecentCards>
                    <ContainerRecentCards>
                            <IconContainer>
                                <MenuOptionsContainer onClick={handleMenuClick}>
                                    <SubMenuContainer className={showSubMenu ? 'showSubMenu' : ''}>
                                        <SubMenuOptionEdit>Editar</SubMenuOptionEdit>
                                        <SubMenuOptionEliminate>Eliminar</SubMenuOptionEliminate>
                                    </SubMenuContainer>
                                    <Squares></Squares>
                                    <Squares></Squares>
                                    <Squares></Squares>
                                </MenuOptionsContainer>
                                <Icon icon="ph:projector-screen-chart-fill" />
                            </IconContainer>
                            <TextRecentCard>
                                <StateProyectDisable></StateProyectDisable>Project Odyssey - Ges...
                                <UserBallContent>
                                    <UserBallPrincipal>M</UserBallPrincipal>
                                    <UserBallSecondary>N</UserBallSecondary>
                                    <UserBallSecondary>D</UserBallSecondary>
                                </UserBallContent>
                            </TextRecentCard>
                    </ContainerRecentCards>
                    <ContainerRecentCards>
                            <IconContainer>
                                <MenuOptionsContainer onClick={handleMenuClick}>
                                    <SubMenuContainer className={showSubMenu ? 'showSubMenu' : ''}>
                                        <SubMenuOptionEdit>Editar</SubMenuOptionEdit>
                                        <SubMenuOptionEliminate>Eliminar</SubMenuOptionEliminate>
                                    </SubMenuContainer>
                                    <Squares></Squares>
                                    <Squares></Squares>
                                    <Squares></Squares>
                                </MenuOptionsContainer>
                                <Icon icon="ph:projector-screen-chart-fill" />
                            </IconContainer>
                            <TextRecentCard>
                                <StateProyectEnable></StateProyectEnable>Taxi A-One - Gestor d...
                                <UserBallContent>
                                    <UserBallPrincipal>M</UserBallPrincipal>
                                    <UserBallSecondary>R</UserBallSecondary>
                                    <UserBallSecondary>D</UserBallSecondary>
                                </UserBallContent>
                            </TextRecentCard>
                    </ContainerRecentCards>
                    <ContainerRecentCards>
                            <IconContainer>
                                <MenuOptionsContainer onClick={handleMenuClick}>
                                    <SubMenuContainer className={showSubMenu ? 'showSubMenu' : ''}>
                                        <SubMenuOptionEdit>Editar</SubMenuOptionEdit>
                                        <SubMenuOptionEliminate>Eliminar</SubMenuOptionEliminate>
                                    </SubMenuContainer>
                                    <Squares></Squares>
                                    <Squares></Squares>
                                    <Squares></Squares>
                                </MenuOptionsContainer>
                                <Icon icon="ph:projector-screen-chart-fill" />
                            </IconContainer>
                            <TextRecentCard>
                                <StateProyectDisable></StateProyectDisable>Minimarket - Sistemas...
                                <UserBallContent>
                                    <UserBallPrincipal>M</UserBallPrincipal>
                                    <UserBallSecondary>M</UserBallSecondary>
                                    <UserBallSecondary>R</UserBallSecondary>
                                </UserBallContent>
                            </TextRecentCard>
                    </ContainerRecentCards>
                </RecentCards>
            </ContainerRecentProyects>
            <ContainerAllProyects>
                <SubtitleContainer2>
                    <SubtitleText>Todos los proyectos</SubtitleText>
                </SubtitleContainer2>
                <ContainerAllCards>
                    <AllCards>
                        <DisableStateAllCard></DisableStateAllCard>
                        <AllIconContainer><Icon icon="ph:projector-screen-chart-fill" /></AllIconContainer>  
                        <AllCardText>Sistema de matrícula - IE Victor Manuel Maurtua</AllCardText>
                        <EndAllContainer>
                            <DateContent>
                                Fecha
                                <DateDiv>20 de abril - 30 de junio</DateDiv>
                            </DateContent>
                            <MenuOptionsAllContainer onClick={handleAllMenuClick}>
                                    <AllSubMenuContainer className={showAllSubMenu ? 'AllshowSubMenu' : ''}>
                                        <SubMenuOptionEdit>Editar</SubMenuOptionEdit>
                                        <SubMenuOptionEliminate>Eliminar</SubMenuOptionEliminate>
                                    </AllSubMenuContainer>
                                    <Squares></Squares>
                                    <Squares></Squares>
                                    <Squares></Squares>
                            </MenuOptionsAllContainer>
                        </EndAllContainer>
                    </AllCards>
                    <AllCards>
                        <AlertStateAllCard></AlertStateAllCard>
                        <AllIconContainer><Icon icon="ph:projector-screen-chart-fill" /></AllIconContainer>  
                        <AllCardText>Sistema de votaciones electorales - Perú</AllCardText>
                        <EndAllContainer>
                            <DateContent>
                                Fecha
                                <DateDiv>20 de abril - 30 de junio</DateDiv>
                            </DateContent>
                            <MenuOptionsAllContainer onClick={handleAllMenuClick}>
                                    <AllSubMenuContainer className={showAllSubMenu ? 'AllshowSubMenu' : ''}>
                                        <SubMenuOptionEdit>Editar</SubMenuOptionEdit>
                                        <SubMenuOptionEliminate>Eliminar</SubMenuOptionEliminate>
                                    </AllSubMenuContainer>
                                    <Squares></Squares>
                                    <Squares></Squares>
                                    <Squares></Squares>
                            </MenuOptionsAllContainer>
                        </EndAllContainer>
                    </AllCards>
                    <AllCards>
                        <EnableStateAllCard></EnableStateAllCard>
                        <AllIconContainer><Icon icon="ph:projector-screen-chart-fill" /></AllIconContainer>  
                        <AllCardText>Gestor de reservas - UTP</AllCardText>
                        <EndAllContainer>
                            <DateContent>
                                Fecha
                                <DateDiv>20 de abril - 30 de junio</DateDiv>
                            </DateContent>
                            <MenuOptionsAllContainer onClick={handleAllMenuClick}>
                                    <AllSubMenuContainer className={showAllSubMenu ? 'AllshowSubMenu' : ''}>
                                        <SubMenuOptionEdit>Editar</SubMenuOptionEdit>
                                        <SubMenuOptionEliminate>Eliminar</SubMenuOptionEliminate>
                                    </AllSubMenuContainer>
                                    <Squares></Squares>
                                    <Squares></Squares>
                                    <Squares></Squares>
                            </MenuOptionsAllContainer>
                        </EndAllContainer>
                    </AllCards>
                    <AllCards>
                        <EnableStateAllCard></EnableStateAllCard>
                        <AllIconContainer><Icon icon="ph:projector-screen-chart-fill" /></AllIconContainer>  
                        <AllCardText>Project xdxdxd</AllCardText>
                        <EndAllContainer>
                            <DateContent>
                                Fecha
                                <DateDiv>20 de abril - 30 de junio</DateDiv>
                            </DateContent>
                            <MenuOptionsAllContainer onClick={handleAllMenuClick}>
                                    <AllSubMenuContainer className={showAllSubMenu ? 'AllshowSubMenu' : ''}>
                                        <SubMenuOptionEdit>Editar</SubMenuOptionEdit>
                                        <SubMenuOptionEliminate>Eliminar</SubMenuOptionEliminate>
                                    </AllSubMenuContainer>
                                    <Squares></Squares>
                                    <Squares></Squares>
                                    <Squares></Squares>
                            </MenuOptionsAllContainer>
                        </EndAllContainer>
                    </AllCards>
                </ContainerAllCards>
            </ContainerAllProyects>
        </Container>
    );
};

export default Alexis;
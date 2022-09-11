import React from 'react';
import styled from "styled-components";

type MainLayoutProps = {
    children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <DesktopRootRoot>
            <SidebarNavigation>
                <Divider src={`https://file.rendit.io/n/leKEiOrbzGCMGD6AGkcj.svg`} />
                <Content9>
                    <Nav>
                        <Header>
                            <Logo>
                                <LogoWrap>
                                    <Logotype
                                        src={`./strat_logo.svg`}
                                    />
                                </LogoWrap>
                            </Logo>
                        </Header>
                        <Search>
                            <InputDropdown>
                                <InputWithLabel>
                                    <Input>
                                        <Content1>
                                            <Searchlg
                                                src={`https://file.rendit.io/n/F1qIciL0SLUmahKzPywg.svg`}
                                            />
                                            <Text1 placeholder={`Search`} />
                                        </Content1>
                                    </Input>
                                </InputWithLabel>
                            </InputDropdown>
                        </Search>
                        <Navigation>
                            <NavItemBase>
                                <Content2>
                                    <Homeline
                                        src={`https://file.rendit.io/n/rfv9qlJJVvSQcD5T74Xj.svg`}
                                    />
                                    <Text2>Home</Text2>
                                </Content2>
                            </NavItemBase>
                            <NavItemBase1>
                                <Content2>
                                    <Homeline
                                        src={`https://file.rendit.io/n/Pk2jO8g3On0Wh1iv7LaG.svg`}
                                    />
                                    <Text3>Dashboard</Text3>
                                </Content2>
                            </NavItemBase1>
                            <NavItemBase>
                                <Content2>
                                    <Homeline
                                        src={`https://file.rendit.io/n/baqcTzP3BqcqOMsmHGk6.svg`}
                                    />
                                    <Text2>Journals</Text2>
                                </Content2>
                            </NavItemBase>
                            <NavItemBase>
                                <Content2>
                                    <Homeline
                                        src={`https://file.rendit.io/n/YcBVOoU17HYAtX5ILyAd.svg`}
                                    />
                                    <Text2>Trades</Text2>
                                </Content2>
                            </NavItemBase>
                            <NavItemBase>
                                <Content2>
                                    <Homeline
                                        src={`https://file.rendit.io/n/TWI9B0G0FY6Rq9k7lKtJ.svg`}
                                    />
                                    <Text2>Reporting</Text2>
                                </Content2>
                            </NavItemBase>
                            <NavItemBase>
                                <Content2>
                                    <Homeline
                                        src={`https://file.rendit.io/n/ikLQ5Xb9i4hPpfIY3L9E.svg`}
                                    />
                                    <Text2>Users</Text2>
                                </Content2>
                            </NavItemBase>
                        </Navigation>
                    </Nav>
                    <Footer>
                        <Navigation1>
                            <NavItemBase6 />
                            <NavItemBase6>
                                <Content2>
                                    <Homeline
                                        src={`https://file.rendit.io/n/Mzwj3zougFASRxRef1Du.svg`}
                                    />
                                    <Text2>Settings</Text2>
                                </Content2>
                            </NavItemBase6>
                        </Navigation1>
                        <Account>
                            <FlexRow>
                                <Avatar />
                                <FlexColumn>
                                    <Text9>Luis Gimenez</Text9>
                                    <SupportingText>luis@gimenez.dev</SupportingText>
                                </FlexColumn>
                            </FlexRow>
                            <Button1>
                                <Searchlg
                                    src={`https://file.rendit.io/n/dpRLAP11JOF9Y64dCQmj.svg`}
                                />
                            </Button1>
                        </Account>
                    </Footer>
                </Content9>
            </SidebarNavigation>
            <MainWrap>
                <Main>
                        <Container>
                            {children}
                        </Container>
                </Main>
            </MainWrap>
        </DesktopRootRoot>
    );
};

const Searchlg = styled.img`
  width: 20px;
  height: 20px;
`;
const NavItemBase = styled.div`
  height: 26px;
  gap: 8px;
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-self: stretch;
  align-items: center;
  background-color: #0f1728;
  overflow: hidden;
  border-radius: 6px;
  padding: 7px 11px;
`;
const Content2 = styled.div`
  width: 223px;
  gap: 12px;
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const Homeline = styled.img`
  width: 24px;
  height: 24px;
`;
const Text2 = styled.div`
  color: #f2f3f6;
  font-size: 16px;
  font-weight: 600;
  font-family: Inter;
  line-height: 24px;
  white-space: nowrap;
`;
const NavItemBase6 = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: stretch;
  align-items: center;
  background-color: #0f1728;
  overflow: hidden;
  border-radius: 6px;
  padding: 7px 11px;
`;
const Text9 = styled.div`
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  font-family: Inter;
  line-height: 20px;
  white-space: nowrap;
`;
const HeaderSection = styled.div`
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
  align-items: flex-start;
`;
const DesktopRootRoot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #0f1728;
`;
const SidebarNavigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #0f1728;
  overflow: hidden;
`;
const Divider = styled.img`
  width: 1px;
  align-self: stretch;
`;
const Content9 = styled.div`
  width: 280px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  align-self: stretch;
  align-items: flex-start;
`;
const Nav = styled.div`
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
  align-items: flex-start;
  padding: 31px 0 0 0;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
  align-items: flex-start;
  padding: 0 19px 0 23px;
`;
const Logo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
const LogoWrap = styled.div`
  gap: 9.83px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Logomark = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.06),
    0 1px 3px 0 rgba(16, 24, 40, 0.1);
`;
const Content = styled.img`
  width: 32px;
  height: 32px;
`;
const Logotype = styled.img`
  width: 100.17px;
  height: 32px;
  filter: invert(100%);
`;
const Search = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
  align-items: flex-start;
  padding: 0 23px;
`;
const InputDropdown = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
  align-items: flex-start;
`;
const InputWithLabel = styled.div`
  gap: 6px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
  align-items: flex-start;
`;
const Input = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: stretch;
  align-items: center;
  border-style: solid;
  border-color: #475466;
  background-color: #475466;
  box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  overflow: hidden;
  border-radius: 8px;
  padding: 9px 13px;
  border-width: 1px;
`;
const Content1 = styled.div`
  width: 203px;
  gap: 8px;
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const Text1 = styled.input`
  width: 100%;
  display: inline-block;
  padding: 0;
  color: #ffffff;
  font-size: 16px;
  font-family: Inter;
  line-height: 24px;
  white-space: nowrap;
  outline-width: 0;
  border-width: 0;
  background: none;
  ::placeholder {
    color: #ffffff;
  }
`;
const Navigation = styled.div`
  gap: 4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
  align-items: flex-start;
  padding: 0 15px;
`;
const NavItemBase1 = styled.div`
  height: 26px;
  gap: 8px;
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-self: stretch;
  align-items: center;
  background-color: #344053;
  overflow: hidden;
  border-radius: 6px;
  padding: 7px 11px;
`;
const Text3 = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  font-family: Inter;
  line-height: 24px;
  white-space: nowrap;
`;
const Footer = styled.div`
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
  align-items: flex-start;
  padding: 0 15px 31px 15px;
`;
const Navigation1 = styled.div`
  gap: 4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
  align-items: flex-start;
`;
const Account = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 24px 32px 0px 8px;
  gap: 47px;
  isolation: isolate;
  width: 280px;
  height: 50px;
  border-top: 1px solid #475467;
  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
`;
const FlexRow = styled.div`
  width: 207px;
  gap: 12px;
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const Avatar = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 200px;
`;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const SupportingText = styled.div`
  color: #f2f3f6;
  font-size: 14px;
  font-family: Inter;
  line-height: 20px;
  white-space: nowrap;
`;
const Button1 = styled.button`
  gap: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;
  padding: 2px;
  border-width: 0;
  background: none;
  box-sizing: content-box;
  cursor: pointer;
  &:hover {
    opacity: 70%;
  }
`;
const MainWrap = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
  align-items: flex-start;
  background-color: #ffffff;
  padding: 31px 0 215px 0;
  border-width: 1px;
`;
const Container = styled.div`
  min-height: 73vh;
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
  align-items: flex-start;
  padding: 0 31px;
`;
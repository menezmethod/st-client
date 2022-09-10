import React from 'react';
import styled from "styled-components";

type LoginValues = {
    email: string;
    password: string;
};

type LoginFormProps = {
    onSuccess: () => void;
};

export const LoginForm = ({onSuccess}: LoginFormProps) => {
    return (
        <LogInRootRoot>
            <Section>
                <Container>
                    <Content4>
                        <Logo>
                            <LogoWrap>
                                <Logotype
                                    src={`./strat_logo.svg`}
                                />
                            </LogoWrap>
                        </Logo>
                        <HeaderAndForm>
                            <Header>
                                <FlexColumn>
                                    <Text1>Log in</Text1>
                                    <SupportingText>
                                        Welcome back! Please enter your details.
                                    </SupportingText>
                                </FlexColumn>
                            </Header>
                            <Content3>
                                <Form1>
                                    <InputField>
                                        <Label>Email</Label>
                                        <Textfield type="email" placeholder={"Enter your email"}/>
                                    </InputField>
                                    <InputField>
                                        <Label>Password</Label>
                                        <Textfield type="password" placeholder={"••••••••"}/>
                                    </InputField>
                                </Form1>
                                <Row>
                                    <RememberOption>
                                        <RememberCheckBox type="checkbox" id={"remember_checkbox"}/>
                                        <RememberLabel htmlFor={"remember_checkbox"}>Remember for 30
                                            days</RememberLabel>
                                    </RememberOption>
                                    <Text5>
                                        Forgot password
                                    </Text5>
                                </Row>
                                <Actions>
                                    <Text6>
                                        Sign in
                                    </Text6>
                                    <FlexColumn2>
                                        <SocialButton>
                                            <SocialIcon
                                                src={`https://file.rendit.io/n/1LpLXfgQLYjAbgV6BCAP.svg`}
                                            />
                                            <Text7>Sign in with Google</Text7>
                                        </SocialButton>
                                    </FlexColumn2>
                                </Actions>
                            </Content3>
                            <Row1>
                                <Text8>Don’t have an account?</Text8>
                                <Text9>
                                    Sign up
                                </Text9>
                            </Row1>
                        </HeaderAndForm>
                    </Content4>
                </Container>
                <Text10>© Strat Trader {(new Date().getFullYear())}</Text10>
            </Section>
            <Section1>
                <LinePattern
                    src={`https://file.rendit.io/n/o4SbVqkibAlYWPKKaN7O.svg`}
                />
                <LinePattern1
                    src={`https://file.rendit.io/n/j7wM72SfdZ5uTDSw51rd.svg`}
                />
            </Section1>
        </LogInRootRoot>
    );
};

const InputField = styled.div`
  gap: 6px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
  align-items: flex-start;
`;
const Label = styled.label`
  color: #344053;
  font-size: 14px;
  font-weight: 500;
  font-family: Inter, serif;
  line-height: 20px;
  white-space: nowrap;
`;

const Textfield = styled.input`
  gap: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: stretch;
  align-items: center;
  border-style: solid;
  border-color: #cfd4dc;
  background-color: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  overflow: hidden;
  border-radius: 8px;
  padding: 9px 13px;
  border-width: 1px;
`;
const LogInRootRoot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffffff;
`;
const Section = styled.div`
  width: 65vw;
  height: 100vh;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  align-items: center;
  padding: 0 31px;
`;
const Content4 = styled.div`
  gap: 80px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
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
  width: 160px;
  height: 42px;
`;
const HeaderAndForm = styled.div`
  width: 360px;
  gap: 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Header = styled.div`
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
  align-items: center;
`;
const FlexColumn = styled.div`
  gap: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
  align-items: flex-start;
`;
const Text1 = styled.div`
  align-self: flex-start;
  color: #0f1728;
  font-size: 36px;
  font-weight: 600;
  font-family: Inter, serif;
  line-height: 44px;
  letter-spacing: -0.72px;
`;
const SupportingText = styled.div`
  align-self: flex-start;
  color: #475466;
  font-size: 16px;
  font-family: Inter, serif;
  line-height: 24px;
`;
const Content3 = styled.div`
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
  align-items: center;
  border-radius: 12px;
`;
const Form1 = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
  align-items: flex-start;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: stretch;
  align-items: center;
`;
const RememberOption = styled.div`
  gap: 8px;
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

const RememberCheckBox = styled.input`
  width: 16px;
  height: 16px;
`;

const RememberLabel = styled.label`
  align-self: flex-start;
  color: #344053;
  font-size: 14px;
  font-weight: 500;
  font-family: Inter, serif;
  line-height: 20px;
`;
const Text5 = styled.button`
  height: 20px;
  gap: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: stretch;
  align-items: center;
  color: #344053;
  font-size: 14px;
  font-weight: 600;
  font-family: Inter, serif;
  line-height: 20px;
  white-space: nowrap;
  overflow: hidden;
  padding: 0;
  border-width: 0;
  background: none;
  box-sizing: content-box;
  cursor: pointer;
`;
const Actions = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
  align-items: flex-start;
`;
const Text6 = styled.button`
  gap: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: stretch;
  align-items: center;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  font-family: Inter, serif;
  line-height: 24px;
  white-space: nowrap;
  border-style: solid;
  border-color: #475466;
  background-color: #475466;
  box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  overflow: hidden;
  border-radius: 8px;
  padding: 9px 17px;
  border-width: 1px;
  box-sizing: content-box;
  cursor: pointer;

  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
`;
const FlexColumn2 = styled.button`
  gap: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  align-items: center;
  padding: 0;
  border-width: 0;
  background: none;
  box-sizing: content-box;
  cursor: pointer;

  &:hover {
    opacity: 70%;
  }
`;
const SocialButton = styled.div`
  gap: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: stretch;
  align-items: center;
  border-style: solid;
  border-color: #cfd4dc;
  background-color: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  overflow: hidden;
  border-radius: 8px;
  padding: 9px 15px;
  border-width: 1px;
`;
const SocialIcon = styled.img`
  width: 24px;
  height: 24px;
`;
const Text7 = styled.div`
  color: #344053;
  font-size: 16px;
  font-weight: 600;
  font-family: Inter, serif;
  line-height: 24px;
  white-space: nowrap;
`;
const Row1 = styled.div`
  gap: 4px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: stretch;
`;
const Text8 = styled.div`
  color: #475466;
  font-size: 14px;
  font-family: Inter, serif;
  line-height: 20px;
  white-space: nowrap;
`;
const Text9 = styled.button`
  gap: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #344053;
  font-size: 14px;
  font-weight: 600;
  font-family: Inter, serif;
  line-height: 20px;
  white-space: nowrap;
  overflow: hidden;
  padding: 0;
  border-width: 0;
  background: none;
  box-sizing: content-box;
  cursor: pointer;
`;
const Text10 = styled.div`
  height: 34px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: stretch;
  align-items: flex-end;
  color: #475466;
  font-size: 14px;
  font-family: Inter, serif;
  line-height: 20px;
  white-space: nowrap;
  padding: 31px;
`;
const Section1 = styled.div`
  width: 720px;
  height: 100vh;
  position: relative;
  flex-grow: 1;
  align-self: stretch;
  background-color: #f2f3f6;
  overflow: hidden;
`;
const LinePattern = styled.img`
  width: 298px;
  height: 408px;
  left: 422px;
  position: absolute;
`;
const LinePattern1 = styled.img`
  width: 298px;
  height: 152px;
  top: 808px;
  position: absolute;
`;
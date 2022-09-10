import React from "react";
import styled from "styled-components";

type RegisterValues = {
    fullName: string;
    email: string;
    password: string;
    timeRegistered: Date;
};

type RegisterFormProps = {
    onSuccess: () => void;
};

export const RegisterForm = ({onSuccess}: RegisterFormProps) => {
    return (
        <FrameRootRoot>
            <Section>
                <HeaderNavigation>
                    <Logo>
                        <LogoWrap>
                            <Logotype
                                src={`./strat_logo.svg`}
                            />
                        </LogoWrap>
                    </Logo>
                </HeaderNavigation>
                <Container>
                    <Content5>
                        <FlexColumn>
                            <Text1>Sign up</Text1>
                            <SupportingText>Start logging your trades</SupportingText>
                        </FlexColumn>
                        <Content4>
                            <Form1>
                                <InputField>
                                    <Label>Name*</Label>
                                    <TextField placeholder="Enter your full name"/>
                                </InputField>
                                <InputField>
                                    <Label>Email*</Label>
                                    <TextField placeholder="Enter your Email"/>
                                </InputField>
                                <InputField>
                                    <Label>Password*</Label>
                                    <TextField type="password" placeholder="********"/>
                                    <HintText>Must be at least 8 characters.</HintText>
                                </InputField>
                            </Form1>
                            <Actions>
                                <ButtonStarted>
                                    Get started
                                </ButtonStarted>
                                <FlexColumn1>
                                    <SocialButton>
                                        <SocialIcon
                                            src={`https://file.rendit.io/n/YvHctqw11jze38j0TTGC.svg`}
                                        />
                                        <Text6>Sign up with Google</Text6>
                                    </SocialButton>
                                </FlexColumn1>
                            </Actions>
                        </Content4>
                        <Row>
                            <Text7>Already have an account?</Text7>
                            <Text8>Log in</Text8>
                        </Row>
                    </Content5>
                </Container>
                <Footer>
                    <Text7>© Untitled UI 2077</Text7>
                    <Row1>
                        <Mail src={`https://file.rendit.io/n/VVq3frBcbcbsHkPpmN4F.svg`}/>
                        <Text7>help@untitledui.com</Text7>
                    </Row1>
                </Footer>
            </Section>
            <Section1>
                <LinePattern
                    src={`https://file.rendit.io/n/71HiMm4NIsXKWaZ68cq4.svg`}
                />
                <LinePattern1
                    src={`https://file.rendit.io/n/bIKx0WezYpK7mA7wiLvw.svg`}
                />
            </Section1>
        </FrameRootRoot>
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
const Label = styled.div`
  color: #344053;
  font-size: 14px;
  font-weight: 500;
  font-family: Inter;
  line-height: 20px;
  white-space: nowrap;
`;
const Input = styled.div`
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
const TextField = styled.input`
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
const Text7 = styled.div`
  color: #475466;
  font-size: 14px;
  font-family: Inter;
  line-height: 20px;
  white-space: nowrap;
`;
const FrameRootRoot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #ffffff;
`;
const Section = styled.div`
  width: 65vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const HeaderNavigation = styled.div`
  height: 34px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: stretch;
  align-items: flex-start;
  padding: 31px;
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
const Logotype = styled.img`
  width: 160px;
  height: 42px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
  align-items: center;
  padding: 0 31px;
`;
const Content5 = styled.div`
  width: 360px;
  gap: 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
  align-self: stretch;
  color: #0f1728;
  font-size: 36px;
  font-weight: 600;
  font-family: Inter;
  line-height: 44px;
  letter-spacing: -0.72px;
`;
const SupportingText = styled.div`
  align-self: stretch;
  color: #475466;
  font-size: 16px;
  font-family: Inter;
  line-height: 24px;
`;
const Content4 = styled.div`
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
const HintText = styled.div`
  align-self: stretch;
  color: #475466;
  font-size: 14px;
  font-family: Inter;
  line-height: 20px;
`;
const Actions = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
  align-items: flex-start;
`;
const ButtonStarted = styled.button`
  gap: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: stretch;
  align-items: center;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  font-family: Inter;
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
const FlexColumn1 = styled.button`
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
const Text6 = styled.div`
  color: #344053;
  font-size: 16px;
  font-weight: 600;
  font-family: Inter;
  line-height: 24px;
  white-space: nowrap;
`;
const Row = styled.div`
  gap: 4px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: stretch;
  align-items: flex-start;
`;
const Text8 = styled.button`
  gap: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #344053;
  font-size: 14px;
  font-weight: 600;
  font-family: Inter;
  line-height: 20px;
  white-space: nowrap;
  overflow: hidden;
  padding: 0;
  border-width: 0;
  background: none;
  box-sizing: content-box;
  cursor: pointer;
`;
const Footer = styled.div`
  height: 34px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: stretch;
  align-items: flex-end;
  padding: 31px;
`;
const Row1 = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const Mail = styled.img`
  width: 16px;
  height: 16px;
`;
const Section1 = styled.div`
  width: 65vw;
  height: 100vh;
  position: relative;
  background-color: #f2f3f6;
  overflow: hidden;
`;
const LinePattern = styled.img`
  width: 298px;
  height: 408px;
  left: 502px;
  position: absolute;
`;
const LinePattern1 = styled.img`
  width: 298px;
  height: 152px;
  top: 808px;
  position: absolute;
`;
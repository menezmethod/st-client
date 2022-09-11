import React from 'react';
import {ContentLayout} from "@/components/Layout/ContentLayout";
import styled from "styled-components";

export const Dashboard = () => {
    return (
        <ContentLayout title="Dashboard">
            <PageHeaderRootRoot>
                <Content>
                    <FlexColumn>
                        <Text1>Welcome back, Luis</Text1>
                        <SupportingText>
                            Track, manage and forecast your trades
                        </SupportingText>
                    </FlexColumn>
                    <Actions>
                        <Button1>
                            <Uploadcloud
                                src={`https://file.rendit.io/n/75r4HDFrGusZGKkWtJ0L.svg`}
                            />
                            <Text2>Import</Text2>
                        </Button1>
                        <Button2>
                            <Uploadcloud
                                src={`https://file.rendit.io/n/EIILc5yYses5MhwqrpKB.svg`}
                            />
                            <Text3>Add Journal</Text3>
                        </Button2>
                    </Actions>
                </Content>
            </PageHeaderRootRoot>
        </ContentLayout>
    );
};

const Uploadcloud = styled.img`
  width: 20px;
  height: 20px;
`;
const PageHeaderRootRoot = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Content = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: stretch;
  align-items: flex-start;
`;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
  width:60vw;
  height: 66px;
`;
const Text1 = styled.div`
  align-self: stretch;
  color: #0f1728;
  font-size: 30px;
  font-weight: 600;
  font-family: Inter;
  line-height: 38px;
`;
const SupportingText = styled.div`
  align-self: stretch;
  color: #475466;
  font-size: 16px;
  font-family: Inter;
  line-height: 24px;
`;
const Actions = styled.div`
  gap: 12px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const Button1 = styled.button`
  gap: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-color: #cfd4dc;
  background-color: #ffffff;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  overflow: hidden;
  border-radius: 8px;
  padding: 9px 15px;
  border-width: 1px;
  box-sizing: content-box;
  cursor: pointer;
  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
`;
const Text2 = styled.div`
  color: #344053;
  font-size: 14px;
  font-weight: 600;
  font-family: Inter;
  line-height: 20px;
  white-space: nowrap;
`;
const Button2 = styled.button`
  gap: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-color: #475466;
  background-color: #475466;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  overflow: hidden;
  border-radius: 8px;
  padding: 9px 15px;
  border-width: 1px;
  box-sizing: content-box;
  cursor: pointer;
  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
`;
const Text3 = styled.div`
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  font-family: Inter;
  line-height: 20px;
  white-space: nowrap;
`;

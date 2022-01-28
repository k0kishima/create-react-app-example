import React from 'react';
import styled from 'styled-components';

import { useGetSettingsQuery } from '@/generated/graphql';
import { Item } from '@/features/setting';
import { graphqlClient } from '@/lib/graphql';

export const ItemList: React.VFC = () => {
  const { data, isLoading, isError } = useGetSettingsQuery(graphqlClient);

  return (
    <>
      {isError ? (
        <h1>Something went wrong!</h1>
      ) : isLoading ? (
        <h1>Loading...</h1>
      ) : data ? (
        <Styled>
          {data?.settings?.map((setting, i: number) => (
            <Item key={i} name={setting.var} value={setting.value} />
          ))}
        </Styled>
      ) : null}
    </>
  );
};

const Styled = styled.div`
  fieldset {
    display: block;
    margin: 20px 0px;
  }
`;

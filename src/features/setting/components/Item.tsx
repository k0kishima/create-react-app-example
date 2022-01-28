import React from 'react';
import {
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  Switch,
} from '@material-ui/core';

import { graphqlClient } from '@/lib/graphql';
import { useUpdateSettingMutation } from '@/generated/graphql';

type Props = {
  name: string;
  value: boolean;
};

export const Item: React.FC<Props> = ({ name, value }: Props) => {
  const { mutate } = useUpdateSettingMutation(graphqlClient);

  return (
    <FormControl component='fieldset'>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              name={name}
              color='primary'
              checked={value}
              onChange={(event) => {
                mutate({
                  input: {
                    var: event.target.name,
                    value: event.target.checked,
                  },
                });
              }}
            />
          }
          label={name}
        />
      </FormGroup>
      <FormHelperText>Be careful</FormHelperText>
    </FormControl>
  );
};

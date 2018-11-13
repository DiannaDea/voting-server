import React, { Fragment } from 'react';
import styled from 'styled-components';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import Avatar from '@material-ui/core/Avatar/Avatar';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import Divider from '@material-ui/core/Divider/Divider';

const CoefficientsList = styled(List)`
  border: 1px solid rgba(0, 0, 0, 0.1) !important;
  width: 45%;
`;

const CoefficientsContainer = ({ coefficients }) => {
  return (
    <CoefficientsList>
      {
        (coefficients && coefficients.length)
          ? coefficients.map((coefficient, index) => {
            const {
              name, question, cost, _id,
            } = coefficient;

            return (
              <Fragment key={_id}>
                <ListItem>
                  <ListItemText primary={name} secondary={question} />
                  <Avatar>
                    {cost}
                  </Avatar>
                </ListItem>
                { (index !== coefficients.length - 1) ? (
                  <Divider inset component='li' />
                ) : null}
              </Fragment>
            );
          })
          : []
      }
    </CoefficientsList>
  );
};

export default CoefficientsContainer;

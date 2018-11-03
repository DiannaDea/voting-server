import React, { Fragment } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Divider from '@material-ui/core/Divider';
import styled from 'styled-components';

const CandidatesList = styled(List)`
  border: 1px solid rgba(0, 0, 0, 0.1) !important;
  width: 45%;
`;

const CandidatesContainer = ({ candidates }) => {
  return (
    <CandidatesList>
      {
        (candidates && candidates.length)
          ? candidates.map((candidate, index) => {
            const { name, description, _id } = candidate;
            return (
              <Fragment>
                <ListItem key={_id}>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                  <ListItemText primary={name} secondary={description} />
                </ListItem>
                { (index !== candidates.length - 1) ? (
                  <Divider inset component='li' />
                ) : null}
              </Fragment>
            );
          })
          : []
      }
    </CandidatesList>
  );
};

export default CandidatesContainer;

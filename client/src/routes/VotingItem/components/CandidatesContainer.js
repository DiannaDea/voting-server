import React, { Fragment, Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import InfoIcon from '@material-ui/icons/Info';
import Divider from '@material-ui/core/Divider';
import styled from 'styled-components';
import CandidateModal from './CandidateModal';

const CandidatesList = styled(List)`
  border: 1px solid rgba(0, 0, 0, 0.1) !important;
  width: 50%;
`;

const InfoIconGrey = styled(InfoIcon)`
  color: #bdbdbd;
  cursor: pointer;
`;

class CandidatesContainer extends Component {
    state = {
      openInfoModal: false,
      curCandidate: null,
    };

    handleClickOpen = (candidate) => {
      this.setState({
        openInfoModal: true,
        curCandidate: candidate,
      });
    };

    handleClose = () => {
      this.setState({
        openInfoModal: false,
        curCandidate: null,
      });
    };

    render() {
      const { candidates } = this.props;
      const { openInfoModal, curCandidate } = this.state;

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
                      <InfoIconGrey onClick={() => this.handleClickOpen(candidate)} />
                    </ListItem>
                    { (index !== candidates.length - 1) ? (
                      <Divider inset component='li' />
                    ) : null}
                  </Fragment>
                );
              })
              : []
          }
          <CandidateModal
            open={openInfoModal}
            handleClose={this.handleClose}
            candidate={curCandidate}
          />
        </CandidatesList>
      );
    }
}

export default CandidatesContainer;

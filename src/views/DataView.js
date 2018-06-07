import React, { Component } from 'react';
import { connect } from 'react-redux';
import AutoComplete from 'material-ui/AutoComplete';
import styled from 'styled-components';
import SearchIcon from 'material-ui/svg-icons/action/search';
import WarningIcon from 'material-ui/svg-icons/alert/warning';
import Card, { CardText } from 'material-ui/Card';
import {fetchData} from '../reducers/dataViewReducer';

const styles = {
  chip: {
    margin: 4,
  },
  cardStyle: {
    marginTop: '16px',
    marginLeft: '15%',
    marginRight: '15%',
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#fafafa',
  },
  divStyle: { 
    marginTop: '16px',
    marginLeft: '15%',
    marginRight: '15%',
    paddingLeft: 16,
    paddingRight: 16
   },
  cardtextStyle: {
    paddingTop: 64,
    textAlign: 'center',
    color: 'red',
    },
};
const dataSource2 = [];

const SearchWrapper = styled.div`
display: flex;
align-items: center;
color: '#00bcd4';
& > * + * {
 margin-left: 8px;
}
`;

class DataView extends Component {
  render() {
    const { fetchData, responseData, isfetched } = this.props;
    console.log('response data is Fetched?', isfetched)
    return (
      <div>
        <Card style={styles.cardStyle}>
       
        <SearchWrapper>
          <AutoComplete
            floatingLabelText="Search Query"
            fullWidth
            hintText="please enter the query"
            filter={AutoComplete.noFilter}
            openOnFocus={true}
            dataSource={dataSource2}
            onNewRequest={(value) => {
              fetchData(value);
            }}
        />
        <SearchIcon style={{ marginTop: 32 }} color={'#00bcd4'} />
        </SearchWrapper>
    </Card>
      <div>
        {responseData ? responseData.map(data => {
          return (
          <div style={styles.divStyle}>
          <h4 style={{color: '#4c9bc7', marginBottom: '0px'}}>{data.title}</h4>
            <p style={{marginTop: 0, color: 'grey' }}>{data.formattedUrl}</p>
            {data.snippet}
            {data.link}<br /><br />
          </div> 
          );
        }) : null }
        {
          isfetched === true ? 
          <CardText
            style={styles.cardtextStyle}
          >
          <WarningIcon color="#FFD600" />
          {' '}
          No Results Found.
         </CardText> : null
        }
        </div>
      </div>
    );
  }
}

// map state to props 
const mapStateToProps = (state) => ({
  responseData: state.dataViewReducer.items,
  isfetched: state.dataViewReducer.isfetched,
});

// map dispatch to props (function call from the reducer )

const mapDispatchToProps = (dispatch) => ({
  fetchData: (query) => {
    dispatch(fetchData(query));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DataView);
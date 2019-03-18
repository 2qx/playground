import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Grid, Paper, FormControlLabel, Checkbox, InputBase } from '@material-ui/core';

export default class ApplicationBar extends Component {
  render() {
    return (
      <AppBar position="static" color="default">
          <Toolbar>
            <Grid container>
              <img alt="open-rpc" height="30" width="30" src={this.props.uiSchema && this.props.uiSchema.appBar['ui:logoUrl']} />
              <Grid item xs={2}>
                <Typography variant="h6">{this.props.uiSchema && this.props.uiSchema.appBar['ui:title']}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Paper style={{width: '100%', background: 'rgba(0, 0, 0, 0.1)', padding: '0px 10px 0px 10px'}} elevation={0}>
                  <InputBase
                    style={{width: '100%'}}
                    onChange={this.props.onChangeUrl}
                    placeholder={this.props.uiSchema && this.props.uiSchema.appBar['ui:inputPlaceholder']}
                  />
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  style={{marginLeft: '30px', height: '30px'}}
                  control={
                    <Checkbox
                      checked={this.props.splitView}
                      onChange={this.props.onSplitViewChange}
                      value="splitView"
                      color="primary"
                    />
                  }
                  label="Split View"
                />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
    );
  }
}
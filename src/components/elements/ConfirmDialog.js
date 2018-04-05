import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class ConfirmDialog extends React.Component {
  render() {
    const actions = [
      <FlatButton
        label="Отмена"
        secondary={true}
        onClick={this.props.handeCancel}
      />,
      <FlatButton
        label="ОК"
        primary={true}
        onClick={this.props.handleOk}
      />,
    ];
    if (!this.props.isOpen)
      return null;
    return (
        <Dialog
          title="Вы уверены что хотите закрыть окно?"
          actions={actions} modal={false}
          style={{ zIndex: 2200 }}
          contentStyle={{ maxWidth: 480 }}
          open={this.props.isOpen}>
          Вся не сохраненная информация пропадет.
        </Dialog>
    );
  }
}
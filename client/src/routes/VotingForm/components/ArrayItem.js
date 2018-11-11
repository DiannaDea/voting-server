import React from 'react';
import TextField from '@material-ui/core/TextField';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const ArrayItem = ({
  index, item, fields, onChange,
}) => (
  <TableRow key={index}>
    <TableCell component='th' scope='row'>
      {index}
    </TableCell>
    {fields.map((f, i) => (
      <TableCell key={i}>
        <TextField
          label={f.label}
          value={item[f.value]}
          onChange={onChange(f.value)}
        />
      </TableCell>
    ))}
  </TableRow>
);

export default ArrayItem;

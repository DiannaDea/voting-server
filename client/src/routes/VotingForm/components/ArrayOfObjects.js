import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import ArrayItem from './ArrayItem';

const ArrayOfObjects = ({
  array, fields, onChange, addItemToArray, buttonText,
}) => (
  <Fragment>
    <Table>
      <TableBody>
        {array.map((item, i) => (
          <ArrayItem
            onChange={onChange(i)}
            fields={fields}
            item={item}
            index={i}
            key={i}
          />
        ))}
      </TableBody>
    </Table>
    <Button variant='contained' color='primary' onClick={addItemToArray}>{buttonText}</Button>
  </Fragment>
);

export default ArrayOfObjects;

import { Button, TextField } from '@mui/material';
import React from 'react';
import { Modal } from '../components/Modal';

const AddProduct = ({
  open,
  handleClose,
  setTitle,
  setDescription,
  setPrice,
  setCatagory,
  addProduct,
}) => {
  return (
    <Modal open={open} title='Add New Lead' handleClose={handleClose}>
      <>
        <TextField
          placeholder='enter item'
          fullWidth
          sx={{ mt: 1, input: { padding: '5px' } }}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <TextField
          fullWidth
          placeholder='item description'
          sx={{ mt: 1, input: { padding: '5px' } }}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <TextField
          fullWidth
          placeholder='price'
          sx={{ mt: 1, input: { padding: '5px' } }}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <TextField
          fullWidth
          placeholder='enter catagory'
          sx={{ mt: 1, input: { padding: '5px' } }}
          onChange={(e) => {
            setCatagory(e.target.value);
          }}
        />
        <Button
          onClick={addProduct}
          fullWidth
          sx={{ mt: 1 }}
          variant='contained'
        >
          update
        </Button>
      </>
    </Modal>
  );
};

export default AddProduct;

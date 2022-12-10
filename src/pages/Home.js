import {
  Stack,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import {
  AddProducts,
  DeleteProducts,
  getAllProducts,
  updateAllProducts,
} from '../services/products';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddProduct from './AddModal';

const Home = () => {
  const [indexNumber, setIndexNumber] = useState('');
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [catagory, setCatagory] = useState('');
  const [refresh, setRefresh] = useState(false);
  const [products, setProducts] = useState([]);

  const addProduct = () => {
    const obj = {
      title,
      description,
      price,
      catagory,
    };

    AddProducts(obj)
      .then((res) => {
        setProducts([...res?.data?.data, ...products]);
        setRefresh(!refresh);
        setOpen(false);
      })
      .catch((err) => {
        console.log(err);
        setOpen(false);
      });
  };

  const fetchProducts = () => {
    getAllProducts()
      .then((res) => {
        setProducts(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const update = (_id) => {
    const obj = {
      id: _id,
      title,
      description,
      price,
      catagory,
    };

    updateAllProducts(obj)
      .then((res) => {
        fetchProducts();
        setIndexNumber('');
      })
      .catch((err) => {
        console.log(err);
        setIndexNumber('');
      });
  };

  const DeleteProduct = (_id) => {
    DeleteProducts(_id)
      .then((res) => {
        setRefresh(!refresh);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, [refresh]);

  return (
    <>
      <Grid px={3} container spacing={3}>
        <Grid mt={2} item xs={12}>
          <Button
            onClick={() => {
              setOpen(true);
            }}
            fullWidth
            variant='contained'
          >
            Add Product
          </Button>
        </Grid>
        {products.map((item, ind) => {
          return (
            <Grid key={item?._id} item xs={12} sm={6} md={4} lg={3}>
              <Paper sx={{ p: 2 }} elevation={4}>
                <Stack direction='row' justifyContent='flex-end' gap='5px'>
                  <EditIcon
                    onClick={() => {
                      setIndexNumber(ind);
                    }}
                    fontSize='small'
                  />

                  <DeleteIcon
                    onClick={() => DeleteProduct(item?._id)}
                    fontSize='small'
                  />
                </Stack>
                {indexNumber === ind ? (
                  <>
                    <TextField
                      fullWidth
                      sx={{ mt: 1, input: { padding: '5px' } }}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                    <TextField
                      fullWidth
                      sx={{ mt: 1, input: { padding: '5px' } }}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                    />
                    <TextField
                      fullWidth
                      sx={{ mt: 1, input: { padding: '5px' } }}
                      onChange={(e) => {
                        setPrice(e.target.value);
                      }}
                    />
                    <TextField
                      fullWidth
                      sx={{ mt: 1, input: { padding: '5px' } }}
                      onChange={(e) => {
                        setCatagory(e.target.value);
                      }}
                    />
                    <Button
                      onClick={() => update(item?._id)}
                      fullWidth
                      sx={{ mt: 1 }}
                      variant='contained'
                    >
                      update
                    </Button>
                  </>
                ) : (
                  <>
                    <Typography>{item?.title}</Typography>
                    <Typography>{item?.description}</Typography>
                    <Typography>{item?.price}</Typography>
                    <Typography>{item?.catagory}</Typography>
                  </>
                )}
              </Paper>
            </Grid>
          );
        })}
      </Grid>
      <AddProduct
        open={open}
        handleClose={() => setOpen(false)}
        setTitle={setTitle}
        setDescription={setDescription}
        setPrice={setPrice}
        setCatagory={setCatagory}
        addProduct={addProduct}
      />
    </>
  );
};

export default Home;

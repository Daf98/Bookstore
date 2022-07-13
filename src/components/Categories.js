import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkState } from '../redux/home/home';

const Categories = () => {
  const text = useSelector((state) => state.home);
  const dispatch = useDispatch();
  return (
    <div>
      <button type="button" onClick={() => dispatch(checkState())}>Check status</button>
      <p>{text}</p>
    </div>
  );
};

export default Categories;

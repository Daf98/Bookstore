import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkState } from '../redux/home/home';
import '../styles/Categories.css';

const Categories = () => {
  const text = useSelector((state) => state.home);
  const dispatch = useDispatch();
  return (
    <div className="category-container">
      <button type="button" className="category-button" onClick={() => dispatch(checkState())}>Check status</button>
      <p>{text}</p>
    </div>
  );
};

export default Categories;

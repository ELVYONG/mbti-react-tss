import React from 'react';
import './style.css';
import { mockFruitPromise, mockFruitPromiseInPage } from './mock-data.js';

export default function App() {
  return (
    <div>
      <h1>Fruit List</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Color</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dummy Name</td>
              <td>Dummy Color</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

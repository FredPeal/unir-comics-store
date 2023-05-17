import React from 'react';

export const DataList = ({ data }) => {
  return (
    <div className="mb-3">
      <label htmlFor="datalistInput" className="form-label">Selecciona una opción:</label>
      <input list="options" id="datalistInput" className="form-control" />
      <datalist id="options">
        {data.map((item) => (
          <option key={item.id} value={item.id}>{item.description}</option>
        ))}
      </datalist>
    </div>
  );
};


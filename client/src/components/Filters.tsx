import CheckBox from "./Checkbox";
import { Product } from "./Product";
import React, { useState } from "react";
import { useGetCategories, useGetProducts } from "../hooks/use_queries";

export function Filters(props: any) {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([
    "Real",
    "Imaginary",
    "Hatched",
    "Unhatched",
    "Small",
    "Medium",
    "Large",
  ]);
  const results = useGetProducts();

  const categoriesData = useGetCategories();
  const categories = new Array();
  var i = 0;

  categoriesData.forEach((element) => {
    element.possibleValues.forEach((value) => {
      i += 1;
      categories.push({ id: i, value: value, isChecked: true });
    });
  });

  const handleToggle =
    (value: string) => (event: React.FormEvent<HTMLInputElement>) => {
      const findIdx = selectedCheckboxes.indexOf(value);
      const newChecked = [...selectedCheckboxes];

      if (findIdx > -1) {
        newChecked.splice(findIdx, 1);
      } else {
        newChecked.push(value);
      }
      setSelectedCheckboxes(newChecked);
    };

  if (results.length === 0) return null;
  var filtered = new Array();
  results.forEach(function (item) {
    selectedCheckboxes.forEach(function (category) {
      const index = filtered.indexOf(item);
      if (index > -1) {
      } else if (category === item.origin) {
        filtered.push(item);
      } else if (category === item.state) {
        filtered.push(item);
      } else if (category === item.size) {
        filtered.push(item);
      }
    });
  });

  return (
    <div className="App">
      <h2> Categories </h2>
      <ul>
        {categories.map((category) => {
          return (
            <CheckBox
              key={category.id}
              handleCheckChildElement={handleToggle(category.value)}
              id={category.id}
              value={category.value}
              isChecked={
                selectedCheckboxes.indexOf(category.value) === -1 ? false : true
              }
            />
          );
        })}
      </ul>
      <div className="flex-container">
        {filtered.map((result) => (
          <div className="flex-item" key={result.id}>
            <Product product={result}></Product>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filters;

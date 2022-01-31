import React from 'react';

const filter = { selectedCheckboxes: ["Real", "Imaginary", "Hatched", "Unhatched", "Small", "Medium", "Large"]
}

const FilterContext = React.createContext(filter);

export default FilterContext;
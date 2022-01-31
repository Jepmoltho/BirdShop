import * as fs from "fs/promises";

interface Identity<ID>{
    id:ID,
    [propName: string]: any;
}

// M i s type of model and K is type of identifier
export class Model<M extends Identity<K>, K>{
    file_name:string;

 constructor(file:string){
    this.file_name = file;
 }
 
 async getAll():Promise<M[]>{
    try {
      let resourceTxt = await fs.readFile(this.file_name, "utf8");
      let resources = JSON.parse(resourceTxt);
      return resources;
    } catch (err) {
      if (err.code === "ENOENT") {
        // file does not exits
        await this.save([]); // create a new file with empty array
        return []; // return empty array
      } // // cannot handle this exception, so rethrow
      else throw err;
    }
  }
    // save array of  to file
    async save(resources:M[] = []) {
    let resourcesTxt = JSON.stringify(resources);
    await fs.writeFile(this.file_name, resourcesTxt);
  }

// test function for  ID
 findResource(resourcesArray:M[], Id:K) {
    return resourcesArray.findIndex(
      (currresource) => currresource.id === Id
    );
  }

  // test function for  ID
 findResourceCat(resourcesArray:M[], Id:K) {
  return resourcesArray.findIndex(
    (currresource) => currresource.id === Id
  );
}

// get by ID
async getByID(Id:K) {
  let resourceArray = await this.getAll();
  let index = this.findResource(resourceArray, Id);
  if (index === -1)
    throw new Error(`resource with ID:${Id} doesn't exist`);
  else return resourceArray[index];
}

async getByCategory(category: string, type: string) {
  let productArray = await this.getAll();
  let catArray = new Array();
  productArray.forEach(product => {
  if (product[category] === type) {
          catArray.push(product);
  }
      });
  return catArray;
}


// // create a new
async add(newResource:M) {
  let resourceArray= await this.getAll();
  if (this.findResource(resourceArray, newResource.id) !== -1)
    throw new Error(
      `Customer with Id:${newResource.id} already exists`
    );
  resourceArray.push(newResource);
  await this.save(resourceArray);
}

// // update existing 
async  update(resourceId:K, resource:M) {
  let  resourceArray = await this.getAll();
  let index = this.findResource(resourceArray, resourceId); // findIndex
  if (index === -1)
    throw new Error(`Customer with ID:${resourceId} doesn't exist`);
  else {
    resourceArray[index] = resource;
    await this.save(resourceArray);
  }
}

// // delete existing 
async remove(resourceId:K) {
  let resourceArray = await this.getAll();
  let index = this.findResource(resourceArray, resourceId); // findIndex
  if (index === -1)
    throw new Error(`Resource with ID:${resourceId} doesn't exist`);
  else {
   resourceArray.splice(index, 1); // remove customer from array
    await this.save(resourceArray);
  }
}

}
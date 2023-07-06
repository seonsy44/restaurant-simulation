import type Chef from "./chef";

interface IChefList {
  chefs: Chef[]
  findChefAsync(): Promise<Chef>
}

class ChefList implements IChefList {
  chefs: Chef[];

  constructor(chefs: Chef[]) {
    this.chefs = chefs
  }

  findChefAsync() {
    return new Promise<Chef>((resolve) => {
      setInterval(() => {
        this.chefs.forEach((chef: Chef) => {
          if(chef.isAvailable()) return resolve(chef)
        })
      }, 100);
    }
  );
  }
}

export default ChefList;

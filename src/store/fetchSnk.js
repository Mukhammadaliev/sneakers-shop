import { makeAutoObservable } from "mobx"



class FetchSnk {
  sneakers = []
  constructor() {
    makeAutoObservable(this)
  }

  fetchSneakers = async (name, query) => {


    await fetch(`http://localhost:8000/sneakers?_sort=${name}&q=${query}`)
    .then(response => response.json())
    .then(data => {
      this.sneakers = data
    })



  }

}


const fetchSnk = new FetchSnk();
export default fetchSnk
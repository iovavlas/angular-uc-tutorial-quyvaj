interface Child {
  name: string,
  age: number  
}

export interface Passenger {     // custom Type (Description) 
  id: number,
  fullname: string,
  checkedIn: boolean, 
  checkInDate: number | null,     
  //checkInDate?: number,     
  children: Child[] | null
}

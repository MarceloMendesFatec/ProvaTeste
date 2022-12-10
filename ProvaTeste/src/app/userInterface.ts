export interface userInterface{
    id: number;
    name: string;
    email: string;
    phone: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode:number;
            geo:{
                 lat:number;
                 lng:number;
             }
    }
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs:string;
    }
}


// interface para receber os dados da API
